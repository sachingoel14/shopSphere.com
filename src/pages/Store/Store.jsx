// import {
//   useGetProductsQuery,
//   useSearchProductsQuery,
//   useGetProductsByCategoryQuery,
//   useGetCategoriesQuery

//  } from "../../features/api/productApi";

// import { useState ,useEffect} from "react";

// function Store() {

//   const [search, setSearch] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");
//   const [category, setCategory] = useState("");

//   const { data, isLoading, error } = useGetProductsQuery();

//   const {
//   data: categories,
//   isLoading: categoriesLoading,
// } = useGetCategoriesQuery();
//   // console.log(search);


//   useEffect(() => {
//       const timer = setTimeout(() => {
//         setDebouncedSearch(search);
//       }, 500);
//       return () => {
//         clearTimeout(timer);
//       };
//     }, [search]);


//   const allProducts = useGetProductsQuery(
//     undefined,
//     {
//       skip: !!debouncedSearch || !!category,
//     }
//   );


//   const searchedProducts = useSearchProductsQuery(
//     debouncedSearch,
//     {
//       skip: !debouncedSearch,
//     }
//   );

//   const categoryProducts = useGetProductsByCategoryQuery(
//     category,
//     {
//       skip: !category || !!debouncedSearch,
//     }
//   );

//   const dataValue = debouncedSearch
//     ? searchedProducts.data
//     : allProducts.data;


//   const isLoadingValue = debouncedSearch
//     ? searchedProducts.isLoading
//     : allProducts.isLoading;


//   const errorValue = debouncedSearch
//     ? searchedProducts.error
//     : allProducts.error;

//   const products = debouncedSearch
//   ? searchedProducts.data?.products
//   : category
//     ? categoryProducts.data?.products
//     : allProducts.data?.products;

//   if (isLoading)
//     return <h2>Loading Products...</h2>;

//   if (error)
//     return <h2>Something went wrong.</h2>;

//   return (
//     <div className="space-y-6">

//       <div>
//         <h1 className="text-3xl font-bold">
//           Store
//         </h1>

//         <p className="text-gray-500">
//           Discover amazing products.
//         </p>
//       </div>
// {/* /////////////////// search space.   ///////// */}
//       <div className="relative max-w-xl">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search products..."
//           className="w-full rounded-xl border bg-white px-5 py-3 pr-12 outline-none focus:border-indigo-500"
//         />
//         <span className="absolute right-4 top-3">
//           🔍
//         </span>
//       </div>
// {/* /////////////////// search space ends   ///////// */}

// {/* /////////////////// categories.   ///////// */}
//     <div className="flex gap-3 overflow-x-auto pb-2">
//       <button
//         onClick={() => setCategory("")}
//         className={`whitespace-nowrap rounded-full px-5 py-2 ${
//           category === ""
//             ? "bg-indigo-600 text-white"
//             : "bg-white text-gray-700"
//         }`}
//       >
//         All
//       </button>

//       {categories.map((item) => (
//         <button
//           key={item.slug}
//           onClick={() => setCategory(item.slug)}
//           className={`whitespace-nowrap rounded-full px-5 py-2 ${
//             category === item.slug
//               ? "bg-indigo-600 text-white"
//               : "bg-white text-gray-700"
//           }`}
//         >
//           {item.name}
//         </button>
//       ))}
//     </div>

// {/* /////////////////// categories. ends  ///////// */}

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

//         {data.products.map((product) => (
//           <div
//             key={product.id}
//             className="group rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
//           >
            
//             {product.discountPercentage > 0 && (
//               <span className="mt-2 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
//                 {product.discountPercentage.toFixed(1)}% OFF
//               </span>
//             )}
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="h-48 w-full rounded-xl object-cover"
//             />

//             <h2 className="mt-4 font-semibold group-hover:text-indigo-600">
//               {product.title}
//             </h2>

//             <p className="mt-1 text-sm text-gray-500">
//               {product.brand}
//             </p>

//             <div className="mt-3 flex items-center justify-between">

//               <span className="text-xl font-bold text-indigo-600">
//                 ${product.price}
//               </span>

//               <span className="rounded-full bg-yellow-100 px-2 py-1 text-sm">
//                 ⭐ {product.rating}
//               </span>

//                 {/* Stock */}
//                 {/* <p className="mt-1 text-sm text-gray-500">
//                   Stock: {product.stock}
//                 </p> */}

//             </div>

//             {product.stock === 0 ?(
//               <button
//                 disabled
//                 className="mt-4 w-full rounded-xl bg-gray-300 py-3 text-gray-500"
//               >
//                 Out of Stock
//               </button>
//             ) : (
//               <button
//                 className="mt-4 w-full rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-700"
//               >
//                 Add to Cart
//               </button>
//             )}

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

// export default Store;

import { useEffect, useState } from "react";

import {
  useGetProductsQuery,
  useSearchProductsQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
} from "../../features/api/productApi";

function Store() {
  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("");

  // =========================
  // DEBOUNCE SEARCH
  // =========================

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  // =========================
  // GET CATEGORIES
  // =========================

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();

  // =========================
  // GET ALL PRODUCTS
  // =========================

  const allProducts = useGetProductsQuery(undefined, {
    skip: !!debouncedSearch || !!category,
  });

  // =========================
  // SEARCH PRODUCTS
  // =========================

  const searchedProducts = useSearchProductsQuery(debouncedSearch, {
    skip: !debouncedSearch,
  });

  // =========================
  // CATEGORY PRODUCTS
  // =========================

  const categoryProducts = useGetProductsByCategoryQuery(category, {
    skip: !category || !!debouncedSearch,
  });

  // =========================
  // SELECT PRODUCTS
  // =========================

  const products = debouncedSearch
    ? searchedProducts.data?.products
    : category
      ? categoryProducts.data?.products
      : allProducts.data?.products;

  // =========================
  // LOADING STATE
  // =========================

  const productsLoading = debouncedSearch
    ? searchedProducts.isLoading
    : category
      ? categoryProducts.isLoading
      : allProducts.isLoading;

  // =========================
  // ERROR STATE
  // =========================

  const productsError = debouncedSearch
    ? searchedProducts.error
    : category
      ? categoryProducts.error
      : allProducts.error;

  // =========================
  // HANDLERS
  // =========================

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);

    // Optional:
    // When user starts searching, remove selected category
    if (e.target.value) {
      setCategory("");
    }
  };

  // =========================
  // LOADING
  // =========================

  if (productsLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-600">
          Loading Products...
        </h2>
      </div>
    );
  }

  // =========================
  // ERROR
  // =========================

  if (productsError) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <h2 className="text-xl font-semibold text-red-500">
          Something went wrong.
        </h2>
      </div>
    );
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="space-y-6">

      {/* =========================
          HEADER
      ========================= */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Store
        </h1>

        <p className="mt-1 text-gray-500">
          Discover amazing products.
        </p>
      </div>

      {/* =========================
          SEARCH
      ========================= */}

      <div className="relative max-w-xl">

        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 pr-12 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <span className="absolute right-4 top-3">
          🔍
        </span>

      </div>

      {/* =========================
          CATEGORIES
      ========================= */}

      <div>

        <h2 className="mb-3 text-lg font-semibold">
          Categories
        </h2>

        {categoriesLoading ? (
          <p className="text-sm text-gray-500">
            Loading categories...
          </p>
        ) : categoriesError ? (
          <p className="text-sm text-red-500">
            Failed to load categories.
          </p>
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-2">

            {/* ALL BUTTON */}

            <button
              onClick={() => handleCategoryChange("")}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition ${
                category === ""
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All
            </button>

            {/* API CATEGORIES */}

            {categories?.map((item) => (
              <button
                key={item.slug}
                onClick={() => handleCategoryChange(item.slug)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition ${
                  category === item.slug
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </button>
            ))}

          </div>
        )}

      </div>

      {/* =========================
          PRODUCT COUNT
      ========================= */}

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Products
        </h2>

        <span className="text-sm text-gray-500">
          {products?.length || 0} products
        </span>

      </div>

      {/* =========================
          PRODUCT GRID
      ========================= */}

      {products?.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center">
          <p className="text-gray-500">
            No products found.
          </p>
        </div>
      ) : (
      <div className="flex flex-wrap gap-4 justify-start">
        {products?.map((product) => (
          <div
            key={product.id}
            className="w-44 rounded-xl bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Discount */}
            {product.discountPercentage > 0 && (
              <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-[10px] font-medium text-green-700">
                {product.discountPercentage.toFixed(1)}% OFF
              </span>
            )}

            {/* Image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="mt-2 h-32 w-full rounded-lg object-cover"
            />

            {/* Title */}
            <h3 className="mt-3 line-clamp-2 text-sm font-semibold">
              {product.title}
            </h3>

            {/* Brand */}
            <p className="mt-1 text-xs text-gray-500 truncate">
              {product.brand}
            </p>

            {/* Price + Rating */}
            <div className="mt-2 flex items-center justify-between">
              <span className="text-base font-bold text-indigo-600">
                ${product.price}
              </span>

              <span className="rounded-full bg-yellow-100 px-2 py-1 text-[10px]">
                ⭐ {product.rating}
              </span>
            </div>

            {/* Button */}
            {product.stock === 0 ? (
              <button
                disabled
                className="mt-3 w-full rounded-lg bg-gray-300 py-2 text-xs text-gray-500"
              >
                Out of Stock
              </button>
            ) : (
              <button className="mt-3 w-full rounded-lg bg-indigo-600 py-2 text-xs text-white hover:bg-indigo-700">
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
      )}

    </div>
  );
}

export default Store;