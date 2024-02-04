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
import Seoul from "./Seoul";
import AmIDreaming from "./AmIDreaming";
import CozyStudio from "./CozyStudio";

export interface IVideoProps {}
export default function Video(props: IVideoProps) {
  const { type, location, day, weather } = useSelector(
    (state: RootState) => state.case
  );

  console.log({ type, location, day, weather });

  const renderVideo = (): JSX.Element => {
    switch (type) {
      case type_scene.loficafe:
        return <LofiCafe />;

      case type_scene.bookcafe:
        return <BookCafe />;

      case type_scene.bedroom:
        return <BedRoom />;

      case type_scene.plane:
        return <Plane />;

      case type_scene.lakehouse:
        return <LakeHouse />;

      case type_scene.inthewoods:
        return <InTheWoods />;

      case type_scene.seoul:
        return <Seoul />;

      case type_scene.am_id_ream:
        return <AmIDreaming />;

      case type_scene.cozy_studio:
        return <CozyStudio />;

      default:
        return <LofiCafe />;
    }
  };

  return (
    <>
      {/* {type == type_scene.loficafe && <LofiCafe />}
      {type == type_scene.bookcafe && <BookCafe />}
      {type == type_scene.bedroom && <BedRoom />}
      {type == type_scene.plane && <Plane />}
      {type == type_scene.lakehouse && <LakeHouse />}
      {type == type_scene.inthewoods && <InTheWoods />}
      {type == type_scene.seoul && <Seoul />}
      {type == type_scene.am_id_ream && <AmIDreaming />} */}

      {renderVideo()}
    </>
  );
}
