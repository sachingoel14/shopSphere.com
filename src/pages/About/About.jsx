function About() {
  return (
    <div className="space-y-8">

      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-10 text-white">

        <h1 className="text-4xl font-bold">
          About ShopSphere
        </h1>

        <p className="mt-4 max-w-2xl text-indigo-100">
          ShopSphere is a modern e-commerce platform built to deliver a
          seamless shopping experience with secure payments, fast delivery,
          and thousands of products across multiple categories.
        </p>

      </div>

      {/* Mission & Vision */}
      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">
            🎯 Our Mission
          </h2>

          <p className="text-gray-600">
            To make online shopping simple, secure, and enjoyable for
            everyone by combining modern technology with exceptional customer
            service.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">
            🚀 Our Vision
          </h2>

          <p className="text-gray-600">
            To become a trusted global marketplace where customers can
            discover quality products across every category.
          </p>
        </div>

      </div>

      {/* Stats */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-indigo-600">10K+</h2>
          <p className="text-gray-500">Products</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-indigo-600">5K+</h2>
          <p className="text-gray-500">Customers</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-indigo-600">20+</h2>
          <p className="text-gray-500">Categories</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-indigo-600">99%</h2>
          <p className="text-gray-500">Customer Satisfaction</p>
        </div>

      </div>

      {/* Values */}
      <div className="rounded-2xl bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-2xl font-semibold text-center">
          Our Core Values
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl">
              ⭐
            </div>

            <h3 className="font-semibold">Quality First</h3>

            <p className="mt-2 text-sm text-gray-500">
              We carefully curate products to ensure customers receive the
              best quality.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl">
              🔒
            </div>

            <h3 className="font-semibold">Secure Shopping</h3>

            <p className="mt-2 text-sm text-gray-500">
              Your privacy and payment security remain our highest priority.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl">
              ❤️
            </div>

            <h3 className="font-semibold">Customer Focused</h3>

            <p className="mt-2 text-sm text-gray-500">
              Every feature is designed to create a better shopping
              experience.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;