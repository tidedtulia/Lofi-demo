import * as React from "react";
import style from "@/styles/pomodorotimer.module.css";
import { useDispatch } from "react-redux";
import { changeSetting } from "@/slice/pomodoro.slice";
export interface IBackButtonProps {}

export default function BackButton(props: IBackButtonProps) {
  const dispatch = useDispatch();
  return (
    <button
      {...props}
      className={`${style.button} ${style.with_text} ${"mt-5"}`}
      onClick={() => dispatch(changeSetting(false))}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={style.icon}
      >
        <path
          fillRule="evenodd"
          d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z"
          clipRule="evenodd"
        />
      </svg>
      <p className={style.button_title}>Back</p>
    </button>
  );
}
