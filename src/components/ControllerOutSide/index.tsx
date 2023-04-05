import * as React from "react";
import style from "@/styles/controlleroutside.module.css";
import Button from "../Button";

import { changeLocation } from "@/slice/case.slice";
import { useDispatch } from "react-redux";

export interface IControllerOutSideProps {}

export default function ControllerOutSide(props: IControllerOutSideProps) {
  const dispatch = useDispatch();
  const handleInside = () => {
    dispatch(changeLocation("inside"));
  };

  return (
    <div className={style.container}>
      <div className="absolute top-[50%] left-[42.5%]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
    </div>
  );
}
