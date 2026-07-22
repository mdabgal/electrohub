import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiChevronRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

         
          <div>
            <h2 className="text-3xl font-black">
              <span className="text-violet-600">Electro</span>
              <span className="text-slate-900 dark:text-white">
                Hub
              </span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Explore premium electronics with modern technology,
              quality products, and a better shopping experience.
            </p>

           <div className="mt-6 flex gap-3">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/YOUR_FACEBOOK_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition hover:bg-violet-600 hover:text-white dark:bg-slate-800 dark:text-white"
  >
    <FaFacebookF />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/jannati-jannati-0203693b4"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition hover:bg-violet-600 hover:text-white dark:bg-slate-800 dark:text-white"
  >
    <FaLinkedinIn />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/mdabgal"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 transition hover:bg-violet-600 hover:text-white dark:bg-slate-800 dark:text-white"
  >
    <FaGithub />
  </a>
</div>
          </div>


          <div className="md:text-center">

            <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

             <li>
    <Link
      to="/"
      className="flex items-center gap-2 text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 md:justify-center"
    >
      <FiChevronRight />
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/products"
      className="flex items-center gap-2 text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 md:justify-center"
    >
      <FiChevronRight />
      Products
    </Link>
  </li>

  <li>
    <Link
      to="/contact"
      className="flex items-center gap-2 text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 md:justify-center"
    >
      <FiChevronRight />
      Contact
    </Link>
  </li>
            </ul>

          </div>


        
          <div>

            <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
              Contact Us
            </h3>


            <div className="space-y-4 text-slate-600 dark:text-slate-400">

              <p className="flex items-center gap-3">
                <FiMail className="text-violet-600" />
                jannati2917@gmail.com
              </p>


              <p className="flex items-center gap-3">
                <FiPhone className="text-violet-600" />
                +880 1754252246
              </p>


              <p className="flex items-center gap-3">
                <FiMapPin className="text-violet-600" />
                Dhaka, Bangladesh
              </p>

            </div>

          </div>


        </div>


        
        <div className="mt-12 border-t border-slate-200 pt-6 text-center dark:border-slate-800">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} ElectroHub. All Rights Reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}