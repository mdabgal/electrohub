import {
  FiMonitor,
  FiSmartphone,
  FiHeadphones,
  FiCamera,
  FiWatch,
  FiArrowRight,
} from "react-icons/fi";

const categories = [
  {
    name: "Laptop",
    icon: <FiMonitor />,
    total: "25+ Products",
  },
  {
    name: "Smartphone",
    icon: <FiSmartphone />,
    total: "18+ Products",
  },
  {
    name: "Headphone",
    icon: <FiHeadphones />,
    total: "15+ Products",
  },
  {
    name: "Camera",
    icon: <FiCamera />,
    total: "10+ Products",
  },
  {
    name: "Smart Watch",
    icon: <FiWatch />,
    total: "12+ Products",
  },
  {
    name: "Accessories",
    icon: <FiMonitor />,
    total: "30+ Products",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
            Categories
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            Shop by Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Browse our premium electronics collection by category and find the
            perfect device for your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.name}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-950"
            >
              {/* Icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-100 text-4xl text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {item.name}
              </h3>

              {/* Products */}
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {item.total}
              </p>

              {/* Button */}
              <button className="mt-6 flex items-center gap-2 font-semibold text-violet-600 transition group-hover:gap-3">
                Shop Now
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}