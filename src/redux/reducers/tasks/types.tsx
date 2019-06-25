export interface Credentials {
  username: string;
  password: string;
}

export interface TaskState {
  loading: boolean;
  list: [];
}

export interface Task {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

export interface TaskActionType {
  type: string;
  payload: any;
}

export type LoginActionTypes = TaskActionType;
