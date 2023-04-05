import * as React from "react";
import style from "@/styles/fullscreen.module.css";
export interface IFullScreenProps {}

export default function FullScreen(props: IFullScreenProps) {
  const fullicon =
    "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15";
  const exitFull =
    "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25";
  const [icon, setIcon] = React.useState<string>(fullicon);
  const handleClick = () => {
    const element = document.getElementById("screen");
    if (icon === fullicon) {
      setIcon(exitFull);
      if (element.mozRequestFullScreen) {
        // Cho trình duyệt Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        // Cho trình duyệt Chrome, Safari và Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        // Cho trình duyệt Edge
        element.msRequestFullscreen();
      } else if (element.webkitEnterFullscreen) {
        // Cho trình duyệt Cốc Cốc
        element.webkitEnterFullscreen();
      } else if (element.webkitEnterFullScreen) {
        // Cho trình duyệt Cốc Cốc phiên bản cũ hơn
        element.webkitEnterFullScreen();
      }
    } else {
      setIcon(fullicon);
      if (document.mozCancelFullScreen) {
        // Cho trình duyệt Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Cho trình duyệt Chrome, Safari và Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // Cho trình duyệt Edge
        document.msExitFullscreen();
      } else if (document.webkitExitFullscreen) {
        // Cho trình duyệt Cốc Cốc
        document.webkitExitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        // Cho trình duyệt Cốc Cốc phiên bản cũ hơn
        document.webkitCancelFullScreen();
      }
    }
  };

  return (
    <button className={style.button} onClick={handleClick}>
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
