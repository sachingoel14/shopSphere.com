function Dashboard() {
  return (
    <main className="flex-1 bg-gray-50 p-6">

      <h1 className="text-3xl font-bold text-gray-900">
        Welcome back, Sachin 👋
      </h1>

      <p className="mt-2 text-gray-500">
        Here's what's happening with your store.
      </p>

      {/* Stats */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total Orders</p>
          <h2 className="mt-2 text-3xl font-bold">12</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Wishlist</p>
          <h2 className="mt-2 text-3xl font-bold">8</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Cart Items</p>
          <h2 className="mt-2 text-3xl font-bold">3</h2>
        </div>

      </div>

      {/* Recent Orders */}
      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">

        <h2 className="text-xl font-semibold">
          Recent Orders
        </h2>

        <div className="mt-5 space-y-4">

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="font-medium">#ORD-1001</p>
              <p className="text-sm text-gray-500">Running Shoes</p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              Delivered
            </span>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="font-medium">#ORD-1002</p>
              <p className="text-sm text-gray-500">T-Shirt</p>
            </div>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
              Shipped
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">#ORD-1003</p>
              <p className="text-sm text-gray-500">Smart Watch</p>
            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
              Processing
            </span>
          </div>

        </div>

      </div>

    </main>
  );
}

export default Dashboard;