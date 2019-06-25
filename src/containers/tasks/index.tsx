import React from "react";
import TaskItem from "../../components/task-item";
import { connect } from "react-redux";
import {
  getAll,
  markAsCompleted,
  removeTask
} from "../../redux/reducers/tasks/action-creater";
import { logout } from "../../redux/reducers/login/action-creater";
import { ListPropsType } from "./types";

class HomePage extends React.Component<ListPropsType> {
  constructor(props: any) {
    super(props);

    this.createNew = this.createNew.bind(this);
    this.onMarkCompleted = this.onMarkCompleted.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.loadList();
  }

  loadList() {
    this.props.getAll();
  }

  onMarkCompleted(taskid: number) {
    let { user_id, markAsCompleted } = this.props;
    markAsCompleted(user_id, taskid);
  }

  onRemoveTask(taskid: number) {
    let { user_id, removeTask } = this.props;
    removeTask(user_id, taskid);
  }

  logout() {
    console.log(this.props.history);
    this.props.history.go("/");
  }

  createNew() {
    this.props.history.push("newtask");
  }
  renderTasks() {
    const { tasks } = this.props;
    return (
      <div>
        {" "}
        {tasks.map((task: any, index: any) => (
          <TaskItem
            key={`task-${task.id}`}
            id={task.id}
            name={task.name}
            description={task.description}
            isCompleted={task.isCompleted}
            onMarkCompleted={this.onMarkCompleted}
            onRemoveTask={this.onRemoveTask}
          />
        ))}
      </div>
    );
  }
  render() {
    return (
      <div>
        <header>
          <h2>Welcome {this.props.username}. Your Tasks </h2>
          <div>
            <button onClick={this.createNew}>Create +</button>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        </header>
        {this.props.tasks.length > 0 ? (
          this.renderTasks()
        ) : (
          <div className="message">
            OOPS! You Dont have any Task. Create If You Want.
          </div>
        )}
      </div>
    );
  }
}
const mapState = (state: any) => {
  console.log(state);
  return {
    tasks: state.tasks.list,
    user_id: state.login.user_id,
    username: state.login.name
  };
};
const mapDispatch = {
  getAll,
  markAsCompleted,
  removeTask,
  logout
};

export default connect(
  mapState,
  mapDispatch
)(HomePage);
