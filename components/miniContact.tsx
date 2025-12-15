"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Center Wrapper */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 30 }}
              transition={{ duration: 0.35 }}
              className="
                w-full max-w-4xl bg-white rounded-3xl shadow-2xl
                p-10 relative max-h-[90vh] overflow-y-auto
              "
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-black"
              >
                <X size={22} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <Mail className="text-orange-500" size={26} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Contact Us</h2>
                  <p className="text-gray-500">
                    Book a free consultation with our experts
                  </p>
                </div>
              </div>

              {/* FORM */}
              <form className="space-y-10 text-sm">

                {/* BASIC INFO */}
                <section>
                  <h3 className="font-semibold mb-4 text-gray-700">
                    Basic Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <input placeholder="Your Name" className="input" />
                    <input placeholder="Phone Number" className="input" />
                    <input placeholder="Email" className="input" />
                    <input placeholder="Company Name" className="input" />
                    <input
                      placeholder="Website Link (Optional)"
                      className="input md:col-span-2"
                    />
                  </div>
                </section>

                {/* BUSINESS INFO */}
                <section>
                  <h3 className="font-semibold mb-4 text-gray-700">
                    Business Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <select className="input">
                      <option>Business Type</option>
                      <option>Startup</option>
                      <option>SME</option>
                      <option>Enterprise</option>
                      <option>Agency</option>
                    </select>

                    <select className="input">
                      <option>Company Turnover (₹)</option>
                      <option>Below 10 Lakhs</option>
                      <option>10L – 50L</option>
                      <option>50L – 2Cr</option>
                      <option>2Cr+</option>
                    </select>

                    <select className="input">
                      <option>Monthly Budget (₹)</option>
                      <option>Below 25k</option>
                      <option>25k – 50k</option>
                      <option>50k – 1L</option>
                      <option>1L+</option>
                    </select>
                  </div>
                </section>

                {/* SERVICES */}
                <section>
                  <h3 className="font-semibold mb-4 text-gray-700">
                    Services Required
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "SEO",
                      "Lead Generation / PPC",
                      "Social Media Management",
                      "Website Design",
                      "E-Commerce",
                      "Other",
                    ].map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          className="accent-orange-500"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </section>

                {/* MEETING */}
                <section>
                  <h3 className="font-semibold mb-4 text-gray-700">
                    Meeting Preferences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <select className="input">
                      <option>How soon would you like to get started?</option>
                      <option>Immediately</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                    </select>

                    <input type="datetime-local" className="input" />

                    <select className="input">
                      <option>Preferred Timezone</option>
                      <option>Asia/Kolkata</option>
                      <option>GMT</option>
                      <option>EST</option>
                    </select>

                    <select className="input md:col-span-3">
                      <option>Preferred Mode</option>
                      <option>Call</option>
                      <option>Google Meet</option>
                      <option>Zoom</option>
                    </select>
                  </div>
                </section>

                {/* MESSAGE */}
                <section>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="input"
                  />
                </section>

                {/* DISCLAIMER */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting this form, you acknowledge our use of your
                  information in accordance with our Privacy Policy.
                </p>

                {/* SUBMIT */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    w-full bg-orange-500 text-white py-4 rounded-xl
                    font-semibold flex items-center justify-center gap-2
                    text-base
                  "
                >
                  Submit Request <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
