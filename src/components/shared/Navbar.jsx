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
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
     
     <Link
  to="/"
  className="text-3xl font-black tracking-wide"
>
          <span className="text-violet-600">Electro</span>
          <span className="text-slate-900 dark:text-white">
            Hub
          </span>
       </Link>

    
        <nav className="hidden items-center gap-8 md:flex">
         {navItems.map((item) => (
  <NavLink
    key={item.name}
    to={item.path}
    className={({ isActive }) =>
      `font-medium transition ${
        isActive
          ? "text-violet-600"
          : "text-slate-700 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
      }`
    }
  >
    {item.name}
  </NavLink>
))}
        </nav>

      
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 p-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {dark ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-slate-700" />
            )}
          </button>

          <button className="relative rounded-full border border-slate-300 p-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
            <FiShoppingCart className="text-xl dark:text-white" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-xs text-white">
              2
            </span>
          </button>
        </div>

       
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 p-2 dark:border-slate-700"
          >
            {dark ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl" />
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

     
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <nav className="flex flex-col gap-5">
           {navItems.map((item) => (
  <NavLink
    key={item.name}
    to={item.path}
    onClick={() => setMenuOpen(false)}
    className={({ isActive }) =>
      `text-lg font-medium ${
        isActive
          ? "text-violet-600"
          : "text-slate-700 hover:text-violet-600 dark:text-slate-300"
      }`
    }
  >
    {item.name}
  </NavLink>
))}

            <button className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-700">
              <FiShoppingCart />
              Cart
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}