import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

const popular = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    media:
      "https://shopswaywear.ca/cdn/shop/files/12095BC4-EBDE-4D7F-B5D7-948707974FD8.jpg?v=1699481558&width=360",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    media:
      "https://shopswaywear.ca/cdn/shop/files/IMG-0216.jpg?v=1712014943&width=360",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    media:
      "https://shopswaywear.ca/cdn/shop/files/9B82DD18-F71C-45EB-88F3-7AE4D928B01B.jpg?v=1711067432&width=360",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    media:
      "https://shopswaywear.ca/cdn/shop/files/95F7C3C2-AADB-4452-9CC2-D246965F92B1.jpg?v=1710815922",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    media:
      "https://shopswaywear.ca/cdn/shop/files/2760D3D1-DE42-46C8-B856-E55B15D4CE13.jpg?v=1712016230&width=360",
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    media:
      "https://shopswaywear.ca/cdn/shop/files/E70B85F7-BD02-4A21-B122-10EDC52FC805.jpg?v=1710814916&width=360",
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    media:
      "https://shopswaywear.ca/cdn/shop/files/5EB92742-DF1F-477D-B2E8-B95E1E740C82.jpg?v=1703205484&width=360",
  },
  {
    id: 8,
    name: "Product 8",
    price: 800,
    media:
      "https://shopswaywear.ca/cdn/shop/products/image_cc92d1ae-30f1-4601-89ea-228a9588fd2d.jpg?v=1679338732&width=360",
  },
  {
    id: 9,
    name: "Product 9",
    price: 900,
    media:
      "https://shopswaywear.ca/cdn/shop/products/image_03a0fd8c-c847-4642-8ff2-ec8c9df05132.jpg?v=1659632893&width=360",
  },
  {
    id: 10,
    name: "Product 10",
    price: 1000,
    media:
      "https://shopswaywear.ca/cdn/shop/products/image_564afe75-ebb5-407f-8cee-ad2c38635896.jpg?v=1659635050&width=360",
  },
  {
    id: 11,
    name: "Product 11",
    price: 1100,
    media:
      "https://shopswaywear.ca/cdn/shop/files/EF444CE5-6169-4EBB-AD37-3F6253228CC1.jpg?v=1708309543&width=360",
  },
];

export default function Shop() {
  return (
    <main>
      <Nav />
      <div className="flex flex-col items-center">
        <div className="!max-w-4xl w-full pt-7 pb-9 flex flex-col gap-10">
          <h1 className="text-4xl">Products</h1>
          <ul className="grid grid-cols-4 gap-2">
            {popular.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  className="flex gap-7 flex-col cursor-pointer group"
                >
                  <div className="w-[220px] h-[220px] overflow-hidden">
                    <Image
                      src={product.media}
                      alt={product.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href={`/products/${product.id}`}
                      className={`text-xs group-hover:underline`}
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm">From £{product.price}.00 GBP</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
