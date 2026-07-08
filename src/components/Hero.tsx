export function Hero() {
  return (
    <section id="top" className="relative border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(239,68,68,0.24),transparent_34rem)]" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:items-center lg:gap-4 lg:px-8 lg:py-20">
        <div className="min-w-0 overflow-hidden">
          <p className="mb-4 inline-flex w-fit rounded-md border border-red-300/30 bg-red-950/50 px-4 py-1.5 text-sm font-black uppercase tracking-[0.2em] text-red-200">
            If it can be wrapped, it will be.
          </p>
          <h1 className="max-w-full whitespace-nowrap text-[clamp(1.75rem,7.1vw,3.4rem)] font-black leading-none tracking-tight text-white md:text-[clamp(2.6rem,4.6vw,3.8rem)] lg:text-[clamp(3.2rem,4.72vw,4rem)] xl:text-[clamp(3.45rem,4.18vw,4.28rem)]">
            BaconWrapEverything
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-200 sm:text-xl lg:text-2xl lg:leading-9">
            We bacon-wrap food, air fry it, cut it open, rate it, and let the
            internet decide what's next.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/episodes"
              className="rounded-md bg-red-600 px-6 py-3.5 text-center text-base font-black uppercase tracking-wide text-white shadow-lg shadow-red-950/40 transition hover:bg-red-500"
            >
              Watch Episodes
            </a>
            <a
              href="/suggest"
              className="rounded-md border border-white/20 bg-white/10 px-6 py-3.5 text-center text-base font-black uppercase tracking-wide text-white transition hover:bg-white/15"
            >
              Suggest the Next Wrap
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-md justify-self-center rounded-lg border border-white/10 bg-stone-950/80 p-4 shadow-2xl shadow-black/40 lg:justify-self-end">
          <div className="rounded-md border border-red-200/10 bg-[linear-gradient(135deg,#551414_0%,#b91c1c_38%,#fff7ed_39%,#7f1d1d_46%,#1c1917_100%)] p-4">
            <div className="grid min-h-[320px] gap-4 rounded-md border border-black/30 bg-black/55 p-4 backdrop-blur-sm">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-200">
                  Today's Bacon Wrap
                </p>
                <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-white">
                  Chicken Bake
                </h2>
              </div>
              <div className="grid content-end gap-3">
                <div className="rounded-md bg-white p-3 text-black">
                  <p className="text-xs font-black uppercase text-red-700">Rating</p>
                  <p className="text-2xl font-black leading-tight">
                    9.0 strips out of 10
                  </p>
                </div>
                <div className="rounded-md border border-white/15 bg-black/55 p-3">
                  <p className="text-xs font-black uppercase text-stone-300">
                    Cook Time
                  </p>
                  <p className="text-xl font-black leading-tight text-white">
                    380F / 15 min
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm font-bold text-stone-400">
            Can it be bacon-wrapped? We already turned on the air fryer.
          </p>
        </div>
      </div>
    </section>
  )
}
