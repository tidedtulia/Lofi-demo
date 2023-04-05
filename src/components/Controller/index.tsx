import * as React from "react";
import style from "@/styles/controller.module.css";
import Header from "../Header";
import ControllerOutSide from "../ControllerOutSide";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ControllerInSide from "../ControllerInSide";
export interface IControllerProps {}

export default function Controller(props: IControllerProps) {
  const location = useSelector((state: RootState) => state.case.location);
  return (
    <div className={style.container}>
      <Header />
      {location == "outside" ? <ControllerOutSide /> : <ControllerInSide />}
      {/* {location == "inside" && <ControllerInSide />} */}
    </div>
  );
}
