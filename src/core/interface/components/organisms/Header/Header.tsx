import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";
import Link from "next/link";
import NavTabs from "../NavTabs/NavTabs";
import ButtonCart from "../../atoms/Buttons/ButtonCart";

export default function Header() {
  return (
    <header className="py-container-y">
      <Grid className="items-center">
        <Col xs={4} md={3}>
          <Link href={"/"} className="flex justify-center">
            <h1 className="text-3xl font-semibold">ANTIQUA</h1>
          </Link>
        </Col>

        <Col xs={4} md={3} lg={7}>
          <NavTabs />
        </Col>

        <Col lg={2} className="flex justify-center">
          <ButtonCart />
        </Col>
      </Grid>
    </header>
  );
}
