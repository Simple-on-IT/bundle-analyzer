import { v1 } from "uuid";
import { Task } from "../types/taskType";
import { names } from "../constants/taskTemplates";

export const getTasks = (): Task[] => {
  return Array.from({ length: 100 }, () => ({
    checked: false,
    name: names[Math.floor(Math.random() * (names.length - 1))],
    time: '9:00 - 11:00',
    id: v1(),
  }))
}

export const getName = () => {
  return names[Math.floor(Math.random() * (names.length - 1))];
};
