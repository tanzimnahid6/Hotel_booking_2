
const ContactUs = () => {
  return (
    <div
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

      <div className="w-full max-w-md p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-white text-center">
        <h2 className="text-xl font-bold">Our Location</h2>
        <p>#6, Suite 100, Paris, France</p>
        <p>Email: contact@hotelbooking.com</p>
        <p>Phone: +33 1 23 45 67 89</p>
      </div>
    </div>
  );
};

export default ContactUs;
