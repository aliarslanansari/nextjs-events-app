import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/events-search'
import { getAllEvents } from '../../dummyData'

const AllEventsPage = () => {
  const events = getAllEvents()

  return (
    <>
      <EventSearch />
      <EventList items={events} />
    </>
  )
}

export default AllEventsPage
