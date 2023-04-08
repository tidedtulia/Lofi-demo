import * as React from "react";
import Button from "../Button";
import {
  changeVolumeRain,
  openButtonRain,
  closeButtonRain,
  changeVolumeKeyboard,
  openButtonKeyboard,
  closeButtonKeyboard,
  changeVolumePeople,
  openButtonPeople,
  closeButtonPeople,
} from "@/slice/sound.slice";

import { changeLocation, changeWeather } from "@/slice/case.slice";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
export interface IControllerBookCafeInsideProps {}

export default function ControllerBookCafeInside(
  props: IControllerBookCafeInsideProps
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
    if (weather == "stop-rain") {
      dispatch(changeWeather("rain"));
      dispatch(openButtonRain());
    } else {
      dispatch(changeWeather("stop-rain"));
      dispatch(closeButtonRain());
    }
  };
  //chuyen am lwong
  const changeVolumeRainButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeRain(v));
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

  //-----people
  const handleChangePeople = () => {
    if (statePeople == true) {
      dispatch(closeButtonPeople());
    } else {
      dispatch(openButtonPeople());
    }
  };
  const changeVolumePeopleButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumePeople(v));
  };

  return (
    <div className="w-full h-full">
      <div className="absolute  lg:top-[40%] lg:left-[50%] top-[40%] left-[50%]">
        <Button title="Outside" type="position" action={hadleOutside} />
      </div>
      <div className="absolute lg:top-[70%] lg:right-[10%] top-[65%] right-[15%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      {/* <div className="absolute top-[70%] left-[60%]">
        <Button
          title="People Talks"
          type="audio"
          state={statePeople}
          volume={people}
          action={handleChangePeople}
          changeVolumeSound={changeVolumePeopleButton}
        />
      </div> */}
      <div className="absolute lg:top-[20%] lg:left-[15%] top-[20%] left-[10%]">
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
