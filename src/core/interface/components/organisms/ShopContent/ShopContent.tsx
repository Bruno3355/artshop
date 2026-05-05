import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import ShopProductsCards from "../ShopProductsCards/ShopProductsCards";

import { mockData } from "@/prisma/mockdata";

export default function ShopContent() {
  const { title, description, image, price } = mockData[0];

  return (
    <Grid className="py-section-y px-section-x">
      <Col xs={"full"} sm={2} className="min-w-fit">
        <FilterSidebar />
      </Col>
      <Col xs={"full"} sm={2} md={6} lg={10}>
        <ShopProductsCards
          title={title}
          description={description}
          image={image}
          price={price}
        />
      </Col>
    </Grid>
  );
}
