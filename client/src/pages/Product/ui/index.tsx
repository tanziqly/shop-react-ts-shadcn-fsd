import { FC } from "react";
import ProductImage from "./product.jpeg";
import { Link } from "react-router-dom";
import { Button } from "@shared/ui/button";

export const Product: FC = () => {
  return (
    <section className="h-screen w-full flex justify-center">
      <div className="flex gap-16 w-full h-fit max-w-[1240px] mt-12 px-5">
        <img
          src={ProductImage}
          className="w-[450px] h-[450px] rounded-lg"
          alt=""
        />
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 flex-col">
            <Link to="/" className="text-xl text-neutral-500 underline">
              Clothes
            </Link>
            <h2 className="text-4xl my-2 font-black">Product 1</h2>
            <span className="text-neutral-500 text-xl">
              Lorem ipsum asdasddsdsad dolor sit amet.
            </span>
            <h3 className="text-2xl font-bold">77$</h3>
          </div>
          <div>
            <hr className="border my-2" />
            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <Button variant="outline">+</Button>
                <span className="text-xl">1</span>
                <Button variant="outline">-</Button>
              </div>
              <Button className="w-full">Click to Buy</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
