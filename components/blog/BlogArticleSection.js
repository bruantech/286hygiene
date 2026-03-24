import Image from "next/image";
import { Link2, MessageCircle, Share2 } from "lucide-react";

const topics = [
  "5 Signs Your Office Needs Professional Cleaning",
  "How Often Should You Deep Clean Your Home",
  "Benefits of Professional Cleaning Services",
  "How to Maintain a Hygienic Workspace"
];

const paragraphs = [
  "The philosophy of Heal & Hygiene begins with the understanding that our surroundings dictate our internal state. When we curate the objects we touch daily, the ceramics, the linens, the oils, we are not just consuming; we are constructing a sanctuary.",
  "Clutter is the enemy of calm. Our approach to organization is subtractive. By removing the unnecessary, the essential becomes beautiful. Use tonal trays and hidden storage to maintain visual silence.",
  "Temperature is a tool. From the brisk awakening of a cold plunge to the meditative depth of a steam-filled room, managing your atmosphere is the key to somatic healing."
];

export default function BlogArticleSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[12rem_minmax(0,1fr)]">
        <aside className="space-y-12">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#8a9ca4]">
              Topics
            </p>
            <div className="mt-5 space-y-5">
              {topics.map((topic, index) => (
                <div key={topic} className="flex gap-3">
                  <div
                    className={[
                      "mt-1 w-px shrink-0",
                      index === 0 ? "bg-[#17222b]" : "bg-transparent"
                    ].join(" ")}
                  />
                  <p
                    className={[
                      "text-sm leading-6",
                      index === 0
                        ? "font-medium text-[#17222b]"
                        : "text-[#61757e]"
                    ].join(" ")}
                  >
                    {topic}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#8a9ca4]">
              Share
            </p>
            <div className="mt-4 flex gap-3">
              {[Share2, MessageCircle, Link2].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e7e6] bg-white text-[#17222b] transition hover:border-[#0b8768] hover:text-[#0b8768]"
                  aria-label="Share blog post"
                >
                  <Icon className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </aside>

        <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_10rem]">
          <div>
            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[1.03] text-[#1e2428] sm:text-5xl">
              5 Signs Your Office Needs Professional Cleaning
            </h1>

            <div className="mt-10 space-y-10">
              {paragraphs.map((paragraph) => (
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
                src="/images/service 3.png"
                alt="A wellness-inspired arrangement with aromatic oils"
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
              Jason Peter
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
