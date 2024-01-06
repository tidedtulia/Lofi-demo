import Button from "@/components/Button";
import { changeLocation } from "@/slice/case.slice";
import {
  changeVolumeKeyboard,
  closeButtonKeyboard,
  openButtonKeyboard,
} from "@/slice/sound.slice";
import { RootState } from "@/store";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

export interface IUnderWaterProps {}

export default function UnderWater(props: IUnderWaterProps) {
  const dispatch = useDispatch();
  const { keyboard } = useSelector((state: RootState) => state.sound);
  //tat/bat thanh am thanh
  const { stateKeyboard } = useSelector((state: RootState) => state.sound);

  //chuyen canh sang under water
  const hadleChangeSpace = () => {
    dispatch(changeLocation("outside"));
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
      <div className="absolute  lg:top-[40%] lg:left-[40%] top-[40%] left-[40%]">
        <Button title="Space" type="position" action={hadleChangeSpace} />
      </div>
      <div className="absolute lg:top-[50%] lg:right-[25%] top-[50%] right-[20%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
    </div>
  );
}
