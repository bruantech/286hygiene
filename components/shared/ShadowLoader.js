"use client";

export default function ShadowLoader() {
  return (
    <div
      className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,_#f4fbfb_0%,_#eff9f7_48%,_#f5fbf7_100%)]"
      aria-label="Loading homepage"
      role="status"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(97,210,233,0.2),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(214,245,222,0.9),_transparent_26%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-4 shadow-[0_12px_30px_rgba(44,146,178,0.08)] backdrop-blur-sm">
          <div className="h-5 w-32 animate-pulse rounded-full bg-[#d2ecf2]" />
          <div className="hidden gap-3 sm:flex">
            <div className="h-4 w-16 animate-pulse rounded-full bg-[#e2f1ee]" />
            <div className="h-4 w-16 animate-pulse rounded-full bg-[#e2f1ee]" />
            <div className="h-4 w-16 animate-pulse rounded-full bg-[#e2f1ee]" />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-xl pt-4 lg:pt-10">
            <div className="h-6 w-36 animate-pulse rounded-full bg-[#d9f1f5]" />
            <div className="mt-5 space-y-3">
              <div className="h-12 w-full animate-pulse rounded-2xl bg-[#bfe8f2] sm:h-16" />
              <div className="h-12 w-5/6 animate-pulse rounded-2xl bg-[#bfe8f2] sm:h-16" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full animate-pulse rounded-full bg-white/90 shadow-[0_10px_24px_rgba(44,146,178,0.08)]" />
              <div className="h-4 w-11/12 animate-pulse rounded-full bg-white/90 shadow-[0_10px_24px_rgba(44,146,178,0.08)]" />
              <div className="h-4 w-3/4 animate-pulse rounded-full bg-white/90 shadow-[0_10px_24px_rgba(44,146,178,0.08)]" />
            </div>

            <div className="mt-8 h-14 w-40 animate-pulse rounded-full bg-[#27acd0]/85 shadow-[0_14px_30px_rgba(39,172,208,0.28)]" />

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/75 bg-white/85 px-3 py-4 shadow-[0_16px_40px_rgba(44,146,178,0.12)] sm:px-5"
                >
                  <div className="h-7 w-12 animate-pulse rounded-full bg-[#c7edf5]" />
                  <div className="mt-3 h-3 w-full animate-pulse rounded-full bg-[#e7f2ef]" />
                  <div className="mt-2 h-3 w-4/5 animate-pulse rounded-full bg-[#e7f2ef]" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[30rem] lg:block">
            <div className="absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-[#f6d8d5]" />
            <div className="absolute -left-8 top-6 h-32 w-32 rounded-full bg-[#dff6fb]/80 blur-xl" />
            <div className="relative overflow-hidden rounded-[2.8rem] bg-white/55 p-3 shadow-[0_30px_70px_rgba(54,134,159,0.18)]">
              <div className="h-[620px] w-[420px] animate-pulse rounded-[2.2rem] rounded-tr-none bg-[linear-gradient(135deg,_rgba(39,172,208,0.18),_rgba(255,255,255,0.9)_42%,_rgba(214,245,222,0.62)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
