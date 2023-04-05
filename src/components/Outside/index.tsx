import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Case } from "@/types/case";
import style from "@/styles/outside.module.css";

import {
  outside_day_stoprain,
  outside_day_rain,
  outside_night_stoprain,
  outside_night_rain,
} from "@/files/file";
import Video from "../Video";
import Button from "../Button";

export interface IOutsideProps {}

export default function Outside(props: IOutsideProps) {
  const caseSlice: Case = useSelector((state: RootState) => state.case);
  return (
    <div className={style.container}>
      <div className={style.video}>
        {caseSlice.day == "day" ? (
          caseSlice.weather == "stop-rain" ? (
            <Video src={outside_day_stoprain} />
          ) : (
            <Video src={outside_day_rain} />
          )
        ) : caseSlice.weather == "stop-rain" ? (
          <Video src={outside_night_stoprain} />
        ) : (
          <Video src={outside_night_rain} />
        )}
      </div>
    </div>
  );
}
