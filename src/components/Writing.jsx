import { useFadeIn } from '../hooks/useFadeIn'

export default function Writing() {
  const ref = useFadeIn()

  return (
    <section id="writing">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto px-12 py-16 my-6 bg-white rounded-2xl shadow-sm">
        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">Writing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Thinking out loud</h2>
        </div>

        <div className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full">
                  Coming soon
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Tech tips & data engineering insights
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                Practical guides on dbt, Python pipelines, analytics, and building data systems in
                Africa. Coming soon on Medium.
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-slate-400 text-sm font-medium cursor-not-allowed select-none border border-slate-200">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                Read on Medium
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
