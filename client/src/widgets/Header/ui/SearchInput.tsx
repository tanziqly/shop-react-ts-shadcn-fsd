import { Search } from "lucide-react";
import { Input } from "@shared/ui/input";

export const SearchInput = () => (
  <article className="flex items-center relative">
    <Search className="absolute left-3" size={18} />
    <Input
      className="max-w-[300px] pl-10 w-full"
      placeholder="Search something"
    />
  </article>
);
