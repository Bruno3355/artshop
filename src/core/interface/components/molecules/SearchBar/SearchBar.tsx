"use client";

import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function SearchBar({ className, ...props }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  function handleSearch() {
    const params = new URLSearchParams();
    if (query.trim()) {
      params.set("q", query.trim());
    }
    router.push(`/shop?${params.toString()}`);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <InputGroup
      className={cn("max-w-xs min-h-16 sm:min-h-12", className)}
      {...props}
    >
      <InputGroupInput
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <InputGroupAddon align="inline-end" className="min-w-1/4">
        <InputGroupButton
          className="hover:bg-card hover:text-accent w-full"
          onClick={handleSearch}
        >
          <Search className="w-full" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
