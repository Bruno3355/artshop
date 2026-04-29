import React from "react";
import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";

import FilterCollapsible from "../../molecules/FilterCollapsible/FilterCollapsible";
import { id } from "zod/v4/locales";
import FilterItem from "../../molecules/FilterItem/FilterItem";

const Category = [
  { label: "Paintings", id: "paintings" },
  { label: "Antique", id: "antique" },
];

export default function ProductList() {
  return (
    <Grid>
      <Col>
        <FilterCollapsible text="Filter">
          <FilterCollapsible text="Option 1">
            <FilterItem items={Category} />
          </FilterCollapsible>
        </FilterCollapsible>
      </Col>
      <Col>b</Col>
    </Grid>
  );
}
