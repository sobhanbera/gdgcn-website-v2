import {Heading} from '@/components'
import styles from '@/styles/containers/sponsers.module.scss'

export function Sponsers() {
    return (
        <div className={styles.sponsersRoot} id={'sponsors'}>
            <div className={styles.sponsersContainer}>
                <Heading>Sponsors & Partners</Heading>

                <div className={styles.sponsersList}>
                    <img
                        data-aos="fade-left"
						data-aos-delay="100"
                        className={`${styles.sponserImage} ${styles.google}`}
                        src={'/sponsers/google.png'}
                    />

                    <img
                        data-aos="fade-left"
						data-aos-delay="200"
                        className={`${styles.sponserImage} ${styles.jetbrains}`}
                        src={'/sponsers/jetbrains.png'}
                    />

                    <img
						data-aos="fade-left"
						data-aos-delay="300"
                        className={`${styles.sponserImage} ${styles.cloudcasa}`}
                        src={'/sponsers/cloudcasa.png'}
                    />
                </div>
            </div>
        </div>
    )
}
