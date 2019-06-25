import * as React from "react";
import { USERNAME_VALIDATION, PASSWORD_VALIDATION } from "../../meassage";
import Field from "../../components/form-field";
import { connect } from "react-redux";
import { doLogin } from "../../redux/reducers/login/action-creater";
import { StateType, PropsType } from "./types";

const updateState = <T extends string>(key: string, value: T) => (
  prevState: StateType
): StateType => ({
  ...prevState,
  [key]: value
});

class Login extends React.Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasError: false,
      uname_error: false,
      password_error: false
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { username, password } = this.state;
    let credentials = {
      username,
      password
    };
    this.props.doLogin(credentials, this.props);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let key = e.target.name;
    this.setState(updateState(key, e.target.value));
  }

  handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    let key = e.target.name;
    const { username, password } = this.state;
    switch (key) {
      case "username":
        this.setState({ uname_error: !username });
        break;
      case "password":
        this.setState({ password_error: !password });
        break;
      default:
        return;
    }
  }

  hasError() {
    let { uname_error, password_error } = this.state;
    return uname_error || password_error;
  }

  renderForm() {
    const { uname_error, password_error } = this.state;
    return (
      <form onSubmit={this.login}>
        <Field
          name="username"
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          is_error={uname_error}
          error_message={USERNAME_VALIDATION}
          label="Username"
        />

        <Field
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          is_error={password_error}
          error_message={PASSWORD_VALIDATION}
          label="Password"
        />

        <button type="submit" disabled={this.hasError()}>
          Submit
        </button>
      </form>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h2>Login</h2>
        </header>
        {this.props.login_failed && !this.props.loading && (
          <div className="error message">
            Error: Invalid login credentials.Please check your username and
            password
          </div>
        )}
        {this.props.loading ? (
          <div className="loading-container">Please Wait...</div>
        ) : (
          this.renderForm()
        )}
      </div>
    );
  }
}

const mapState = (state: any) => ({
  loading: state.login.loading,
  login_failed: state.login.login_fail
});

const mapDispatch = {
  doLogin
};

export default connect(
  mapState,
  mapDispatch
)(Login);
