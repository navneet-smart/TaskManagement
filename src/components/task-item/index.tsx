import * as React from "react";
import { any } from "prop-types";
import { thisExpression } from "@babel/types";

interface ItemProps {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  onMarkCompleted: any;
  onRemoveTask: any;
}

class TaskItem extends React.Component<ItemProps> {
  constructor(props: ItemProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onChange() {
    let { id } = this.props;
    this.props.onMarkCompleted(id);
  }

  onRemove() {
    let { id } = this.props;
    this.props.onRemoveTask(id);
  }

  render() {
    const { id, name, description, isCompleted } = this.props;
    return (
      <div className="item">
        <h3>{name}</h3>
        <p>{description}</p>
        <input type="checkbox" checked={isCompleted} onChange={this.onChange} />
        <button className="remove" onClick={this.onRemove}>
          X
        </button>
      </div>
    );
  }
}

export default TaskItem;
