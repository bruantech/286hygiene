"use client";

import Image from "next/image";
import { Link2, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

const topics = [
  {
    title: "5 Signs Your Office Needs Professional Cleaning",
    author: "Jason Peter",
    image: "/images/service 2.png",
    alt: "Professional cleaning tools arranged in an office environment",
    paragraphs: [
      "Dust building up on desks, corners, vents, and electronics is one of the earliest signs that routine cleaning is no longer enough. When surfaces start looking dull even after quick wipe-downs, it usually means deeper cleaning is overdue.",
      "Persistent odors in restrooms, meeting rooms, or shared work areas can also point to hidden hygiene issues. Smells that linger after basic tidying often come from carpets, upholstery, bins, and high-touch surfaces that need professional attention.",
      "Another clear sign is when employees begin noticing stains, cluttered common areas, or unhygienic touchpoints like door handles and switches. A professionally cleaned office supports comfort, productivity, and a stronger first impression for clients.",
    ],
  },
  {
    title: "How Often Should You Deep Clean Your Home",
    author: "John Peter",
    image: "/images/team.png",
    alt: "A residential cleaning team preparing a home deep clean",
    paragraphs: [
      "Most homes benefit from a deep clean every three to six months, but the right schedule depends on how the space is used. Homes with children, pets, allergies, or high daily traffic usually need deeper cleaning more often.",
      "Deep cleaning goes beyond surface tidying. It focuses on overlooked areas like under furniture, kitchen buildup, bathroom grout, fabric surfaces, baseboards, and high-touch zones where dust, bacteria, and residue gradually collect.",
      "Keeping a seasonal deep-cleaning routine helps maintain a healthier home and makes day-to-day upkeep easier. It also protects finishes, improves indoor freshness, and prevents dirt from becoming harder and more expensive to remove later.",
    ],
  },
  {
    title: "Benefits of Professional Cleaning Services",
    author: "Jason Peter",
    image: "/images/service 3.png",
    alt: "A polished interior after professional cleaning service",
    paragraphs: [
      "Professional cleaning services bring structure, consistency, and the right tools for each environment. Instead of relying on rushed surface cleaning, trained teams work with methods designed for hygiene, presentation, and material care.",
      "One major benefit is time. Homeowners and business teams can stay focused on their priorities while experienced cleaners handle the detailed work efficiently, including problem areas that are often skipped during regular cleaning.",
      "There is also a long-term value in preserving furniture, flooring, and shared spaces. A well-maintained environment feels better to use, creates a stronger impression, and supports healthier daily living for everyone in the space.",
    ],
  },
  {
    title: "How to Maintain a Hygienic Workspace",
    author: "Jason Peter",
    image: "/images/service 1.png",
    alt: "A hygienic workspace with cleaned desks and shared surfaces",
    paragraphs: [
      "A hygienic workspace starts with consistency. Shared desks, keyboards, phones, handles, and meeting surfaces should be cleaned regularly because they collect germs faster than many people realize during the workday.",
      "Simple habits make a real difference: empty bins on time, wipe high-touch areas, improve airflow where possible, and keep food waste from lingering in break areas. Clear cleaning responsibilities also help prevent standards from slipping.",
      "Combining these routines with scheduled professional cleaning creates a more dependable result. It keeps the environment fresher, supports staff wellbeing, and helps the workspace stay welcoming for both teams and visitors.",
    ],
  },
];

export default function BlogArticleSection() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const activeTopic = topics[activeTopicIndex];

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
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
                  <div key={topic.title} className="flex gap-3">
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
                        "text-left text-sm cursor-pointer leading-6 transition",
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

        <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_10rem]">
          <div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[1.03] text-[#1e2428] sm:text-5xl">
              {activeTopic.title}
            </h1>

            <div className="mt-10 space-y-2">
              {activeTopic.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-lg leading-9 text-[#52666f]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-4xl shadow-[0_22px_60px_rgba(59,107,120,0.16)]">
              <Image
                src={activeTopic.image}
                alt={activeTopic.alt}
                width={1200}
                height={1400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:pt-2">
            <p className="text-right text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#8a9ca4]">
              Written By
            </p>
            <p className="mt-3 text-right text-lg font-bold text-[#17222b]">
              {activeTopic.author}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
