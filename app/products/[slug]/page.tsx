import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { ProductPage } from "@/components/product-page";

export default function Products({ params }: { params: { slug: number } }) {
  return (
    <main>
      <Nav />
      <ProductPage id={params.slug} />
      <Footer />
    </main>
  );
}
