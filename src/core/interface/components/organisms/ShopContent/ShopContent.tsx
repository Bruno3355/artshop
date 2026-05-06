import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import ShopProductsCards from "../ShopProductsCards/ShopProductsCards";

import { mockData } from "@/prisma/mockdata";
import SearchBar from "../../molecules/SearchBar/SearchBar";

export default function ShopContent() {
  return (
    <div className="py-section-y px-section-x flex flex-col gap-y-section-y sm:gap-container-y">
      <div className="flex justify-center pb-container-y">
        <SearchBar />
      </div>

      <div className="flex flex-col sm:flex-row gap-x-container-x items-start">
        <aside className="w-full sm:w-fit sm:shrink-0 sm:min-w-fit">
          <FilterSidebar />
        </aside>
        <main className="flex-1 min-w-0">
          <ShopProductsCards products={mockData} />
        </main>
      </div>
    </div>
  );
}
