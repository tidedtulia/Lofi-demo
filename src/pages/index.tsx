import styles from "@/styles/Home.module.css";

import Controller from "@/components/Controller";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className={styles.container} id="screen">
      <Controller />
      <Video />
    </div>
  );
}
