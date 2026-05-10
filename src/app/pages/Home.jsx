import { Link } from "react-router";
import { Download, Building2, Users, Network, Zap, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import appScreenshot1 from "../../imports/image.png";
import appScreenshot2 from "../../imports/image-1.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003d82] via-[#0052a8] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...slideInLeft}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 bg-[#f7941d] rounded-full text-white text-sm font-semibold mb-5"
              >
                🚀 Revolutionizing Property Deals
              </motion.div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Simplifying Property Deals for Brokers & Builders
              </h1>
              <p className="text-base md:text-lg mb-3 text-blue-100">
                A smart and structured platform to replace scattered WhatsApp property sharing with a
                centralized, searchable system.
              </p>
              <p className="text-sm md:text-base mb-6 text-blue-50 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#f7941d] flex-shrink-0" />
                Find the right property faster. Close deals quicker.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                {/* <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#f7941d] text-white rounded-xl hover:bg-[#e88414] transition-all duration-200 shadow-lg hover:shadow-xl font-semibold text-base"
                >
                  <Download className="w-5 h-5" />
                  Download App
                </motion.a> */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all duration-200 border border-white/40 font-semibold text-base"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div {...slideInRight} className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={appScreenshot1}
                  alt="OMD App Screenshot"
                  className="rounded-2xl shadow-2xl w-full max-w-xs mx-auto"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f7941d] rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Simplifying property management in 4 easy steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <div className="bg-[#0052a8] text-white p-6 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  {[
                    { step: 1, title: "Register & Verify", desc: "Quick sign-up and professional verification to ensure a trusted network." },
                    { step: 2, title: "Add Property Listings", desc: "List your property with all details in a structured, searchable format." },
                    { step: 3, title: "Connect With Brokers", desc: "Instantly find and chat with brokers matching your requirements." },
                    { step: 4, title: "Close Deals Faster", desc: "Collaborate effectively and finalize property deals without delays." }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#f7941d] rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-base mb-0.5">{item.title}</h4>
                        <p className="text-blue-100 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="relative">
              <img
                src={appScreenshot2}
                alt="App workflow"
                className="rounded-2xl shadow-lg w-full max-w-[180px] mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Key Benefits Section */}
      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Key Benefits
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Why real estate professionals choose One More Deal
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Network, title: "Instant Broker Connection", desc: "Direct communication with a verified network of real estate professionals." },
              { icon: Building2, title: "Smart Property Listings", desc: "Organized and searchable database to replace cluttered WhatsApp messages." },
              { icon: RefreshCw, title: "Auto Refresh & Expiry", desc: "Keep your listings updated automatically and remove expired deals seamlessly." },
              { icon: Users, title: "Broker Network", desc: "Build a stronger professional circle and collaborate to close deals faster." }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center mb-3 text-[#003d82]">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview / CTA */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Ready to transform your property business?
              </h2>
              <div className="space-y-3 mb-7">
                {["Replace scattered WhatsApp groups", "Verified professional network", "Real-time property matching"].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f7941d] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {/* <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl shadow-lg hover:bg-gray-900 transition-all duration-200 font-semibold text-sm"
                >
                  <Download className="w-4 h-4" />
                  Google Play
                </motion.a> */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold text-sm"
                  >
                    Contact Sales
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* <motion.div {...fadeUp} className="flex justify-center">
              <img
                src={appScreenshot1}
                alt="App screenshot"
                className="rounded-3xl shadow-xl max-w-[180px]"
              />
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Join a community where collaboration builds stronger businesses.
            </h2>
            <p className="text-base mb-6 text-blue-100">
              Join thousands of real estate professionals closing deals faster today.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#f7941d] text-white rounded-xl hover:bg-[#e88414] transition-all duration-200 shadow-lg font-semibold"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
