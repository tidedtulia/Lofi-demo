import * as React from "react";
import styles from "@/styles/loading.module.css";
import { loading_logo } from "@/files/file";
export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
  return (
    <div className={styles.container}>
      <img alt="Loading..." src={loading_logo} />
    </div>
  );
}
