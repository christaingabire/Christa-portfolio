import { useFadeIn } from '../hooks/useFadeIn'

const PROJECTS = [
  {
    year: '2025',
    context: 'Independent',
    title: 'Social Protection Data Simulation',
    description:
      "AI-driven ETL simulation of Rwanda's social security systems with a Streamlit dashboard and a predictive model for coverage inequality analysis.",
    tags: ['Python', 'Streamlit', 'ML'],
  },
  {
    year: '2025',
    context: 'Independent',
    title: 'PricePulse',
    description:
      'Unified 36,000+ food price observations from 404 markets across 6 African countries to analyze regional price volatility and food security trends.',
    tags: ['Python', 'Streamlit', 'Data Engineering'],
  },
  {
    year: '2025',
    context: 'Portfolio',
    title: 'Public Health ETL Report',
    description:
      'End-to-end pipeline analyzing life expectancy, immunization, and maternal mortality across African countries from 1960 to 2020.',
    tags: ['Python', 'SQL', 'Seaborn'],
  },
  {
    year: '2023',
    context: 'Academic',
    title: 'ML Classification Suite',
    description:
      'Loan approval prediction achieving ~85% accuracy and video game success modeling on 3M+ Google Play records using ensemble methods.',
    tags: ['scikit-learn', 'Python'],
  },
]

export default function Projects() {
  const ref = useFadeIn()

  return (
    <section id="projects">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto px-12 py-16 my-6 bg-white rounded-2xl shadow-sm">
        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Things I've built</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="group bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-slate-400">{p.year}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-medium">
                  {p.context}
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
