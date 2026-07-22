import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-black tracking-wide"
        >
          <span className="text-violet-600">
            Electro
          </span>

          <span className="text-slate-900 dark:text-white">
            Hub
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `border-b-2 pb-1 font-semibold transition duration-300 ${
                  isActive
                    ? "border-violet-600 text-violet-600"
                    : "border-transparent text-slate-700 hover:border-violet-600 hover:text-violet-600 dark:text-slate-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">

          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {dark ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-slate-700" />
            )}
          </button>

          <Link
            to="/cart"
            className="relative rounded-full border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            <FiShoppingCart className="text-xl dark:text-white" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-xs text-white">
              2
            </span>
          </Link>

        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 md:hidden">

          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 p-2 dark:border-slate-700"
          >
            {dark ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl dark:text-white" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-slate-300 p-2 dark:border-slate-700"
          >
            {menuOpen ? (
              <FiX className="text-2xl dark:text-white" />
            ) : (
              <FiMenu className="text-2xl dark:text-white" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-950 md:hidden">

          <nav className="flex flex-col gap-4">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 font-medium transition ${
                    isActive
                      ? "bg-violet-100 text-violet-600 dark:bg-violet-900/30"
                      : "text-slate-700 hover:bg-slate-100 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              <FiShoppingCart />
              Cart
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
}