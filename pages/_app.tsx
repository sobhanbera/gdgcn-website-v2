import type {AppProps} from 'next/app'
import Head from 'next/head'
import {Analytics} from '@vercel/analytics/react'

import aos from 'aos'
import 'aos/dist/aos.css'

import '../styles/globals.scss'
import '../styles/theming.scss'

import {ThemeProvider} from '@/hooks'
import {ErrorBoundary} from '@/error'
import {Footer, Header} from '@/components'
import {useEffect} from 'react'
import {justForFun} from '@/utils/justforfun'

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        aos.init({
            duration: 1828.3268, // birthday digits (everybody?) :)...
            initClassName: 'sb-initial-anim',
            once: true,
            mirror: true,
            offset: 50,
            debounceDelay: 100,
            throttleDelay: 100,
        })
    }, [])

    useEffect(() => {
        justForFun()
    }, [])

    return (
        <ErrorBoundary id={'theme'}>
            <ThemeProvider>
                <Head>
                    <title>GDG Cloud Nagpur</title>
                </Head>

                <ErrorBoundary id={'app'}>
                    <Header />

                    <main
                        style={{
                            paddingTop: 'var(--header-height)',
                        }}>
                        <Component {...pageProps} />

                        <Analytics />
                    </main>

                    <Footer />
                </ErrorBoundary>
            </ThemeProvider>
        </ErrorBoundary>
    )
}
