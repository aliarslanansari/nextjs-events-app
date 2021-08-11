import Head from 'next/head'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventSummary from '../../components/event-detail/event-summary'
import ErrorAlert from '../../components/ui/error-alert'
import { getEventById, getFeaturedEvents } from '../../dummyData'

const EventDetails = ({ event }) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>Loading...</p>
      </ErrorAlert>
    )
  }
  // console.log(eventId)
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
  if (!event) {
    return {
      notFound: true,
    }
  }
  return {
    props: { event },
    revalidate: 30,
  }
}
export async function getStaticPaths() {
  const events = getFeaturedEvents()
  const paths = events.map((event) => ({ params: { eventId: event.id } }))
  return {
    paths,
    fallback: true,
  }
}

export default EventDetails
