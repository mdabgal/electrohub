

import { FiMapPin } from "react-icons/fi";

export default function GoogleMap() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

       
        <div className="mb-12 text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
            Our Location
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            Visit Our Store
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Find ElectroHub on the map and visit our showroom for the latest
            electronics and exclusive offers.
          </p>

        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">

          <iframe
            title="ElectroHub Location"
            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>

        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-lg dark:border-slate-700 dark:bg-slate-800">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-3xl text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
            <FiMapPin />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
            ElectroHub Showroom
          </h3>

          {/* <p className="mt-3 text-slate-600 dark:text-slate-400">
            123 Tech Street, Dhaka 1207, Bangladesh
          </p> */}

          <p className="mt-2 text-slate-500 dark:text-slate-500">
            Open Monday – Saturday | 9:00 AM – 8:00 PM
          </p>

        </div>

      </div>
    </section>
  );
}