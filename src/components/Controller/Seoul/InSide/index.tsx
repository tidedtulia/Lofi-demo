import Button from "@/components/Button";
import { weather_scene } from "@/files/const";
import { changeLocation, changeWeather } from "@/slice/case.slice";
import {
  changeVolumeKeyboard,
  changeVolumeRain,
  closeButtonKeyboard,
  closeButtonRain,
  openButtonKeyboard,
  openButtonRain,
} from "@/slice/sound.slice";
import { RootState } from "@/store";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IInSideProps {}

export default function InSide(props: IInSideProps) {
  const dispatch = useDispatch();

  const weather = useSelector((state: RootState) => state.case.weather);
  const { rain, keyboard } = useSelector((state: RootState) => state.sound);
  //tat/bat thanh am thanh
  const { stateRain, stateKeyboard } = useSelector(
    (state: RootState) => state.sound
  );

  //ra ngoai
  const hadleOutside = () => {
    dispatch(changeLocation("outside"));
  };

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
      <div className="absolute  lg:top-[40%] lg:left-[10%] top-[40%] left-[10%]">
        <Button title="Outside" type="position" action={hadleOutside} />
      </div>
      <div className="absolute lg:top-[80%] lg:left-[10%] top-[70%] left-[30%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute lg:top-[20%] lg:left-[50%] top-[20%] left-[50%]">
        <Button
          title="City Rain"
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
