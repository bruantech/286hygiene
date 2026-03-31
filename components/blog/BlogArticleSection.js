"use client";

import Image from "next/image";
import { Link2, MessageCircle, Share2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeOnScroll } from "../../lib/animations";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function BlogArticleSection() {
  const [topics, setTopics] = useState([]);
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch blogs from Firebase
  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("date", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const blogsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTopics(blogsData);
      setLoading(false);
      // Ensure active index is valid if items are deleted
      if (activeTopicIndex >= blogsData.length) {
        setActiveTopicIndex(0);
      }
    });

    return () => unsubscribe();
  }, [activeTopicIndex]);

  if (loading) {
    return (
      <section className="px-4 py-10 sm:px-6 lg:px-8 mt-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[12rem_minmax(0,1fr)]">
          {/* Sidebar Skeleton */}
          <aside className="space-y-12 animate-pulse">
            <div>
              <div className="h-3 w-16 bg-gray-200 rounded-full mb-8"></div>
              <div className="mt-5 space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="h-4 w-full bg-gray-100 rounded-md"></div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_10rem] animate-pulse">
            <div>
              {/* Title Section */}
              <div className="space-y-4 mb-10">
                <div className="h-12 bg-gray-200 rounded-xl w-3/4"></div>
                <div className="h-12 bg-gray-200 rounded-xl w-2/4"></div>
              </div>

              {/* Paragraphs */}
              <div className="mt-10 space-y-5">
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-11/12"></div>
                <div className="h-4 bg-gray-100 rounded w-4/5 pt-4"></div>
                <div className="h-4 bg-gray-100 rounded w-full"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
              </div>

              {/* Image Skeleton */}
              <div className="mt-12 relative overflow-hidden rounded-4xl bg-gray-200 min-h-[300px] sm:min-h-[500px] w-full"></div>
            </div>

            {/* Author Skeleton */}
            <div className="lg:pt-2 flex flex-col items-end">
              <div className="h-3 w-20 bg-gray-200 rounded-full mb-4"></div>
              <div className="h-5 w-28 bg-gray-200 rounded-md mb-2"></div>
              <div className="h-3 w-24 bg-gray-100 rounded-full"></div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  if (topics.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center py-32 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#1e2428] mb-2">No blogs found</h2>
        <p className="text-[#52666f]">Check back later for new articles and cleaning tips!</p>
      </div>
    );
  }

  const activeTopic = topics[activeTopicIndex];

  // Pagination logic
  const totalPages = Math.ceil(topics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedTopics = topics.slice(startIndex, startIndex + itemsPerPage);

  // Helper to split text area content into paragraphs
  const paragraphs = activeTopic.content 
    ? activeTopic.content.split("\n").filter(p => p.trim() !== "")
    : [];

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeOnScroll}
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <aside className="space-y-12">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#8a9ca4]">
              Topics
            </p>
            <div className="mt-5 space-y-5 h-[50vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {displayedTopics.map((topic, index) => {
                const absoluteIndex = startIndex + index;
                const isActive = absoluteIndex === activeTopicIndex;

                return (
                  <div key={topic.id} className="flex gap-3">
                    <div
                      className={[
                        "mt-1 w-px shrink-0",
                        isActive ? "bg-[#17222b]" : "bg-transparent",
                      ].join(" ")}
                    />
                    <button
                      type="button"
                      onClick={() => setActiveTopicIndex(absoluteIndex)}
                      className={[
                        "text-left text-sm cursor-pointer leading-6 transition line-clamp-2",
                        isActive
                          ? "font-medium text-[#17222b]"
                          : "text-[#61757e] hover:text-[#17222b]",
                      ].join(" ")}
                    >
                      {topic.title}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-between border-t border-[#e2e8f0] pt-4">
                <button
                  type="button"
                  onClick={() => {
                    const newPage = Math.max(currentPage - 1, 1);
                    setCurrentPage(newPage);
                    setActiveTopicIndex((newPage - 1) * itemsPerPage);
                  }}
                  disabled={currentPage === 1}
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-[#61757e] hover:text-[#17222b] disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Prev
                </button>
                <span className="text-xs font-medium text-[#8a9ca4]">
                  {currentPage} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const newPage = Math.min(currentPage + 1, totalPages);
                    setCurrentPage(newPage);
                    setActiveTopicIndex((newPage - 1) * itemsPerPage);
                  }}
                  disabled={currentPage === totalPages}
                  className="text-xs font-semibold uppercase tracking-[0.1em] text-[#61757e] hover:text-[#17222b] disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </aside>

        <AnimatePresence mode="wait">
          {activeTopic && (
            <motion.article 
              key={activeTopic.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_10rem]"
            >
              <div>
                <h1 className="max-w-3xl text-4xl font-black uppercase leading-[1.03] text-[#1e2428] sm:text-5xl">
                  {activeTopic.title}
                </h1>

                <div className="mt-10 space-y-6">
                  {paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="max-w-3xl text-lg leading-9 text-[#52666f]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {activeTopic.imageUrl && (
                  <div className="mt-12 relative overflow-hidden rounded-4xl shadow-[0_22px_60px_rgba(59,107,120,0.16)] min-h-[300px] sm:min-h-[500px]">
                    <Image
                      src={activeTopic.imageUrl}
                      alt={activeTopic.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="lg:pt-2">
                <p className="text-right text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#8a9ca4]">
                  Written By
                </p>
                <p className="mt-3 text-right text-lg font-bold text-[#17222b]">
                  {activeTopic.author}
                </p>
                {activeTopic.date && (
                  <p className="mt-1 text-right text-sm text-[#8a9ca4]">
                    {activeTopic.date}
                  </p>
                )}
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
