import { Link } from "react-router-dom";
import image from "./product.jpeg";

const Product = () => {
  return (
    <Link
      to="/profile"
      className="flex hover:bg-neutral-100 rounded-sm max-w-[240px] w-full flex-col"
    >
      <img src={image} className="w-full h-56 rounded-md" alt="" />
      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-xl font-bold">Product1</h3>
        <span className="text-neutral-500">
          Lorem ipsum asdasddsdsad dolor sit amet.
        </span>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-bold">77$</span>
          <Link to="/category" className="text-neutral-400 hover:underline">
            Clothes
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Product;
