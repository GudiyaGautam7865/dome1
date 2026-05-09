import { Link } from "react-router";
import { Download, Building2, Users, TrendingUp, Target, Network, Zap, ArrowRight, CheckCircle2, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import appScreenshot1 from "../../imports/image.png";
import appScreenshot2 from "../../imports/image-1.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7 }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative bg-gradient-to-br from-[#003d82] via-[#0052a8] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...slideInLeft}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-[#f7941d] rounded-full text-white text-sm font-medium mb-6"
              >
                🚀 Revolutionizing Property Deals
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Simplifying Property Deals for Brokers & Builders
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                A smart and structured platform to replace scattered WhatsApp property sharing with a
                centralized, searchable system.
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-50 flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#f7941d]" />
                Find the right property faster. Close deals quicker.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f7941d] text-white rounded-xl hover:bg-[#e88414] transition-all shadow-lg hover:shadow-xl font-medium text-lg"
                >
                  <Download className="w-5 h-5" />
                  Download App
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all border border-white/20 font-medium text-lg"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              {...slideInRight}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={appScreenshot1}
                  alt="OMD App Screenshot"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f7941d] rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Better Way to Manage Property Listings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Managing property listings across WhatsApp groups is time-consuming and unstructured.
              Important deals get lost in chats, searching becomes difficult, and follow-ups are
              missed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1746021535489-00edc5efb203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Modern office workspace"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#003d82]/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Designed specifically for real estate professionals
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Building2, title: "Organize property listings in a structured format", desc: "No more messy messages — all properties stored in a clean database" },
                  { icon: Target, title: "Quickly search and filter relevant properties", desc: "Find exactly what you need with powerful search" },
                  { icon: Network, title: "Connect instantly with other brokers", desc: "Direct communication without delays" },
                  { icon: TrendingUp, title: "Save time and increase deal conversions", desc: "Close more deals with streamlined processes" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="mt-1 p-3 bg-gradient-to-br from-[#003d82] to-[#0052a8] rounded-xl group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Use One More Deal?
            </h2>
            <p className="text-xl text-[#f7941d] font-semibold max-w-3xl mx-auto">
              Because every lead deserves one more chance
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Users, title: "Connect Brokers Instantly", desc: "A broker has a client, but no matching property. Another broker has inventory, but no matching client. One More Deal connects them instantly.", color: "from-[#003d82] to-[#0052a8]" },
              { icon: Network, title: "Collaborate, Don't Compete", desc: "Brokers collaborate instead of competing. Build a stronger network and achieve smarter deals together.", color: "from-[#0052a8] to-[#0066cc]" },
              { icon: Target, title: "Better Client Options", desc: "Clients get better, wider property options. Access to more inventory means happier clients and faster closures.", color: "from-[#f7941d] to-[#e88414]" },
              { icon: Zap, title: "Close Deals Faster", desc: "Deals close faster with shared opportunities. No more waiting or missing out on potential matches.", color: "from-[#e88414] to-[#d97706]" },
              { icon: TrendingUp, title: "No Leads Go to Waste", desc: "Every inquiry finds a chance. Redirect clients to new builder projects through our powerful network.", color: "from-[#003d82] to-[#f7941d]" },
              { icon: Building2, title: "Higher Earnings", desc: "More connections. More options. More closures. Stronger network means higher earnings for everyone.", color: "from-[#0052a8] to-[#f7941d]" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-r from-[#003d82] to-[#0052a8] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f7941d] rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                One More Deal — Because Every Lead Deserves One More Chance
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Stronger network. Smarter deals. Higher earnings.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#f7941d] text-white rounded-xl hover:bg-[#e88414] transition-all shadow-lg font-medium"
                >
                  Learn How It Works
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Manage your property inventory efficiently with One More Deal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="order-2 md:order-1"
            >
              <div className="bg-[#0052a8] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Broker-to-Broker Property Search Flow</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f7941d] rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <p>Add your property inventory to the app</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f7941d] rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <p>Search through other brokers' listings</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f7941d] rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <p>Connect instantly with matching properties</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f7941d] rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <p>Close deals faster with direct contact</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              className="order-1 md:order-2"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={appScreenshot1}
                  alt="App workflow"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mt-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img
                  src={appScreenshot2}
                  alt="Property management"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="bg-gradient-to-br from-[#f7941d] to-[#e88414] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Manage Property Inventory Efficiently</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p>Organized listing with photos and details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p>Smart filters for location, price, and type</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p>Auto-refresh to keep listings current</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <p>Direct contact options via call or WhatsApp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="download" className="py-16 md:py-24 bg-gradient-to-br from-[#003d82] to-[#0052a8] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#f7941d] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#f7941d] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-[#f7941d]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Closing More Deals Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the growing network of brokers and builders using a smarter way to manage property
              listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
                className="inline-flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all shadow-lg"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
         href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"href="#"  
                className="inline-flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all shadow-lg"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
