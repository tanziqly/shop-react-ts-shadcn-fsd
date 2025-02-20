import { SearchInput } from "./SearchInput";

const Banner = () => {
  return (
    <div className="width border-b mb-8 flex-col px-5 items-center py-24 gap-2">
      <h1 className="text-2xl sm:text-4xl font-black uppercase custom-gradient-text">
        Tanziqly.shop
      </h1>
      <span className="text-neutral-400 text-center sm:text-xl">
        You can buy from this everything you want and everything you don't want.
      </span>
      <SearchInput />
      <span className="text-neutral-400">*try to search the product</span>
    </div>
  );
};

export default Banner;
