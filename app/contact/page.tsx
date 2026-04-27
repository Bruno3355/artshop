import ContactForm from "@/src/core/interface/components/organisms/ContactForm/ContactForm";
import { Col } from "@/src/core/interface/components/atoms/Col/Col";
import { Grid } from "@/src/core/interface/components/atoms/Grid/Grid";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-1 justify-center items-center py-section-y px-section-x">
      <Grid className="p-section-y border-2 border-alternative-background rounded-2xl max-w-7xl mx-auto gap-0!">
        <Col xs={"full"} md={6} className="flex justify-center">
          <Image
            alt="Flower Still Life with a Timepiece. Creator: Willem van Aelst. Date: 1663. Institution: Mauritshuis."
            src={"/heropainting.jpg"}
            width={800}
            height={1200}
            loading="eager"
            className="w-full h-auto max-h-170 max-w-md object-contain"
          />
        </Col>
        <Col
          xs={"full"}
          md={6}
          className="flex justify-center gap-container-y md:justify-start flex-col px-container-x pt-container-y md:pt-0"
        >
          <ContactForm />
        </Col>
      </Grid>
    </div>
  );
}
