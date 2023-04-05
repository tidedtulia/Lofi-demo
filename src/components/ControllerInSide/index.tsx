import * as React from "react";
import style from "@/styles/controllerinside.module.css";
import Button from "../Button";

import { changeLocation } from "@/slice/case.slice";
import { useDispatch } from "react-redux";

export interface IControllerInSideProps {}

export default function ControllerInSide(props: IControllerInSideProps) {
  const dispatch = useDispatch();
  const hadleOutside = () => {
    dispatch(changeLocation("outside"));
  };
  return (
    <div className={style.container}>
      <div className="absolute top-[35%] left-[10%]">
        <Button title="Outside" type="position" action={hadleOutside} />
      </div>
    </div>
  );
}
