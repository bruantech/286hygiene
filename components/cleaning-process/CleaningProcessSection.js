"use client";

import { ClipboardCheck, Search, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    label: "Inspection",
    title: "Inspection",
    text: "We assess the cleaning requirements. Every sanctuary is unique; our experts conduct a tactile and visual audit to identify sensitive surfaces and high-traffic focal points.",
    image: "/images/service 1.png",
    alt: "Inspection of cleaning surfaces before work begins",
    icon: Search
  },
  {
    number: "02",
    label: "Planning",
    title: "Planning",
    text: "Each project receives a tailored care plan. We select the right tools, map the workflow, and prepare safe solutions that match the material, traffic level, and hygiene goal of the space.",
    image: "/images/service 2.png",
    alt: "Cleaning tools and materials prepared for a job",
    icon: ClipboardCheck
  },
  {
    number: "03",
    label: "Cleaning",
    title: "Cleaning",
    text: "Our trained team carries out the process with discipline and attention to detail. We focus on high-touch zones, embedded buildup, and surface-safe treatment to deliver a visibly refreshed result.",
    image: "/images/team.png",
    alt: "Professional cleaners carrying out a detailed cleaning service",
    icon: Sparkles
  },
  {
    number: "04",
    label: "Final Inspection",
    title: "Final Inspection",
    text: "Before we sign off, we review the finished space to confirm standards have been met. This last pass helps ensure consistency, presentation, and peace of mind for every client.",
    image: "/images/heroimg.png",
    alt: "Final review of a cleaned and polished space",
    icon: ShieldCheck
  }
];

export default function CleaningProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];
  const Icon = step.icon;

  return (
    <section className="bg-[#d8eef6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-center gap-3">
          {steps.map((item, index) => {
            const isActive = index === activeStep;

            return (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={[
                  "rounded-full px-6 py-4 text-sm font-extrabold shadow-[0_14px_28px_rgba(16,82,97,0.08)] transition",
                  isActive
                    ? "bg-[#0b8768] text-white shadow-[0_18px_34px_rgba(11,135,104,0.26)]"
                    : "bg-white text-[#17222b] hover:bg-[#f6fbfb]"
                ].join(" ")}
              >
                {item.number}. {item.label}
              </button>
            );
          })}
        </div>

        <article className="mt-12 overflow-hidden rounded-4xl bg-white shadow-[0_28px_70px_rgba(73,121,135,0.2)]">
          <div className="grid lg:grid-cols-[1.2fr_0.88fr]">
            <div className="px-8 py-10 sm:px-10 sm:py-12 lg:px-10 lg:py-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf5f2] text-[#0b8768]">
                <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
              </div>

              <h2 className="mt-8 text-4xl font-black text-[#17233b] sm:text-5xl">
                {step.title}
              </h2>
              <p className="mt-6 max-w-120 text-lg leading-9 text-[#516770]">
                {step.text}
              </p>
            </div>

            <div
              className="min-h-72 bg-cover bg-center"
              style={{ backgroundImage: `url('${step.image}')` }}
              role="img"
              aria-label={step.alt}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
