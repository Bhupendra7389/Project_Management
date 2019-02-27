export function listProject() {
  return { type: "LISTPROJECT" };
}
export function listDeveloper() {
  return { type: "LISTDEVELOPER" };
}
export function inviteDeveloper(Ids) {
  return {
    type: "INVITEDEVELOPER",
    Ids
  };
}
