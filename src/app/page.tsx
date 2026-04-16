export default function Home() {
  return (
    <div className="min-h-screen bg-[#16213E]">
      {/* Navigation */}
      <nav className="px-6 py-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Tvag<span className="text-[#E94560]">AI</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <button className="bg-[#E94560] text-white px-6 py-2 rounded-lg hover:bg-[#d13a52] transition-colors font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Intelligent AI Solutions for Modern Business
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              Transform your operations with cutting-edge artificial intelligence. TvagAI delivers powerful automation,
              deep insights, and intelligent decision-making tools designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E94560] text-white px-8 py-4 rounded-lg hover:bg-[#d13a52] transition-colors font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 md:px-12 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Built for Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border border-white/10 hover:border-[#E94560]/50 transition-colors">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-white/70 leading-relaxed">
                Process complex AI workloads in milliseconds. Our optimized infrastructure ensures your applications run at peak performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border border-white/10 hover:border-[#E94560]/50 transition-colors">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-white/70 leading-relaxed">
                Bank-level encryption and compliance certifications. Your data stays private, secure, and fully under your control.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0F3460] p-8 rounded-xl border border-white/10 hover:border-[#E94560]/50 transition-colors">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Seamless Integration</h3>
              <p className="text-white/70 leading-relaxed">
                Connect with your existing tools in minutes. REST APIs, SDKs, and webhooks make integration effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of companies already using TvagAI to automate workflows and drive growth.
          </p>
          <button className="bg-[#E94560] text-white px-10 py-4 rounded-lg hover:bg-[#d13a52] transition-colors font-semibold text-lg">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/50">
          <p>&copy; 2026 TVAG Teams. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
