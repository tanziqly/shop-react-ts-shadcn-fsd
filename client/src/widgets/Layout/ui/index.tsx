import React, { FC } from "react";
import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";

type LayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
};

export const Layout: FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <>
      {showHeader && (
        <header className="flex-center px-5 py-2 border-b">
          <Header />
        </header>
      )}
      <main className="h-screen">{children}</main>
      {showFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};
