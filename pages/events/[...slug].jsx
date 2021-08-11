import { useRouter } from 'next/router'
import useSWR from 'swr'
import Button from '../../components/ui/button'
import { getFilteredEvents } from '../../dummyData'
import EventList from './../../components/events/event-list'
import ResultsTitle from './../../components/events/results-title'
import ErrorAlert from './../../components/ui/error-alert'

const FilteredEventsPage = ({ hasError, date }) => {
  const router = useRouter()

  const filterData = router.query.slug

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]
  const numYear = +filteredYear
  const numMonth = +filteredMonth

  const { data, error } = useSWR('filteredeventapicall', () =>
    getFilteredEvents({ year: numYear, month: numMonth })
  )

  if (!data) {
    return <p className="center">Loading...</p>
  }

  if (error) {
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

  if (!data || data.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events for choosen filter!</p>
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
      <EventList items={data} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const params = context.params
  const filterData = params.slug

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
    return {
      props: {
        hasError: true,
      },
    }
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth })
  const date = new Date(numYear, numMonth - 1)

  return {
    props: { events, date: date.toJSON() },
  }
}

export default FilteredEventsPage
