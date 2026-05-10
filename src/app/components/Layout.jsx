import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../imports/OMD_trademark_image__1_.png";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImg} alt="OMD" className="h-8 sm:h-9 w-auto" />
              <span className="text-base sm:text-lg font-extrabold text-[#003d82] leading-tight">One More Deal</span>
            </Link>

            <div className="hidden md:flex items-center space-x-7">
              <Link
                to="/"
                className={`text-sm font-semibold transition-all duration-200 ${
                  isActive("/") && location.pathname === "/"
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-0.5"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                className={`text-sm font-semibold transition-all duration-200 ${
                  isActive("/how-it-works")
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-0.5"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                How It Works
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-semibold transition-all duration-200 ${
                  isActive("/contact")
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-0.5"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                Contact Us
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                Download App
              </a>
            </div>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200 overflow-hidden"
              >
                <div className="flex flex-col space-y-3 py-3">
                  <Link
                    to="/"
                    className={`text-sm px-4 py-2 rounded font-semibold ${
                      isActive("/") && location.pathname === "/"
                        ? "bg-blue-50 text-[#003d82]"
                        : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/how-it-works"
                    className={`text-sm px-4 py-2 rounded font-semibold ${
                      isActive("/how-it-works")
                        ? "bg-blue-50 text-[#003d82]"
                        : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    to="/contact"
                    className={`text-sm px-4 py-2 rounded font-semibold ${
                      isActive("/contact")
                        ? "bg-blue-50 text-[#003d82]"
                        : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white rounded-xl mx-4 text-sm font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Download className="w-4 h-4" />
                    Download App
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="flex-1 overflow-hidden">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="bg-gradient-to-br from-[#003d82] to-[#002558] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div>
           

<div className="flex items-center gap-2 mb-2">
  <img
    src={logoImg}
    alt="OMD"
    className="h-8 w-auto"
  />

  <span className="text-base font-extrabold text-white">
    One More Deal
  </span>
</div>
              <p className="text-blue-100 text-xs">
                Simplifying property deals for brokers and builders
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-[#f7941d] text-sm">Quick Links</h3>
              <div className="flex flex-col space-y-1">
                <Link to="/" className="text-xs text-blue-100 hover:text-white transition-colors">Home</Link>
                <Link to="/how-it-works" className="text-xs text-blue-100 hover:text-white transition-colors">How It Works</Link>
                <Link to="/contact" className="text-xs text-blue-100 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-[#f7941d] text-sm">Contact</h3>
              <div className="flex flex-col space-y-1 text-xs text-blue-100">
                <p>Email: omd.brokerassociate@gmail.com</p>
                <p>Phone: +91-9209182221</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-4 text-center text-xs text-blue-100">
            © 2026 OMD Broker Associate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
