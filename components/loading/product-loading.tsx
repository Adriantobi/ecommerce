import Link from "next/link";

export async function ProductLoading() {
  const sizes = [
    { id: 1, name: "Small", available: 5 },
    { id: 2, name: "Medium", available: 5 },
    { id: 3, name: "Large", available: 5 },
  ];

  const styles = [
    { id: 1, name: "Style 1" },
    { id: 2, name: "Style 2" },
    { id: 3, name: "Style 3" },
  ];

  return (
    <div className="flex flex-col items-center pt-8">
      <div className="!max-w-4xl w-full flex gap-10">
        <div className="min-w-[585px] min-h-[585px] max-w-[585px] max-h-[585px] bg-zinc-900 animate-pulse"></div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-6 pt-2">
            <h1 className="text-4xl max-w-96 text-transparent bg-zinc-900 animate-pulse">
              Cool Name
            </h1>
            <span className=" text-transparent bg-zinc-900 animate-pulse">
              £100.00 GBP
            </span>
          </div>
          <div className="text-xs">
            <Link href="/policies/shipping" className="underline text-blue-500">
              Shipping
            </Link>{" "}
            calculated at checkout
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Size</p>
            <ul className="flex flex-wrap gap-2">
              {sizes?.map((size) => (
                <li
                  key={size.id}
                  className="flex px-4 py-2 text-sm border border-transparent border-opacity-65 hover:border-opacity-80 rounded-full cursor-pointer bg-zinc-900 animate-pulse text-transparent"
                >
                  <span>{size.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Style</p>
            <ul className="flex flex-wrap gap-2">
              {styles?.map((style) => (
                <li
                  key={style.id}
                  className="flex px-4 py-2 text-sm border border-transparent border-opacity-65 hover:border-opacity-80 rounded-full cursor-pointer bg-zinc-900 animate-pulse text-transparent"
                >
                  <span>{style.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Quantity</p>
            <div className="flex gap-2 border border-white border-opacity-65 w-fit items-center">
              <button className="cursor-pointer p-3">-</button>
              <span className="w-8 text-center">1</span>
              <button className="cursor-pointer p-3">+</button>
            </div>
            <span className="bg-zinc-900 w-full text-center py-3 text-sm mt-4 cursor-pointer">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
