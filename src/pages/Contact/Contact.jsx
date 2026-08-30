import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    const phoneNumber = "8447634311"; // Replace with your WhatsApp number

    const text = `Hello ShopSphere!

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

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
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />

            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full rounded-xl border px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />

            <button
              onClick={handleWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-white transition hover:bg-green-700"
            >
              💬 Send on WhatsApp
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
              Noida, INDIA
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