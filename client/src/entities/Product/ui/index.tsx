import Product from "./Product";

export const ProductWrapper = () => {
  return (
    <section className="flex-center">
      <div className="width lg:w-full w-fit grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center ">
        {Array.from({ length: 5 }).map((_, index) => (
          <Product />
        ))}
      </div>
    </section>
  );
};
