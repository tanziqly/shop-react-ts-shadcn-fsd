import { Search } from "lucide-react";
import { ArrowDownWideNarrow } from "lucide-react";

import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";

export const SearchInput = () => (
  <article className="flex gap-2 mt-4 max-w-[550px] w-full items-center relative">
    <Search className="absolute left-4" size={22} />
    <Input
      className="pl-12 py-5 sm:py-6 w-full"
      placeholder="Search something"
    />
    <Button className="py-5 px-3">
      <ArrowDownWideNarrow />
    </Button>
  </article>
);
