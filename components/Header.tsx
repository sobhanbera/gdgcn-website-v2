import {useEffect, useState} from 'react'
import Link from 'next/link'

import styles from '@/styles/components/header.module.scss'

import {COMMUNITY_URL, MAX_HEADER_HEIGHT} from '@/configs'

interface HeaderProps {}
export function Header(props: HeaderProps) {
    // var to control a button which toggles meny when header is scrolled above
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    // toggle for showing menu
    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(window.scrollY > MAX_HEADER_HEIGHT, isScrolled)

            setIsScrolled(window.scrollY > MAX_HEADER_HEIGHT)
        })
    }, [])

    /**
     * all these scroll behavious should be performed under state update
     * functions else greeting scroll controllers are not working that well
     */
    const hideMenu = () => {
        setShowMenu(false)
        // also nomalize the scroll
        document.body.style.overflow = 'scroll'
    }

    /**
     * disable scroling when any kind of meny is opened
     * this useEffect will do the same
     */
    useEffect(() => {
        // if menu is enabled then disable the scrolling in body
        if (showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            // else enable it
            document.body.style.overflow = 'scroll'
        }
    }, [showMenu])

    /**
     * disable scroling when any kind of meny is opened
     * this useEffect will do the same
     *
     * this will be perfomed in toggleMenu function instead of
     * above useEffect for much more elegant state and scroll control
     */
    const toggleMenu = () =>
        setShowMenu(value => {
            // if menu is enabled then disable the scrolling in body
            if (!value) document.body.style.overflow = 'hidden'
            // else enable it
            else document.body.style.overflow = 'scroll'

            return !value
        })

    return (
        <header
            className={`${styles.headerRoot} ${
                isScrolled ? styles.beingScrolled : styles.null
            }`}>
            <div className={styles.headerMain}>
                <div className={styles.headerLeft}>
                    <div className={styles.headerLogo}>
                        <Link href="/">
                            <img
                                className={styles.regular}
                                src={'/imgs/logo.png'}
                            />

                            <img
                                className={styles.small}
                                src={'/imgs/logosmall.png'}
                            />
                        </Link>
                    </div>

                    <div className={styles.headerLogoBorder}></div>

                    <div className={styles.headerNavigation}>
                        <ul>
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>

                            <li>
                                <Link href={'/team'}>Team</Link>
                            </li>

                            <li>
                                <Link href={'/events'}>Events</Link>
                            </li>

                            <li>
                                <Link href={'/faqs'}>FAQs</Link>
                            </li>

                            <li>
                                <Link href={'/contactus'}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.headerRight}>
                    <button className={styles.headerJoinButton}>
                        <a href={COMMUNITY_URL} target={'_blank'}>
                            Join Community
                        </a>
                    </button>

                    <div
                        className={styles.menuIconContainer}
                        onClick={toggleMenu}>
                        <svg
                            className={
                                showMenu ? styles.active : styles.inactive
                            }
                            viewBox="0 0 100 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="6" rx="3" />
                            <rect y="29" width="100" height="6" rx="3" />
                            <rect y="58" width="53" height="6" rx="3" />
                        </svg>
                    </div>

                    <div
                        className={`${styles.headerNavigationSmall} ${
                            showMenu ? styles.active : styles.inactive
                        }`}
                        style={{
                            opacity: showMenu ? 1 : 0,
                        }}>
                        <ul>
                            <li onClick={() => hideMenu()}>
                                <Link href={'/'}>Home</Link>
                            </li>

                            <li onClick={() => hideMenu()}>
                                <Link href={'/team'}>Team</Link>
                            </li>

                            <li onClick={() => hideMenu()}>
                                <Link href={'/events'}>Events</Link>
                            </li>

                            <li onClick={() => hideMenu()}>
                                <Link href={'/#sponsors'}>Sponsers</Link>
                            </li>

                            <li onClick={() => hideMenu()}>
                                <Link href={'/faqs'}>FAQs</Link>
                            </li>

                            <li onClick={() => hideMenu()}>
                                <Link href={'/contactus'}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
