import Image from "next/image";
import styles from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src={"./logo.svg"}
        alt={"artshop logo"}
        fill
        priority
        style={{ objectFit: "contain" }}
      ></Image>
    </div>
  );
}
