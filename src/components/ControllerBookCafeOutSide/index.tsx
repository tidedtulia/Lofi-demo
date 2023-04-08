import * as React from "react";
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
export interface IControllerBookCafeOutSideProps {}

export default function ControllerBookCafeOutSide(
  props: IControllerBookCafeOutSideProps
) {
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
    <div className="w-full h-full">
      <div className="absolute top-[40%] left-[20%]">
        <Button
          title="City Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
      <div className="absolute lg:top-[40%] lg:left-[55%] top-[35%] left-[50%]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
      <div className="absolute top-[65%] right-[15%]">
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
