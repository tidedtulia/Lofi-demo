import * as React from "react";
import Button from "@/components/Button";

import { weather_scene, location_scene } from "@/files/const";
import { changeLocation, changeWeather } from "@/slice/case.slice";
import {
  changeVolumeRain,
  changeVolumeBird,
  changeVolumeForestNight,
  openButtonRain,
  closeButtonRain,
  openButtonBird,
  closeButtonBird,
  openButtonForestNight,
  closeButtonForestNight,
} from "@/slice/sound.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
export interface IControllerIntheWoodsOutSideProps {}

export default function ControllerIntheWoodsOutSide(
  props: IControllerIntheWoodsOutSideProps
) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const { rain, bird, forest_night } = useSelector(
    (state: RootState) => state.sound
  );

  const { stateRain, stateBird, stateForest_Night } = useSelector(
    (state: RootState) => state.sound
  );

  const dispatch = useDispatch();

  const handleInside = () => {
    dispatch(changeLocation(location_scene.inside));
  };
  const handleChangeWeather = () => {
    if (weather == weather_scene.stop_rain) {
      dispatch(changeWeather(weather_scene.rain));
      dispatch(openButtonRain());
    } else {
      dispatch(changeWeather(weather_scene.stop_rain));
      dispatch(closeButtonRain());
    }
  };
  const changeVolumeRainButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeRain(v));

    if (v > 0) dispatch(changeWeather(weather_scene.rain));
    else dispatch(changeWeather(weather_scene.stop_rain));
  };

  const handleChangeBird = () => {
    if (stateBird == true) {
      dispatch(closeButtonBird());
    } else {
      dispatch(openButtonBird());
    }
  };
  const changeVolumeBirdButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeBird(v));
  };

  const handleChangeForestNight = () => {
    if (stateForest_Night == true) {
      dispatch(closeButtonForestNight());
    } else {
      dispatch(openButtonForestNight());
    }
  };
  const changeVolumeForestNightButton = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeForestNight(v));
  };

  return (
    <div className="w-full h-full">
      <div className="absolute lg:top-[60%] lg:left-[55%] top-[35%] left-[10%]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
      <div className="absolute lg:top-[30%] lg:left-[40%] top-[30%] left-[50%]">
        <Button
          title="Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>

      <div className="absolute lg:top-[50%] lg:right-[15%] top-[50%] right-[20%]">
        <Button
          title="Bird chirping"
          type="audio"
          state={stateBird}
          volume={bird}
          action={handleChangeBird}
          changeVolumeSound={changeVolumeBirdButton}
        />
      </div>
      <div className="absolute lg:top-[50%] lg:left-[15%] top-[50%] left-[20%]">
        <Button
          title="Forest night"
          type="audio"
          state={stateForest_Night}
          volume={forest_night}
          action={handleChangeForestNight}
          changeVolumeSound={changeVolumeForestNightButton}
        />
      </div>
    </div>
  );
}
