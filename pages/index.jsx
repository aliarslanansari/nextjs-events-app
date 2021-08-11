import EventList from '../components/events/event-list'
import { getFeaturedEvents } from './../dummyData'
import Head from 'next/head'
const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta name="description" content="Nextjs Events page" />
      </Head>
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
