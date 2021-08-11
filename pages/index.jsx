import EventList from '../components/events/event-list'
import { getFeaturedEvents } from './../dummyData'

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = getFeaturedEvents()
  return {
    props: { featuredEvents },
    revalidate: 1800,
  }
}

export default HomePage
