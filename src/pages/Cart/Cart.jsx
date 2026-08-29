import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <div>

      <h1 className="mb-6 text-3xl font-bold">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm"
            >

              <div className="flex items-center gap-4">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-20 w-20 rounded-lg object-cover"
                />

                <div>

                  <h2 className="font-semibold">
                    {item.title}
                  </h2>

                  <p>${item.price}</p>

                </div>

              </div>

              <div className="text-right">

                <p>Qty: {item.quantity}</p>

                <p className="font-bold">
                  ${item.price * item.quantity}
                </p>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Cart;