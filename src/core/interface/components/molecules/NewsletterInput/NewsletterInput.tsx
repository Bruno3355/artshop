"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import React from "react";

export default function NewsletterInput({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex", className)} {...props}>
      <Input
        type="email"
        placeholder="youremail@email.com"
        className="rounded-none 3xs md:w-92 h-12"
      />
      <Button
        onClick={() =>
          toast.success("Subscription confirmed", {
            description:
              "If this was a real project, you’ll be the first to know about our newest items.",
          })
        }
        className={"rounded-none h-12 border-none"}
      >
        Subscribe
      </Button>
    </div>
  );
}
