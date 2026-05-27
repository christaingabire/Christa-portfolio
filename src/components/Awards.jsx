import { useFadeIn } from '../hooks/useFadeIn'

const TrophyIcon = () => (
  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4M7 3H5a2 2 0 00-2 2v3c0 3.314 2.686 6 6 6h2m2 0h2c3.314 0 6-2.686 6-6V5a2 2 0 00-2-2h-2M7 3h10M7 3v8" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const HomeIcon = () => (
  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const AWARDS = [
  {
    title: 'Outstanding Senior Award Finalist',
    org: "Saint Mary's University of Minnesota",
    year: '2023',
    icon: <TrophyIcon />,
    iconBg: 'bg-amber-50',
    href: 'https://today.smumn.edu/articles/finalist-vote-for-outstanding-seniors-2023/',
  },
  {
    title: "Dean's List",
    org: '7 of 8 semesters',
    year: '2019–2023',
    icon: <StarIcon />,
    iconBg: 'bg-slate-100',
    href: null,
  },
  {
    title: 'President, MIX: Merging Intercultural Experiences',
    org: "Saint Mary's University of Minnesota",
    year: '2022–2023',
    icon: <UsersIcon />,
    iconBg: 'bg-slate-100',
    href: null,
  },
  {
    title: 'STEM Mentor, St. Olaf Upward Bound',
    org: 'Mentoring underrepresented students toward STEM',
    year: '2023–2025',
    icon: <HeartIcon />,
    iconBg: 'bg-rose-50',
    href: null,
  },
  {
    title: 'Resident Assistant',
    org: "Saint Mary's University of Minnesota. Mentored 45+ students and organized academic development programs.",
    year: '2020–2023',
    icon: <HomeIcon />,
    iconBg: 'bg-slate-100',
    href: null,
  },
]

export default function Awards() {
  const ref = useFadeIn()

  return (
    <section>
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto px-12 py-16 my-6 bg-white rounded-2xl shadow-sm">
        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Awards & Leadership</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AWARDS.map((a) => (
            <div
              key={a.title}
              className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${a.iconBg} flex items-center justify-center mt-0.5`}>
                {a.icon}
              </div>
              <div>
                {a.href ? (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 leading-snug hover:text-blue-600 hover:text-blue-700 transition-colors underline decoration-slate-200 hover:decoration-blue-400 underline-offset-2"
                  >
                    {a.title}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-slate-900 leading-snug">{a.title}</p>
                )}
                <p className="text-xs text-slate-500 mt-0.5">{a.org}</p>
                <p className="text-xs text-slate-400 mt-0.5">{a.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
