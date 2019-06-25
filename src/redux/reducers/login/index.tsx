import { UserInfo, LoginActionTypes } from "./types";
import { LOGING_IN, LOGOUT, SUCCESS, ERROR } from "./actions";

const initialState: UserInfo = {
  name: "",
  used_id: "",
  loading: false,
  login_fail: false,
  logged_in: false
};

export function loginReducer(
  state = initialState,
  action: LoginActionTypes
): UserInfo {
  switch (action.type) {
    case LOGING_IN:
      return { ...state, loading: true };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        login_fail: false,
        logged_in: true,
        name: action.payload.name,
        used_id: action.payload.used_id
      };
    case ERROR:
      return {
        ...state,
        login_fail: true,
        loading: false,
        logged_in: false
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        login_fail: false,
        logged_in: false,
        name: "",
        used_id: ""
      };
    default:
      return state;
  }
}
