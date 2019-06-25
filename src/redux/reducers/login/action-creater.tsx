import { Credentials, Payload } from "./types";
import * as action from "./actions";
import users from "../../../data/users.json";

export const doLogin = (credentials: Credentials, props: any) => (
  dispatch: any
) => {
  let { username, password } = credentials;
  let result = users.find(
    user => user.password === password && user.username === username
  );
  dispatch({ type: action.LOGING_IN });
  return setTimeout(() => {
    if (result) {
      let payload = {
        name: result.name,
        used_id: result.id
      };
      dispatch({ type: action.SUCCESS, payload });
      props.history.push("user/tasks");
    } else {
      dispatch({ type: action.ERROR });
    }
  }, 500);
};

export function logout(): Payload {
  window.location.href = "/";
  return {
    type: action.LOGOUT,
    payload: null
  };
}
