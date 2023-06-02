import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "@/styles/video.module.css";

import { video } from "@/files/file";

export interface IPlaneProps {}

export default function Plane(props: IPlaneProps) {
  const { day } = useSelector((state: RootState) => state.case);
  const activeVideo = day;

  return (
    <div className="w-full h-[100vh]">
      <div className={`${activeVideo === "day" ? style.bg_in : style.bg_out}`}>
        <video
          src={video.plane.day}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      <div
        className={`${activeVideo === "night" ? style.bg_in : style.bg_out}`}
      >
        <video
          src={video.plane.night}
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
