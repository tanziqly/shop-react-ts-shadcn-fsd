import { FC } from "react";
import Banner from "./Banner";
import { ProductWrapper } from "@entities/Product";

export const Home: FC = () => {
  return (
    <div>
      <Banner />
      <ProductWrapper />
    </div>
  );
};
