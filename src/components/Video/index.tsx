import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LofiCafe from "./LofiCafe";
import BookCafe from "./BookCafe";
import BedRoom from "./BedRoom";
import Plane from "./Plane";
import LakeHouse from "./LakeHouse";
import InTheWoods from "./InTheWoods";
import { type_scene } from "@/files/const";

export interface IVideoProps {}
export default function Video(props: IVideoProps) {
  const { type, location, day, weather } = useSelector(
    (state: RootState) => state.case
  );

  console.log({ type, location, day, weather });

  return (
    <>
      {type == type_scene.loficafe && <LofiCafe />}
      {type == type_scene.bookcafe && <BookCafe />}
      {type == type_scene.bedroom && <BedRoom />}
      {type == type_scene.plane && <Plane />}
      {type == type_scene.lakehouse && <LakeHouse />}
      {type == type_scene.inthewoods && <InTheWoods />}
    </>
  );
}
