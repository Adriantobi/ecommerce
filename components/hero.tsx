import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col gap-3">
      <div className="max-h-[420px] flex justify-center items-center overflow-hidden">
        <Image
          src="https://shopswaywear.ca/cdn/shop/files/minimalist-retail-clothing-display.jpg?v=1708023468&width=1500"
          alt="Hero"
          width={1500}
          height={1000}
          priority={true}
        />
      </div>
      <span className="flex flex-col gap-8 border-b border-b-white border-opacity-15">
        <h1 className="sm:text-4xl text-2xl font-bold italic text-center text-wrap">
          Welcome to the future of fashion
        </h1>
        <p className="text-center text-white text-opacity-65 pb-2 text-wrap">
          Shop the latest trends in fashion and accessories.
        </p>
      </span>
    </div>
  );
}
