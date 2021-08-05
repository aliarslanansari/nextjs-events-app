import Link from 'next/link'
import Image from 'next/image'
const EventItem = (props) => {
  const { id, title, location, date, image } = props

  const humanReadableDate = new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
