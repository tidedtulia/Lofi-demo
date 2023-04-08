import * as React from "react";
import style from "@/styles/controller.module.css";
import Header from "../Header";
import ControllerOutSide from "../ControllerOutSide";
import { useDispatch, useSelector } from "react-redux";
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
