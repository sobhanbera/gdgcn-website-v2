import {useEffect, useRef, useState} from 'react'
import {useRouter} from 'next/router'

import html2canvas from 'html2canvas'
import QRCode from 'react-qr-code'

import styles from '@/styles/pages/ticketgenerator.module.scss'

const MailingList = [
    // list some test emails here
    // for testing purposes
    // remove this before production
    'mail@test.com',
    'test@test.com',
    'test@mail.com',
]

const EVENT_ID = 31052023
export default function Generate() {
    // getting the event id of the event
    const router = useRouter()
    const {event_id} = router.query

    const ticketRef = useRef(null)

    // for any error cases
    const [error, setError] = useState<string | null>(null)
    const [email, setEmail] = useState<string>('')
    const [showQRCode, setShowQRCode] = useState<boolean>(false)

    // check for validity and more stuff
    useEffect(() => {
        if (event_id === undefined) return

        console.log(event_id, EVENT_ID)
        if (Number(event_id) !== EVENT_ID || !event_id) {
            setError('Invalid event id')
            router.push('/')
        }
    }, [event_id])

    const exportTicket = () => {
        if (!ticketRef.current) return

        html2canvas(ticketRef.current).then(canvas => {
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

    // generate the actual QR Code
    const generateQRCode = (finalEmail: string = email) => {
        // generate the QR Code
        if (MailingList.includes(finalEmail)) {
            setShowQRCode(true)
            setError(null)
            exportTicket()
        } else {
            setShowQRCode(false)
            setError("Invalid email! You haven't registered in the event.")
        }
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
                            }}
                            placeholder={'Enter your email'}
                        />
                        {error && <p>{error}</p>}

                        <button onClick={() => generateQRCode()}>
                            Get Ticket
                        </button>
                    </div>

                    <div ref={ticketRef}>
                        {showQRCode && (
                            <div
                                className={styles.ticket}
                                onClick={() => {
                                    // exportTicket()
                                }}>
                                <QRCode
                                    size={256}
                                    style={{
                                        height: 'auto',
                                        maxWidth: '100%',
                                        width: '100%',
                                    }}
                                    value={JSON.stringify({
                                        email: email,
                                        event_id: EVENT_ID,
                                    })}
                                    level="L"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
