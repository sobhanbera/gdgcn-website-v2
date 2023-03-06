import Link from 'next/link'

import styles from '@/styles/containers/featuredevents.module.scss'

import {ClockSVG, Heading, VenueSVG} from '@/components'
import {} from '@/configs'
import {useState} from 'react'

const FeaturedEventsData: Array<{
    url: string
    title: string
    description: string
    shortDescription: string
    image: string
    date: string
    time: string
    venue: string
    price: string
    tags: Array<string>
}> = [
    {
        url: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-cloud-community-day-nagpur-2022',
        title: 'CCD Nagpur 2022',
        description: '',
        shortDescription:
            'Google Cloud Technology and Google Cloud Certifications from the industry experts in Cloud.',
        image: '/community/ccd.jpg',
        date: 'Sun, Sep 25, 2022',
        time: '10:00 AM (IST)',
        venue: 'Persistent Systems, Nagpur, 440022',
        price: '50',
        tags: ['Cloud', 'DevOps', 'Networking'],
    },
    {
        url: 'https://gdg.community.dev/events/details/google-gdg-cloud-nagpur-presents-devday-nagpur',
        title: 'DevDay Nagpur',
        description: '',
        shortDescription:
            'To kickstart journey of college students into MLOps and give them a wide overview of the Cloud+ML domain.',
        image: '/community/devday3.jpg',
        date: 'Sat, Jan 21, 2023',
        time: '9:00 AM (IST)',
        venue: 'SVPCET, Nagpur, 440022',
        price: '50',
        tags: ['AI', 'ML', 'Cloud'],
    },
]

export function FeaturedEvents() {
    const [background, setBackground] = useState<string>('')

    return (
        <div
            className={styles.featuredEventRoot}
            style={{
                backgroundImage: `url(${background})`,
            }}>
            <div className={styles.featuredEventContainer}>
                <Heading>Featured Events</Heading>

                <div className={styles.eventsList}>
                    {FeaturedEventsData.map((event, index) => (
                        <div
                            className={styles.eventCard}
                            onMouseEnter={() => setBackground(event.image)}
                            // onMouseLeave={() => setBackground('')}
                            key={index}>
                            <div className={styles.eventImage}>
                                <img src={event.image} />
                            </div>

                            <div className={styles.eventDetails}>
                                <div className={styles.eventTitle}>
                                    <p>{event.title}</p>
                                </div>

                                <div className={styles.eventDescription}>
                                    <p>{event.shortDescription}</p>
                                </div>

                                <div className={styles.eventDateTime}>
                                    <ClockSVG />

                                    <p>{`${event.date}, ${event.time}`}</p>
                                </div>

                                <div className={styles.eventVenue}>
                                    <VenueSVG />

                                    <p>{event.venue}</p>
                                </div>

                                <div className={styles.eventTags}>
                                    {event.tags.map((tag, index) => (
                                        <div
                                            className={styles.eventTag}
                                            key={tag + index}>
                                            <p className={styles.eventTagText}>
                                                {tag}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.eventButton}>
                                    <button>
                                        <Link
                                            href={event.url}
                                            target={'_blank'}>
                                            Know More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
