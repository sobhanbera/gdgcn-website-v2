import {useEffect, useRef, useState} from 'react'
import {useRouter} from 'next/router'
import styles from '@/styles/pages/ticketgenerator.module.scss'
import axios from 'axios'
import Image from 'next/image'

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
    const [showCertificate, setShowCertificate] = useState<boolean>(false)

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

    const exportCertificate = () => {
        if (!ticketRef.current || !name) return
        const link = document.createElement('a')
        link.href = `/api/og?name=${encodeURIComponent(name)}`
        link.download = `ccd2023-certificate.png`
        link.click()
    }

    /**
     * Generates the QR code for the email
     * make an api request to - https://email-check.codewansh.workers.dev/api/check/{email}
     * response - {"check":true}
     * @param {string} finalEmail - email to be checked
     */
    const generateCertificate = (finalEmail: string = email) => {
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
                                    'Wait for a seconds to download the certificate',
                                )
                                setLoading(false)
                                setName(res.data.name)

                                // if already generated
                                if (showCertificate) {
                                    exportCertificate()
                                } else {
                                    setTimeout(() => {
                                        exportCertificate()
                                    }, 2000)
                                }
                                setShowCertificate(true)
                            }
                        })
                        .catch(_err => {
                            // if error occurs just generate certificate with QR
                            setError(
                                'Wait for a seconds to download the certificate',
                            )
                            setLoading(false)

                            // if already generated
                            if (showCertificate) {
                                exportCertificate()
                            } else {
                                setTimeout(() => {
                                    exportCertificate()
                                }, 2000)
                            }
                            setShowCertificate(true)
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
                    <h1>Generate Certificate</h1>
                </div>

                <div className={styles.ticketGeneratorContainer}>
                    <div className={styles.emailInput}>
                        <input
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value)
                                setShowCertificate(false)
                            }}
                            placeholder={'Enter your email'}
                        />
                        {error && <p>{error}</p>}

                        <button
                            onClick={() => {
                                if (!loading) generateCertificate()
                            }}>
                            {loading ? 'Loading...' : 'Generate'}
                        </button>
                    </div>

                    {showCertificate && (
                        <div className={styles.ticketGeneratedText}>
                            <p>
                                Click on the <span>certificate</span> below to
                                download it.
                            </p>
                        </div>
                    )}

                    <div
                        ref={ticketRef}
                        className={styles.ticketBackground}
                        onClick={exportCertificate}>
                        {showCertificate && (
                            <img
                                src={`/api/og?name=${encodeURIComponent(name)}`}
                                alt={`${name}'s certificate`}
                                width={1000}
                                height={700}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
