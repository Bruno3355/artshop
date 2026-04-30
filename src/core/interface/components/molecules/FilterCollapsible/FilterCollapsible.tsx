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

type FilterCollapsibleProps = WithText | WithCategories;

export default function FilterCollapsible({
  text,
  categories,
  children,
}: FilterCollapsibleProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      className={"group py-container-y"}
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsibleTrigger asChild>
        <Button
          variant={open ? "default" : "outline"}
          className={"w-full flex justify-between uppercase"}
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
