import * as React from "react";
import Button from "@/components/Button";
import { weather_scene } from "@/files/const";
import {
  changeVolumeRain,
  openButtonRain,
  closeButtonRain,
  changeVolumeKeyboard,
  openButtonKeyboard,
  closeButtonKeyboard,
} from "@/slice/sound.slice";

import { changeLocation, changeWeather } from "@/slice/case.slice";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
export interface IControllerIntheWoodsInSideProps {}

export default function ControllerIntheWoodsInSide(
  props: IControllerIntheWoodsInSideProps
) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const dispatch = useDispatch();
  const hadleOutside = () => {
    dispatch(changeLocation("outside"));
  };

  const { rain, keyboard, people } = useSelector(
    (state: RootState) => state.sound
  );
  //tat/bat thanh am thanh
  const { stateRain, stateKeyboard, statePeople } = useSelector(
    (state: RootState) => state.sound
  );
  //-----mua
  //chuyen canh+am thanh
  const handleChangeWeather = () => {
    if (weather == weather_scene.stop_rain) {
      dispatch(changeWeather(weather_scene.rain));
      dispatch(openButtonRain());
    } else {
      dispatch(changeWeather(weather_scene.stop_rain));
      dispatch(closeButtonRain());
    }
  };
  //chuyen am lwong
  const changeVolumeRainButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeRain(v));

    if (v > 0) dispatch(changeWeather(weather_scene.rain));
    else dispatch(changeWeather(weather_scene.stop_rain));
  };

  //-------ban phim
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

  return (
    <div className="w-full h-full">
      <div className="absolute  lg:top-[40%] lg:right-[35%] top-[40%] right-[30%]">
        <Button title="Outside" type="position" action={hadleOutside} />
      </div>
      <div className="absolute lg:top-[60%] lg:left-[30%] top-[60%] left-[15%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>

      <div className="absolute lg:top-[30%] lg:left-[30%] top-[30%] left-[15%]">
        <Button
          title="Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
    </div>
  );
}
