import styles from "@/styles/Home.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import Outside from "@/components/Outside";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Inside from "@/components/Inside";
import Controller from "@/components/Controller";

export default function Home() {
  const caseSlice = useSelector((state: RootState) => state.case);
  console.log(caseSlice);

  return (
    <div className={styles.container} id="screen">
      {/* <Header /> */}
      <Controller />

      {caseSlice.location == "outside" && <Outside />}
      {caseSlice.location == "inside" && <Inside />}
      <Toaster />
    </div>
  );
}
