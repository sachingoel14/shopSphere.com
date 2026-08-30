import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  // Temporary order details
  const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
  const deliveryDate = "3-5 Business Days";

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center shadow-lg">

        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <span className="text-5xl">✅</span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold text-gray-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for shopping with <span className="font-semibold">ShopSphere</span>.
          We've received your order and are preparing it for shipment.
        </p>

        {/* Order Details */}
        <div className="mt-8 rounded-2xl border bg-gray-50 p-6">
          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500">Order ID</span>
            <span className="font-semibold">{orderId}</span>
          </div>

          <div className="mt-3 flex justify-between border-b pb-3">
            <span className="text-gray-500">Estimated Delivery</span>
            <span className="font-semibold">{deliveryDate}</span>
          </div>

          <div className="mt-3 flex justify-between">
            <span className="text-gray-500">Payment Status</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Confirmed
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => navigate("/orders")}
            className="flex-1 rounded-xl border border-indigo-600 py-3 font-medium text-indigo-600 transition hover:bg-indigo-50"
          >
            View Orders
          </button>

          <button
            onClick={() => navigate("/store")}
            className="flex-1 rounded-xl bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-700"
          >
            Continue Shopping
          </button>
        </div>

        {/* Footer Message */}
        <p className="mt-6 text-sm text-gray-400">
          A confirmation email and order details will be available in your Orders section.
        </p>

      </div>
    </div>
  );
}

export default OrderSuccess;