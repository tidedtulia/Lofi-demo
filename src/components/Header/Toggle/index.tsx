import * as React from "react";
import style from "@/styles/toggle.module.css";
import { day_scene } from "@/files/const";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeDay } from "@/slice/case.slice";
export interface IToggleProps {}

export default function Toggle(props: IToggleProps) {
  const day = useSelector((state: RootState) => state.case.day);
  const dispatch = useDispatch();

  const handleChangeDay = () => {
    if (day == day_scene.day) {
      dispatch(changeDay(day_scene.night));
    } else {
      dispatch(changeDay(day_scene.day));
    }
  };
  return (
    <div
      className={`${style.container} ${
        day == day_scene.day ? style.container_day : style.container_night
      }`}
    >
      <span
        className={`${style.button} ${
          day == day_scene.day ? style.button_day : style.button_night
        }`}
        onClick={handleChangeDay}
      ></span>
    </div>
  );
}
