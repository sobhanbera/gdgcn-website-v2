import styles from '@/styles/containers/snapshots.module.scss'

import {Heading} from '@/components'

export const SnapshotData: Array<{url: string; class: string}> = [
    {
        url: '/community/ccd.jpg',
        class: styles.horizontal,
    },
    {
        url: '/community/ccd1.jpg',
        class: styles.vertical,
    },
    {
        url: '/community/ccd2.jpg',
        class: styles.normal,
    },
    {
        url: '/community/cloudonml1.jpg',
        class: styles.normal,
    },
    {
        url: '/community/ccd4.jpg',
        class: styles.normal,
    },
    {
        url: '/community/cloudonml.jpg',
        class: styles.normal,
    },
    {
        url: '/community/ccd5.jpg',
        class: styles.vertical,
    },
    {
        url: '/community/ccd3.jpg',
        class: styles.horizontal,
    },
    {
        url: '/community/devday.jpg',
        class: styles.normal,
    },
    {
        url: '/community/devday1.jpg',
        class: styles.normal,
    },
    {
        url: '/community/devday2.jpg',
        class: styles.normal,
    },
    {
        url: '/community/devday3.jpg',
        class: styles.normal,
    },
]

export function Snapshots() {
    return (
        <div className={styles.snapshotRoot}>
            <div className={styles.snapshotContainer}>
                <Heading>Event Snapshots</Heading>

                <div className={styles.snapshotsGrid}>
                    {SnapshotData.map(snapshot => {
                        return (
                            <div
                                className={`${styles.snapshot} ${snapshot.class}`}
                                key={snapshot.url}
                                style={{
                                    backgroundImage: `url(${snapshot.url})`,
                                }}>
                                <div className={styles.overlay}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
