import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MostPopular } from "@/components/most-popular";
import { Nav } from "@/components/nav";
import { ShopAll } from "@/components/shop-all";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <MostPopular />
      <ShopAll />
      <Footer />
    </main>
  );
}
