import * as React from "react";
import style from "@/styles/controlleroutside.module.css";
import Button from "../Button";

import { changeLocation, changeWeather } from "@/slice/case.slice";
import {
  changeVolumeRain,
  changeVolumeTraffic,
  openButtonRain,
  closeButtonRain,
  openButtonTraffic,
  closeButtonTraffic,
} from "@/slice/sound.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

export interface IControllerOutSideProps {}

export default function ControllerOutSide(props: IControllerOutSideProps) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const { rain, traffic } = useSelector((state: RootState) => state.sound);

  const { stateRain } = useSelector((state: RootState) => state.sound);

  const { stateTraffic } = useSelector((state: RootState) => state.sound);
  const dispatch = useDispatch();
  const handleInside = () => {
    dispatch(changeLocation("inside"));
  };
  const handleChangeWeather = () => {
    if (weather == "stop-rain") {
      dispatch(changeWeather("rain"));
      dispatch(openButtonRain());
    } else {
      dispatch(changeWeather("stop-rain"));
      dispatch(closeButtonRain());
    }
  };
  const changeVolumeRainButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeRain(v));
  };

  const handleChangeTraffic = () => {
    if (stateTraffic == true) {
      dispatch(closeButtonTraffic());
    } else {
      dispatch(openButtonTraffic());
    }
  };
  const changeVolumeTrafficButton = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeTraffic(v));
  };

  return (
    <div className={style.container}>
      <div className="absolute lg:top-[40%] lg:left-[20%] top-[40%] left-[10%]">
        <Button
          title="City Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
      <div className="absolute lg:top-[50%] lg:left-[40%] top-[50%] left-[38%]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
      <div className="absolute lg:top-[40%] lg:left-[65%] top-[40%] left-[70%]">
        <Button
          title="City Traffic"
          type="audio"
          state={stateTraffic}
          volume={traffic}
          action={handleChangeTraffic}
          changeVolumeSound={changeVolumeTrafficButton}
        />
      </div>
    </div>
  );
}
