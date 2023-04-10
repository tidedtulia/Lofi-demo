import * as React from "react";
import style from "@/styles/pomodorotimer.module.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import PlayButton from "../Button/PlayButton";
import PauseButton from "../Button/PauseButton";
import SettingButton from "../Button/SettingButton";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const red = "#f54e4e";
const green = "#4aec8c";

export interface ITimerProps {}

export default function Timer(props: ITimerProps) {
  const { workMinutes, breakMinutes } = useSelector(
    (state: RootState) => state.pomodoro
  );
  const [isPaused, setIsPaused] = React.useState<boolean>(true);
  const [mode, setMode] = React.useState<string>("work");
  const [secondsLeft, setSecondsLeft] = React.useState<number>(
    workMinutes * 60
  );

  const secondsLeftRef = React.useRef(secondsLeft);
  const isPauseRef = React.useRef(isPaused);
  const modeRef = React.useRef(mode);

  const switchMode = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds = (nextMode === "work" ? workMinutes : breakMinutes) * 60;

    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  };

  const initTimer = () => {
    setSecondsLeft(workMinutes * 60);
  };

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  React.useEffect(() => {
    initTimer();
    const interval = setInterval(() => {
      if (isPauseRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [useSelector((state: RootState) => state.pomodoro)]);

  const totalSeconds = mode === "work" ? workMinutes * 60 : breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const audioRef = React.useRef<HTMLAudioElement>(null);
  return (
    <div className={style.timer_container}>
      <div className="w-3/5">
        <CircularProgressbarWithChildren
          className={style.CircularProgressbar}
          value={percentage}
          // text={minutes + ":" + seconds}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: mode === "work" ? red : green,
            trailColor: "rgba(255,255,255,.8)",
            strokeLinecap: "round",
          })}
        >
          <p className="text-xl lg:text-2xl text-white">
            {minutes + ":" + (seconds < 10 ? "0" + seconds : seconds)}
          </p>
        </CircularProgressbarWithChildren>
      </div>

      <div className={style.timer_buttons}>
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false), (isPauseRef.current = false);
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true), (isPauseRef.current = true);
            }}
          />
        )}
      </div>
      <div className="">
        <SettingButton />
      </div>
      <audio
        ref={audioRef}
        src="https://lofico.nyc3.cdn.digitaloceanspaces.com/alarms/Digital.mp3"
      />
    </div>
  );
}
