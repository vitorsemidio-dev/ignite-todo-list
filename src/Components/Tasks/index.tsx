import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

interface TasksProps {
  tasks: Task[];
  onCompleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, onCompleteTask }: TasksProps) {
  function handleCheckChange(taskId: string) {
    onCompleteTask(taskId);
  }

  return (
    <div className={styles.taskContainer}>
      {tasks.map((task) => {
        return (
          <div key={task.id} className={styles.taskItemContainer}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleCheckChange(task.id)}
            />
            <p
              className={
                task.isCompleted ? styles.titleTaskCompleted : styles.titleTask
              }>
              {task.title}
            </p>
            <Trash role="button" className={styles.removeIcon} size={20} />
          </div>
        );
      })}
    </div>
  );
}
