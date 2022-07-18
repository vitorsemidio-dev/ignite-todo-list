import { NewTask } from "./Components/NewTask";
import { Header } from "./Components/Header";
import { useState } from "react";

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

  return (
    <div>
      <Header />
      <NewTask onCreateNewTask={addNewTask} />
    </div>
  );
}
