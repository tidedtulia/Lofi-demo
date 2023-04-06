import * as React from "react";
import style from "@/styles/controller.module.css";
import Header from "../Header";
import ControllerOutSide from "../ControllerOutSide";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ControllerInSide from "../ControllerInSide";
import LateralMenu from "../LateralMenu";
import Sound from "../Sound";

export interface IControllerProps {}

export default function Controller(props: IControllerProps) {
  const location = useSelector((state: RootState) => state.case.location);
  return (
    <div className={style.container}>
      <Header />
      <div className="flex flex-row justify-between items-center">
        {location == "outside" ? <ControllerOutSide /> : <ControllerInSide />}
        <LateralMenu />
      </div>

      <Sound />
    </div>
  );
}
