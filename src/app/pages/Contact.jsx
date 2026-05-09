import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitted(true);

  setTimeout(() => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }, 3000);
};

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

// const handleChange = (e) => {    e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     }, 3000);
//   };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions or want a demo? We'd love to hear from you.
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
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us through any of these channels. We're here to help you get started
                with One More Deal.
              </p>

              <div className="space-y-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#003d82] to-[#0052a8] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Email</h3>
                    <a
                      href="mailto:omd.brokerassociate@gmail.com"
                      className="text-[#003d82] hover:text-[#f7941d] transition-colors"
                    >
                      omd.brokerassociate@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f7941d] to-[#e88414] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Phone</h3>
                    <a href="tel:+919209182221" className="text-[#003d82] hover:text-[#f7941d] transition-colors">
                      +91-9209182221
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0052a8] to-[#003d82] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Location</h3>
                    <p className="text-gray-600">Serving brokers and builders across India</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl border border-blue-100 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#003d82] to-[#f7941d] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#f7941d] rounded-full"></span>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#003d82] rounded-full"></span>
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1762452059456-e4c16c256dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Modern building"
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-2xl border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 text-green-800 p-8 rounded-2xl text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p>Thank you for contacting us. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#003d82] focus:border-[#003d82] outline-none transition-all bg-white"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#003d82] focus:border-[#003d82] outline-none transition-all bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#003d82] focus:border-[#003d82] outline-none transition-all bg-white"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#003d82] focus:border-[#003d82] outline-none transition-all resize-none bg-white"
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#003d82] to-[#0052a8] text-white py-4 px-6 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 font-medium text-lg"
                    >
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </motion.button>
                  </form>
                )}
              </div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="mt-6 p-6 bg-gradient-to-r from-[#f7941d] to-[#e88414] text-white rounded-2xl shadow-lg"
              >
                <h3 className="font-semibold mb-2 text-lg">Quick Response Time</h3>
                <p className="text-sm text-white/90">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#003d82] via-[#0052a8] to-[#003d82] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f7941d] rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of brokers and builders already using One More Deal to close more deals.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://play.google.com/store/apps/details?id=com.onemoredeal.one_more_deal"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f7941d] text-white rounded-xl hover:bg-[#e88414] transition-all shadow-lg font-medium text-lg"
          >
            Download the App Now
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
