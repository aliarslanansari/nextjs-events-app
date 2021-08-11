import { useRouter } from 'next/router'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import { getEventById, getAllEvents } from '../../dummyData'
import ErrorAlert from '../../components/ui/error-alert'

const EventDetails = ({ event }) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    )
  }
  // console.log(eventId)
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId
  const event = getEventById(eventId)
  return {
    props: { event },
  }
}
export async function getStaticPaths() {
  const events = getAllEvents()
  return {
    paths: events.map((event) => ({ params: { eventId: event.id } })),
    fallback: false,
  }
}

export default EventDetails
