type ComingSoonPageProps = {
  title: string
}

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <main className="min-h-[calc(100vh-144px)] border-b border-white/10">
      <section className="mx-auto grid max-w-4xl place-items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="w-full rounded-lg border border-white/10 bg-stone-950/80 p-6 shadow-2xl shadow-black/30 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
            Coming Soon
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-stone-300 sm:text-lg">
            This page is wrapped, prepped, and waiting for the full plan.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex rounded-md bg-red-600 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500"
          >
            Back Home
          </a>
        </div>
      </section>
    </main>
  )
}
