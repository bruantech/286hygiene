"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, AlertCircle, CheckCircle, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email below and click 'Forgot Password?' to receive a reset link.");
      return;
    }
    
    setResetLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMsg("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError("Failed to send reset email. Ensure your email is correct.");
      console.error(err);
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden bg-[#0a1115]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[80vw] sm:w-[500px] h-[80vw] sm:h-[500px] rounded-full bg-[#2cf0d5]/10 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[90vw] sm:w-[600px] h-[90vw] sm:h-[600px] rounded-full bg-[#0b8768]/10 blur-[120px]"
        />
        <div className="absolute inset-0 bg-white opacity-[0.01] mix-blend-overlay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[420px]"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2cf0d5] to-transparent opacity-50" />

          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-20 h-20 bg-white rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(44,240,213,0.3)] overflow-hidden p-2"
            >
              <Image 
                src="/images/logo.png" 
                alt="286 Hygiene Logo" 
                width={80} 
                height={80} 
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              Welcome Back
            </h2>
            <p className="text-[#8a9ca4] text-sm">
              Sign in here to access admin dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-sm flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}
              {successMsg && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="bg-[#2cf0d5]/10 border border-[#2cf0d5]/20 text-[#2cf0d5] p-4 rounded-xl text-sm flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <p>{successMsg}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300">
                  <Mail className="h-5 w-5 text-[#61757e] group-focus-within:text-[#2cf0d5] transition-colors" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-12 pr-4 py-3.5 bg-[#15232a]/50 border border-white/5 rounded-xl text-white placeholder-[#61757e] focus:outline-none focus:border-[#2cf0d5]/50 focus:bg-[#15232a]/80 focus:ring-1 focus:ring-[#2cf0d5]/50 transition-all sm:text-sm"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="group relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300">
                  <Lock className="h-5 w-5 text-[#61757e] group-focus-within:text-[#2cf0d5] transition-colors" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full pl-12 pr-12 py-3.5 bg-[#15232a]/50 border border-white/5 rounded-xl text-white placeholder-[#61757e] focus:outline-none focus:border-[#2cf0d5]/50 focus:bg-[#15232a]/80 focus:ring-1 focus:ring-[#2cf0d5]/50 transition-all sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#61757e] hover:text-[#2cf0d5] transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={resetLoading}
                  className="text-sm font-medium text-[#2cf0d5] hover:text-[#7be2ef] transition-colors disabled:opacity-50"
                >
                  {resetLoading ? "Sending..." : "Forgot Password?"}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="relative cursor-pointer w-full flex items-center justify-center gap-2 py-4 px-4 mt-2 rounded-xl text-[#0a1115] font-bold bg-gradient-to-r from-[#2cf0d5] to-[#7be2ef] hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(44,240,213,0.2)] hover:shadow-[0_0_30px_rgba(44,240,213,0.4)] overflow-hidden"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#0a1115]/30 border-t-[#0a1115] rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </div>
        
        {/* Footer info */}
        <p className="mt-8 text-center text-[#61757e] text-xs font-medium tracking-wide">
          ALWAYS KEEP THIS EMAIL AND PASSWORD PRIVATE
        </p>
      </motion.div>
    </div>
  );
}
