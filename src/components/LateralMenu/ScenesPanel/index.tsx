import * as React from "react";
import style from "@/styles/scenespanel.module.css";
import { changeType } from "@/slice/case.slice";
import { closeButtonRain } from "@/slice/sound.slice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import { scene } from "@/files/file";

export interface IScenesPanelProps {
  state: boolean;
}

export default function ScenesPanel(props: IScenesPanelProps) {
  const { type } = useSelector((state: RootState) => state.case);
  const dispatch = useDispatch();
  const handleChangeType = (t: string) => {
    dispatch(changeType(t));
    dispatch(closeButtonRain());
  };
  return (
    <div className={`${style.container} ${!props.state && style.hiden}`}>
      {type != "loficafe" && (
        <div
          className={style.item}
          onClick={() => handleChangeType("loficafe")}
        >
          <p className={style.title}>Lofi Cafe</p>
          <img className={style.img} src={scene.loficafe} alt="Lofi cafe" />
        </div>
      )}
      {type != "bookcafe" && (
        <div
          className={style.item}
          onClick={() => handleChangeType("bookcafe")}
        >
          <p className={style.title}>Book Cafe</p>
          <img className={style.img} src={scene.bookcafe} alt="Book cafe" />
        </div>
      )}
      {type != "bedroom" && (
        <div className={style.item} onClick={() => handleChangeType("bedroom")}>
          <p className={style.title}>Bedroom</p>
          <img className={style.img} src={scene.bedroom} alt="Bedroom" />
        </div>
      )}
      {type != "plane" && (
        <div className={style.item} onClick={() => handleChangeType("plane")}>
          <p className={style.title}>Plane</p>
          <img className={style.img} src={scene.plane} alt="Plane" />
        </div>
      )}
    </div>
  );
}
