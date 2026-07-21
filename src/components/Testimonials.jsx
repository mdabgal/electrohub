import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "ElectroHub exceeded my expectations. The laptop arrived quickly, and the product quality is outstanding.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Amazing customer service and genuine products. I'll definitely shop here again.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Content Creator",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    review:
      "The camera I purchased is fantastic. Fast delivery and excellent packaging.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Thousands of customers trust ElectroHub for premium electronics,
            fast delivery, and outstanding customer support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Rating */}
              <div className="mb-5 flex gap-1">
                {[...Array(item.rating)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-lg text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full border-4 border-violet-200 object-cover dark:border-violet-700"
                />

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}