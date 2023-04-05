import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Case } from "@/types/case";
import style from "@/styles/inside.module.css";
import {
  inside_day_stoprain,
  inside_day_rain,
  inside_night_stoprain,
  inside_night_rain,
} from "@/files/file";
import Video from "../Video";

export interface IInsideProps {}

export default function Inside(props: IInsideProps) {
  const caseSlice: Case = useSelector((state: RootState) => state.case);
  return (
    <div className={style.container}>
      <div className={style.video}>
        {caseSlice.day == "day" ? (
          caseSlice.weather == "stop-rain" ? (
            <Video src={inside_day_stoprain} />
          ) : (
            <Video src={inside_day_rain} />
          )
        ) : caseSlice.weather == "stop-rain" ? (
          <Video src={inside_night_stoprain} />
        ) : (
          <Video src={inside_night_rain} />
        )}
      </div>
    </div>
  );
}
