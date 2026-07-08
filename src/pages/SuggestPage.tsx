import { SuggestionForm } from '../components/SuggestionForm'

export function SuggestPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-red-300">
          Suggest a Wrap
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-6xl">
          Put something questionable in the queue.
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
          This form is still local-only, but the structure is ready for a future
          Supabase suggestion table and viewer voting.
        </p>
      </section>
      <SuggestionForm />
    </main>
  )
}
