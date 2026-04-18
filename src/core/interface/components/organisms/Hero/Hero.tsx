import styles from "./Hero.module.css";
import HeroContent from "../../molecules/HeroContent/HeroContent";
import Image from "next/image";
import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Hero({ className }: Props) {
  return (
    <Grid className="w-full min-h-200">
      <Col lg={8}>
        <div className={`${styles.container} ${className}`}>
          <div className={styles.wrapper}>
            <HeroContent />
          </div>
        </div>
      </Col>

      <Col lg={4}>
        <div className={styles.imagePanel}>
          <div className={styles.imageWrapper}>
            <Image
              alt="Flower Still Life with a Timepiece. Creator: Willem van Aelst. Date: 1663. Institution: Mauritshuis."
              src={"/heropainting.jpg"}
              width={300}
              height={500}
              className={styles.image}
              loading="eager"
            />
            <span className={styles.yearBadge}>1663</span>
            <figcaption className={styles.imageCaption}>
              Willem van Aelst · Mauritshuis
            </figcaption>
          </div>
        </div>
      </Col>
    </Grid>
  );
}
