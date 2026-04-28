import { cn } from "@/lib/utils";
import React from "react";

interface IconLabelGroupProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export default function IconLabelGroup({
  icon,
  text,
  className,
}: IconLabelGroupProps) {
  return (
    <div className={cn("flex gap-card-gap items-center", className)}>
      {icon}
      {text}
    </div>
  );
}
