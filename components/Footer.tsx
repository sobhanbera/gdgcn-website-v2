import {useEffect, useState} from 'react'
import Link from 'next/link'

import styles from '@/styles/components/footer.module.scss'

import {COMMUNITY_URL, MAX_HEADER_HEIGHT} from '@/configs'

interface FooterProps {}
export function Footer(props: FooterProps) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft} data-aos="fade-right">
                    <img className={styles.regular} src={'/imgs/logo.png'} />

                    <img className={styles.small} src={'/imgs/logosmall.png'} />
                </div>

                <div className={styles.footerRight}>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="100">
                            <Link href={'/'}>Home</Link>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="200">
                            <Link href={'/team'}>Team</Link>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="300">
                            <Link href={'/events'}>Events</Link>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="400">
                            <Link href={'/#sponsors'}>Sponsers</Link>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="500">
                            <Link href={'/faqs'}>FAQs</Link>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="600">
                            <Link href={'/contactus'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottomArea}>
                {/** the community name is resolve from css content of after selector */}
                <p
                    className={styles.copyrightText}
                    data-aos="fade-up"
                    data-aos-delay="650">
                    Copyright © 2023{' '}
                </p>

                <p
                    className={styles.madeWithLoveText}
                    data-aos="fade-up"
                    data-aos-delay="650">
                    Made with ♥️ in India.
                </p>
            </div>
        </footer>
    )
}
