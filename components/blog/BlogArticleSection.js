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
      <div className="flex justify-center items-center py-32 px-4">
        <Loader2 className="w-8 h-8 animate-spin text-[#17222b]" />
        <span className="ml-3 font-medium text-[#17222b]">Loading the latest insights...</span>
      </div>
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
            <div className="mt-5 space-y-5">
              {topics.map((topic, index) => {
                const isActive = index === activeTopicIndex;

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
                      onClick={() => setActiveTopicIndex(index)}
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
