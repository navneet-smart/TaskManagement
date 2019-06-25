import { RouteComponentProps } from "react-router-dom";

export interface PropsType extends RouteComponentProps {
  history: any;
  loading: boolean;
  login_failed: boolean;
  doLogin: any;
}

export interface StateType {
  username: string;
  password: string;
  hasError: boolean;
  uname_error: boolean;
  password_error: boolean;
}
