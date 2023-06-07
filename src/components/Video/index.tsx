import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LofiCafe from "./LofiCafe";
import BookCafe from "./BookCafe";
import BedRoom from "./BedRoom";
import Plane from "./Plane";

export interface IVideoProps {}
export default function Video(props: IVideoProps) {
  const { type, location, day, weather } = useSelector(
    (state: RootState) => state.case
  );

  console.log({ type, location, day, weather });

  return (
    <>
      {type == "loficafe" && <LofiCafe />}
      {type == "bookcafe" && <BookCafe />}
      {type == "bedroom" && <BedRoom />}
      {type == "plane" && <Plane />}
    </>
  );
}
