import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiStar, FiShoppingCart } from "react-icons/fi";
import products from "../data/products";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-600">
              Product Not Found
            </h1>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
            >
              Back to Products
            </Link>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">

        <div className="mx-auto max-w-7xl px-6">

          <Link
            to="/products"
            className="mb-10 inline-flex items-center gap-2 text-violet-600 hover:text-violet-700"
          >
            <FiArrowLeft />
            Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Product Image */}

            <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-xl dark:bg-slate-900">

              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-[500px] w-full object-contain transition duration-500 hover:scale-110"
              />

            </div>

            {/* Product Info */}

            <div className="flex flex-col justify-center">
                            <span className="mb-3 inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                {product.category}
              </span>

              <h1 className="text-4xl font-black text-slate-900 dark:text-white">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-2">
                <FiStar className="fill-yellow-400 text-yellow-400" />

                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {product.rating}
                </span>

                <span className="text-slate-500">
                  Premium Rating
                </span>
              </div>

              {/* Price */}
              <h2 className="mt-6 text-5xl font-black text-violet-600">
                ${product.price}
              </h2>

              {/* Description */}
              <p className="mt-8 leading-8 text-slate-600 dark:text-slate-400">
                {product.description}
              </p>

              {/* Quantity */}
              <div className="mt-8 flex items-center gap-4">

                <span className="font-semibold dark:text-white">
                  Quantity
                </span>

                <div className="flex items-center rounded-xl border border-slate-300 dark:border-slate-700">

                 <button className="px-4 py-2 text-xl text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
  -
</button>
<span className="px-6 font-bold text-slate-900 dark:text-white">
  1
</span>

                 <button className="px-4 py-2 text-xl text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
  +
</button>
                </div>

              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
                  <FiShoppingCart />
                  Add to Cart
                </button>

                <button className="rounded-xl border-2 border-violet-600 px-8 py-4 font-semibold text-violet-600 transition hover:bg-violet-600 hover:text-white">
                  Buy Now
                </button>

              </div>

            </div>

 </div>
                    {/* Related Products */}
          <section className="mt-24">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                You May Also Like
              </h2>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Explore more premium products from our collection.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {products
                .filter(
                  (item) =>
                    item.category === product.category &&
                    item.id !== product.id
                )
                .slice(0, 4)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/products/${item.id}`}
                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="p-5">
                      <span className="text-sm text-violet-600">
                        {item.category}
                      </span>

                      <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xl font-bold text-violet-600">
                          ${item.price}
                        </span>

                        <span className="flex items-center gap-1 text-yellow-500">
                          <FiStar className="fill-yellow-400" />
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}