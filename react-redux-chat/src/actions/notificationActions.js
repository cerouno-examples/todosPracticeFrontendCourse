export default {
  closeNotification: () => {
    return {
      type: 'CLOSE_NOTIFICATION'
    }
  },
  replyNotification: (userName) => {
    return {
      type: 'REPLY_NOTIFICATION',
      userName: userName
    }
  }
}
