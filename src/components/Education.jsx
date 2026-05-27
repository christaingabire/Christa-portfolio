import { useFadeIn } from '../hooks/useFadeIn'

export default function Education() {
  const ref = useFadeIn()

  return (
    <section>
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto px-12 py-16 my-6 bg-white rounded-2xl shadow-sm">
        <div className="mb-14">
          <p className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Academic background</h2>
        </div>

        <div className="max-w-lg">
          <div className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 rounded-2xl p-8">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-0.5">B.A. Computer Science</h3>
            <p className="text-sm font-medium text-slate-600 mb-1">Saint Mary's University of Minnesota</p>
            <p className="text-xs text-slate-400 mb-5">2019 – 2023</p>
            <ul className="space-y-2">
              {[
                'Minor in Business Analytics',
                'Magna Cum Laude',
                'GPA 3.84 / 4.0',
                'Full scholarship',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
