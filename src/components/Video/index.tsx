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
  let src = "";
  if (location == "outside") {
    if (day == "day") {
      if (weather == "stop-rain") {
        src = outside_day_stoprain;
      } else {
        src = outside_day_rain;
      }
    } else {
      if (weather == "stop-rain") {
        src = outside_night_stoprain;
      } else {
        src = outside_night_rain;
      }
    }
  } else {
    if (day == "day") {
      if (weather == "stop-rain") {
        src = inside_day_stoprain;
      } else {
        src = inside_day_rain;
      }
    } else {
      if (weather == "stop-rain") {
        src = inside_night_stoprain;
      } else {
        src = inside_night_rain;
      }
    }
  }
  return (
    <video src={src} className={style.video} autoPlay loop playsInline></video>
  );
}
