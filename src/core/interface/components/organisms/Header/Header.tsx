import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";
import Link from "next/link";
import Logo from "../../atoms/Logo/Logo";
import NavTabs from "../NavTabs/NavTabs";
import ButtonCart from "../../atoms/Buttons/ButtonCart";

export default function Header() {
  return (
    <header className="pt-2.5">
    <Grid className="items-center">
        <Col xs={4} lg={3}>
          <Link href={"/"} className="flex justify-center">
            <h1 className="text-3xl">ANTIQUA</h1>
          </Link>
        </Col>

        <Col xs={4} lg={6}>
        <NavTabs />
        </Col>

        <Col xs={4} lg={3}>
        <ButtonCart />
        </Col>
    </Grid>
    </header>
  );
}
