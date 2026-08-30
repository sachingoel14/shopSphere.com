
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../features/cart/cartSlice";

import { useNavigate } from "react-router-dom";

function Cart() {

  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 500 ? 50 : 0;

  const total = subtotal + shipping;

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
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="rounded border px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="rounded border px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold">
                  ${(item.price * item.quantity)}
                </p>

                 <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="mt-2 text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>

              </div>
            </div>

          ))}

        </div>
      )}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">

        <h2 className="text-xl font-semibold">
          Order Summary
        </h2>

        <div className="mt-4 space-y-3">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>
              {shipping === 0 ? "Free" : `${shipping}`}
            </span>
          </div>

          <hr />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>

        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-700"
        >
          Proceed to Checkout
        </button>

        <button
          onClick={() => dispatch(clearCart())}
          className="mt-3 w-full rounded-xl border py-3 hover:bg-gray-100"
        >
          Clear Cart
        </button>

      </div>
    </div>
  );
}

export default Cart;