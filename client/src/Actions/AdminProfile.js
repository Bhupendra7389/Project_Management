export function getNotifications(id) {
  return {
    type: "GETNOTIFICATIONS",
    id
  };
}
export function deleteNotification(id) {
  return {
    type: "DELETENOTIFICATION",
    id
  };
}
