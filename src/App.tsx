import { NewTask } from "./Components/NewTask";
import { Header } from "./Components/Header";
import { useState } from "react";
import { Tasks } from "./Components/Tasks";

type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(newTaskTitle: string) {
    const id = new Date().getTime().toString();
    const newTask: Task = { id, title: newTaskTitle, isCompleted: false };
    setTasks((state) => [...state, newTask]);
  }

  function toggleStateCompleteTask(taskId: string) {
    setTasks((state) => {
      return state.map((taskItem) => {
        if (taskItem.id === taskId) {
          return {
            ...taskItem,
            isCompleted: !taskItem.isCompleted,
          };
        }
        return taskItem;
      });
    });
  }

  return (
    <div>
      <Header />
      <NewTask onCreateNewTask={addNewTask} />
      <Tasks onCompleteTask={toggleStateCompleteTask} tasks={tasks} />
    </div>
  );
}
