import CartItemWrapper from "./CartItemWrapper";
import CartTotal from "./CartTotal";

export const Cart = () => {
  return (
    <section className="flex px-5 flex-col pb-8 items-center w-full">
      <div className="flex flex-col items-center lg:items-start gap-1 my-8 w-full width">
        <h2 className="text-2xl font-bold">Shopping bag</h2>
        <div>
          <span className="font-bold">2 items</span> in your bag.
        </div>
      </div>
      <div className="w-full sm:w-fit lg:w-full lg:width lg:flex-row flex-col-reverse lg:items-start items-center flex gap-5">
        <CartItemWrapper />
        <CartTotal />
      </div>
    </section>
  );
};
