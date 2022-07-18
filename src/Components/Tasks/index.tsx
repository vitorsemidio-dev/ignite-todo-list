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
  onRemoveTask: (taskId: string) => void;
}

export function Tasks({ tasks, onCompleteTask, onRemoveTask }: TasksProps) {
  function handleCheckChange(taskId: string) {
    onCompleteTask(taskId);
  }

  function handleRemoveTask(taskId: string) {
    onRemoveTask(taskId);
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
            <Trash
              role="button"
              className={styles.removeIcon}
              size={20}
              onClick={() => handleRemoveTask(task.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
