import { useFadeIn } from '../hooks/useFadeIn'

const STACKS = [
  {
    title: 'Languages',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    title: 'Data Engineering',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    items: ['dbt', 'Airbyte', 'ClickHouse', 'PostgreSQL'],
  },
  {
    title: 'Visualization',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    items: ['Superset', 'Power BI', 'Tableau', 'Kibana'],
  },
  {
    title: 'ML / Analysis',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    items: ['scikit-learn', 'pandas', 'NumPy', 'Jupyter'],
  },
]

export default function TechStack() {
  const ref = useFadeIn()

  return (
    <section>
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto px-12 py-16 my-6 bg-white rounded-2xl shadow-sm">
        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Technical toolkit</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACKS.map((stack) => (
            <div
              key={stack.title}
              className="group bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl p-6"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center mb-4">
                {stack.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">{stack.title}</h3>
              <ul className="space-y-1.5">
                {stack.items.map((item) => (
                  <li key={item} className="text-sm text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
