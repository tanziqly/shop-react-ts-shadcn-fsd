import { Link } from "react-router-dom";
import image from "./product.jpeg";

const Product = () => {
  return (
    <div className="flex transition duration-300 ease-in-out hover:scale-105 flex-col hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm max-w-[240px] w-full">
      <Link to="/product" className="block">
        <div className="flex flex-col">
          <img src={image} className="w-full h-56 rounded-t-sm" alt="Product" />
          <div className="flex flex-col gap-1 p-2">
            <h3 className="text-xl font-bold">Product1</h3>
            <span className="text-neutral-500">
              Lorem ipsum asdasddsdsad dolor sit amet.
            </span>
          </div>
        </div>
      </Link>
      <div className="flex justify-between mt-2 p-2">
        <span className="text-lg font-bold">77$</span>
        <Link to="/category" className="text-neutral-400 hover:underline">
          Clothes
        </Link>
      </div>
    </div>
  );
};

export default Product;
