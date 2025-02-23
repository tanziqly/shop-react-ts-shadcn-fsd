import image from "./product.jpeg";

const CartItem = () => {
  return (
    <div className="grid grid-cols-12 gap-4 border-t pt-4 items-center mb-4">
      <div className="col-span-6 flex items-center">
        <img src={image} className="w-32 h-32 rounded-lg mr-4" />
        <div>
          <div className="font-semibold">Floral Print Wrap Dress</div>
          <div className="text-sm text-gray-500">Color • Blue</div>
          <div className="text-sm text-gray-500">Size • 42</div>
        </div>
      </div>
      <div className="col-span-2 text-neutral-500">$20.50</div>
      <div className="col-span-2 flex items-center">
        <button className="border rounded px-2 py-1">-</button>
        <span className="mx-2">2</span>
        <button className="border rounded px-2 py-1">+</button>
      </div>
      <div className="col-span-2 font-semibold">$41.00</div>
    </div>
  );
};

export default CartItem;
