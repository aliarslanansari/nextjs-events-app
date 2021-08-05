import Link from 'next/link'
import Image from 'next/image'
import classes from './event-item.module.css'
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
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={100} height={100} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Link href={exploreLink}>Explore Event</Link>
          </div>
        </div>
      </div>
    </li>
  )
}

export default EventItem
