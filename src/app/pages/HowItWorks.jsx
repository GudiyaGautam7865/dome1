import {
  UserPlus,
  FileText,
  Search,
  Phone,
  RefreshCw,
  CheckCircle2,
  Filter,
  MessageSquare,
  Building2,
  Users,
  Clock,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

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
      staggerChildren: 0.15
    }
  }
};

export function HowItWorks() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-[#003d82] via-[#0052a8] to-[#003d82] text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How the Platform Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A simple, step-by-step process to revolutionize how you manage and share property
            listings
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {[
              {
                step: 1,
                title: "Register & Get Started",
                desc: "Sign up using your mobile number and create your profile in seconds.",
                icon: UserPlus,
                color: "from-[#003d82] to-[#0052a8]",
                features: ["Quick and easy registration process", "Secure mobile verification"]
              },
              {
                step: 2,
                title: "Add Property Listings",
                desc: "Add your available properties with structured details like:",
                icon: FileText,
                color: "from-[#0052a8] to-[#0066cc]",
                features: ["Location", "Type (Residential / Commercial / Plot / New)", "Price / Rent", "Area & specifications"]
              },
              {
                step: 3,
                title: "Explore Community Listings",
                desc: "Access all properties added by other brokers and builders in one place.",
                icon: Search,
                color: "from-[#f7941d] to-[#e88414]",
                features: ["Filter by City", "Filter by Area", "Filter by Property type", "Filter by Rent or sale"]
              },
              {
                step: 4,
                title: "Connect Instantly",
                desc: "Find a relevant property and connect directly:",
                icon: Phone,
                color: "from-[#003d82] to-[#f7941d]",
                features: ["Direct call option", "Message via WhatsApp", "No delays. No searching through chats."]
              },
              {
                step: 5,
                title: "Keep Listings Updated",
                desc: "Refresh your listings regularly so they stay visible and relevant in the system.",
                icon: RefreshCw,
                color: "from-[#0052a8] to-[#003d82]",
                features: ["Auto-expiry functionality", "Easy refresh system", "Stay relevant in searches"]
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'order-2 md:order-1' : 'order-2 md:order-2'}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`bg-gradient-to-br ${item.color} p-8 rounded-3xl shadow-2xl min-h-[320px] flex flex-col justify-center`}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="w-9 h-9 text-white" />
                    </div>
                    <div className="text-white space-y-4">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? 'order-1 md:order-2' : 'order-1 md:order-1'}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#003d82] to-[#f7941d] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                      {item.step}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage properties efficiently</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: FileText, title: "Structured Property Listings", desc: "No more messy messages — all properties are stored in a clean, organized format.", color: "from-[#003d82] to-[#0052a8]" },
              { icon: Search, title: "Smart Search & Filters", desc: "Quickly find properties based on location, price, type, and requirements.", color: "from-[#0052a8] to-[#0066cc]" },
              { icon: Phone, title: "Instant Broker Connection", desc: "Connect with property owners instantly via call or WhatsApp.", color: "from-[#f7941d] to-[#e88414]" },
              { icon: Clock, title: "Auto Expiry & Refresh System", desc: "Listings stay relevant with auto-expiry and refresh functionality.", color: "from-[#0066cc] to-[#003d82]" },
              { icon: Smartphone, title: "Simple & Easy to Use", desc: "Designed for daily use by brokers — no technical knowledge required.", color: "from-[#e88414] to-[#d97706]" },
              { icon: Users, title: "Broker Network", desc: "Join a growing community of brokers and builders sharing opportunities.", color: "from-[#003d82] to-[#f7941d]" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
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
              Built for Real Estate Professionals
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-[#003d82] to-[#0052a8] p-8 rounded-3xl shadow-2xl"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                <Users className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Brokers</h3>
              <ul className="space-y-3 text-white">
                {["Manage multiple listings easily", "Find matching properties faster", "Increase deal closure rate"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f7941d] mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-[#f7941d] to-[#e88414] p-8 rounded-3xl shadow-2xl"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Builders</h3>
              <ul className="space-y-3 text-white">
                {["Showcase new projects efficiently", "Reach a wider broker network", "Manage project visibility in one place"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#003d82] mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#003d82] via-[#0052a8] to-[#003d82] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose This Platform</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Eliminates dependency on WhatsApp groups",
              "Saves time in searching properties",
              "Improves collaboration among brokers",
              "Keeps listings structured and updated",
              "Helps close deals faster",
              "Centralized property management"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <CheckCircle2 className="w-8 h-8 text-[#f7941d] mb-3" />
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#download"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f7941d] text-white rounded-xl hover:bg-[#e88414] transition-all shadow-lg font-medium text-lg"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
