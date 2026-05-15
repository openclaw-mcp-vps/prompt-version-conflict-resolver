export default function Page() {
  const faqs = [
    {
      q: 'How does conflict detection work?',
      a: 'When two engineers edit the same prompt, the system diffs both versions and highlights conflicting lines — just like Git merge conflicts — so you can resolve them manually or accept an AI-suggested merge.'
    },
    {
      q: 'What are A/B test suggestions?',
      a: 'When a conflict is detected, the resolver proposes both variants as an A/B test so you can ship both versions, measure performance, and let data decide the winner instead of guessing.'
    },
    {
      q: 'Do I need to change my existing prompt workflow?',
      a: 'No. You paste or sync your prompts via our API or UI. The version history, conflict detection, and A/B suggestions layer on top of whatever LLM or pipeline you already use.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Merge conflicting AI prompt changes{' '}
          <span className="text-[#58a6ff]">safely</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Git-like conflict resolution for AI prompts. When your team edits the same prompt, detect conflicts instantly, get automated merge suggestions, and ship A/B tests — not broken prompts.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start resolving conflicts — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {['Conflict diff viewer', 'Auto-merge suggestions', 'A/B test generator', 'Version history', 'Team permissions', 'API access'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Team Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Per workspace · unlimited prompts</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited prompt versions',
              'Real-time conflict detection',
              'AI-powered merge suggestions',
              'One-click A/B test creation',
              'Up to 10 team members',
              'REST API + webhooks',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Prompt Conflict Resolver. All rights reserved.
      </footer>
    </main>
  )
}
