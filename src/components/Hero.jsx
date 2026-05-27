const SKILL_TAGS = [
  'Python', 'SQL', 'dbt', 'Airbyte', 'ClickHouse', 'PostgreSQL',
  'Superset', 'Power BI', 'Tableau', 'scikit-learn', 'pandas', 'Streamlit',
]

const WORD_ANIMATION = (delay) => ({
  display: 'inline-block',
  opacity: 0,
  animation: `wordFadeUp 600ms cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms forwards`,
})

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-16" aria-label="Introduction">
      <div
        className="max-w-5xl mx-auto px-12 py-16 my-6 rounded-2xl shadow-sm"
        style={{ background: 'linear-gradient(135deg, #f0f6ff 0%, #ffffff 60%)' }}
      >
        {/* Location */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium tracking-wide uppercase">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Kigali, Rwanda
          </span>
        </div>

        {/* Name heading — staggered word animation */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
          <span style={WORD_ANIMATION(0)}>Christa</span>
          {' '}
          <span style={WORD_ANIMATION(180)}>Rusanganwa</span>
          <br className="hidden sm:block" />
          <span style={WORD_ANIMATION(360)}>Ingabire.</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10">
          Data Analytics Engineer building scalable data systems, analytics pipelines, and ML solutions across public and private sectors.
        </p>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {SKILL_TAGS.map((tag) => (
            <span
              key={tag}
              className="bg-slate-50 text-slate-600 border border-slate-200 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleScroll('#work')}
            className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll('#about')}
            className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            Get In Touch
          </button>
          <a
            href="/Christa_Ingabire_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
