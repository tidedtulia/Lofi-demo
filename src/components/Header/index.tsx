import * as React from "react";
import style from "@/styles/header.module.css";
import { logo } from "@/files/file";
import Clock from "../Clock";
import FullScreen from "../FullScreen";
import Music from "../Music";
import Toggle from "../Toggle";
export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className={style.container}>
      <img src={logo} alt="" className={style.logo} />
      <div className={style.control}>
        <Clock />
        <Toggle />
        <Music />
        <FullScreen />
      </div>
    </div>
  );
}
