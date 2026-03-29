import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-16 text-center border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h4 className="text-teal-400 font-bold text-lg mb-6">Airtime Scanner</h4>
        <div className="flex justify-center space-x-8 mb-8 text-sm text-gray-500">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms Of Use</Link>
          <Link to="/#download" className="hover:text-white transition-colors">Download</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <a href="mailto:help@airtimescanner.space" className="hover:text-white transition-colors">Support</a>
        </div>
        <p className="text-gray-600 text-sm">© 2026 Airtime Scanner. All rights reserved.</p>
      </div>
    </footer>
  );
}
