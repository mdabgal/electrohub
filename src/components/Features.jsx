import {
  FiTruck,
  FiShield,
  FiStar,
  FiHeadphones,
} from "react-icons/fi";


export default function Features() {

  const features = [
    {
      icon: <FiTruck />,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery service at your doorstep.",
    },
    {
      icon: <FiShield />,
      title: "Secure Payment",
      description:
        "Safe and secure payment system for customers.",
    },
    {
      icon: <FiStar />,
      title: "Premium Quality",
      description:
        "Original and high quality electronics products.",
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      description:
        "Always ready to help you with any issue.",
    },
  ];


  return (
    <section className="bg-white py-16 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-6">


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {features.map((item) => (

            <div
              key={item.title}
              className="
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-6
              transition
              hover:-translate-y-2
              hover:shadow-xl
              dark:border-slate-800
              dark:bg-slate-900
              "
            >

              <div
                className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-violet-100
                text-3xl
                text-violet-600
                dark:bg-violet-950
                "
              >
                {item.icon}
              </div>


              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}