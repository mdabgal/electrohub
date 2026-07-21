import { motion } from "framer-motion";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import heroImage from "../assets/hero-product.png";
export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-950 dark:text-violet-400">
            Latest Technology Collection
          </span>


          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-6xl">

            Upgrade Your
            <span className="text-violet-600">
              {" "}Digital Life
            </span>

          </h1>


          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">

            Discover premium laptops, smartphones,
            smart watches and modern gadgets with
            unbeatable quality and prices.

          </p>


          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">


            <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">

              Shop Now
              <FiArrowRight />

            </button>


            <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800">

              <FiShoppingBag />

              Explore Products

            </button>


          </div>


          {/* Stats */}

          <div className="mt-10 flex gap-8">

            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                10K+
              </h3>

              <p className="text-sm text-slate-500">
                Happy Customers
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                500+
              </h3>

              <p className="text-sm text-slate-500">
                Products
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                24/7
              </h3>

              <p className="text-sm text-slate-500">
                Support
              </p>
            </div>

          </div>


        </motion.div>



        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          <div className="absolute h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"></div>

<motion.img
  src={heroImage}
  alt="Electronics Product"
  animate={{
    y: [0, -20, 0],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
 className="
relative z-10
w-[600px] max-w-full
rounded-3xl
border border-white/30
bg-white/10
p-5
shadow-2xl
backdrop-blur-lg
dark:border-slate-700
"
  
/>
        </motion.div>


      </div>
    </section>
  );
}