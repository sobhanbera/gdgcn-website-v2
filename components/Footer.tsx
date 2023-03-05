import {useEffect, useState} from 'react'
import Link from 'next/link'

import styles from '@/styles/components/footer.module.scss'

import {COMMUNITY_URL, MAX_HEADER_HEIGHT} from '@/configs'

interface FooterProps {}
export function Footer(props: FooterProps) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLeft}>
                    <img className={styles.regular} src={'/imgs/logo.png'} />

                    <img className={styles.small} src={'/imgs/logosmall.png'} />
                </div>

                <div className={styles.footerRight}>
                    <ul>
                        <li>
                            <Link href={'/team'}>Home</Link>
                        </li>

                        <li>
                            <Link href={'/team'}>Team</Link>
                        </li>

                        <li>
                            <Link href={'/team'}>Events</Link>
                        </li>

                        <li>
                            <Link href={'/team'}>FAQs</Link>
                        </li>

                        <li>
                            <Link href={'/team'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.footerBottomArea}>
                {/** the community name is resolve from css content of after selector */}
                <p className={styles.copyrightText}>Copyright © 2023 </p>

                <p className={styles.madeWithLoveText}>
                    Made with ♥️ in India.
                </p>
            </div>
        </footer>
    )
}
