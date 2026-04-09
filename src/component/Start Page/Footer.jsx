// components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-semibold">VOL-LINK</h2>
          <p className="mt-3 text-sm">
            Making volunteering accessible to everyone
          </p>
        </div>

        {/* Volunteers */}
        <div>
          <h3 className="text-white font-medium mb-3">For Volunteers</h3>
          <ul className="space-y-2 text-sm">
            <li>Browse Events</li>
            <li>About</li>
          </ul>
        </div>

        {/* Organizations */}
        <div>
          <h3 className="text-white font-medium mb-3">For Organizations</h3>
          <ul className="space-y-2 text-sm">
            <li>Post Event</li>
            <li>Learn More</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-medium mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2024 VOL-LINK. Making volunteering meaningful.
      </div>
    </footer>
  );
}