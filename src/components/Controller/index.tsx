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
import ControllerLakeHouseOutSide from "./ControllerLakeHouse/OutSide/index";
import ControllerLakeHouseInSide from "./ControllerLakeHouse/InSide";
import ControllerIntheWoodsOutSide from "./ControllerInTheWoods/OutSide";
import ControllerIntheWoodsInSide from "./ControllerInTheWoods/InSide";

import { type_scene, location_scene } from "@/files/const";
import { SeoulInSide, SeoulOutSide } from "./Seoul";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseMoving]);

  const renderController = (): JSX.Element => {
    switch (type) {
      case type_scene.loficafe: {
        return location == location_scene.outside ? (
          <ControllLofiCafeOutSide />
        ) : (
          <ControllLofiCafeInSide />
        );
      }

      case type_scene.bookcafe: {
        return location == location_scene.outside ? (
          <ControllerBookCafeOutSide />
        ) : (
          <ControllerBookCafeInSide />
        );
      }

      case type_scene.bedroom: {
        return <ControllerBedRoom />;
      }

      case type_scene.plane: {
        return <ControllerPlane />;
      }

      case type_scene.lakehouse: {
        return location == location_scene.outside ? (
          <ControllerLakeHouseOutSide />
        ) : (
          <ControllerLakeHouseInSide />
        );
      }
      case type_scene.inthewoods: {
        return location == location_scene.outside ? (
          <ControllerIntheWoodsOutSide />
        ) : (
          <ControllerIntheWoodsInSide />
        );
      }
      case type_scene.seoul: {
        return location == location_scene.outside ? (
          <SeoulOutSide />
        ) : (
          <SeoulInSide />
        );
      }

      default:
        return <ControllLofiCafeOutSide />;
    }
  };

  return (
    <div
      className={`${style.container} ${
        isHide && !isMouseMoving && style.container_off
      }`}
      onMouseMove={handleMouseMove}
    >
      <Header />
      <div className={style.main}>
        {/* {type == type_scene.loficafe &&
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
        {type == type_scene.lakehouse &&
          (location == location_scene.outside ? (
            <ControllerLakeHouseOutSide />
          ) : (
            <ControllerLakeHouseInSide />
          ))}
        {type == type_scene.inthewoods &&
          (location == location_scene.outside ? (
            <ControllerIntheWoodsOutSide />
          ) : (
            <ControllerIntheWoodsInSide />
          ))} */}

        {renderController()}

        <LateralMenu />
      </div>

      <Sound />
    </div>
  );
}
