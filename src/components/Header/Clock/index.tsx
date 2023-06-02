import * as React from "react";
import style from "@/styles/clock.module.css";
export interface IClockProps {}

export default function Clock(props: IClockProps) {
  const [time, setTime] = React.useState<string>("");
  React.useEffect(() => {
    setInterval(updateClock, 1000);
  }, []);
  const updateClock = () => {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");
    var timeString = hours + ":" + minutes + ":" + seconds;
    setTime(timeString);
  };
  return (
    <div className={style.clock}>
      <p className={style.time}>{time}</p>
    </div>
  );
}
