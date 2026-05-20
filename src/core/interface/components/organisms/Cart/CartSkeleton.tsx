import { Skeleton } from "@/components/skeleton";

export default function CartSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-62.5" />
        <Skeleton className="h-4 w-62.5" />
      </div>
    </div>
  );
}
