import styles from '@/styles/containers/landinginterface.module.scss'

import {COMMUNITY_URL} from '@/configs'

export function LandingInterface() {
    return (
        <div className={styles.landingInterfaceRoot}>
            <div className={styles.landingContainer}>
                {/* <img src={'/imgs/community.png'} /> */}
                <p className={styles.title}>
                    Let's build a robust community together!
                    {/* Building a robust community for developers!!! */}
                </p>

                <p className={styles.track}>
                    Made by programmers, made for programmers.
                </p>

                <button className={styles.joinButton}>
                    <a href={COMMUNITY_URL} target={'_blank'}>
                        Join Community
                    </a>
                </button>
            </div>
        </div>
    )
}
