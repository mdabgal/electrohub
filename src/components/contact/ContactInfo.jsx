import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

const contactInfo = [
  {
    id: 1,
    icon: <FiMapPin />,
    title: "Our Address",
    value: "123 Tech Street, Dhaka 1207, Bangladesh",
  },
  {
    id: 2,
    icon: <FiPhone />,
    title: "Phone Number",
    value: "+880 1754252246",
  },
  {
    id: 3,
    icon: <FiMail />,
    title: "Email Address",
    value: "support@electrohub.com",
  },
  {
    id: 4,
    icon: <FiClock />,
    title: "Working Hours",
    value: "Mon - Sat : 9:00 AM - 8:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <div>
      <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
        Contact Information
      </span>

      <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
        We'd Love To Hear From You
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
        Have questions about our products or services?
        Feel free to contact us anytime. Our support team
        is always ready to help you.
      </p>

      <div className="mt-10 space-y-6">
        {contactInfo.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
         
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
              {item.icon}
            </div>

           
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}