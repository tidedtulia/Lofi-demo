import * as React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";
import SoundItem from "./SoundItem";
export interface ISoundProps {}

export default function Sound(props: ISoundProps) {
  const { rain, traffic, keyboard, people } = useSelector(
    (state: RootState) => state.sound
  );
  console.log({ rain, traffic, keyboard, people });

  return (
    <div>
      <SoundItem
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/rain_city.mp3"
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
    </div>
  );
}
