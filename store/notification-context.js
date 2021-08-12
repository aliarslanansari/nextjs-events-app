import { createContext, useState } from 'react'

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
})

export default NotificationContext

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState()

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData)
  }
  const hideNotificationHandler = () => {
    setActiveNotification(null)
  }
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}
