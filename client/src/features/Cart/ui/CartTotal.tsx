import { Button } from "@shared/ui/button";

const CartTotal = () => {
  return (
    <article className="lg:max-w-[350px] flex flex-col gap-4 h-fit w-full shadow-md bg-white dark:bg-black rounded-lg p-5">
      <h3 className="text-xl font-bold">Cart Total</h3>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h4 className="text-neutral-500">Quantity</h4>
          <span className="font-medium">2 units</span>
        </div>
        <div className="flex justify-between">
          <h4 className="text-neutral-500">Subtotal amount</h4>
          <span className="font-medium">71.50$</span>
        </div>
        <div className="flex justify-between">
          <h4 className="text-neutral-500">Discount</h4>
          <span className="font-medium">1.50$</span>
        </div>
        <div className="flex justify-between">
          <h4 className="text-neutral-500">Total amount</h4>
          <span className="font-medium">70.00$</span>
        </div>
      </div>
      <Button>Check out</Button>
    </article>
  );
};

export default CartTotal;
