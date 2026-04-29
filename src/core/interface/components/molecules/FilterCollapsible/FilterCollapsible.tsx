"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FilterCollapsibleProps {
  text: string;
  children?: React.ReactNode;
}

export default function FilterCollapsible({
  text,
  children,
}: FilterCollapsibleProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible className={"group"} open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant={open ? "default" : "outline"}
          className={"w-full flex justify-between uppercase"}
        >
          {text}
          <ChevronDownIcon />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Separator className={"my-container-y"} />
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
