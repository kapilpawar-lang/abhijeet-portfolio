import React from 'react';
import { Cpu, FileText, ArrowUpRight, GraduationCap, Mail, MapPin } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#090806] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-hidden">
      
      {/* Custom Styles for Shooting Meteors */}
      <style>{`
        @keyframes meteor {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(-500px) translateY(500px);
            opacity: 0;
          }
        }
        .animate-meteor {
          animation: meteor 4s linear infinite;
        }
      `}</style>

      {/* Background Starfield, Glowing Orbs & Moving Meteors */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '6s' }} />
        
        {/* Tiny Twinkling Stars */}
        <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute top-1/2 left-20 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-40 right-30 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />

        {/* Moving Shooting Meteors */}
        <div className="absolute top-10 right-10 w-[2px] h-[2px] bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.8)] rotate-[-45deg] animate-meteor" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/2 w-[2px] h-[2px] bg-emerald-300 shadow-[0_0_12px_4px_rgba(16,185,129,0.8)] rotate-[-45deg] animate-meteor" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute top-20 right-1/4 w-[2px] h-[2px] bg-yellow-300 shadow-[0_0_12px_4px_rgba(6,182,212,0.8)] rotate-[-45deg] animate-meteor" style={{ animationDelay: '4s', animationDuration: '4s' }} />
      </div>

      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090806]/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-bold text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
              AP
            </div>
            <div>
              <span className="font-bold tracking-tight text-white block">Abhijeet Pawar</span>
              <span className="text-xs text-emerald-400 font-mono">AI/ML Engineer</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#contact" className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all">Let&apos;s Talk</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* Terminal Banner */}
        <div className="w-full rounded-2xl bg-slate-950/90 border border-slate-800 p-4 mb-8 font-mono text-xs sm:text-sm text-slate-300 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-slate-400 text-xs">zsh — abhijeet@jio-ainode:~</span>
            </div>
            <span className="text-emerald-400 text-xs hidden sm:inline">status: available for hire</span>
          </div>
          <p className="text-slate-400"># Initializing AI Developer Profile...</p>
          <p className="text-emerald-400">&gt; python3 -m pipeline --load-experience &quot;Reliance Jio&quot; --status &quot;Ready&quot;</p>
          <p className="text-white mt-1">✨ Successfully loaded conversational AI models, BERT microservices, and full-stack architecture.</p>
        </div>

        {/* Bento Grid Hero & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Title Card */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950 border border-slate-800 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Ex-Jio AI/ML Intern
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
  Engineering <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]">Intelligent</span> Systems.
</h1>
              <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
                I specialize in building conversational AI agents, fine-tuning BERT models, and engineering reliable backend pipelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-8 relative z-10">
              <a href="#experience" className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
                Explore Work <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm transition-all flex items-center gap-2">
                <FileText size={16} /> Get Resume
              </a>
            </div>
          </div>

          {/* Quick Stats / Tech Card */}
          <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 flex flex-col justify-between backdrop-blur-xl">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="text-emerald-400" size={20} /> Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Rasa', 'BERT', 'Java', 'SQL', 'React', 'Next.js', 'Git'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Location</span>
                <span className="text-white font-medium">Indore, India</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-slate-400">Degree</span>
                <span className="text-white font-medium">B.Tech in AI &amp; ML</span>
              </div>
            </div>
          </div>

        </div>

        {/* About / Creator Section */}
        <section id="about" className="mt-28">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Developer, Designer, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400">Creator, Innovator</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Code / Graphic Card */}
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-[0_0_40px_rgba(16,185,129,0.1)] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-yellow-500/5 to-transparent pointer-events-none" />
              <div className="relative z-10 space-y-4 font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    abhijeet@ai-core:~
                  </div>
                  <span className="text-xs text-slate-500">v2.6</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
                  <p className="text-emerald-400 font-bold">&gt; system.execute(profile)</p>
                  <p className="text-slate-300"><span className="text-purple-400">Name:</span> Abhijeet Pawar</p>
                  <p className="text-slate-300"><span className="text-purple-400">Role:</span> AI/ML &amp; Full-Stack Engineer</p>
                  <p className="text-slate-300"><span className="text-purple-400">Experience:</span> Ex-Reliance Jio Intern</p>
                  <p className="text-slate-300"><span className="text-purple-400">Focus:</span> Conversational AI &amp; Scalable Web Apps</p>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hello! I&apos;m <strong className="text-white">Abhijeet Pawar</strong>, an AI/ML engineer and full-stack developer focused on building responsive, high-performance web applications and intelligent agent systems with clean, modern UI.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                My goal is to deliver seamless user experiences by combining creative design with robust backend code. Having completed my internship at Reliance Jio, I specialize in bridging advanced machine learning models with scalable web architectures.
              </p>
              
              <div className="pl-6 border-l-2 border-emerald-500 text-slate-400 text-sm italic py-1">
                &ldquo;I&apos;m a continuous learner who loves turning ideas into working products. I strive to contribute to the tech community by creating projects that inspire and add real-world value.&rdquo;
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mt-28">
          <div className="flex items-center justify-between mb-10">
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Work Experience</h2>
     
              <p className="text-slate-400 text-sm mt-1">Real-world engineering and enterprise impact.</p>
            </div>
            <div className="h-px bg-slate-800 flex-1 ml-8 hidden sm:block" />
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 hover:border-emerald-500/40 transition-all group backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  3 Months Internship
                </span>
                <span className="text-slate-500 text-xs font-mono">Recent</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">AI/ML Developer Intern</h3>
              <p className="text-emerald-400 font-medium text-sm mb-3">Reliance Jio</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Architected and deployed multi-agent conversational AI workflows using Rasa and fine-tuned BERT models. Integrated robust backend Java services to handle high-volume enterprise data requests.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 hover:border-emerald-500/40 transition-all group backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-yellow-950/80 border border-yellow-500/30 text-yellow-400 text-xs font-mono">
                  Major Project
                </span>
                <span className="text-slate-500 text-xs font-mono">2026</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">AI/ML Disease Detection Platform</h3>
              <p className="text-yellow-400 font-medium text-sm mb-3">Oriental Institute of Science &amp; Technology</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Developed an end-to-end diagnostic pemeraldiction tool utilizing advanced machine learning models, complete with data preprocessing pipelines and an interactive web interface.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mt-28">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Education</h2>
              <p className="text-slate-400 text-sm mt-1">Academic foundation and schooling.</p>
            </div>
            <div className="h-px bg-slate-800 flex-1 ml-8 hidden sm:block" />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-emerald-500/40 transition-all backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-mono block mb-1">2022 — 2026</span>
                  <h3 className="text-xl font-bold text-white">Bachelor of Technology in Artificial Intelligence &amp; Machine Learning</h3>
                  <p className="text-slate-300 text-sm mt-1">Oriental Institute of Science and Technology, Bhopal</p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                University
              </span>
            </div>

            <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-emerald-500/40 transition-all backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-yellow-950/60 border border-yellow-500/30 text-yellow-400 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs text-yellow-400 font-mono block mb-1">Senior Secondary (12th - PCM)</span>
                  <h3 className="text-xl font-bold text-white">St. Francis Convent School</h3>
                  <p className="text-slate-300 text-sm mt-1">Focused on Physics, Chemistry, and Mathematics</p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                School
              </span>
            </div>

            <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-emerald-500/40 transition-all backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-yellow-950/60 border border-yellow-500/30 text-yellow-400 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs text-yellow-400 font-mono block mb-1">Secondary Education (10th)</span>
                  <h3 className="text-xl font-bold text-white">St. Francis Convent School</h3>
                  <p className="text-slate-300 text-sm mt-1">Strong academic foundation with core sciences and mathematics</p>
                </div>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                School
              </span>
            </div>
          </div>
        </section>

        {/* Contact / Footer Section */}
        <section id="contact" className="mt-28 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">Let&apos;s Build Something Together</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm sm:text-base relative z-10">
            I am actively looking for full-time AI/ML or Software Engineering roles. Feel free to reach out!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a href="mailto:kapilpawar015@gmail.com" className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20">
              <Mail size={16} /> Email Me
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm transition-all flex items-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhijeet-singh-pawar-baa55037a/" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm transition-all flex items-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              LinkedIn
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <p>&copy; 2026 Abhijeet Pawar. All rights reserved.</p>
            <p className="flex items-center gap-1"><MapPin size={13} /> Indore, Madhya Pradesh</p>
          </div>
        </section>

      </main>
    </div>
  );
}