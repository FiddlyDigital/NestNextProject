import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { getAllProducts } from "./products/products.api";

export const dynamic = "force-dynamic";

async function HomePage() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">NextNestApp</h1>

        <Link
          className={buttonVariants()}
          href="/products/new">
          Create Product
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {
          products.map((product: any) => (
            <ProductCard product={product} key={product.id} />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage