import { useState } from 'react'
import type { FormEvent } from 'react'

export function SuggestionForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
    // Future backend integration point: insert suggestion into Supabase and
    // optionally trigger moderation, voting, or email collection workflows.
  }

  return (
    <section id="suggest" className="border-y border-white/10 bg-red-950/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
            Suggest a Wrap
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
            What should we wrap next?
          </h2>
          <p className="mt-4 max-w-lg text-stone-300">
            Drop the idea. We will handle the bacon, the air fryer, and the
            moment of truth.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-white/10 bg-black/45 p-4">
          <label className="grid gap-2 text-sm font-bold text-stone-200">
            What should we bacon-wrap?
            <input
              required
              name="item"
              className="rounded-md border border-white/10 bg-stone-950 px-3 py-3 text-white outline-none transition placeholder:text-stone-600 focus:border-red-300"
              placeholder="Example: frozen burrito, donut, banana..."
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-stone-200">
            Your name or handle optional
            <input
              name="handle"
              className="rounded-md border border-white/10 bg-stone-950 px-3 py-3 text-white outline-none transition placeholder:text-stone-600 focus:border-red-300"
              placeholder="@baconvisionary"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-stone-200">
            Why this would be good/funny optional
            <textarea
              name="why"
              rows={4}
              className="resize-none rounded-md border border-white/10 bg-stone-950 px-3 py-3 text-white outline-none transition placeholder:text-stone-600 focus:border-red-300"
              placeholder="Make your case."
            />
          </label>
          <button
            type="submit"
            className="rounded-md bg-red-600 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500"
          >
            Submit Suggestion
          </button>
          {submitted && (
            <p className="rounded-md border border-yellow-300/30 bg-yellow-300/10 px-3 py-3 text-sm font-black text-yellow-100">
              Suggestion received. This might be a terrible idea. Perfect.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
