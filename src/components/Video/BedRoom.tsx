import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "@/styles/video.module.css";

import {
  bedroom_day_stoprain,
  bedroom_day_rain,
  bedroom_night_stoprain,
  bedroom_night_rain,
} from "@/files/file";

export interface IBedRoomProps {}

export default function BedRoom(props: IBedRoomProps) {
  const { day, weather } = useSelector((state: RootState) => state.case);
  console.log({ day, weather });

  const activeVideo = day + "-" + weather;

  console.log(activeVideo);
  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${
          activeVideo === "day-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={bedroom_day_stoprain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${activeVideo === "day-rain" ? style.bg_in : style.bg_out}`}
      >
        <video
          src={bedroom_day_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "night-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={bedroom_night_stoprain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "night-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={bedroom_night_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </div>
  );
}
