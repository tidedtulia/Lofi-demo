import * as React from "react";
import style from "@/styles/scenespanel.module.css";
import { changeType } from "@/slice/case.slice";
import { closeButtonRain } from "@/slice/sound.slice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
export interface IScenesPanelProps {}

export default function ScenesPanel(props: IScenesPanelProps) {
  const { type } = useSelector((state: RootState) => state.case);
  const dispatch = useDispatch();
  const handleChangeType = (t: string) => {
    dispatch(changeType(t));
    dispatch(closeButtonRain());
  };
  return (
    <div className={style.container}>
      {type != "loficafe" && (
        <div
          className={style.item}
          onClick={() => handleChangeType("loficafe")}
        >
          <p className={style.title}>Lofi Cafe</p>
          <img
            className={style.img}
            src={
              "https://res.cloudinary.com/dp7dspftn/image/upload/v1680943047/lofi/cafe-out.0d307fb8651788cfd35c_xmhhvz.png"
            }
            alt="Lofi cafe"
          />
        </div>
      )}
      {type != "bookcafe" && (
        <div
          className={style.item}
          onClick={() => handleChangeType("bookcafe")}
        >
          <p className={style.title}>Book Cafe</p>
          <img
            className={style.img}
            src={
              "https://res.cloudinary.com/dp7dspftn/image/upload/v1680943011/lofi/book-cafe/book_cafe_preview_out.aeae5beef7737b9ae88e_pfaah7.png"
            }
            alt="Book cafe"
          />
        </div>
      )}
      {type != "bedroom" && (
        <div className={style.item} onClick={() => handleChangeType("bedroom")}>
          <p className={style.title}>Bedroom</p>
          <img
            className={style.img}
            src={
              "https://res.cloudinary.com/dp7dspftn/image/upload/v1680943034/lofi/bed-room/Tr%C3%ACnh_ph%C3%A1t_%C4%90a_ph%C6%B0%C6%A1ng_ti%E1%BB%87n_08_04_2023_3_35_51_CH_nxvx5l.png"
            }
            alt="Bedroom"
          />
        </div>
      )}
    </div>
  );
}
