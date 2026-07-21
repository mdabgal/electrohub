import { FiSend, FiMail } from "react-icons/fi";

export default function Newsletter() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 p-8 shadow-2xl md:p-14">

          <div className="grid items-center gap-10 lg:grid-cols-2">


            {/* Left Content */}

            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                <FiMail className="text-3xl text-white" />
              </div>


              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">

                Subscribe To Our
                <span className="block text-yellow-300">
                  Newsletter
                </span>

              </h2>


              <p className="mt-5 max-w-xl text-lg leading-8 text-violet-100">

                Get the latest updates, exclusive offers,
                and new product announcements directly in your inbox.

              </p>


              <div className="mt-6 inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">

                🎁 Get 20% OFF on your first order

              </div>


            </div>



            {/* Right Form */}

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-lg md:p-8">


              <form className="flex flex-col gap-4">


                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="rounded-xl border border-white/30 bg-white px-5 py-4 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-yellow-300"
                />


                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
                >

                  Subscribe

                  <FiSend />

                </button>


              </form>



              <p className="mt-5 text-center text-sm text-violet-100">

                No spam. Unsubscribe anytime.

              </p>


            </div>


          </div>

        </div>

      </div>
    </section>
  );
}