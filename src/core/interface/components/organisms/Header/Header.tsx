import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";
import Link from "next/link";
import NavTabs from "../NavTabs/NavTabs";
import ButtonCart from "../../atoms/Buttons/ButtonCart";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Cart from "../Cart/Cart";

export default function Header() {
  return (
    <header className="py-container-y mx-section-x border-b border-primary">
      <Grid className="items-center">
        <Col xs={4} md={3}>
          <Link href={"/"} className="flex justify-center">
            <h1 className="text-3xl font-medium">ANTIQUA</h1>
          </Link>
        </Col>

        <Col xs={4} md={3} lg={7}>
          <NavTabs />
        </Col>

        <Col lg={2} className="flex justify-center">
          <Cart />
        </Col>
      </Grid>
    </header>
  );
}
