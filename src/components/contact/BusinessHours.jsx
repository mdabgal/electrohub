import {
  FiClock,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

const schedule = [
  {
    day: "Monday",
    time: "9:00 AM - 8:00 PM",
    open: true,
  },
  {
    day: "Tuesday",
    time: "9:00 AM - 8:00 PM",
    open: true,
  },
  {
    day: "Wednesday",
    time: "9:00 AM - 8:00 PM",
    open: true,
  },
  {
    day: "Thursday",
    time: "9:00 AM - 8:00 PM",
    open: true,
  },
  {
    day: "Friday",
    time: "9:00 AM - 8:00 PM",
    open: true,
  },
  {
    day: "Saturday",
    time: "10:00 AM - 6:00 PM",
    open: true,
  },
  {
    day: "Sunday",
    time: "Closed",
    open: false,
  },
];

export default function BusinessHours() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">



        <div className="mb-12 text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
            Business Hours
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            We're Available
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Visit us or contact our support team during working hours.
          </p>

        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">

          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-slate-200 py-5 last:border-none dark:border-slate-700"
            >
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
                  <FiCalendar className="text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {item.day}
                  </h3>

                  <p className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <FiClock />
                    {item.time}
                  </p>
                </div>

              </div>

              {item.open ? (
                <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <FiCheckCircle />
                  Open
                </span>
              ) : (
                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  Closed
                </span>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}