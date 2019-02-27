import axios from "axios";
export default function* inviteDeveloper(action) {
  console.log(action.user.DeveloperEmail);
  yield axios.put(
    "http://localhost:8081/Invite/InviteResponse/" + action.user.ProjectId,
    action.user
  );
}
