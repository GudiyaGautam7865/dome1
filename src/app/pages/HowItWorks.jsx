import { UserPlus, FileText, Search, Phone, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import appScreenshot2 from "../../imports/image-1.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function HowItWorks() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-[#003d82] via-[#0052a8] to-[#003d82] text-white py-8 md:py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#f7941d] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#f7941d] rounded-full blur-3xl"></div>
        </div>
        <motion.div
          {...fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h1>
          <p className="text-base text-blue-100 max-w-3xl mx-auto">
            A simple 4-step process to transform your property business
          </p>
        </motion.div>
      </section>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <div className="space-y-5">
                {[
                  { step: 1, title: "Register & Verify", desc: "Quick sign-up with your mobile number followed by professional verification to maintain community trust.", icon: UserPlus },
                  { step: 2, title: "Add Property Listings", desc: "List your residential or commercial properties with all specifications in a structured database.", icon: FileText },
                  { step: 3, title: "Connect With Brokers", desc: "Browse community listings and find matching deals. Connect instantly via call or WhatsApp.", icon: Search },
                  { step: 4, title: "Close Deals Faster", desc: "Collaborate effectively with other brokers and builders to finalize deals without delays.", icon: Phone },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-blue-50 text-[#003d82] rounded-xl flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-[#003d82] group-hover:text-white transition-all duration-200">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-0.5">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative flex justify-center"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#003d82]/10 to-[#f7941d]/10 rounded-full blur-3xl opacity-40"></div>
              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src={appScreenshot2}
                alt="How it works"
                className="relative z-10 rounded-2xl shadow-md max-w-[200px] md:max-w-[240px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Ready to start closing more deals?</h2>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#f7941d] text-white rounded-xl hover:bg-[#e88414] transition-all duration-200 shadow-lg font-semibold"
            >
              Download OMD Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
