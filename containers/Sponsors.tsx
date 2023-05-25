import {Heading} from '@/components'
import styles from '@/styles/containers/Sponsors.module.scss'

export function Sponsors() {
    return (
        <div className={styles.sponsorsRoot} id={'sponsors'}>
            <div className={styles.sponsorsContainer}>
                <Heading>Sponsors & Partners</Heading>

                <div className={styles.sponsorsList}>
                    <img
                        data-aos="fade-left"
                        data-aos-delay="100"
                        className={`${styles.sponserImage} ${styles.google}`}
                        src={'/Sponsors/google.png'}
                    />

                    <img
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className={`${styles.sponserImage} ${styles.jetbrains}`}
                        src={'/Sponsors/jetbrains.png'}
                    />

                    <img
                        data-aos="fade-left"
                        data-aos-delay="300"
                        className={`${styles.sponserImage} ${styles.cloudcasa}`}
                        src={'/Sponsors/cloudcasa.png'}
                    />
                </div>
            </div>
        </div>
    )
}
