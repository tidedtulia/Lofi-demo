import * as React from "react";
import style from "@/styles/button.module.css";
export interface IButtonProps {
  title: string;
  type: string;
  state?: boolean;
  action: () => void;
  volume?: number;
  changeVolumeSound?: (param: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Button(props: IButtonProps) {
  const { title, type, state, action, volume, changeVolumeSound } = props;

  return (
    <div className={`${style.popover_action} `}>
      <div className={style.circle_hover}>
        <div className={style.circle} onClick={action}></div>
      </div>
      <div className={style.popover_card}>
        <p>{title}</p>
        {type == "audio" && state && (
          <div className={style.level_input}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={changeVolumeSound}
            />
          </div>
        )}
      </div>
    </div>
  );
}
