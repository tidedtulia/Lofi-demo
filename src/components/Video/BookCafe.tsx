import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "@/styles/video.module.css";

import { video } from "@/files/file";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const { location, day, weather } = useSelector(
    (state: RootState) => state.case
  );

  const activeVideo = location + "-" + day + "-" + weather;

  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${
          activeVideo === "outside-day-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.bookcafe.outside_day_stoprain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "outside-day-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.bookcafe.outside_day_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "outside-night-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.bookcafe.outside_night_stoprain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "outside-night-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.bookcafe.outside_night_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "inside-day-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.bookcafe.inside_day_stoprain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "inside-day-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.bookcafe.inside_day_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "inside-night-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.bookcafe.inside_night_stoprain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "inside-night-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.bookcafe.inside_night_rain}
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
