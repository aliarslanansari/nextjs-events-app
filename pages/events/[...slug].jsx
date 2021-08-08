import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummyData'
import EventList from './../../components/events/event-list'
import ResultsTitle from './../../components/events/results-title'

const FilteredEventsPage = () => {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter please adjust your values!</p>
  }

  const date = new Date(numYear, numMonth - 1)

  const events = getFilteredEvents({ year: numYear, month: numMonth })

  if (!events || events.length === 0) {
    return <p>No Events found for the chosen filter!</p>
  }

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  )
}

export default FilteredEventsPage
