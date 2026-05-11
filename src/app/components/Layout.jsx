// import { Outlet, Link, useLocation } from "react-router";
// import { Download, Menu, X } from "lucide-react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import logoImg from "../../imports/OMD_trademark_image__1_.png";

// export function Layout() {
//   const location = useLocation();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const isActive = (path) => {
//     if (path === "/") return location.pathname === "/";
//     return location.pathname.startsWith(path);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-white">

//       {/* HEADER */}
//       <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           {/* TOP BAR */}
//           <div className="flex items-center justify-between h-14">

//             {/* LOGO */}
//             <Link
//               to="/"
//               className="flex items-center gap-2"
//             >
//               <img
//                 src={logoImg}
//                 alt="OMD"
//                 className="h-7 sm:h-8 w-auto"
//               />

//               <span className="text-base sm:text-lg font-extrabold text-[#003d82]">
//                 One More Deal
//               </span>
//             </Link>

//             {/* DESKTOP MENU */}
//             <div className="hidden md:flex items-center gap-6">

//               <Link
//                 to="/"
//                 className={`text-sm font-semibold transition ${
//                   isActive("/") && location.pathname === "/"
//                     ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
//                     : "text-gray-700 hover:text-[#003d82]"
//                 }`}
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/how-it-works"
//                 className={`text-sm font-semibold transition ${
//                   isActive("/how-it-works")
//                     ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
//                     : "text-gray-700 hover:text-[#003d82]"
//                 }`}
//               >
//                 How It Works
//               </Link>

//               <Link
//                 to="/contact"
//                 className={`text-sm font-semibold transition ${
//                   isActive("/contact")
//                     ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
//                     : "text-gray-700 hover:text-[#003d82]"
//                 }`}
//               >
//                 Contact Us
//               </Link>

//               <a
//                 href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
//                 className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white rounded-xl text-sm font-semibold hover:shadow-lg transition"
//               >
//                 <Download className="w-4 h-4" />
//                 Download
//               </a>
//             </div>

//             {/* MOBILE RIGHT SIDE */}
//             <div className="flex md:hidden items-center gap-2">

//               {/* DOWNLOAD BUTTON */}
//               <a
//                 href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
//                 className="inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white rounded-xl text-xs font-semibold"
//               >
//                 <Download className="w-4 h-4" />
//                 Download
//               </a>

//               {/* 3 LINE MENU */}
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="p-2 rounded-lg hover:bg-gray-100 transition"
//               >
//                 {mobileMenuOpen ? (
//                   <X className="w-6 h-6 text-[#003d82]" />
//                 ) : (
//                   <Menu className="w-6 h-6 text-[#003d82]" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* MOBILE DROPDOWN MENU */}
//        {/* MOBILE DROPDOWN MENU */}
// <AnimatePresence>
//   {mobileMenuOpen && (
//     <motion.div
//       initial={{ opacity: 0, y: -8 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -8 }}
//       transition={{ duration: 0.2 }}
//       className="md:hidden border-t border-gray-200 bg-white"
//     >
      
//       {/* RED MARK AREA */}
//       <div className="flex items-center justify-center gap-4 px-3 py-3 overflow-x-auto no-scrollbar">

//         <Link
//           to="/"
//           className={`whitespace-nowrap text-sm font-semibold px-3 py-2 rounded-lg transition ${
//             isActive("/") && location.pathname === "/"
//               ? "bg-blue-50 text-[#003d82]"
//               : "text-gray-700"
//           }`}
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           Home
//         </Link>

//         <Link
//           to="/how-it-works"
//           className={`whitespace-nowrap text-sm font-semibold px-3 py-2 rounded-lg transition ${
//             isActive("/how-it-works")
//               ? "bg-blue-50 text-[#003d82]"
//               : "text-gray-700"
//           }`}
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           How It Works
//         </Link>

//         <Link
//           to="/contact"
//           className={`whitespace-nowrap text-sm font-semibold px-3 py-2 rounded-lg transition ${
//             isActive("/contact")
//               ? "bg-blue-50 text-[#003d82]"
//               : "text-gray-700"
//           }`}
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           Contact Us
//         </Link>

//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>

//         </nav>
//       </header>

//       {/* MAIN */}
//       <main className="flex-1 overflow-hidden">
//         <motion.div
//           key={location.pathname}
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -16 }}
//           transition={{ duration: 0.3, ease: "easeOut" }}
//         >
//           <Outlet />
//         </motion.div>
//       </main>

//       {/* FOOTER */}
//       <footer className="bg-gradient-to-br from-[#003d82] to-[#002558] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">

//             {/* FOOTER LOGO */}
//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <img
//                   src={logoImg}
//                   alt="OMD"
//                   className="h-8 w-auto"
//                 />

//                 <span className="text-base font-extrabold text-white">
//                   One More Deal
//                 </span>
//               </div>

//               <p className="text-blue-100 text-xs">
//                 Simplifying property deals for brokers and builders
//               </p>
//             </div>

//             {/* QUICK LINKS */}
//             <div>
//               <h3 className="font-bold mb-2 text-[#f7941d] text-sm">
//                 Quick Links
//               </h3>

//               <div className="flex flex-col space-y-1">
//                 <Link
//                   to="/"
//                   className="text-xs text-blue-100 hover:text-white transition-colors"
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   to="/how-it-works"
//                   className="text-xs text-blue-100 hover:text-white transition-colors"
//                 >
//                   How It Works
//                 </Link>

//                 <Link
//                   to="/contact"
//                   className="text-xs text-blue-100 hover:text-white transition-colors"
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </div>

//             {/* CONTACT */}
//             <div>
//               <h3 className="font-bold mb-2 text-[#f7941d] text-sm">
//                 Contact
//               </h3>

//               <div className="flex flex-col space-y-1 text-xs text-blue-100">
//                 <p>Email: support@omdbrokerassociate.in</p>
//                 <p>Phone: +91-9209182221</p>
//               </div>
//             </div>
//           </div>

//           {/* COPYRIGHT */}
//           <div className="border-t border-blue-800 pt-4 text-center text-xs text-blue-100">
//             © 2026 OMD Broker Associate. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }








import { Outlet, Link, useLocation } from "react-router";
import { Download } from "lucide-react";
import { motion } from "motion/react";
import logoImg from "../../imports/OMD_trademark_image__1_.png";

export function Layout() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

          {/* TOP BAR */}
          <div className="flex items-center justify-between h-14">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0"
            >
              <img
                src={logoImg}
                alt="OMD"
                className="h-15 sm:h-10 w-20"
              />

              <span className="text-sm sm:text-lg font-extrabold text-[#003d82] whitespace-nowrap">
                One More Deal
              </span>
            </Link>

            {/* DESKTOP NAVBAR */}
            <div className="hidden md:flex items-center gap-6">

              <Link
                to="/"
                className={`text-sm font-semibold transition ${
                  isActive("/") && location.pathname === "/"
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                Home
              </Link>

              <Link
                to="/how-it-works"
                className={`text-sm font-semibold transition ${
                  isActive("/how-it-works")
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                How It Works
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-semibold transition ${
                  isActive("/contact")
                    ? "text-[#003d82] border-b-2 border-[#f7941d] pb-1"
                    : "text-gray-700 hover:text-[#003d82]"
                }`}
              >
                Contact Us
              </Link>

              {/* DOWNLOAD BUTTON */}
              <a
                href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>

          {/* MOBILE NAVBAR */}
          <div className="flex md:hidden items-center justify-center gap-3 overflow-x-auto no-scrollbar py-2">

            <Link
              to="/"
              className={`whitespace-nowrap text-xs font-semibold px-3 py-2 rounded-lg transition ${
                isActive("/") && location.pathname === "/"
                  ? "bg-blue-50 text-[#003d82]"
                  : "text-gray-700"
              }`}
            >
              Home
            </Link>

            <Link
              to="/how-it-works"
              className={`whitespace-nowrap text-xs font-semibold px-3 py-2 rounded-lg transition ${
                isActive("/how-it-works")
                  ? "bg-blue-50 text-[#003d82]"
                  : "text-gray-700"
              }`}
            >
              How It Works
            </Link>

            <Link
              to="/contact"
              className={`whitespace-nowrap text-xs font-semibold px-3 py-2 rounded-lg transition ${
                isActive("/contact")
                  ? "bg-blue-50 text-[#003d82]"
                  : "text-gray-700"
              }`}
            >
              Contact
            </Link>

            {/* MOBILE DOWNLOAD */}
            <a
              href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
              className="shrink-0 inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white rounded-xl text-xs font-semibold"
            >
              <Download className="w-4 h-4" />
              Download
            </a>

          </div>
        </nav>
      </header>

      {/* MAIN */}
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

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-[#003d82] to-[#002558] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">

            {/* FOOTER LOGO */}
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

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-bold mb-2 text-[#f7941d] text-sm">
                Quick Links
              </h3>

              <div className="flex flex-col space-y-1">
                <Link
                  to="/"
                  className="text-xs text-blue-100 hover:text-white transition-colors"
                >
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

            {/* CONTACT */}
            <div>
              <h3 className="font-bold mb-2 text-[#f7941d] text-sm">
                Contact
              </h3>

              <div className="flex flex-col space-y-1 text-xs text-blue-100">
                <p>Email: support@omdbrokerassociate.in</p>
                <p>Phone: +91-9209182221</p>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-blue-800 pt-4 text-center text-xs text-blue-100">
            © 2026 OMD Broker Associate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}