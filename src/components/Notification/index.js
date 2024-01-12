import './index.css'

const Notification = props => {
  const {childern} = props
  return (
    <div className="list-container">
      <h1 className="heading">Alert Notifications</h1>
      {childern}
    </div>
  )
}

export default Notification
