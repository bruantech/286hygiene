const testimonials = [
  {
    name: "Olumide A.",
    role: "Homeowner",
    text: "286 Hygiene made our home feel brand new. Their team was punctual, professional, and incredibly thorough."
  },
  {
    name: "Chioma E.",
    role: "Facility Lead",
    text: "The team pays attention to detail from start to finish. Every room felt refreshed and properly cared for."
  },
  {
    name: "Fatima N.",
    role: "Business Owner",
    text: "We needed a cleaning partner we could trust, and they delivered consistently. I’d gladly recommend them."
  }
];

function Stars() {
  return <div className="text-sm tracking-[0.3em] text-[#0b8768]">★★★★★</div>;
}

export default function Testimonials() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-[#17222b] sm:text-5xl">
          What Our Clients Say
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.7rem] bg-white/88 p-6 shadow-[0_18px_45px_rgba(48,112,135,0.1)]"
            >
              <Stars />
              <p className="mt-5 text-sm leading-7 text-[#5e757e]">{testimonial.text}</p>
              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dff4e8] text-sm font-bold text-[#0b8768]">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-[#17222b]">{testimonial.name}</p>
                  <p className="text-sm text-[#7a9096]">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

