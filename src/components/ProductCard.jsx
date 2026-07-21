import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Product Image */}
      <div className="overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-contain p-6 transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600 dark:bg-violet-900/40 dark:text-violet-300">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          <FiStar className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">

          <h4 className="text-2xl font-black text-violet-600">
            ${product.price}
          </h4>

          <Link
            to={`/products/${product.id}`}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Details
            <FiArrowRight />
          </Link>

        </div>

      </div>
    </motion.div>
  );
}