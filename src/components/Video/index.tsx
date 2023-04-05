import * as React from "react";

import style from "@/styles/video.module.css";
export interface IVideoProps {
  src: string;
}

export default function Video(props: IVideoProps) {
  return (
    <video
      src={props.src}
      className={style.video}
      autoPlay
      loop
      playsInline
    ></video>
  );
}
