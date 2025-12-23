import profileImg from './assets/images/profile.jpg';
import React, { useState, useEffect } from 'react';
import { Github, Gamepad2, ChevronDown, Linkedin, Mail } from 'lucide-react'; 
import { games } from './data'; 

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'hero') {
              setActiveSection(""); 
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    const heroElement = document.getElementById('hero');
    if (heroElement) observer.observe(heroElement);

    games.forEach((game) => {
      const element = document.getElementById(game.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // İlk projeye kaydırma fonksiyonu (Ok işareti için)
  const scrollToFirstProject = () => {
    if (games.length > 0) {
      scrollToSection(games[0].id);
    }
  };

  const skills = [
    "Java", "Swing", "LibGDX", "Box2D", 
    "Git", "Github", "Scene2D", "Aseprite", "Reaper"
  ];

  return (
    <div className="bg-stone-900 text-stone-200 font-sans min-h-screen selection:bg-[#E07A5F] selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-stone-800/90 backdrop-blur-md shadow-lg shadow-black/20 rounded-2xl px-6 py-3 border border-stone-700/50 transition-all duration-300">
        <ul className="flex items-center gap-2 sm:gap-6">
          {games.map((game) => (
            <li key={game.id}>
              <button
                onClick={() => scrollToSection(game.id)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                  ${activeSection === game.id 
                    ? "bg-[#E07A5F] text-white shadow-md shadow-orange-900/30 translate-y-[-1px]" 
                    : "text-stone-400 hover:bg-stone-700/50 hover:text-stone-100"}
                `}
              >
                {game.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* --- HERO / HAKKIMDA --- */}
      <header id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
        
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#E07A5F]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10 pt-20">
            
            {/* SOL: Metin Alanı */}
            <div className="text-center md:text-left order-2 md:order-1">
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-stone-100">
                    Hello, I'm <br/> {/* "I am" yerine "I'm" daha doğaldır */}
                    <span className="text-[#E07A5F]">Ahmet Efe Gençel</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl text-stone-400 font-light mb-6">
                    Computer Science Student & <br/>
                    <span className="text-stone-200 font-normal">Game Developer</span>
                </h2>

                <p className="text-stone-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
                    I love developing games and understanding the logic behind them. I specialize in
                    <span className="text-stone-300 font-medium"> game mechanics</span>, 
                    <span className="text-stone-300 font-medium"> algorithms</span>, and 
                    <span className="text-stone-300 font-medium"> procedural generation</span>.
                </p>

                {/* --- DÜZELTME 1: SOSYAL LİNKLER GERİ EKLENDİ --- */}
                {/* Lütfen href kısımlarına kendi gerçek linklerini yapıştır */}
                <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
                    <a href="https://github.com/ProGencel" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-800 rounded-full hover:bg-stone-700 hover:text-white transition-all border border-stone-700 group">
                        <Github size={24} className="group-hover:scale-110 transition-transform"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ahmetefegencel/" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-800 rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all border border-stone-700 group">
                        <Linkedin size={24} className="group-hover:scale-110 transition-transform"/>
                    </a>
                    <a href="ahmetefegencel@gmail.com" className="p-3 bg-stone-800 rounded-full hover:bg-[#E07A5F] hover:text-white hover:border-[#E07A5F] transition-all border border-stone-700 group">
                        <Mail size={24} className="group-hover:scale-110 transition-transform"/>
                    </a>
                </div>

                {/* --- TECH STACK --- */}
                <div className="pt-8 border-t border-stone-800">
                    <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">
                        Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {skills.map((skill) => (
                            <span 
                                key={skill} 
                                className="px-4 py-2 bg-stone-800/50 border border-stone-700/50 rounded-lg text-stone-300 text-sm font-medium hover:border-[#E07A5F]/50 hover:text-[#E07A5F] transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* SAĞ: Profil Fotoğrafı */}
            <div className="order-1 md:order-2 flex justify-center relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#E07A5F] to-purple-600 rounded-[2rem] rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500 blur-xl"></div>
                    <img 
                        src={profileImg} 
                        alt="Ahmet Efe Gençel" 
                        className="relative w-full h-full object-cover rounded-[2rem] border-2 border-stone-700/50 shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 grayscale hover:grayscale-0"
                    />
                </div>
            </div>
        </div>

        {/* --- DÜZELTME 2: ÇALIŞAN SCROLL OKU --- */}
        <button 
            onClick={scrollToFirstProject}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-500 hover:text-[#E07A5F] transition-colors cursor-pointer"
            aria-label="Scroll to projects"
        >
            <ChevronDown size={32} />
        </button>
      </header>

      {/* --- OYUN SECTIONLARI --- */}
      <main className="pb-24">
        {games.map((game, index) => (
          <section 
            key={game.id} 
            id={game.id}
            className={`
              min-h-screen flex items-center justify-center py-20 px-4 scroll-mt-0
              bg-gradient-to-b from-stone-900 ${game.themeColor.replace('from-stone-50', 'from-stone-900').replace('/10', '/5')} 
            `}
          >
            <div className="max-w-6xl w-full bg-stone-800 rounded-[2rem] shadow-2xl shadow-black/50 overflow-hidden border border-stone-700/50">
              <div className="grid lg:grid-cols-2 gap-0">
                
                {/* Sol: Görsel */}
                <div className="relative h-64 lg:h-auto overflow-hidden group">
                  <img 
                    src={game.coverImage} 
                    alt={game.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
                </div>

                {/* Sağ: İçerik */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-stone-700 text-stone-200 text-xs font-bold uppercase tracking-wider rounded-lg border border-stone-600">
                      {game.platform}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-100 leading-tight">
                    {game.title}
                  </h2>
                  
                  <p className="text-stone-400 mb-10 leading-relaxed text-lg">
                    {game.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {game.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-stone-900/50 text-[#E07A5F] text-sm font-medium rounded-lg border border-[#E07A5F]/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {/* --- DÜZELTME 3: BOŞ BUTON DOLDURULDU --- */}
                    {game.links.itch && (
                      <a 
                        href={game.links.itch} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-[#E07A5F] text-white rounded-xl font-bold hover:bg-[#d0694e] transition-all hover:scale-105 shadow-lg shadow-orange-900/20"
                      >
                         <Gamepad2 size={20} fill="currentColor" />
                         Play
                      </a>
                    )}
                    
                    {game.links.github && (
                      <a 
                        href={game.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-stone-700 text-stone-100 rounded-xl font-bold hover:bg-stone-600 transition-all hover:scale-105 border border-stone-600"
                      >
                        <Github size={20} fill="currentColor" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* --- BURADAN AŞAĞISINI EKLE (FOOTER) --- */}
      <footer className="bg-stone-900 border-t border-stone-800 py-12 text-center relative overflow-hidden">
        {/* Dekoratif Hafif Işık */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E07A5F]/5 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 px-4">
            {/* Kapanış Mesajı: İş arama değil, teşekkür mesajı */}
            <h3 className="text-2xl font-bold text-stone-200 mb-4">
                Thanks for dropping by.
            </h3>
            
            <p className="text-stone-500 mb-8 max-w-md mx-auto">
                Always learning, always creating. Feel free to reach out if you want to talk about game mechanics or dev.
            </p>
            
            {/* İletişim Butonu: "Say Hello" (Çok daha cool durur) */}
            <a 
                href="mailto:ahmetefegencel@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 hover:bg-[#E07A5F] text-stone-300 hover:text-white rounded-xl transition-all border border-stone-700 hover:border-[#E07A5F]"
            >
                <Mail size={18} />
                Say Hello
            </a>

            {/* Telif Hakkı */}
            <div className="mt-12 text-stone-600 text-sm">
                &copy; {new Date().getFullYear()} Ahmet Efe Gençel. Built with React & Tailwind.
            </div>
        </div>
      </footer>
      {/* --- FOOTER BİTİŞİ --- */}

    </div>
  );
};

export default Portfolio;