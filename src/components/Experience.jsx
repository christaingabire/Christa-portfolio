import { useFadeIn } from '../hooks/useFadeIn'

const JOBS = [
  {
    period: 'May 2025 – Present',
    role: 'Data Engineer',
    company: 'Rwanda Social Security Board',
    location: 'Kigali, Rwanda',
    bullets: [
      "Designs and maintains scalable ELT pipelines supporting Rwanda's national social protection systems across health insurance, pensions, and savings programs.",
      'Builds production-grade dbt models and automated workflows processing large-scale citizen datasets to improve reporting efficiency.',
      'Develops analytics dashboards monitoring performance indicators across CBHI, EjoHeza, and other national schemes.',
      'Implements SHA-256 anonymization for privacy-preserving analytics on sensitive citizen data.',
    ],
    tags: ['dbt', 'Airbyte', 'ClickHouse', 'Superset', 'Python', 'SQL'],
  },
  {
    period: 'Jun 2023 – Nov 2024',
    role: 'Associate Software Developer Consultant',
    company: 'LogiSolve',
    location: 'Minneapolis, MN',
    bullets: [
      "Optimized SQL stored procedures and SSRS reports for Coborn's retail operations.",
      'Documented 20+ transactional data flows for Surescripts via XML analysis.',
      'Transitioned from QA into full-stack development and backend integrations.',
    ],
    tags: ['SQL', 'SSRS', 'XML', 'QA', 'Python'],
  },
  {
    period: 'May – Aug 2022',
    role: 'Data Science Intern',
    company: 'RISA, Rwanda Information Society Authority',
    location: 'Kigali, Rwanda',
    bullets: [
      'Built Logstash pipelines and Kibana dashboards for the Government Business Intelligence System.',
      'Visualized multi-year datasets on school enrollment and agriculture for national policy monitoring.',
    ],
    tags: ['Logstash', 'Kibana', 'Python'],
  },
]

function Tag({ label }) {
  return (
    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
      {label}
    </span>
  )
}

export default function Experience() {
  const ref = useFadeIn()

  return (
    <section id="work">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto px-12 py-16 my-6 bg-white rounded-2xl shadow-sm">
        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Where I've worked</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-px bg-slate-200" />

          <div className="flex flex-col gap-12">
            {JOBS.map((job, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-0">
                {/* Date column */}
                <div className="md:w-[200px] md:pr-8 flex-shrink-0">
                  <span className="text-xs font-medium text-slate-400 whitespace-nowrap">{job.period}</span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex items-start justify-center w-0 relative">
                  <div className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-100" />
                </div>

                {/* Content */}
                <div className="md:pl-10 flex-1">
                  <div className="mb-1">
                    <h3 className="text-lg font-semibold text-slate-900">{job.role}</h3>
                    <p className="text-sm text-slate-500">{job.company} · {job.location}</p>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-slate-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
