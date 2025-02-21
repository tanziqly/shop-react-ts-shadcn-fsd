import { FC } from "react";
import Banner from "./Banner";
import { ProductWrapper } from "@entities/Product";

export const Home: FC = () => {
  return (
    <div className="width flex flex-col">
      <Banner />
      <ProductWrapper />
    </div>
  );
};
