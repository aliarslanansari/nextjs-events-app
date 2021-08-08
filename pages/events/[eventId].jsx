import { useRouter } from 'next/router'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import { getEventById } from '../../dummyData'

const EventDetails = () => {
  const router = useRouter()
  const { eventId } = router.query

  const event = getEventById(eventId)
  if (!event) {
    return <p>No Event Found</p>
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

export default EventDetails
