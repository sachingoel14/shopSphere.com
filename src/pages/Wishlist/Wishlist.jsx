import { useSelector } from "react-redux";

function Wishlist() {

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  return (
    <div>

      <h1 className="mb-6 text-3xl font-bold">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (

        <p>No saved products.</p>

      ) : (

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

          {wishlistItems.map((item) => (

            <div
              key={item.id}
              className="rounded-xl bg-white p-3 shadow"
            >

              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-32 w-full rounded-lg object-cover"
              />

              <h3 className="mt-3 font-semibold">
                {item.title}
              </h3>

              <p className="text-indigo-600">
                ${item.price}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;