import * as React from "react";
import style from "@/styles/todolist.module.css";
import { Todo } from "@/types/todo";
export interface ITodoItemProps {
  item: Todo;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({ item, deleteTodo }: ITodoItemProps) {
  const [isCheck, setIsCheck] = React.useState<boolean>(false);
  return (
    <div className={style.todoItem}>
      <input
        type="checkbox"
        className="lg:w-5 lg:h-5 w-4 h-4"
        checked={isCheck}
        onChange={() => setIsCheck(!isCheck)}
      />
      <p
        className={`${style.todoItem_text} ${
          isCheck && style.todoItem_text_check
        }`}
      >
        {item.text}
      </p>
      <button
        className={style.todoItem_delete}
        onClick={() => deleteTodo(item.id)}
      >
        X
      </button>
    </div>
  );
}
