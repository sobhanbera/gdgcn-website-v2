import {Heading} from '@/components'
import styles from '@/styles/containers/sponsers.module.scss'

export function Sponsers() {
    return (
        <div className={styles.sponsersRoot} id={'sponsors'}>
            <div className={styles.sponsersContainer}>
                <Heading>Sponsors & Partners</Heading>

                <div className={styles.sponsersList}>
                    <img
                        className={`${styles.sponserImage} ${styles.google}`}
                        src={'/sponsers/google.png'}
                    />
                    <img
                        className={`${styles.sponserImage} ${styles.jetbrains}`}
                        src={'/sponsers/jetbrains.png'}
                    />
                </div>
            </div>
        </div>
    )
}
