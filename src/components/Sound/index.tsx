import * as React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";
import SoundItem from "./SoundItem";
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
  } = useSelector((state: RootState) => state.sound);
  return (
    <div>
      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/window_rain.mp3"
        volume={rain}
      />
      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/city_traffic.mp3"
        volume={traffic}
      />
      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/keyboard.mp3"
        volume={keyboard}
      />
      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/people_talk_inside.mp3"
        volume={people}
      />

      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/train.mp3"
        volume={train}
      />
      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/thunders.mp3"
        volume={thunder}
      />
      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/forest_night.mp3"
        volume={forest_night}
      />
      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/campfire.mp3"
        volume={campfire}
      />
    </div>
  );
}
