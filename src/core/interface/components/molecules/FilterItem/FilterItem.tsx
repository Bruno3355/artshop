"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterData {
  id: string;
  label: string;
}

interface FilterItemProps {
  items: FilterData[];
}

export default function FilterItem({ items }: FilterItemProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get("q") || "";
  const selected = currentQuery ? currentQuery.split(",") : [];

  function handleValueChange(newSelected: string[]) {
    const params = new URLSearchParams(searchParams.toString());

    if (newSelected.length === 0) {
      params.delete("q");
    } else {
      params.set("q", newSelected.join(","));
    }

    router.push(`/shop?${params.toString()}`);
  }

  return (
    <ToggleGroup
      type="multiple"
      orientation="vertical"
      value={selected}
      onValueChange={handleValueChange}
      className="w-full outline-1 border-2 border-bg-primary"
    >
      {items.map((item, index) => (
        <ToggleGroupItem
          key={item.id}
          value={item.id}
          className="w-full flex flex-col justify-center items-start min-h-12"
        >
          <span className="w-full py-container-y px-container-x flex justify-between">
            {item.label}
            {selected.includes(item.id) && <Check />}
          </span>
          {index < items.length - 1 && <Separator />}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
