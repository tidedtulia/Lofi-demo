import * as React from "react";
import style from "@/styles/todolist.module.css";

import TodoItem from "./TodoItem";
import { Todo } from "@/types/todo";
export interface ITodosListProps {
  state: boolean;
}

export default function TodosList({ state }: ITodosListProps) {
  const [todo, setTodo] = React.useState<string>("");
  const [todosList, setTodosList] = React.useState<Array<Todo>>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = { id: todosList.length + 1, text: todo };
    setTodosList((prev) => [...prev, newTodo]);
    setTodo("");
  };
  const deleteTodo = (id: number) => {
    setTodosList(todosList.filter((item) => item.id != id));
  };
  return (
    <div className={`${style.todosList} ${!state && style.hiden}`}>
      <p className={style.todoList_title}>Todo List</p>
      <div className={style.todoList_list}>
        {todosList.map((todo) => (
          <TodoItem key={todo.id} item={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className={style.todosList_form}>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Enter new todo..."
        />
      </form>
    </div>
  );
}
