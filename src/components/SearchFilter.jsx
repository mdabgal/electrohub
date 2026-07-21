export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <section className="bg-white py-8 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row">

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        />


        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
        >
          <option value="All">
            All Categories
          </option>

          <option value="Laptop">
            Laptop
          </option>

          <option value="Smartphone">
            Smartphone
          </option>

          <option value="Headphone">
            Headphone
          </option>

          <option value="Camera">
            Camera
          </option>

          <option value="Tablet">
            Tablet
          </option>

          <option value="Accessories">
            Accessories
          </option>

        </select>

      </div>
    </section>
  );
}