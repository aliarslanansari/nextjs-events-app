import Link from 'next/link'
import Image from 'next/image'
const EventItem = (props) => {
  const { id, title, description, location, date, image, isFeatured } = props

  const humanReadableDate = new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedAddress = location.replace(', ', '\n')

  return (
    <li>
      <Image src={'/' + image} alt='' />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
          <Link href='/'>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
