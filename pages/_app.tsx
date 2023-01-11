import '../styles/globals.scss'
import type {AppProps} from 'next/app'

import {ThemeProvider} from '@/hooks'
import {ErrorBoundary} from '@/error'

export default function App({Component, pageProps}: AppProps) {
    return (
        <ErrorBoundary id={'theme'}>
            <ThemeProvider>
                <ErrorBoundary id={'app'}>
                    <Component {...pageProps} />
                </ErrorBoundary>
            </ThemeProvider>
        </ErrorBoundary>
    )
}
