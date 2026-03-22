const steps = [
  {
    number: "01",
    title: "Request A Quote",
    text: "Tell us about your space and cleaning needs so we can prepare the right plan."
  },
  {
    number: "02",
    title: "Schedule Cleaning",
    text: "Choose a date and time that works for your home, office, or facility."
  },
  {
    number: "03",
    title: "Professional Cleaning",
    text: "Our experienced team arrives equipped and ready to deliver excellent results."
  },
  {
    number: "04",
    title: "Enjoy A Sparkling Space",
    text: "Step into a fresh, hygienic environment maintained to a high standard."
  }
];

export default function HowServicesWork() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.62)_0%,_rgba(245,253,248,0.64)_100%)] px-6 py-16 shadow-[0_25px_55px_rgba(64,129,147,0.08)] sm:px-10 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#7da39d]">
            The roadmap
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase text-[#17222b] sm:text-5xl">
            How our services work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6e848d]">
            One smooth process from inquiry to delivery, built to keep your experience easy and reliable.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 ? (
                <div className="absolute left-[58%] top-7 hidden h-px w-[88%] border-t border-dashed border-[#b6d3c7] lg:block" />
              ) : null}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-extrabold text-[#0b8768] shadow-[0_12px_28px_rgba(95,155,135,0.16)]">
                {step.number}
              </div>
              <h3 className="mt-7 text-lg font-extrabold uppercase text-[#17222b]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#728891]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

