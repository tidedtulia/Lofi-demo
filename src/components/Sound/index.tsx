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
      rainRef.current.play();
    }
    if (trafficRef.current) {
      trafficRef.current.play();
    }
    if (keyboardRef.current) {
      keyboardRef.current.play();
    }
    if (peopleRef.current) {
      peopleRef.current.play();
    }
  }, []);

  React.useEffect(() => {
    if (rainRef.current) {
      rainRef.current.volume = rain;
      console.log(rainRef.current.volume);
      console.log({ rain });
    }
  }, [rain]);
  React.useEffect(() => {
    if (trafficRef.current) {
      trafficRef.current.volume = traffic;
      console.log(trafficRef.current.volume);
      console.log({ traffic });
    }
  }, [traffic]);
  React.useEffect(() => {
    if (keyboardRef.current) {
      keyboardRef.current.volume = keyboard;
      console.log(keyboardRef.current.volume);
      console.log({ keyboard });
    }
  }, [keyboard]);
  React.useEffect(() => {
    if (peopleRef.current) {
      peopleRef.current.volume = people;
      console.log(peopleRef.current.volume);
      console.log({ people });
    }
  }, [people]);

  return (
    <div>
      {/* <audio
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752454/lofi/sounds/rain_city_umqj8o.mp3"
        autoPlay
        loop
        preload="auto"
      ></audio> */}
      <audio
        ref={rainRef}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752454/lofi/sounds/rain_city_umqj8o.mp3"
        autoPlay
        loop
        preload="auto"
      ></audio>
      <audio
        ref={trafficRef}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752449/lofi/sounds/city_traffic_v4hfjq.mp3"
        autoPlay
        loop
        preload="auto"
      ></audio>
      <audio
        ref={keyboardRef}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752450/lofi/sounds/keyboard_ujvpge.mp3"
        autoPlay
        loop
        preload="auto"
      ></audio>
      <audio
        ref={peopleRef}
        src="https://res.cloudinary.com/dp7dspftn/video/upload/v1680752456/lofi/sounds/people_talk_inside_rzfzoz.mp3"
        autoPlay
        loop
        preload="auto"
      ></audio>
    </div>
  );
}
