import * as React from "react";
import Button from "@/components/Button";

import { weather_scene, location_scene } from "@/files/const";
import { changeLocation, changeWeather } from "@/slice/case.slice";
import {
  changeVolumeRain,
  changeVolumeKeyboard,
  changeVolumeBird,
  openButtonRain,
  closeButtonRain,
  openButtonKeyboard,
  closeButtonKeyboard,
  openButtonBird,
  closeButtonBird,
} from "@/slice/sound.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
export interface IControllerLakeHouseOutSideProps {}

export default function ControllerLakeHouseOutSide(
  props: IControllerLakeHouseOutSideProps
) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const { rain, keyboard, bird } = useSelector(
    (state: RootState) => state.sound
  );

  const { stateRain, stateKeyboard, stateBird } = useSelector(
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

  const handleChangeKeyboard = () => {
    if (stateKeyboard == true) {
      dispatch(closeButtonKeyboard());
    } else {
      dispatch(openButtonKeyboard());
    }
  };
  const changeVolumeKeyboardButton = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeKeyboard(v));
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

  return (
    <div className="w-full h-full">
      <div className="absolute top-[40%] left-[50%]">
        <Button
          title="Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
      <div className="absolute lg:top-[40%] lg:left-[15%] top-[35%] left-[10%]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
      <div className="absolute lg:left-[15%] top-[75%] left-[10%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute lg:top-[50%] lg:right-[15%] top-[75%] right-[10%]">
        <Button
          title="Bird Chirping"
          type="audio"
          state={stateBird}
          volume={bird}
          action={handleChangeBird}
          changeVolumeSound={changeVolumeBirdButton}
        />
      </div>
    </div>
  );
}
