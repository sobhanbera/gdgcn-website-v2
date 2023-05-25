import {
    FeaturedEvents,
    FooterInvites,
    LandingInterface,
    Snapshots,
    Sponsors,
} from '@/containers'

export default function Home() {
    return (
        <div>
            <LandingInterface />

            <Snapshots />

            <FeaturedEvents />

            <Sponsors />

            <FooterInvites />
        </div>
    )
}
