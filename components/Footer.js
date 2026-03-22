const links = {
  Company: ["About Us", "Our Process", "Testimonials"],
  Services: ["Home Cleaning", "Office Cleaning", "Fumigation"],
  Contact: ["+234 800 000 2860", "info@286hygiene.com", "Lagos, Nigeria"]
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#dbeceb] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0f8ca8]/20 bg-white shadow-[0_8px_25px_rgba(17,112,138,0.08)]">
              <div className="text-center text-[8px] font-black uppercase leading-tight tracking-[0.18em] text-[#007f97]">
                286
                <br />
                hygiene
              </div>
            </div>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0a8199]">
                286 Hygiene
              </p>
              <p className="text-xs text-[#748b93]">Professional hygiene service brand</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#6c828b]">
            We deliver safe, reliable, and efficient cleaning services for every kind of space.
          </p>
        </div>

        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#17222b]">
              {group}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[#6f858d]">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-[#dbeceb] pt-6 text-sm text-[#8ba0a4]">
        © 2026 286 Hygiene. All rights reserved.
      </div>
    </footer>
  );
}

