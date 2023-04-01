import Link from 'next/link'

import styles from '@/styles/containers/footerinvites.module.scss'

import {
    EmailSVG,
    InstagramSVG,
    WebsiteSVG,
    LinkedinSVG,
    TwitterSVG,
} from '@/components'
import {
    COMMUNITY_URL,
    COMMUNITY_EMAIL,
    COMMUNITY_LINKEDIN,
    COMMUNITY_INSTAGRAM,
    COMMUNITY_TWITTER,
} from '@/configs'

const SocialLinksData: Array<{
    url: string
    Component: ({className}: {className?: string | undefined}) => JSX.Element
    className: string
}> = [
    {
        url: COMMUNITY_EMAIL,
        Component: EmailSVG,
        className: styles.email,
    },
    {
        url: COMMUNITY_URL,
        Component: WebsiteSVG,
        className: styles.website,
    },
    {
        url: COMMUNITY_LINKEDIN,
        Component: LinkedinSVG,
        className: styles.linkedin,
    },
    {
        url: COMMUNITY_TWITTER,
        Component: TwitterSVG,
        className: styles.twitter,
    },
    {
        url: COMMUNITY_INSTAGRAM,
        Component: InstagramSVG,
        className: styles.instagram,
    },
]

export function FooterInvites() {
    return (
        <div className={styles.footerInviteRoot}>
            <div
                className={styles.footerInviteContainer}
                data-aos="zoom-out-down">
                <div className={styles.leftSection}>
                    <p data-aos="fade-down">Join The Community!</p>
                    <p data-aos="fade-up">Follow us Online!</p>
                </div>

                <div className={styles.rightSection}>
                    <p data-aos="fade-down">
                        Already 8,000+ people are with us in this journey.
                    </p>

                    <div className={styles.buttonContainer}>
                        {SocialLinksData.map((SocialLink, index) => {
                            return (
                                <Link
                                    data-aos="zoom-in-up"
                                    data-aos-delay={index * 100}
                                    className={styles.button}
                                    href={SocialLink.url}
                                    target={'_blank'}
                                    key={SocialLink.url}>
                                    <SocialLink.Component
                                        className={SocialLink.className}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
