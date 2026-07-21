import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import SearchFilter from "../components/SearchFilter";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  const filteredProducts = products.filter((product) => {

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());


    const categoryMatch =
      category === "All" ||
      product.category === category;


    return searchMatch && categoryMatch;

  });



  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">


        {/* Hero */}
        <section className="bg-gradient-to-r from-violet-600 to-indigo-600 py-20 text-white">

          <div className="mx-auto max-w-7xl px-6 text-center">

            <h1 className="text-5xl font-black">
              Explore Products
            </h1>

          </div>

        </section>



        {/* Search Filter */}
        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />



        {/* Products */}

        <section className="py-16">

          <div className="mx-auto max-w-7xl px-6">


            <div className="mb-8 flex justify-between">

              <h2 className="text-3xl font-bold dark:text-white">
                All Products
              </h2>


              <p className="text-slate-500">
                {filteredProducts.length} Products
              </p>

            </div>



            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


              {
                filteredProducts.map((product)=>(
                  
                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                ))
              }


            </div>


          </div>

        </section>


      </main>


      <Footer />

    </>
  );
}