import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, ShoppingBag } from "lucide-react";

import { SearchInput } from "./SearchInput";
import { AuthButtons } from "./AuthButtons";
import { UserProfile } from "./UserProfile";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAuth: Boolean = true;

  return (
    <>
      <nav className="container flex justify-between items-center">
        <Link to="/" className="text-lg font-bold flex gap-1 items-center">
          <ShoppingBag size={24} />
          Tanziqly.shop
        </Link>
        <div className="hidden sm:flex gap-2">
          <SearchInput />
          <div className="flex items-center gap-1">
            {isAuth ? <UserProfile /> : <AuthButtons />}
          </div>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="sm:hidden p-2"
        >
          <Menu size={24} />
        </button>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
