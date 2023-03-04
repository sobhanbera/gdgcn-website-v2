import PastEvents from "@/components/Event-Components/PastEvents";
import EventsIntro from "@/components/Event-Components/EventsIntro";
import UpcomingEvents from "@/components/Event-Components/UpcomingEvents";

export default function Events() {
    return <div>
        <EventsIntro/>
        <UpcomingEvents/>
        <PastEvents/>
    </div>
}
