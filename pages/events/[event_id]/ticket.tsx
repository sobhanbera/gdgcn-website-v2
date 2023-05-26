import {useEffect, useRef, useState} from 'react'
import {useRouter} from 'next/router'

import html2canvas from 'html2canvas'
import QRCode from 'react-qr-code'

import styles from '@/styles/pages/ticketgenerator.module.scss'
import axios from 'axios'

const EVENT_ID = 'ccdngp23'
export default function Generate() {
    // getting the event id of the event
    const router = useRouter()
    const {event_id} = router.query

    const ticketRef = useRef(null)

    // for any error cases
    const [error, setError] = useState<string | null>(null)
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [showQRCode, setShowQRCode] = useState<boolean>(false)

    // check for validity and more stuff
    useEffect(() => {
        console.log(event_id, router.query)
        if (event_id === undefined) return

        // console.log(event_id, EVENT_ID)
        if (String(event_id) !== EVENT_ID || !event_id) {
            setError('Invalid event id')
            router.push('/')
        }
    }, [event_id])

    const exportTicket = () => {
        if (!ticketRef.current) return

        html2canvas(ticketRef.current, {backgroundColor: null}).then(canvas => {
            // Convert the canvas to a data URL
            const dataUrl = canvas
                .toDataURL('image/png')
                .replace('image/png', 'image/octet-stream')

            // Create a link element
            const link = document.createElement('a')
            link.href = dataUrl
            link.download = `ccd2023-ticket.png`

            // Simulate a click on the link to start the download
            link.click()
        })
    }

    /**
     * Generates the QR code for the email
     * make an api request to - https://email-check.codewansh.workers.dev/api/check/{email}
     * response - {"check":true}
     * @param {string} finalEmail - email to be checked
     */
    const generateQRCode = (finalEmail: string = email) => {
        // cors enable
        setLoading(true)
        axios(
            `https://email-check.codewansh.workers.dev/api/check/${finalEmail}`,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET',
                },
            },
        )
            .then(res => {
                const data = res.data
                if (data.check === true || data.check === 'true') {
                    //email-check.codewansh.workers.dev/api/name/ishicjain19@gmail.com
                    axios(
                        `https://email-check.codewansh.workers.dev/api/name/${finalEmail}`,
                        {
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Methods': 'GET',
                            },
                        },
                    )
                        .then(res => {
                            if (
                                res.data.email === finalEmail &&
                                res.data.name
                            ) {
                                setError(
                                    'Wait for a seconds to download the ticket',
                                )
                                setLoading(false)
                                setName(res.data.name)

                                // if already generated
                                if (showQRCode) {
                                    exportTicket()
                                } else {
                                    setTimeout(() => {
                                        exportTicket()
                                    }, 2000)
                                }
                                setShowQRCode(true)
                            }
                        })
                        .catch(_err => {
                            // if error occurs just generate ticket with QR
                            setError(
                                'Wait for a seconds to download the ticket',
                            )
                            setLoading(false)

                            // if already generated
                            if (showQRCode) {
                                exportTicket()
                            } else {
                                setTimeout(() => {
                                    exportTicket()
                                }, 2000)
                            }
                            setShowQRCode(true)
                        })
                } else {
                    setLoading(false)
                    alert("Invalid email! You haven't registered in the event.")
                }
            })
            .catch(_err => {
                setLoading(false)
                alert("Invalid email! You haven't registered in the event.")
            })
    }

    return (
        <div className={styles.ticketGeneratorRoot}>
            <div className={styles.ticketGeneratorArea}>
                <div className={styles.ticketGeneratorTitle}>
                    <h1>Generate Ticket</h1>
                </div>

                <div className={styles.ticketGeneratorContainer}>
                    <div className={styles.emailInput}>
                        <input
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                                setShowQRCode(false)
                            }}
                            placeholder={'Enter your email'}
                        />
                        {error && <p>{error}</p>}

                        <button
                            onClick={() => {
                                if (!loading) generateQRCode()
                            }}>
                            {loading ? 'Loading...' : 'Generate'}
                        </button>
                    </div>

                    {showQRCode && (
                        <div className={styles.ticketGeneratedText}>
                            <p>
                                Click on the <span>ticket</span> below to
                                download it.
                            </p>
                        </div>
                    )}

                    <div
                        ref={ticketRef}
                        className={styles.ticketBackground}
                        onClick={exportTicket}>
                        {showQRCode && (
                            <div
                                className={styles.ticket}
                                onClick={() => {
                                    // exportTicket()
                                }}>
                                <img
                                    src={'/tickets/ccd/2023/template_new.png'}
                                />

                                <div className={styles.ticketQR}>
                                    <QRCode
                                        size={256}
                                        style={{
                                            height: 'auto',
                                            maxWidth: '100%',
                                            width: '100%',
                                        }}
                                        bgColor="transparent"
                                        value={email}
                                        level="L"
                                    />

                                    <p>{name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
