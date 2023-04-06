import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "@/styles/video.module.css";
export interface IVideoProps {}
import {
  outside_day_stoprain,
  outside_day_rain,
  outside_night_stoprain,
  outside_night_rain,
  inside_day_stoprain,
  inside_day_rain,
  inside_night_stoprain,
  inside_night_rain,
} from "@/files/file";

export default function Video(props: IVideoProps) {
  const { location, day, weather } = useSelector(
    (state: RootState) => state.case
  );
  const activeVideo = location + "-" + day + "-" + weather;
  // let src = "";
  // if (location == "outside") {
  //   if (day == "day") {
  //     if (weather == "stop-rain") {
  //       src = outside_day_stoprain;
  //     } else {
  //       src = outside_day_rain;
  //     }
  //   } else {
  //     if (weather == "stop-rain") {
  //       src = outside_night_stoprain;
  //     } else {
  //       src = outside_night_rain;
  //     }
  //   }
  // } else {
  //   if (day == "day") {
  //     if (weather == "stop-rain") {
  //       src = inside_day_stoprain;
  //     } else {
  //       src = inside_day_rain;
  //     }
  //   } else {
  //     if (weather == "stop-rain") {
  //       src = inside_night_stoprain;
  //     } else {
  //       src = inside_night_rain;
  //     }
  //   }
  // }

  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${
          activeVideo === "outside-day-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={outside_day_stoprain}
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
          src={outside_day_rain}
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
          src={outside_night_stoprain}
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
          src={outside_night_rain}
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
          src={inside_day_stoprain}
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
          src={inside_day_rain}
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
          src={inside_night_stoprain}
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
          src={inside_night_rain}
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
