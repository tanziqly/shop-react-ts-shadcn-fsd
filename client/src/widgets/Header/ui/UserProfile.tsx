import { ShoppingBasket } from "lucide-react";
import { Button } from "@shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar";
import { ModeToggle } from "@shared/ui/modeToggle";
import { Link } from "react-router-dom";

export const UserProfile = () => (
  <div className="flex gap-2">
    <ModeToggle />
    <Button asChild variant="outline" size="icon">
      <Link to="/cart">
        <ShoppingBasket />
      </Link>
    </Button>
    <Link to="/profile">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  </div>
);
