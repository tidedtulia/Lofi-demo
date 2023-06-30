import * as React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import SoundItem from "./SoundItem";

import { sound } from "@/files/file";

export interface ISoundProps {}

export default function Sound(props: ISoundProps) {
  const {
    rain,
    traffic,
    keyboard,
    people,
    train,
    thunder,
    forest_night,
    campfire,
    plane,
    bird,
  } = useSelector((state: RootState) => state.sound);
  return (
    <div>
      {rain != 0 && <SoundItem src={sound.rain} volume={rain} />}
      {traffic != 0 && <SoundItem src={sound.traffic} volume={traffic} />}
      {keyboard != 0 && <SoundItem src={sound.keyboard} volume={keyboard} />}
      {people != 0 && <SoundItem src={sound.people} volume={people} />}

      {train != 0 && <SoundItem src={sound.train} volume={train} />}
      {thunder != 0 && <SoundItem src={sound.thunder} volume={thunder} />}
      {forest_night != 0 && (
        <SoundItem src={sound.forest_night} volume={forest_night} />
      )}
      {campfire != 0 && <SoundItem src={sound.campfire} volume={campfire} />}
      {plane != 0 && <SoundItem src={sound.plane} volume={plane} />}
      {bird != 0 && <SoundItem src={sound.bird} volume={bird} />}
    </div>
  );
}
