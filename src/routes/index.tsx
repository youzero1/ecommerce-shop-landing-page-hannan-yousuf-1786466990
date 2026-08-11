import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { TestimonialsSection } from '@/components/portfolio/TestimonialsSection';
import { BlogSection } from '@/components/portfolio/BlogSection';
import { StatisticsSection } from '@/components/portfolio/StatisticsSection';
import { CaseStudiesSection } from '@/components/portfolio/CaseStudiesSection';
import { ResumeSection } from '@/components/portfolio/ResumeSection';
import { NewsletterSection } from '@/components/portfolio/NewsletterSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';
import { BackgroundScene } from '@/components/portfolio/BackgroundScene';

export const Route = createFileRoute('/')({ component: HomePage });

function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-ink text-white">
      <BackgroundScene />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <BlogSection />
        <StatisticsSection />
        <CaseStudiesSection />
        <ResumeSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
