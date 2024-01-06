import Button from "@/components/Button";
import { location_scene, weather_scene } from "@/files/const";
import { changeLocation, changeWeather } from "@/slice/case.slice";
import {
  changeVolumeRain,
  changeVolumeTraffic,
  closeButtonRain,
  closeButtonTraffic,
  openButtonRain,
  openButtonTraffic,
} from "@/slice/sound.slice";
import { RootState } from "@/store";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IOutsideProps {}

export default function Outside(props: IOutsideProps) {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.case.weather);
  const { rain, traffic } = useSelector((state: RootState) => state.sound);
  const { stateRain } = useSelector((state: RootState) => state.sound);
  const { stateTraffic } = useSelector((state: RootState) => state.sound);

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
      <div className="absolute lg:top-[55%] lg:left-[40%] top-[55%] left-[30%]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
      <div className="absolute lg:top-[65%] lg:right-[20%] top-[65%] right-[15%]">
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
