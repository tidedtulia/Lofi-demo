import * as React from "react";
import style from "@/styles/toggle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeDay } from "@/slice/case.slice";
export interface IToggleProps {}

export default function Toggle(props: IToggleProps) {
  const day = useSelector((state: RootState) => state.case.day);
  const dispatch = useDispatch();

  const handleChangeDay = () => {
    if (day == "day") {
      dispatch(changeDay("night"));
    } else {
      dispatch(changeDay("day"));
    }
  };
  return (
    <div
      className={`${style.container} ${
        day == "day" ? "bg-yellow-400" : "bg-gray-400"
      }`}
    >
      <span
        className={`${style.button} ${day == "day" ? "mr-8" : "ml-8"}`}
        onClick={handleChangeDay}
      ></span>
    </div>
  );
}
