import styles from "@/styles/Home.module.css";
import Controller from "@/components/Controller";
import Video from "@/components/Video";
import { useEffect, useState } from "react";

import { loading_logo, rotate_logo } from "@/files/file";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLandscape, setIsLandscape] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const { matches } = window.matchMedia("(orientation: landscape)");
      setIsLandscape(matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log({ isLandscape });

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

