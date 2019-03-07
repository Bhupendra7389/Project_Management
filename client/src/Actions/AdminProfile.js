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
