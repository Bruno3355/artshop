import FilterSidebar from "../FilterSidebar/FilterSidebar";
import ShopProductsCards from "../ShopProductsCards/ShopProductsCards";

import SearchBar from "../../molecules/SearchBar/SearchBar";

interface Props {
  searchParams: { q?: string };
}

export default async function ShopContent({ searchParams }: Props) {
  return (
    <div className="py-section-y px-section-x flex flex-col gap-y-section-y sm:gap-container-y">
      <div className="flex flex-col sm:flex-row gap-x-container-x items-start">
        <aside className="bg-background w-full sm:w-fit sm:shrink-0 sm:min-w-fit flex flex-col gap-container-y sticky top-0 z-100">
          <SearchBar />
          <FilterSidebar />
        </aside>
        <main className="flex-1 min-w-0">
          <ShopProductsCards searchParams={searchParams} />
        </main>
      </div>
    </div>
  );
}
