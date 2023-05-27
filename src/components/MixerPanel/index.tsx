import * as React from "react";
import style from "@/styles/mixerpanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  changeVolumeAudio,
  changeVolumeRain,
  changeVolumeTraffic,
  changeVolumePeople,
  changeVolumeKeyboard,
  changeVolumeTrain,
  changeVolumeThunder,
  changeVolumeForestNight,
  changeVolumeCampfire,
} from "@/slice/sound.slice";
import { changeType, changeNumMusic } from "@/slice/music.slice";
import { Music } from "@/types/music";
export interface IMixerPanelProps {
  state: boolean;
}

export default function MixerPanel(props: IMixerPanelProps) {
  const {
    audio,
    rain,
    traffic,
    people,
    keyboard,
    train,
    thunder,
    forest_night,
    campfire,
  } = useSelector((state: RootState) => state.sound);
  const { type, num } = useSelector((state: RootState) => state.music);
  const dispatch = useDispatch();

  const [listMusic, setListMusic] = React.useState<Music[]>([
    { index: 0, name: "123" },
  ]);

  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getListMusic = async () => {
      const res = await fetch(`/api/getListMusic?id=${type}`);
      const data = await res.json();

      if (data.length == 0) {
        console.log("fetch list music fail");
        getListMusic();
      } else {
        setListMusic(data);
      }
    };
    getListMusic();
  }, [type]);

  const handleChangeVolumeAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeAudio(value));
  };
  const handleChangeVolumeRain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeRain(value));
  };
  const handleChangeVolumeTraffic = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeTraffic(value));
  };
  const handleChangeVolumePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumePeople(value));
  };
  const handleChangeVolumeKeyboard = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeKeyboard(value));
  };

  const handleChangeVolumeTrain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeTrain(value));
  };
  const handleChangeVolumeThunder = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeThunder(value));
  };
  const handleChangeVolumeForestNight = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeForestNight(value));
  };
  const handleChangeVolumeCampfire = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeCampfire(value));
  };

  const handleChangeType = (t: number) => {
    if (t == type) return;
    else {
      dispatch(changeType(t));
    }
  };

  return (
    <div className={`${style.container} ${!props.state && style.hiden}`}>
      <div className="flex flex-row justify-between items-center">
        <div className={style.controll}>
          <div className={style.mood_menu}>
            <div
              className={`${style.mood_menu_item} ${
                type == 1 && style.mood_active
              }`}
              onClick={() => handleChangeType(1)}
            >
              <div className={style.mood_menu_bg_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={style.icon}
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className={style.mood_menu_item_title}>Lofi</p>
            </div>
            <div
              className={`${style.mood_menu_item} ${
                type == 2 && style.mood_active
              }`}
              onClick={() => handleChangeType(2)}
            >
              <div className={style.mood_menu_bg_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={style.icon}
                >
                  <path
                    fillRule="evenodd"
                    d="M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className={style.mood_menu_item_title}>Chill</p>
            </div>
            <div
              className={`${style.mood_menu_item} ${
                type == 3 && style.mood_active
              }`}
              onClick={() => handleChangeType(3)}
            >
              <div className={style.mood_menu_bg_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={style.icon}
                >
                  <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className={style.mood_menu_item_title}>Viet Nam</p>
            </div>
          </div>
          <div className={style.music_volume}>
            <p className={style.title}>Music volume</p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              className={style.music_volume_range}
              value={audio}
              onChange={handleChangeVolumeAudio}
            />
          </div>
          <div className={style.sounds}>
            <p className={`${style.title} mb-2 lg:mb-3`}>Sound</p>
            <div className={style.sounds_list}>
              <div className={style.sounds_item}>
                <p className={style.sounds_item_title}>Traffic city</p>
                <input
                  className={style.sounds_item_volume}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={traffic}
                  onChange={handleChangeVolumeTraffic}
                />
              </div>
              <div className={style.sounds_item}>
                <p className={style.sounds_item_title}>City rain</p>
                <input
                  className={style.sounds_item_volume}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={rain}
                  onChange={handleChangeVolumeRain}
                />
              </div>
              <div className={style.sounds_item}>
                <p className={style.sounds_item_title}>People talking</p>
                <input
                  className={style.sounds_item_volume}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={people}
                  onChange={handleChangeVolumePeople}
                />
              </div>
              <div className={style.sounds_item}>
                <p className={style.sounds_item_title}>Keyboard</p>
                <input
                  className={style.sounds_item_volume}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={keyboard}
                  onChange={handleChangeVolumeKeyboard}
                />
              </div>
              <div className={style.sounds_item}>
                <p className={style.sounds_item_title}>Train</p>
                <input
                  className={style.sounds_item_volume}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={train}
                  onChange={handleChangeVolumeTrain}
                />
              </div>
              <div className={style.sounds_item}>
                <p className={style.sounds_item_title}>Thunder</p>
                <input
                  className={style.sounds_item_volume}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={thunder}
                  onChange={handleChangeVolumeThunder}
                />
              </div>
              <div className={style.sounds_item}>
                <p className={style.sounds_item_title}>Forest Night</p>
                <input
                  className={style.sounds_item_volume}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={forest_night}
                  onChange={handleChangeVolumeForestNight}
                />
              </div>
              <div className={style.sounds_item}>
                <p className={style.sounds_item_title}>Campfire</p>
                <input
                  className={style.sounds_item_volume}
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={campfire}
                  onChange={handleChangeVolumeCampfire}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-10 flex flex-row justify-center text-white hover:text-yellow-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d={`${
                open
                  ? "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  : "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              }`}
            />
          </svg>
        </div>
      </div>
      {open && (
        <div className={style.listMusics}>
          <ul className={style.listData}>
            {listMusic.map((music) => (
              <li
                key={music.index}
                className={` w-full cursor-pointer text-xs py-2 lg:py-1 ${
                  num === music.index ? "text-yellow-500" : "text-white"
                }`}
                onClick={() => {
                  dispatch(changeNumMusic(music.index));
                }}
              >
                {music.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
