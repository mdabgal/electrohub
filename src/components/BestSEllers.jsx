import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import products from "../data/products";

export default function BestSellers() {
  const bestProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="bg-slate-100 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
              Best Sellers
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
              Most Popular Products
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
              Explore our highest-rated electronics loved by thousands of happy customers.
            </p>

          </div>

          <Link
            to="/products"
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            View All

            <FiArrowRight />
          </Link>

        </div>

        {/* Product Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {bestProducts.map((product) => (

            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-slate-900">
                  ⭐ BEST SELLER
                </span>

              </div>
                            <div className="p-6">

                {/* Category */}
                <span className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <FiStar className="fill-yellow-400 text-yellow-400" />

                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {product.rating}
                  </span>
                </div>

                {/* Price + Button */}
                <div className="mt-6 flex items-center justify-between">

                  <span className="text-2xl font-black text-violet-600">
                    ${product.price}
                  </span>

                  <Link
                    to={`/products/${product.id}`}
                    className="rounded-xl bg-violet-600 px-5 py-2 font-semibold text-white transition hover:bg-violet-700"
                  >
                    Details
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}