import YellowButton from './YellowButton';

export default function JoinNetwork() {
  return (
    <section className="relative min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 py-24 overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-pink-500/30 rounded-full blur-[100px] animate-pulse delay-500"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Dynamic header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Join Our Network of
              </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Empowered Academics
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow Nigerian female PhD holders, collaborate on research, and contribute to national development.
            </p>
          </div>
          
          {/* Feature cards grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Network",
                description: "Connect with like-minded scholars and build lasting professional relationships"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Research",
                description: "Collaborate on groundbreaking research projects and publications"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                title: "Excellence",
                description: "Champion academic excellence and inspire the next generation"
              }
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action card */}
          <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl"></div>
            <div className="relative">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Ready to Make an Impact?
                  </span>
                </h3>
                
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Join us in shaping the future of Nigerian academia. Together, we can create opportunities, 
                  foster innovation, and drive positive change in our educational landscape.
                </p>
                
                {/* Enhanced button with glow effect */}
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                    <YellowButton>
                      <span className="flex items-center gap-2 text-lg font-bold">
                        JOIN NENFPHAS
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      </span>
                    </YellowButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: '500+', label: 'Members' },
              { number: '50+', label: 'Universities' },
              { number: '100+', label: 'Publications' },
              { number: '20+', label: 'Events Yearly' }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 