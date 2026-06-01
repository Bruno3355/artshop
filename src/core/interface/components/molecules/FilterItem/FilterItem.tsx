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
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleClick(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );

    const params = new URLSearchParams(searchParams.toString());

    if (params.get("q") === id) {
      params.delete("q");
    } else {
      params.set("q", id);
    }

    router.push(`/shop?${params.toString()}`);
  }

  return (
    <ToggleGroup
      type="multiple"
      orientation="vertical"
      value={selected}
      onValueChange={setSelected}
      className="w-full outline-1 border-2 border-bg-primary"
    >
      {items.map((item, index) => (
        <ToggleGroupItem
          key={item.id}
          value={item.id}
          className="w-full flex flex-col justify-center items-start min-h-12"
          onClick={() => handleClick(item.id)}
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
