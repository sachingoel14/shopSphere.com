function Profile() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          My Profile
        </h1>
        <p className="text-gray-500">
          Manage your account information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">

        <div className="flex flex-col items-center gap-4 md:flex-row">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-4xl font-bold text-indigo-600">
            E
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">Emily Johnson</h2>
            <p className="text-gray-500">emilys@example.com</p>

            <div className="mt-3 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                Verified
              </span>

              <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                Premium Member
              </span>
            </div>
          </div>

          <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">
            Edit Profile
          </button>

        </div>
      </div>

      {/* Personal Info */}
      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">Personal Information</h3>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p>Emily Johnson</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p>+1 (555) 123-4567</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p>Female</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold">Shipping Address</h3>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Street</p>
              <p>123 Market Street</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">City</p>
              <p>New York</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Zip Code</p>
              <p>10001</p>
            </div>
          </div>
        </div>

      </div>

      {/* Quick Stats */}
      <div className="grid gap-5 sm:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-indigo-600">12</h2>
          <p className="text-gray-500">Orders</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-indigo-600">8</h2>
          <p className="text-gray-500">Wishlist</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-indigo-600">₹24,500</h2>
          <p className="text-gray-500">Total Spent</p>
        </div>

      </div>

    </div>
  );
}

export default Profile;