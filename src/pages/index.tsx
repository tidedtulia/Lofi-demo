import styles from "@/styles/Home.module.css";
import Controller from "@/components/Controller";
import Video from "@/components/Video";
import { useEffect, useState } from "react";

import { loading_logo, rotate_logo } from "@/files/file";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setListMusic, setSrc } from "@/slice/music.slice";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLandscape, setIsLandscape] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleResize = () => {
      const { matches } = window.matchMedia("(orientation: landscape)");
      setIsLandscape(matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //get list music
  const { type, num, listMusic } = useSelector(
    (state: RootState) => state.music
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getListMusic = async () => {
      const res = await fetch(`/api/getListMusic?id=${type}`);
      const data = await res.json();

      if (data.length == 0) {
        console.log("fetch list music fail");

        getListMusic();
      } else {
        // setListMusic(data);
        dispatch(setListMusic(data));
        dispatch(setSrc(data[num]?.src));
      }
    };

    getListMusic();
  }, [type]);

  console.log({ type, num, name: listMusic[num].name });

  return (
    <>
      {!isLandscape && (
        <div className={styles.landscape} id="landscape">
          <img
            width={120}
            src={rotate_logo}
            alt="Please rotate your device horizontally"
          />
          <h1 className="text-[#ddd]">
            Please rotate your device horizontally
          </h1>
        </div>
      )}
      {isLoading && (
        <div className="fixed inset-0 z-[1000] flex flex-col justify-center items-center bg-[#333]">
          <img width={120} src={loading_logo} alt="Loading..." />
          <h1 className="text-[#ddd]">Loading.....</h1>
        </div>
      )}
      <div className={styles.container} id="screen">
        <Controller />
        <Video />
      </div>
    </>
  );
}

