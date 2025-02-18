import { motion } from "framer-motion";
import { SearchInput } from "./SearchInput";
import { AuthButtons } from "./AuthButtons";
import { UserProfile } from "./UserProfile";

import { X } from "lucide-react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const isAuth: Boolean = true;
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed inset-y-0 right-0 w-64 bg-background p-4 shadow-lg"
    >
      <button onClick={onClose} className="absolute top-4 right-4">
        <X />
      </button>
      <div className="mt-8 flex flex-col gap-2">
        <SearchInput />

        {isAuth ? <UserProfile /> : <AuthButtons />}
      </div>
    </motion.div>
  );
};
