import ContactForm from "@/src/core/interface/components/organisms/ContactForm/ContactForm";
import { Col } from "@/src/core/interface/components/atoms/Col/Col";
import { Grid } from "@/src/core/interface/components/atoms/Grid/Grid";
import Image from "next/image";
import IconLabelGroup from "@/src/core/interface/components/molecules/IconLabelGroup/IconLabelGroup";

import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  return (
    <div className="flex flex-1 justify-center items-center py-section-y px-section-x">
      <div className="flex flex-col gap-container-y p-section-y border-2 border-alternative-background rounded-2xl max-w-7xl mx-auto">
        <div>
          <h2 className="text-display-md font-extrabold">Contact Us</h2>
          <span>
            Questions about services or pricing? We've got you covered. Contact
            us today.
          </span>
        </div>
        <Separator />
        <Grid className="gap-container-x!">
          <Col
            xs={"full"}
            md={6}
            className="flex justify-center gap-container-y flex-col"
          >
            <ContactForm />
          </Col>
          <Col
            xs={"full"}
            md={6}
            className="flex flex-col justify-center gap-container-y"
          >
            <span className="text-body-lg font-medium">
              Contact information
            </span>
            <div className="text-body-sm gap-card-gap">
              <IconLabelGroup
                icon={<IoLocationSharp />}
                text="Street n° 01, State, Country"
              />
              <IconLabelGroup icon={<FaPhoneAlt />} text="+55 XX XXXX.XXXX" />
              <IconLabelGroup icon={<MdEmail />} text="xxxxxx@antiqua.com.br" />
            </div>

            <Image
              alt="Flower Still Life with a Timepiece. Creator: Willem van Aelst. Date: 1663. Institution: Mauritshuis."
              src={"/heropainting.jpg"}
              width={800}
              height={1200}
              loading="eager"
              className="w-full h-auto max-h-170 max-w-md object-contain outline-2 outline-ring"
            />
          </Col>
        </Grid>
      </div>
    </div>
  );
}
