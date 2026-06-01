import ShopContent from "@/src/core/interface/components/organisms/ShopContent/ShopContent";
interface Props {
  searchParams: { q?: string };
}

export default async function Shop({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;

  return (
    <div>
      <ShopContent searchParams={resolvedSearchParams} />
    </div>
  );
}
