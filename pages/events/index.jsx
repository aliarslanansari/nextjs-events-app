import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/events-search'
import { getAllEvents } from '../../dummyData'
import { useRouter } from 'next/router'

const AllEventsPage = () => {
  const router = useRouter()
  const events = getAllEvents()

  const onFilter = (selectedYear, selectedMonth) => {
    const fullPath = `/events/${selectedYear}/${selectedMonth}`
    router.push(fullPath)
  }

  return (
    <>
      <EventSearch onFilter={onFilter} />
      <EventList items={events} />
    </>
  )
}

export default AllEventsPage
