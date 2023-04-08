import * as React from "react";
import style from "@/styles/controller.module.css";
import Header from "../Header";
import ControllerOutSide from "../ControllerOutSide";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ControllerInSide from "../ControllerInSide";
import LateralMenu from "../LateralMenu";
import Sound from "../Sound";
import ControllerBookCafeOutSide from "../ControllerBookCafeOutSide";
import ControllerBookCafeInside from "../ControllerBookCafeInSide";
import ControllerBedRoom from "../ControllerBedRoom";

export interface IControllerProps {}

export default function Controller(props: IControllerProps) {
  const { type, location } = useSelector((state: RootState) => state.case);
  return (
    <div className={style.container}>
      <Header />
      <div className="flex flex-row justify-between items-center">
        {type == "loficafe" &&
          (location == "outside" ? (
            <ControllerOutSide />
          ) : (
            <ControllerInSide />
          ))}

        {type == "bookcafe" &&
          (location == "outside" ? (
            <ControllerBookCafeOutSide />
          ) : (
            <ControllerBookCafeInside />
          ))}
        {type == "bedroom" && <ControllerBedRoom />}
        <LateralMenu />
      </div>

      <Sound />
    </div>
  );
}
