import { Task } from "./types";
import * as action from "./actions";

const getList = (id: string) => localStorage.getItem(id + "-tasks");
const saveList = (id: string, list: []) =>
  localStorage.setItem(id + "-tasks", JSON.stringify(list));

export const getAll = (id: string) => (dispatch: any, getState: any) => {
  let list = getList(id);
  if (list) {
    let tasks = JSON.parse(list);
    dispatch({ type: action.SUCCESS, payload: tasks });
  } else {
    dispatch({ type: action.SUCCESS, payload: [] });
  }
};

export const addNew = (id: string, task: Task, prop?: any) => (
  dispatch: any
) => {
  let list = getList(id);
  let tasks = [];
  if (list) tasks = JSON.parse(list);
  task.id = tasks.length;
  tasks.push(task);
  saveList(id, tasks);
  dispatch({ type: action.SUCCESS, payload: tasks });
  prop.history.goBack();
};

export const removeTask = (id: string, task_id: number) => (dispatch: any) => {
  let list = getList(id);
  if (list) {
    let tasks = JSON.parse(list).filter((t: Task) => t.id !== task_id);
    saveList(id, tasks);
    dispatch({ type: action.SUCCESS, payload: tasks });
  } else {
    dispatch({ type: action.ERROR });
  }
};

export const markAsCompleted = (id: string, task_id: number) => (
  dispatch: any
) => {
  let list = getList(id);
  if (list) {
    let tasks = JSON.parse(list);
    let index = tasks.findIndex((t: Task) => t.id === task_id);
    tasks[index].isCompleted = true;
    saveList(id, tasks);
    dispatch({ type: action.SUCCESS, payload: tasks });
  } else {
    dispatch({ type: action.ERROR });
  }
};
