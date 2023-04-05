import * as React from "react";
import style from "@/styles/button.module.css";
export interface IButtonProps {
  title: string;
  type: string;
  action: () => void;
}

export default function Button(props: IButtonProps) {
  const { title, type, action } = props;

  return (
    <div className={`${style.popover_action} `} onClick={action}>
      <div className={style.circle_hover}>
        <div className={style.circle}></div>
      </div>
      <div className={style.popover_card}>
        <p>{title}</p>
        {type == "audio" && (
          <div className={style.level_input}>
            <input type="range" name="" id="" />
          </div>
        )}
      </div>
    </div>
  );
}
