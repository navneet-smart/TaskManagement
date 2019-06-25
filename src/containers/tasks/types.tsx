export interface TaskPropsType {
  history: any;
  addNew: any;
  user_id: string;
}

export interface TaskStateType {
  name: string;
  description: string;
  hasError: boolean;
  name_error: boolean;
  dsc_error: boolean;
}

export interface ListPropsType {
  history: any;
  getAll: any;
  markAsCompleted: any;
  removeTask: any;
  logout: any;
  tasks: [];
  user_id: string;
  username: string;
}
