import {
  SiApple,
  SiSamsung,
  SiSony,
  SiDell,
  SiHp,
  SiAsus,
  SiLenovo,
} from "react-icons/si";

const brands = [
  {
    name: "Apple",
    icon: <SiApple />,
  },
  {
    name: "Samsung",
    icon: <SiSamsung />,
  },
  {
    name: "Sony",
    icon: <SiSony />,
  },
  {
    name: "Dell",
    icon: <SiDell />,
  },
  {
    name: "HP",
    icon: <SiHp />,
  },
  {
    name: "ASUS",
    icon: <SiAsus />,
  },
  {
    name: "Lenovo",
    icon: <SiLenovo />,
  },
];

export default function BrandLogos() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
            Trusted Brands
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            Shop Top Technology Brands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Discover premium electronics from the world's most trusted
            technology companies with genuine products and official warranty.
          </p>

        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">

          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >

              <div className="flex justify-center">

                <div className="rounded-full bg-slate-100 p-5 transition group-hover:bg-violet-100 dark:bg-slate-800 dark:group-hover:bg-violet-900/40">

                  <div className="text-5xl text-slate-700 transition group-hover:text-violet-600 dark:text-white">
                    {brand.icon}
                  </div>

                </div>

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                {brand.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Official Brand
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}