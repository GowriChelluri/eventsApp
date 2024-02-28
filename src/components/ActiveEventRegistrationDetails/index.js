import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const renderYetToRegisterView = () => (
    <div className="ytr-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="ytr-img"
      />
      <p className="ytr-description">
        A live performance brings so much to your <br />
        relationship with dance.Seeing dance live
        <br /> can often make you fall totally in love with <br />
        this beautiful art form.
      </p>
      <button type="button" className="ytr-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="rv-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="rv-img"
      />
      <h1 className="rv-heading">
        You have already registered
        <br /> for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="rc-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="rc-img"
      />
      <h1 className="rc-heading">Registrations Are Closed Now!</h1>
      <p className="rc-description">Stay tuned. We will reopen</p>
    </div>
  )

  const renderNoActiveEvent = () => (
    <div>
      <p className="active-events-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeRegistrationStatus) {
      case 'YET_TO_REGISTER':
        return renderYetToRegisterView()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationsClosedView()
      case 'REGISTERED':
        return renderRegisteredView()
      default:
        return renderNoActiveEvent()
    }
  }

  return <div>{renderActiveEventRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
