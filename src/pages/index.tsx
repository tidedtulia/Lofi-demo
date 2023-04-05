import styles from "@/styles/Home.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import Outside from "@/components/Outside";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

export default function Home() {
  const caseSlice = useSelector((state: RootState) => state.case);

  return (
    <div className={styles.container} id="screen">
      <Header />
      {caseSlice.location == "outside" && <Outside />}
      <Toaster />
    </div>
  );
}
