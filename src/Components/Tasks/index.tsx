import { ClipboardText, Trash } from "phosphor-react";
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

  const totalTasksCreated = tasks.length;
  const totalTasksDone = tasks.reduce(
    (acc, cur) => acc + Number(cur.isCompleted),
    0,
  );

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskInfoContainer}>
        <p className={styles.infoTextCreated}>
          Tarefas criadas{" "}
          <span className={styles.taskInfoCounter}>{totalTasksCreated}</span>
        </p>
        <p className={styles.infoTextDone}>
          Concluídas{" "}
          <span className={styles.taskInfoCounter}>
            <>
              {totalTasksCreated === 0
                ? totalTasksCreated
                : `${totalTasksDone} de ${totalTasksCreated}`}
            </>
          </span>
        </p>
      </div>
      {tasks.length === 0 ? (
        <div className={styles.taskListEmpty}>
          <ClipboardText size={56} />
          <div>
            <p className={styles.boldText}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <div className={styles.taskListContainer}>
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
                    task.isCompleted
                      ? styles.titleTaskCompleted
                      : styles.titleTask
                  }>
                  {task.title}
                </p>
                <Trash
                  role="button"
                  className={styles.removeIcon}
                  size={24}
                  onClick={() => handleRemoveTask(task.id)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
