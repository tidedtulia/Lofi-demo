import { location_scene } from "@/files/const";
import { RootState } from "@/store";
import * as React from "react";
import { useSelector } from "react-redux";
import style from "@/styles/video.module.css";
import { video } from "@/files/file";

export interface IAmIDreamingProps {}

export default function AmIDreaming(props: IAmIDreamingProps) {
  const { location } = useSelector((state: RootState) => state.case);
  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${
          location == location_scene.outside ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.am_i_dreaming.space}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div
        className={`${
          location == location_scene.inside ? style.bg_in : style.bg_out
        }`}
      >
        <video
          src={video.am_i_dreaming.under_water}
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
