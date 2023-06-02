import * as React from "react";
import style from "@/styles/pomodorotimer.module.css";
import ReactSlider from "react-slider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeBreakMinutes, changeWorkMinutes } from "@/slice/pomodoro.slice";
import BackButton from "../Button/BackButton";
export interface ISettingProps {}

export default function Setting(props: ISettingProps) {
  const { workMinutes, breakMinutes } = useSelector(
    (state: RootState) => state.pomodoro
  );
  const dispatch = useDispatch();
  const handleChangeWorkMinutes = (value: number) => {
    dispatch(changeWorkMinutes(value));
  };
  const handleChangeBreakMinutes = (value: number) => {
    dispatch(changeBreakMinutes(value));
  };
  return (
    <div className={style.setting_container}>
      <label className={style.label}>work minutes: {workMinutes}:00</label>
      <ReactSlider
        className={style.slider}
        thumbClassName={style.thumb}
        trackClassName={style.track}
        value={workMinutes}
        onChange={handleChangeWorkMinutes}
        min={1}
        max={120}
      />
      <label className={style.label}>break minutes: {breakMinutes}:00</label>
      <ReactSlider
        className={`${style.slider} ${style.green}`}
        thumbClassName={style.thumb}
        trackClassName={style.track}
        value={breakMinutes}
        onChange={handleChangeBreakMinutes}
        min={1}
        max={120}
      />
      <BackButton />
    </div>
  );
}
