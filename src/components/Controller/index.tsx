import * as React from "react";
import style from "@/styles/controller.module.css";
import Header from "../Header";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LateralMenu from "../LateralMenu";
import Sound from "../Sound";

import {
  ControllLofiCafeInSide,
  ControllLofiCafeOutSide,
} from "./ControllerLofiCafe";
import {
  ControllerBookCafeInSide,
  ControllerBookCafeOutSide,
} from "./ControllerBookCafe";
import ControllerBedRoom from "./ControllerBedRoom";
import ControllerPlane from "./ControllerPlane";

import { type_scene, location_scene } from "@/files/const";

export interface IControllerProps {}

export default function Controller(props: IControllerProps) {
  const { type, location } = useSelector((state: RootState) => state.case);
  const { isHide, time } = useSelector((state: RootState) => state.hide);

  const [isMouseMoving, setIsMouseMoving] = React.useState(false);
  const handleMouseMove = () => {
    setIsMouseMoving(true);
  };

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMouseMoving) {
      timeoutId = setTimeout(() => {
        setIsMouseMoving(false);
      }, time * 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMouseMoving]);

  return (
    <div
      className={`${style.container} ${
        isHide && !isMouseMoving && style.container_off
      }`}
      onMouseMove={handleMouseMove}
    >
      <Header />
      <div className={style.main}>
        {type == type_scene.loficafe &&
          (location == location_scene.outside ? (
            <ControllLofiCafeOutSide />
          ) : (
            <ControllLofiCafeInSide />
          ))}

        {type == type_scene.bookcafe &&
          (location == location_scene.outside ? (
            <ControllerBookCafeOutSide />
          ) : (
            <ControllerBookCafeInSide />
          ))}
        {type == type_scene.bedroom && <ControllerBedRoom />}
        {type == type_scene.plane && <ControllerPlane />}

        <LateralMenu />
      </div>

      <Sound />
    </div>
  );
}
