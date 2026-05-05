import { propsType } from "@/prisma/mockdata";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import CardProduct from "../../molecules/Cards/CardProduct/CardProduct";

export default function ShopProductsCards(props: propsType) {
  return (
    <div className="flex flex-col w-full items-center">
      <SearchBar />
      <CardProduct {...props} />
    </div>
  );
}
