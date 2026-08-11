import { createFileRoute } from '@tanstack/react-router';
import { Header } from '@/components/electronics/Header';
import { HeroBanner } from '@/components/electronics/HeroBanner';
import { ProductCategories } from '@/components/electronics/ProductCategories';
import { FeaturedProducts } from '@/components/electronics/FeaturedProducts';
import { Testimonials } from '@/components/electronics/Testimonials';
import { FAQ } from '@/components/electronics/FAQ';
import { Footer } from '@/components/electronics/Footer';

export const Route = createFileRoute('/electronics')({ component: ElectronicsPage });

function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <main>
        <HeroBanner />
        <ProductCategories />
        <FeaturedProducts />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
