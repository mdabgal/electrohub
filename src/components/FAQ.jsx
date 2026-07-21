import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const questions = [
  {
    id: 1,
    question: "How can I place an order?",
    answer:
      "You can easily place an order by selecting your favorite product, clicking the details button, and completing the checkout process.",
  },
  {
    id: 2,
    question: "Do you provide product warranty?",
    answer:
      "Yes, all official products come with brand warranty and our support team is always ready to help you.",
  },
  {
    id: 3,
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 2-5 business days depending on your location.",
  },
  {
    id: 4,
    question: "Can I return a product?",
    answer:
      "Yes, you can return eligible products within our return policy period.",
  },
  {
    id: 5,
    question: "Do you offer customer support?",
    answer:
      "Yes, our customer support team is available to assist you with any product or order related issues.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-slate-100 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/30 dark:text-violet-300">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Find answers to common questions about our products,
            delivery, warranty and services.
          </p>

        </div>


        {/* FAQ Items */}

        <div className="space-y-5">

          {questions.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-900"
            >

              <button
                onClick={() =>
                  setActive(active === item.id ? null : item.id)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.question}
                </h3>


                <FiChevronDown
                  className={`text-2xl text-violet-600 transition-transform duration-300 ${
                    active === item.id ? "rotate-180" : ""
                  }`}
                />

              </button>


              <div
                className={`grid transition-all duration-300 ${
                  active === item.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >

                <div className="overflow-hidden">

                  <p className="px-6 pb-6 leading-7 text-slate-600 dark:text-slate-400">
                    {item.answer}
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