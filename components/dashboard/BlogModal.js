"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

export default function BlogModal({ isOpen, onClose, onSubmit, editingBlog = null, isLoading = false }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    imageUrl: "",
    content: "",
  });

  // Populate data when editing
  useEffect(() => {
    if (editingBlog && isOpen) {
      setFormData({
        title: editingBlog.title || "",
        author: editingBlog.author || "",
        date: editingBlog.date || "",
        imageUrl: editingBlog.imageUrl || "",
        content: editingBlog.content || "",
      });
    } else {
      setFormData({
        title: "",
        author: "",
        date: "",
        imageUrl: "",
        content: "",
      });
    }
  }, [editingBlog, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#15232a]/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-[#eafaf9] to-white">
              <h2 className="text-2xl font-bold text-[#15232a]">
                {editingBlog ? "Edit Blog Post" : "Add New Blog Post"}
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <form id="blog-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Title</label>
                    <input
                      required
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cf0d5] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="e.g. 5 Tips for Spring Cleaning"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Author</label>
                    <input
                      required
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cf0d5] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Date</label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cf0d5] focus:border-transparent outline-none transition-all text-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Cover Image URL</label>
                    <input
                      required
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cf0d5] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Content</label>
                  <textarea
                    required
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2cf0d5] focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                    placeholder="Write your blog content here..."
                  />
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-200 transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                form="blog-form"
                disabled={isLoading}
                className="px-6 py-2.5 rounded-xl font-medium text-[#15232a] bg-gradient-to-r from-[#2cf0d5] to-[#7be2ef] hover:opacity-90 transition-all flex items-center justify-center min-w-[120px]"
              >
                {isLoading ? "Saving..." : (editingBlog ? "Save Changes" : "Create Blog")}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
