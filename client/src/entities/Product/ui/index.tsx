import Product from "./Product";

export const ProductWrapper = () => {
  return (
    <section className="flex-center">
      <div className="width grid gap-4 grid-cols-1 sm:grid-cols-2 justify-items-center lg:grid-cols-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Product />
        ))}
      </div>
    </section>
  );
};
