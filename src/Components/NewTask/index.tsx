import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./NewTask.module.css";

interface NewTaskProps {
  onCreateNewTask: (title: string) => void;
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCrateNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateNewTask(newTaskText);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <form className={styles.addTaskContainer} onSubmit={handleCrateNewTask}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
      />
      <button type="submit" className={styles.button} disabled={isNewTaskEmpty}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
