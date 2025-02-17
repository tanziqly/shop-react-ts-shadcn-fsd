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
        <header>
          <Header />
        </header>
      )}
      <main>{children}</main>
      {showFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};
