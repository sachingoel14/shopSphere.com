import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../features/cart/cartSlice";
import { placeOrder } from "../../features/orders/orderSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      alert("Please fill all delivery details.");
      return;
    }

    const newOrder = {
    id: "ORD-" + Date.now(),
    items: cartItems,
    address,
    paymentMethod,
    subtotal,
    shipping,
    total,
    status: "Processing",
    orderedAt: new Date().toLocaleString(),
  };

  dispatch(placeOrder(newOrder));

    dispatch(clearCart());
    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <p className="mt-2 text-gray-500">
          Add some products before checking out.
        </p>

        <button
          onClick={() => navigate("/store")}
          className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">

      {/* Left Side */}

      <div className="space-y-8 lg:col-span-2">

        {/* Delivery Address */}

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold">
            Delivery Address
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            <input
              type="text"
              name="fullName"
              value={address.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500"
            />

            <input
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              placeholder="Street Address"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500 sm:col-span-2"
            />

            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              placeholder="City"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              placeholder="State"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="rounded-lg border p-3 outline-none focus:border-indigo-500"
            />

          </div>
        </div>

        {/* Payment */}

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-2xl font-bold">
            Payment Method
          </h2>

          <div className="space-y-4">

            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-gray-50">
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-gray-50">
              <input
                type="radio"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI Payment
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 hover:bg-gray-50">
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit / Debit Card
            </label>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div>

        <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-bold">
            Order Summary
          </h2>

          <div className="mt-5 space-y-4">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="flex items-center gap-3 border-b pb-3"
              >

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-14 w-14 rounded-lg object-cover"
                />

                <div className="flex-1">

                  <p className="line-clamp-1 text-sm font-medium">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity}
                  </p>

                </div>

                <p className="font-semibold">
                  ${item.price * item.quantity}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-6 space-y-3 border-t pt-5">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? "Free" : `$${shipping}`}
              </span>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-white transition hover:bg-indigo-700"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;