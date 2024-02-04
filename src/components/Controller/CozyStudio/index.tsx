import Button from "@/components/Button";
import { weather_scene } from "@/files/const";
import { changeWeather } from "@/slice/case.slice";
import {
  changeVolumeKeyboard,
  changeVolumeRain,
  changeVolumeTraffic,
  closeButtonKeyboard,
  closeButtonRain,
  closeButtonTraffic,
  openButtonKeyboard,
  openButtonRain,
  openButtonTraffic,
} from "@/slice/sound.slice";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export default function ControllerCozyStudio() {
  const { rain, stateRain, keyboard, stateKeyboard, traffic, stateTraffic } =
    useSelector((state: RootState) => state.sound);

  const weather = useSelector((state: RootState) => state.case.weather);
  const dispatch = useDispatch();

  //keyboard
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

  //rain
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

  //rain
  const changeVolumeRainButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeRain(v));
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

  return (
    <div className="w-full h-full">
      <div className="absolute top-[70%] right-[25%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute lg:top-[30%] lg:right-[22%] top-[40%] right-[15%]">
        <Button
          title="Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
      <div className="absolute lg:top-[50%] lg:left-[25%] top-[50%] left-[20%]">
        <Button
          title="Traffic"
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
