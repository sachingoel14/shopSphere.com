function Contact() {
  return (
    <div className="space-y-6">

      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-500">
          We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Contact Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-semibold">
            Send us a message
          </h2>

          <div className="space-y-4">

            <input
              placeholder="Your Name"
              className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />

            <input
              placeholder="Email"
              className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />

            <button className="w-full rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-700">
              Send Message
            </button>

          </div>

        </div>

        {/* Contact Info */}
        <div className="space-y-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">📍 Address</h3>
            <p className="mt-2 text-gray-500">
              ShopSphere HQ
              <br />
              New York, USA
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">📧 Email</h3>
            <p className="mt-2 text-gray-500">
              support@shopsphere.com
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">📞 Phone</h3>
            <p className="mt-2 text-gray-500">
              +1 (555) 987-6543
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-semibold">⏰ Support Hours</h3>
            <p className="mt-2 text-gray-500">
              Monday – Saturday
              <br />
              9:00 AM – 8:00 PM
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;