import * as React from "react";
import style from "@/styles/todolist.module.css";

import TodoItem from "./TodoItem";
import { Todo } from "@/types/todo";
import { Position } from "@/types/position";
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

  //change postition

  React.useEffect(() => {
    const checkSize = (): boolean => {
      let size: number = 0;
      if (typeof window !== "undefined") size = window.innerWidth;

      return size >= 1024 ? true : false;
    };
    setPosition({
      x: checkSize() ? 1050 : 550,
      y: checkSize() ? 150 : 100,
    });
  }, []);
  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
  });
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [offset, setOffset] = React.useState<Position>({ x: 0, y: 0 });

  const handleMouseDown = (e: any) => {
    e.stopPropagation();
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  const handleMouseUp = () => {
    setDragging(false);
  };
  const handleMouseMove = (e: any) => {
    e.stopPropagation();
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };
  const handleTouchStart = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setDragging(true);
    const touch = e.touches[0];
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };
  const handleTouchEnd = () => {
    setDragging(false);
  };
  const handleTouchMove = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (dragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - offset.x,
        y: touch.clientY - offset.y,
      });
    }
  };

  return (
    <div
      className={`${style.todosList} ${!state && style.hiden}`}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        cursor: dragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <p className={style.todoList_title}>Todo List</p>
      <div
        className={style.todoList_list}
        onTouchStart={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
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
