import {
    FeaturedEvents,
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

            <FeaturedEvents />

            <Sponsers />

            <FooterInvites />
        </div>
    )
}
