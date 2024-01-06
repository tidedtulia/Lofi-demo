import { RootState } from "@/store";
import * as React from "react";
import { useSelector } from "react-redux";
import style from "@/styles/video.module.css";
import { video } from "@/files/file";
import { result_scene } from "@/files/const";
export interface ISeoulProps {}

export default function Seoul(props: ISeoulProps) {
  const { location, day, weather } = useSelector(
    (state: RootState) => state.case
  );
  const activeVideo = location + "-" + day + "-" + weather;

  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${
          activeVideo === result_scene.outside_day_stop_rain
            ? style.bg_in
            : style.bg_out
        }`}
      >
        <video
          src={video.seoul.outside_day_stop_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === result_scene.outside_day_rain
            ? style.bg_in
            : style.bg_out
        }`}
      >
        <video
          src={video.seoul.outside_day_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === result_scene.outside_night_stop_rain
            ? style.bg_in
            : style.bg_out
        }`}
      >
        <video
          src={video.seoul.outside_night_stop_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === result_scene.outside_night_rain
            ? style.bg_in
            : style.bg_out
        }`}
      >
        <video
          src={video.seoul.outside_night_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === result_scene.inside_day_stop_rain
            ? style.bg_in
            : style.bg_out
        }`}
      >
        <video
          src={video.seoul.inside_day_stop_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === result_scene.inside_day_rain
            ? style.bg_in
            : style.bg_out
        }`}
      >
        <video
          src={video.seoul.inside_day_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === result_scene.inside_night_stop_rain
            ? style.bg_in
            : style.bg_out
        }`}
      >
        <video
          src={video.seoul.inside_night_stop_rain}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          activeVideo === result_scene.inside_night_rain
            ? style.bg_in
            : style.bg_out
        }`}
      >
        <video
          src={video.seoul.inside_night_rain}
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
