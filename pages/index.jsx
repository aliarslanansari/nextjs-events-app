import EventList from '../components/events/event-list'
import { getFeaturedEvents } from './../dummyData'

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage
