import * as React from "react";
import style from "@/styles/generalsetting.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeHide, changeTime } from "@/slice/hide.slice";
export interface IGeneralSettingProps {
  state: boolean;
}

export default function GeneralSetting(props: IGeneralSettingProps) {
  //const [isHide, setIsHide] = React.useState<boolean>(true);
  const { time, isHide } = useSelector((state: RootState) => state.hide);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeHide(!isHide));
  };
  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTime(parseInt(e.target.value)));
  };
  return (
    <div className={`${style.container} ${!props.state && style.hiden}`}>
      <p className={style.title}>General setting</p>
      <div className={style.hide_element}>
        <p>Hide elements</p>
        <div
          className={`${style.toogle} ${
            isHide ? style.toogle_true : style.toogle_false
          }`}
        >
          <span
            className={`${style.toogle_button} ${
              isHide ? style.toogle_button_true : style.toogle_button_false
            }`}
            onClick={handleChange}
          ></span>
        </div>
      </div>
      <p className={style.comment}>
        You can choose to show or hide the interface after a period of
        inactivity.
      </p>
      <div className={style.hire_after}>
        <label htmlFor="hire-after-input" className={style.hire_after_title}>
          Hide after
        </label>
        <div className={style.hire_after_number}>
          <input
            type="number"
            value={time}
            onChange={handleChangeTime}
            className={style.hire_after_input}
            id="hire-after-input"
          />
          <p>sec</p>
        </div>
      </div>
    </div>
  );
}
