import image from "./product.jpeg";

const CartItem = () => {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-12 gap-4 border-t pt-4 items-center mb-4">
      <div className="col-span-6 flex sm:flex-row flex-col items-center">
        <img src={image} className="w-32 h-32 rounded-lg mr-4" />
        <div>
          <div className="font-semibold mt-2 sm:mt-0 text-center sm:text-start">
            Floral Print Wrap Dress
          </div>
          <div className="text-sm text-gray-500 text-center sm:text-start">
            Color • Blue
          </div>
          <div className="text-sm text-gray-500 text-center sm:text-start">
            Size • 42
          </div>
        </div>
      </div>
      <div className="hidden sm:block col-span-2 text-neutral-500">$20.50</div>
      <div className="hidden sm:flex col-span-2 items-center">
        <button className="border rounded px-2 py-1">-</button>
        <span className="mx-2">2</span>
        <button className="border rounded px-2 py-1">+</button>
      </div>
      <div className="hidden sm:block col-span-2 font-semibold">$41.00</div>
      {/* Mobile menu */}
      <div className="w-full col-span-6 flex justify-center">
        <div className="flex sm:hidden flex-col">
          <div className="flex gap-2 text-neutral-500">
            <span className="block text-black font-normal">Price: </span>
            $20.50
          </div>
          <div className="flex items-center">
            <span className="block mr-2 text-black font-normal">
              Quantity:{" "}
            </span>
            <button className="border rounded px-2 py-1">-</button>
            <span className="mx-2">2</span>
            <button className="border rounded px-2 py-1">+</button>
          </div>
          <div className="flex gap-2 font-semibold">
            <span className="text-black font-normal">Total Price: </span>
            $41.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
