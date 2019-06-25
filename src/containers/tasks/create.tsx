import * as React from "react";
import { addNew } from "../../redux/reducers/tasks/action-creater";
import { connect } from "react-redux";
import { TASK_NAME_VALIDATION, TASK_DESC_VALIDATION } from "../../meassage";
import Field from "../../components/form-field";
import { TaskStateType, TaskPropsType } from "./types";

const updateState = <T extends string>(key: string, value: T) => (
  prevState: TaskStateType
): TaskStateType => ({
  ...prevState,
  [key]: value
});

class CreateNewTask extends React.Component<TaskPropsType, TaskStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      description: "",
      name: "",
      hasError: false,
      name_error: false,
      dsc_error: false
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.hasError = this.hasError.bind(this);
  }

  submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, description } = this.state;
    let task = {
      name,
      description,
      isCompleted: false
    };
    this.props.addNew(this.props.user_id, task, this.props);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let key = e.target.name;
    this.setState(updateState(key, e.target.value));
  }

  handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    let key = e.target.name;
    const { name, description } = this.state;
    switch (key) {
      case "name":
        this.setState({ name_error: !name });
        break;
      case "description":
        this.setState({ dsc_error: !description });
        break;
      default:
        return;
    }
  }

  hasError() {
    let { name_error, dsc_error } = this.state;
    return name_error || dsc_error;
  }

  render() {
    const { name_error, dsc_error } = this.state;
    return (
      <div>
        <header>
          <h2>Create New Task</h2>
        </header>
        <form onSubmit={this.submit}>
          <Field
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            is_error={name_error}
            error_message={TASK_NAME_VALIDATION}
            label="Task Name"
          />
          <Field
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            is_error={dsc_error}
            error_message={TASK_DESC_VALIDATION}
            label="Description"
          />

          <button type="submit" disabled={this.hasError()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
const mapState = (state: any) => ({
  tasks: state.tasks.list,
  user_id: state.login.user_id
});
const mapDispatch = {
  addNew
};

export default connect(
  mapState,
  mapDispatch
)(CreateNewTask);
