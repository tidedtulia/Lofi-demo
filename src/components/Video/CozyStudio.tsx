import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "@/styles/video.module.css";

import { video } from "@/files/file";

export interface ICozyStudioProps {}

export default function CozyStudio(props: ICozyStudioProps) {
  const { day, weather } = useSelector((state: RootState) => state.case);
  const activeVideo = day + "-" + weather;
  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${
          activeVideo === "day-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.cozy_studio.day_stop_rain}
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
          src={video.cozy_studio.day_rain}
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
          src={video.cozy_studio.night_stop_rain}
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
          src={video.cozy_studio.night_rain}
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
