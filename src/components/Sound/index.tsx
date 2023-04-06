import * as React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export interface ISoundProps {}

export default function Sound(props: ISoundProps) {
  const rainRef = React.useRef<HTMLAudioElement>(null);
  const trafficRef = React.useRef<HTMLAudioElement>(null);
  const keyboardRef = React.useRef<HTMLAudioElement>(null);
  const peopleRef = React.useRef<HTMLAudioElement>(null);

  const { rain, traffic, keyboard, people } = useSelector(
    (state: RootState) => state.sound
  );

  React.useEffect(() => {
    if (rainRef.current) {
      rainRef.current.volume = rain;
    }
  }, [rain]);
  React.useEffect(() => {
    if (trafficRef.current) {
      trafficRef.current.volume = traffic;
    }
  }, [traffic]);
  React.useEffect(() => {
    if (keyboardRef.current) {
      keyboardRef.current.volume = keyboard;
    }
  }, [keyboard]);
  React.useEffect(() => {
    if (peopleRef.current) {
      peopleRef.current.volume = people;
    }
  }, [people]);

  return (
    <div>
      <audio
        ref={rainRef}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752454/lofi/sounds/rain_city_umqj8o.mp3"
        autoPlay
        loop
      ></audio>
      <audio
        ref={trafficRef}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752449/lofi/sounds/city_traffic_v4hfjq.mp3"
        autoPlay
        loop
      ></audio>
      <audio
        ref={keyboardRef}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752450/lofi/sounds/keyboard_ujvpge.mp3"
        autoPlay
        loop
      ></audio>
      <audio
        ref={peopleRef}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752456/lofi/sounds/people_talk_inside_rzfzoz.mp3"
        autoPlay
        loop
      ></audio>
    </div>
  );
}
