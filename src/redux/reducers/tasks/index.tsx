import { TaskState, TaskActionType } from "./types";
import { LOADING_TASKS, SUCCESS, ERROR } from "./actions";

const initialState: TaskState = {
  loading: false,
  list: []
};

export function taskReducer(
  state = initialState,
  action: TaskActionType
): TaskState {
  switch (action.type) {
    case LOADING_TASKS:
      return { ...state, loading: true };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    case ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
