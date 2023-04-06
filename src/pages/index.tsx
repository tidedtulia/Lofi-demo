import styles from "@/styles/Home.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import Controller from "@/components/Controller";
import Video from "@/components/Video";

export default function Home() {
  const caseSlice = useSelector((state: RootState) => state.case);
  console.log(caseSlice);

  return (
    <div className={styles.container} id="screen">
      <Controller />
      <Video />
    </div>
  );
}
