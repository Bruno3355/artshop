import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end" className="min-w-1/4">
        <InputGroupButton className="hover:bg-card hover:text-accent w-full">
          <Search className="w-full" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
