import styles from "./Hero.module.css";
import HeroContent from "../../molecules/HeroContent/HeroContent";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Hero({ className }: Props) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.wrapper}>
        <HeroContent />

        <div className="max-w-72 flex flex-col gap-1">
          <Image
            alt="Flower Still Life with a Timepiece. Creator: Willem van Aelst. Date: 1663. Institution: Mauritshuis."
            src={"/heropainting.jpg"}
            width={300}
            height={500}
            className={styles.image}
            loading="eager"
          />
          <figcaption className="w-full text-caption">Flower Still Life with a Timepiece. Creator: Willem van Aelst. Date: 1663. Institution: Mauritshuis.</figcaption>
        </div>
      </div>
    </div>
  );
}
