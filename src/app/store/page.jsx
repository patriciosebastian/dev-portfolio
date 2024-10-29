import MobileNav from "@/components/mobile-nav"
import Spacer from "@/components/ui/spacer"
import Image from "next/image"
import Link from "next/link"
import MainFooter from "@/components/main-footer"
import { buttonVariants } from "@/components/ui/button"

export default async function Store() {
  let products = [];
  let error = null;

  try {
    const res = await fetch(`https://api.gumroad.com/v2/products?access_token=${process.env.GUMROAD_ACCESS_TOKEN}`);

    if (!res.ok) {
      throw new Error('Failed to fetch products, status: ' + data.status);
    }

    const data = await res.json();
    products = data.products;
    console.log('products:', products);
  } catch (err) {
    console.error('Error fetching products:', err);
    error = err.message || 'Failed trying to fetch products';
  }

  return (
    <>
      <MobileNav />

      {/* Header */}
      <div className="store-header w-full h-80 flex justify-center items-center mt-16">
        <h1 className="text-6xl text-center w-fit mx-auto font-medium dark:text-primary-foreground">S&nbsp;&nbsp;&nbsp;&nbsp;H&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;P</h1>
      </div>

      <Spacer />

      {error && <p>{error}</p>}

      {/* Products Grid */}
      <div className="text-center text-balance lg:grid grid-cols-2 justify-items-center items-center gap-x-2 gap-y-4">
        {products.length > 0 ? (
          (products.map((product) => {
            return (
              <div key={product.id} className="max-w-md">
                <Image src={product.preview_url} alt={product.name} width={200} height={200} className="w-full" />
                <div className="mb-3 font-medium">{product.name}</div>
                <Link href={`${product.short_url}`} className={buttonVariants({ variant: "default", size: "lg" }) + ` !text-lg !w-fit`} target="_blank">View on Gumroad</Link>
              </div>
            );
          }))
        ) : (
          <p>No products found</p>
        )}
      </div>

      <Spacer />

      <MainFooter />
    </>
  );
}