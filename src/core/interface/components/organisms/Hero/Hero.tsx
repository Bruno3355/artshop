import styles from "./Hero.module.css";
import HeroContent from "../../molecules/HeroContent/HeroContent";
import Image from "next/image";


export default function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
          <HeroContent/>


          <Image
            alt="hero image"
            src={"/heropainting.jpg"}
            width={300}
            height={500}
            className="w-full h-auto max-h-96 max-w-60"
            style={{width: "100%", height:"auto"}}
            loading="eager"
          />

        </div>
    </div>
  );
}
