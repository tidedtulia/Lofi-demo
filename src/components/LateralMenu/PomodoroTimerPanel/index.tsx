import * as React from "react";
import style from "@/styles/pomodorotimer.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Setting from "./Setting";
import Timer from "./Timer";
export interface IPomodoroTimerPanelProps {
  state: boolean;
}

export default function PomodoroTimerPanel(props: IPomodoroTimerPanelProps) {
  const { setting } = useSelector((state: RootState) => state.pomodoro);
  return (
    <div className={`${style.container} ${!props.state && style.hiden}`}>
      <div className={style.title}>Pomodoro timer</div>
      {setting ? <Setting /> : <Timer />}
    </div>
  );
}
