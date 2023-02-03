import type {AppProps} from 'next/app'
import Head from 'next/head'

import {ThemeProvider} from '@/hooks'
import {ErrorBoundary} from '@/error'
import {ResponsiveAppBar} from '@/components'

import '../styles/globals.scss'

export default function App({Component, pageProps}: AppProps) {
    return (
        <ErrorBoundary id={'theme'}>
            <ThemeProvider>
                <Head>
                    <title>GDG Cloud Native</title>
                </Head>

                <ErrorBoundary id={'app'}>
                    <ResponsiveAppBar />

                    <Component {...pageProps} />
                </ErrorBoundary>
            </ThemeProvider>
        </ErrorBoundary>
    )
}
