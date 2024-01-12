import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/io'
import {MdInfo} from 'react-icons/io'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="message-container">
        <h1 className="message-heading success">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
      <GrFormClose />
    </Notification>
  )
  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="success icon" />
      <div className="message-container">
        <h1 className="message-heading success">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
      <GrFormClose />
    </Notification>
  )
  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="success icon" />
      <div className="message-container">
        <h1 className="message-heading success">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
      <GrFormClose />
    </Notification>
  )
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="success icon" />
      <div className="message-container">
        <h1 className="message-heading success">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
      <GrFormClose />
    </Notification>
  )
}

export default AlertNotifications
