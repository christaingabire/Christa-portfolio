import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn()

  return (
    <section id="about">
      <div ref={ref} className="fade-in-section max-w-5xl mx-auto px-12 py-16 my-6 bg-white rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">A bit about me</h2>
            <p className="text-slate-600 leading-relaxed">
              Born and raised in Rwanda, I went to high school in Lake Forest, Illinois and spent four
              years in Minnesota for college and my first job. Now I am back home in Kigali, building
              data systems for national social protection and public health. I care deeply about what
              data can do for the people who need it most. When I am not at my desk, I am reading,
              writing, or always trying new cafés and restaurants wherever I am. I love connecting with
              people, so do not hesitate to reach out.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-slate-400 mb-2">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">Reach out</h2>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:christaingabire00@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email</p>
                  <p className="text-sm text-blue-600 font-medium">christaingabire00@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/christaingabire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">LinkedIn</p>
                  <p className="text-sm text-blue-600 font-medium">linkedin.com/in/christaingabire</p>
                </div>
              </a>

              <a
                href="https://github.com/christaingabire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">GitHub</p>
                  <p className="text-sm text-blue-600 font-medium">github.com/christaingabire</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
