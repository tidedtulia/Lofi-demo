import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "@/styles/video.module.css";

import { video } from "@/files/file";

export interface IInTheWoodsProps {}

export default function InTheWoods(props: IInTheWoodsProps) {
  const { location, day, weather } = useSelector(
    (state: RootState) => state.case
  );
  const activeVideo = location + "-" + weather;

  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${
          activeVideo === "outside-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.inthewoods.outside_stoprain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      <div
        className={`${
          activeVideo === "outside-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.inthewoods.outside_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "inside-stop-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.inthewoods.inside_stoprain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === "inside-rain" ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.inthewoods.inside_rain}
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
