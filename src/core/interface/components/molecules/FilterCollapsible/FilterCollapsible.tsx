"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FilterItem from "../FilterItem/FilterItem";

interface FilterData {
  title: string;
  items: {
    label: string;
    id: string;
  }[];
}

type WithText = {
  text: string;
  categories?: never;
  children?: React.ReactNode;
};

type WithCategories = {
  text?: never;
  categories: FilterData;
  children?: React.ReactNode;
};

type FilterCollapsibleProps = (WithText | WithCategories) & {
  variant?: "parent" | "child";
};

export default function FilterCollapsible({
  text,
  categories,
  children,
  variant,
}: FilterCollapsibleProps) {
  const [open, setOpen] = useState(true);
  const bgClass =
    variant === "child"
      ? "data-[state=open]:bg-primary data-[state=open]:text-primary-foreground"
      : "";

  return (
    <Collapsible
      className={"group py-container-y"}
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsibleTrigger asChild>
        <Button
          variant={"outline"}
          className={`
            w-full flex justify-between uppercase ${bgClass}
          `}
        >
          {text ? text : categories?.title}
          <ChevronDownIcon />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Separator className={"my-container-y"} />
        {children
          ? children
          : categories && <FilterItem items={categories.items} />}
      </CollapsibleContent>
    </Collapsible>
  );
}
