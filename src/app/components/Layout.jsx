import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../imports/OMD_trademark_image__1_.png";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

 const isActive = (path) => {
  if (path === "/") {
    return location.pathname === "/";
  }

  return location.pathname.startsWith(path);
};

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img src={logoImg} alt="OMD Broker Associate" className="h-14 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-base font-medium transition-all duration-300 ${
                  isActive("/") && location.pathname === "/"
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                className={`text-base font-medium transition-all duration-300 ${
                  isActive("/how-it-works")
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                How It Works
              </Link>
              <Link
                to="/contact"
                className={`text-base font-medium transition-all duration-300 ${
                  isActive("/contact")
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                Contact Us
              </Link>
              <a
                       href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-base font-medium"
              >
                <Download className="w-5 h-5" />
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
                <div className="flex flex-col space-y-4 py-4">
                  <Link
                    to="/"
                    className={`text-base px-4 py-2 rounded ${
                      isActive("/") && location.pathname === "/"
                        ? "bg-blue-50 text-[#003d82] font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/how-it-works"
                    className={`text-base px-4 py-2 rounded ${
                      isActive("/how-it-works")
                        ? "bg-blue-50 text-[#003d82] font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    to="/contact"
                    className={`text-base px-4 py-2 rounded ${
                      isActive("/contact")
                        ? "bg-blue-50 text-[#003d82] font-medium"
                        : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <a
                            href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white rounded-xl mx-4"
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
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="bg-gradient-to-br from-[#003d82] to-[#002558] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <img src={logoImg} alt="OMD" className="h-12 w-auto mb-3 brightness-0 invert" />
              <p className="text-blue-100 text-xs">
                Simplifying property deals for brokers and builders
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-[#f7941d] text-sm">Quick Links</h3>
              <div className="flex flex-col space-y-1">
                <Link to="/" className="text-xs text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-xs text-blue-100 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  to="/contact"
                  className="text-xs text-blue-100 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-[#f7941d] text-sm">Contact</h3>
              <div className="flex flex-col space-y-1 text-xs text-blue-100">
                <p>Email: omd.brokerassociate@gmail.com</p>
                <p>Phone: +91-9209182221</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-6 text-center text-xs text-blue-100">
            © 2026 OMD Broker Associate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
