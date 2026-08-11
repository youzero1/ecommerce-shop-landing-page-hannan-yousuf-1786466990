export function ResumeSection() {
  const handleDownload = () => {
    // Create a simple PDF-like download
    const resumeContent = `
HANNAN - Full Stack Developer
================================

SUMMARY
8+ years of experience building scalable web applications, leading teams, and delivering high-impact solutions.

EXPERIENCE
- Senior Full Stack Developer (2022-Present)
- Full Stack Developer (2020-2022)
- Frontend Developer (2018-2020)
- Junior Developer (2016-2018)

SKILLS
Frontend: React, TypeScript, Tailwind CSS, Next.js, Vue.js
Backend: Node.js, Python, PostgreSQL, MongoDB, Firebase
Tools: Git, Docker, AWS, CI/CD, Figma

EDUCATION
B.Sc. Computer Science, 2016

ACHIEVEMENTS
- 45% increase in conversion rate for e-commerce platform
- Led team of 5 developers on real-time collaboration platform
- 500+ concurrent users handled with <50ms latency
- Open source contributions: 2000+ GitHub contributions
    `.trim();

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
    element.setAttribute('download', 'Hannan-Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="relative z-10 px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-xs uppercase tracking-widest text-lime mb-4">Download</h2>
          <p className="text-3xl md:text-4xl font-bold mb-4">My Resume</p>
          <p className="text-white/60 max-w-2xl mx-auto">
            8 years of experience building scalable applications, leading teams, and delivering high-impact solutions across startups and enterprises.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={handleDownload}
            className="px-8 py-4 rounded-full bg-lime text-ink font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-lime/50 transition-all transform hover:-translate-y-1"
          >
            Download Resume ↓
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center hover:border-lime/50 transition">
              <div className="text-3xl font-bold text-lime mb-2">8+</div>
              <p className="text-sm text-white/60 uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center hover:border-lime/50 transition">
              <div className="text-3xl font-bold text-lime mb-2">50+</div>
              <p className="text-sm text-white/60 uppercase tracking-wider">Projects Delivered</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center hover:border-lime/50 transition">
              <div className="text-3xl font-bold text-lime mb-2">30+</div>
              <p className="text-sm text-white/60 uppercase tracking-wider">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
