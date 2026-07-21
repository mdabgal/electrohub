import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function FeaturedProducts() {
  // Home page-এ শুধু প্রথম ৬টি product দেখাবে
  const featuredProducts = products.slice(0, 6);

  return (
    <section
      id="products"
      className="bg-slate-50 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
            Featured Collection
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            Featured Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Discover our latest collection of premium electronics,
            carefully selected for performance, quality, and innovation.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}