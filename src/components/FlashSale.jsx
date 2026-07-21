import {
  FiClock,
  FiArrowRight,
  FiZap,
} from "react-icons/fi";

export default function FlashSale() {
  return (
    <section className="bg-slate-100 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-700 via-indigo-700 to-purple-700 shadow-2xl">

          <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">

            {/* Left Side */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">

                <FiZap />

                Flash Sale

              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white">

                Up To

                <span className="block text-yellow-300">
                  50% OFF
                </span>

                Premium Electronics

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-violet-100">

                Don't miss today's biggest deals on laptops,
                smartphones, headphones and premium accessories.

              </p>

              {/* Countdown */}
              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-2xl bg-white/15 px-6 py-5 text-center backdrop-blur">

                  <h3 className="text-3xl font-black text-white">
                    02
                  </h3>

                  <p className="mt-1 text-sm text-violet-100">
                    Days
                  </p>

                </div>

                <div className="rounded-2xl bg-white/15 px-6 py-5 text-center backdrop-blur">

                  <h3 className="text-3xl font-black text-white">
                    18
                  </h3>

                  <p className="mt-1 text-sm text-violet-100">
                    Hours
                  </p>

                </div>

                <div className="rounded-2xl bg-white/15 px-6 py-5 text-center backdrop-blur">

                  <h3 className="text-3xl font-black text-white">
                    45
                  </h3>

                  <p className="mt-1 text-sm text-violet-100">
                    Minutes
                  </p>

                </div>

                <div className="rounded-2xl bg-white/15 px-6 py-5 text-center backdrop-blur">

                  <h3 className="text-3xl font-black text-white">
                    12
                  </h3>

                  <p className="mt-1 text-sm text-violet-100">
                    Seconds
                  </p>

                </div>

              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">

                <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-violet-700 transition hover:scale-105">

                  Shop Now

                  <FiArrowRight />

                </button>

                <button className="flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10">

                  <FiClock />

                  Ends Soon

                </button>

              </div>

            </div>

            {/* Right Side */}
            <div className="flex justify-center">


                              <div className="relative">

                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 rounded-full bg-violet-500/30 blur-3xl"></div>

                {/* Discount Badge */}
                <div className="absolute -left-5 -top-5 z-10 rounded-2xl bg-yellow-400 px-5 py-3 shadow-xl">
                  <p className="text-sm font-semibold text-slate-900">
                    LIMITED OFFER
                  </p>

                  <h3 className="text-2xl font-black text-slate-900">
                    50% OFF
                  </h3>
                </div>

                {/* Product Image */}
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
                  alt="Flash Sale Product"
                  className="w-full max-w-md rounded-3xl border-8 border-white/20 shadow-2xl transition duration-500 hover:scale-105"
                />

                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-5 shadow-2xl dark:bg-slate-900">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Starting From
                  </p>

                  <h3 className="mt-1 text-3xl font-black text-violet-600">
                    $499
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}