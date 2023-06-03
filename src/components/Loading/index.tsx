import * as React from "react";
import styles from "@/styles/loading.module.css";
import Image from "next/image";
export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
  return (
    <div className={styles.container}>
      <img
        alt="Loading..."
        src="https://res.cloudinary.com/dp7dspftn/image/upload/v1680602044/lofi/logo.0cbf9e63b4a021661126_rttu7d.gif"
      />
    </div>
  );
}
