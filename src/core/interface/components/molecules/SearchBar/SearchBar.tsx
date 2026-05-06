import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import React from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function SearchBar({ className, ...props }: SearchBarProps) {
  return (
    <InputGroup className={cn("max-w-xs min-h-16 sm:min-h-12", className)}>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end" className="min-w-1/4">
        <InputGroupButton className="hover:bg-card hover:text-accent w-full">
          <Search className="w-full" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
