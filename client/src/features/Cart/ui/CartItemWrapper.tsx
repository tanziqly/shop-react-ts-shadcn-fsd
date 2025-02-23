import CartItem from "./CartItem";

const CartItemWrapper = () => {
  return (
    <article className="flex-1 mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-12 gap-4 pb-2">
        <div className="col-span-6 font-semibold">Product</div>
        <div className="col-span-2 font-semibold">Price</div>
        <div className="col-span-2 font-semibold">Quantity</div>
        <div className="col-span-2 font-semibold">Total Price</div>
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
        <CartItem />
      ))}
    </article>
  );
};

export default CartItemWrapper;
