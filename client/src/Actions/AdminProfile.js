export function getNotifications() {
  return {
    type: "GETNOTIFICATIONS"
  };
}
export function deleteNotification(id) {
  return {
    type: "DELETENOTIFICATION",
    id
  };
}
export function changeInNotification(id) {
  return {
    type: "CHANGEINNOTIFICATION",
    id
  };
}
