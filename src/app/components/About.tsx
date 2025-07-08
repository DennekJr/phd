import Image from 'next/image';

export default function About() {
  return (
    <section className="relative min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dynamic Images Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="group relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl transform hover:scale-105 hover:-rotate-2 transition-all duration-500">
                    <Image
                      src="/images/hero.jpg"
                      alt={`Nigerian female academic ${i + 1}`}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: '500+', label: 'Members' },
                { number: '50+', label: 'Universities' },
                { number: '100+', label: 'Publications' }
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="relative order-1 lg:order-2">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold text-xl tracking-wider uppercase">
                About NENFPHAS
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-6 mb-10 leading-tight">
              Empowering Nigerian Female
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> 
                PhD Holders in Academia
              </span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Our Mission',
                  description: 'To promote academic excellence for Nigerian females towards the socioeconomic development of Nigeria.',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  )
                },
                {
                  title: 'Our Motto',
                  description: 'Academic Excellence',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                    </svg>
                  )
                },
                {
                  title: 'Our Goal',
                  description: 'Awarding Female Academic Excellence',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  )
                }
              ].map((item, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                        <p className="text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 