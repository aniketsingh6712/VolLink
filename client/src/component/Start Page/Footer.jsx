// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-semibold hover:text-blue-400 transition duration-300 cursor-pointer">
            VOL-LINK
          </h2>
          <p className="mt-3 text-sm hover:text-gray-200 transition duration-300">
            Making volunteering accessible to everyone
          </p>
        </div>

        {/* Volunteers */}
        <div>
          <h3 className="text-white font-medium mb-3">For Volunteers</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 hover:translate-x-1 transition duration-300 cursor-pointer">
              Browse Events
            </li>
            <li className="hover:text-blue-400 hover:translate-x-1 transition duration-300 cursor-pointer">
              About
            </li>
          </ul>
        </div>

        {/* Organizations */}
        <div>
          <h3 className="text-white font-medium mb-3">For Organizations</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 hover:translate-x-1 transition duration-300 cursor-pointer">
              Post Event
            </li>
            <li className="hover:text-green-400 hover:translate-x-1 transition duration-300 cursor-pointer">
              Learn More
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-medium mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-400 hover:translate-x-1 transition duration-300 cursor-pointer">
              Contact
            </li>
            <li className="hover:text-purple-400 hover:translate-x-1 transition duration-300 cursor-pointer">
              Privacy
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p className="hover:text-gray-100 transition duration-300">
          © 2024 VOL-LINK. Making volunteering meaningful.
        </p>
      </div>
    </footer>
  );
}