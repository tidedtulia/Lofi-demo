import * as React from "react";
import style from "@/styles/scenespanel.module.css";
import { changeType } from "@/slice/case.slice";
import { closeButtonRain } from "@/slice/sound.slice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import { scene } from "@/files/file";
import { type_scene } from "@/files/const";

import { CldImage } from "next-cloudinary";

export interface IScenesPanelProps {
  state: boolean;
}

export default function ScenesPanel(props: IScenesPanelProps) {
  const { type } = useSelector((state: RootState) => state.case);
  const dispatch = useDispatch();
  const handleChangeType = (t: string) => {
    dispatch(changeType(t));
    // dispatch(closeButtonRain());
  };
  return (
    <div className={`${style.container} ${!props.state && style.hiden}`}>
      {type != type_scene.loficafe && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.loficafe)}
        >
          <p className={style.title}>Lofi Cafe</p>

          {/* <img className={style.img} src={scene.loficafe} alt="Lofi cafe" /> */}
          <CldImage
            className={style.img}
            src={scene.loficafe}
            alt="Lofi cafe"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.bookcafe && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.bookcafe)}
        >
          <p className={style.title}>Book Cafe</p>
          {/* <img className={style.img} src={scene.bookcafe} alt="Book cafe" /> */}
          <CldImage
            className={style.img}
            src={scene.bookcafe}
            alt="Book cafe"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.bedroom && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.bedroom)}
        >
          <p className={style.title}>Bedroom</p>
          {/* <img className={style.img} src={scene.bedroom} alt="Bedroom" /> */}
          <CldImage
            className={style.img}
            src={scene.bedroom}
            alt="Bedroom"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
      {type != type_scene.plane && (
        <div
          className={style.item}
          onClick={() => handleChangeType(type_scene.plane)}
        >
          <p className={style.title}>Plane</p>
          {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
          <CldImage
            className={style.img}
            src={scene.plane}
            alt="Plane"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
}
