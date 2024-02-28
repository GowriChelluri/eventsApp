import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
