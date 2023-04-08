import * as React from "react";
import ReactAudioPlayer from "react-audio-player";
export interface ISoundItemProps {
  src: string;
  volume: number;
}

export default function SoundItem({ src, volume }: ISoundItemProps) {
  return (
    <ReactAudioPlayer preload="auto" src={src} volume={volume} autoPlay loop />
  );
}
