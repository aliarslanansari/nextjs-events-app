import { useRouter } from 'next/router'
import Button from '../../components/ui/button'
import { getFilteredEvents } from '../../dummyData'
import EventList from './../../components/events/event-list'
import ResultsTitle from './../../components/events/results-title'
import ErrorAlert from './../../components/ui/error-alert'

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
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={`/events`}>Show All Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  const events = getFilteredEvents({ year: numYear, month: numMonth })

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={`/events`}>Show All Events</Button>
        </div>
      </>
    )
  }

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  )
}

export default FilteredEventsPage
