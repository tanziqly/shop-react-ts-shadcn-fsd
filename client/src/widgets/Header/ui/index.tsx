import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { SearchInput } from "./SearchInput";
import { AuthButtons } from "./AuthButtons";
import { UserProfile } from "./UserProfile";

export const Header = () => {
  const isAuth = true;

  return (
    <nav className="width flex justify-between">
      <Link to="/" className="text-lg font-bold flex gap-1 items-center">
        <ShoppingBag size={24} />
        Tanziqly.shop
      </Link>
      <div className="flex gap-2">
        <SearchInput />
        <div className="flex items-center gap-1">
          {isAuth ? <UserProfile /> : <AuthButtons />}
        </div>
      </div>
    </nav>
  );
};
