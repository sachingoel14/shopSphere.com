import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.orders.orders);

  if (orders.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          No Orders Yet
        </h1>

        <p className="mt-3 text-gray-500">
          Your placed orders will appear here.
        </p>
      </div>
    );
  }

  return (
    <div>

      <h1 className="mb-6 text-3xl font-bold">
        My Orders
      </h1>

      <div className="space-y-6">

        {orders.map((order) => (

          <div
            key={order.id}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >

            <div className="flex flex-wrap items-center justify-between gap-3">

              <div>

                <p className="font-semibold">
                  {order.id}
                </p>

                <p className="text-sm text-gray-500">
                  {order.orderedAt}
                </p>

              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                {order.status}
              </span>

            </div>

            <div className="mt-5 space-y-3">

              {order.items.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center gap-4"
                >

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-16 w-16 rounded-lg object-cover"
                  />

                  <div className="flex-1">

                    <p className="font-medium">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <p className="font-semibold">
                    ${item.price * item.quantity}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-6 border-t pt-4">

              <div className="flex justify-between">

                <span>Total</span>

                <span className="text-lg font-bold text-indigo-600">
                  ${order.total}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Orders;