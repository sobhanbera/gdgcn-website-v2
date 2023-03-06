import type {AppProps} from 'next/app'
import Head from 'next/head'

import '../styles/globals.scss'
import '../styles/theming.scss'

import {ThemeProvider} from '@/hooks'
import {ErrorBoundary} from '@/error'
import {Footer, Header} from '@/components'

export default function App({Component, pageProps}: AppProps) {
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
                    </main>

                    <Footer />
                </ErrorBoundary>
            </ThemeProvider>
        </ErrorBoundary>
    )
}
