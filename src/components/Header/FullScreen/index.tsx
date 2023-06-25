import * as React from "react";
import style from "@/styles/fullscreen.module.css";
export interface IFullScreenProps {}

export default function FullScreen(props: IFullScreenProps) {
  const fullIcon =
    "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15";
  const exitFull =
    "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25";
  const [icon, setIcon] = React.useState<string>(fullIcon);
  const handleClick = () => {
    const element = document.getElementById("screen");
    if (icon === fullIcon) {
      setIcon(exitFull);
      if (element?.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      setIcon(fullIcon);
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <button
      className={style.button}
      id="button_screen"
      onClick={handleClick}
      title="Fullscreen"
      aria-label="Fullscreen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={style.icon}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </button>
  );
}
