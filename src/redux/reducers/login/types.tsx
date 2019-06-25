import { ERROR } from "./actions";

export interface Credentials {
  username: string;
  password: string;
}

export interface UserInfo {
  name: string;
  used_id: string;
  loading: boolean;
  login_fail: boolean;
  logged_in: boolean;
}

export interface Payload {
  type: string;
  payload: any;
}

interface DoLogin {
  type: string;
  payload: Credentials;
}

interface DoLogout {
  type: string;
  payload: any;
}

interface LoginSuccess {
  type: string;
  payload: UserInfo;
}

export interface LoginFailed {
  type: typeof ERROR;
  payload: any;
}

export type LoginActionTypes = DoLogin | DoLogout | LoginSuccess | LoginFailed;
