import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";

import FilterCollapsible from "../../molecules/FilterCollapsible/FilterCollapsible";

const Categories = [
  {
    title: "Type",
    items: [
      { label: "Paintings", id: "paintings" },
      { label: "Vases", id: "vases" },
      { label: "Rare Pieces", id: "rare_pieces" },
    ],
  },
  {
    title: "Dimensions",
    items: [
      { label: "Small", id: "small" },
      { label: "Medium", id: "medium" },
      { label: "Large", id: "large" },
    ],
  },
  {
    title: "Condition",
    items: [
      { label: "Pristine", id: "pristine" },
      { label: "Gently Aged", id: "gently_aged" },
      { label: "Professionally Restored", id: "professionally_restored" },
    ],
  },
];

export default function ProductList() {
  return (
    <Grid>
      <Col>
        <h2 className="text-display-sm font-medium">Filter</h2>
        {Categories.map((item, key) => (
          <FilterCollapsible categories={item} key={key} variant="child" />
        ))}
      </Col>
      <Col>a</Col>
    </Grid>
  );
}
