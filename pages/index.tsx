import {
    FooterInvites,
    LandingInterface,
    Snapshots,
    Sponsers,
} from '@/containers'

export default function Home() {
    return (
        <div>
            <LandingInterface />

            <Snapshots />

            <Sponsers />

            <FooterInvites />
        </div>
    )
}
