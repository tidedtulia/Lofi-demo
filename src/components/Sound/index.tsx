import * as React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

export interface ISoundProps {}

export default function Sound(props: ISoundProps) {
  const { rain, traffic, keyboard, people } = useSelector(
    (state: RootState) => state.sound
  );

  return (
    <div>
      <ReactAudioPlayer
        volume={rain}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752454/lofi/sounds/rain_city_umqj8o.mp3"
        autoPlay
        loop
        preload="auto"
      />
      <ReactAudioPlayer
        volume={traffic}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752449/lofi/sounds/city_traffic_v4hfjq.mp3"
        autoPlay
        loop
        preload="auto"
      />
      <ReactAudioPlayer
        volume={keyboard}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752450/lofi/sounds/keyboard_ujvpge.mp3"
        autoPlay
        loop
        preload="auto"
      />
      <ReactAudioPlayer
        volume={people}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752456/lofi/sounds/people_talk_inside_rzfzoz.mp3"
        autoPlay
        loop
        preload="auto"
      />
    </div>
  );
}
