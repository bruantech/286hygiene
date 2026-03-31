"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Key, AlertCircle } from "lucide-react";

export default function ChangePasswordModal({ isOpen, onClose, onSubmit, isLoading = false }) {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // Reset state when modal opens/closes
  const handleOpenClose = () => {
    setPasswords({ newPassword: "", confirmPassword: "" });
    setError("");
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
    setError(""); // clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (passwords.newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    onSubmit(passwords.newPassword);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={isLoading ? undefined : handleOpenClose}
            className="absolute inset-0 bg-[#15232a]/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-[#eafaf9] to-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0b8768]/10 text-[#0b8768] rounded-xl">
                  <Key className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-[#15232a]">
                  Change Password
                </h2>
              </div>
              <button
                type="button"
                onClick={handleOpenClose}
                disabled={isLoading}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <form id="password-form" onSubmit={handleSubmit} className="space-y-5">
                
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-50 text-red-500 p-3 rounded-xl text-sm flex items-start gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">New Password</label>
                    <input
                      required
                      type="password"
                      name="newPassword"
                      value={passwords.newPassword}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cf0d5] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                    <input
                      required
                      type="password"
                      name="confirmPassword"
                      value={passwords.confirmPassword}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cf0d5] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleOpenClose}
                disabled={isLoading}
                className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="password-form"
                disabled={isLoading}
                className="px-6 py-2.5 rounded-xl font-medium text-[#15232a] bg-gradient-to-r from-[#2cf0d5] to-[#7be2ef] hover:opacity-90 transition-all flex items-center justify-center min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
