import EventItem from './event-item'
import classes from './event-list.module.css'

const EventList = (props) => {
  const { items } = props
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem {...event} key={event.id} />
      ))}
    </ul>
  )
}

export default EventList
