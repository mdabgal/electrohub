 import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import SearchFilter from "../components/SearchFilter";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 dark:bg-slate-950">

        {/* Hero */}
        <section className="bg-violet-600 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-5xl font-black">
              Our Products
            </h1>

            <p className="mt-4 text-violet-100">
              Explore our premium electronics collection.
            </p>
          </div>
        </section>

        {/* Search */}
        <SearchFilter />

        {/* Products */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-10 flex items-center justify-between">

              <h2 className="text-3xl font-bold dark:text-white">
                All Products
              </h2>

              <span className="text-slate-500 dark:text-slate-400">
                {products.length} Products
              </span>

            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}