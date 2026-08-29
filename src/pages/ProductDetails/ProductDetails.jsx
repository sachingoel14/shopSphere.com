import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/api/productApi";

function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <h2>Loading Product...</h2>;
  }

  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">

      {/* LEFT SIDE */}

      <div>

        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="h-[450px] w-full rounded-2xl object-cover"
        />

        <div className="mt-4 flex gap-3 overflow-x-auto">

          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => setSelectedImage(index)}
              className={`h-20 w-20 cursor-pointer rounded-lg border-2 object-cover ${
                selectedImage === index
                  ? "border-indigo-600"
                  : "border-transparent"
              }`}
            />
          ))}

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="space-y-5">

        <p className="text-sm text-gray-500">
          {product.brand}
        </p>

        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <div className="flex items-center gap-3">

          <span className="text-3xl font-bold text-indigo-600">
            ${product.price}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
            {product.discountPercentage.toFixed(1)}% OFF
          </span>

        </div>

        <p className="leading-relaxed text-gray-600">
          {product.description}
        </p>

        <div className="flex items-center gap-4">

          <span className="rounded-full bg-yellow-100 px-3 py-1">
            ⭐ {product.rating}
          </span>

          <span className="text-gray-500">
            Stock: {product.stock}
          </span>

        </div>

        {/* Quantity */}

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              setQuantity(Math.max(1, quantity - 1))
            }
            className="rounded-lg border px-4 py-2"
          >
            -
          </button>

          <span className="text-lg font-semibold">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
            className="rounded-lg border px-4 py-2"
          >
            +
          </button>

        </div>

        <button className="w-full rounded-xl bg-indigo-600 py-4 text-white hover:bg-indigo-700">
          Add to Cart
        </button>

        <button className="w-full rounded-xl border py-4 hover:bg-gray-100">
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;