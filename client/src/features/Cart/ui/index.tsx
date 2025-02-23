import CartItemWrapper from "./CartItemWrapper";
import CartTotal from "./CartTotal";

export const Cart = () => {
  return (
    <section className="flex flex-col pb-8 bg-muted items-center w-full">
      <div className="flex flex-col gap-1 my-8 w-full width">
        <h2 className="text-2xl font-bold">Shopping bag</h2>
        <div>
          <span className="font-bold">2 items</span> in your bag.
        </div>
      </div>
      <div className="width flex gap-5">
        <CartItemWrapper />
        <CartTotal />
      </div>
    </section>
  );
};
