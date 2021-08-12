import MainHeader from './main-header'
import Notification from './../ui/notification'
import { useContext } from 'react'
import NotificationContext from '../../store/notification-context'

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext)

  const activeNotification = notificationCtx.notification

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && (
        <Notification title="test" messge="this is test msg" status="success" />
      )}
    </>
  )
}

export default Layout
