import { About } from '@/features/marketing/components/about';
import { CapabilityStrip } from '@/features/marketing/components/capability-strip';
import { ContactForm } from '@/features/marketing/components/contact-form';
import { CTA } from '@/features/marketing/components/cta';
import { Hero } from '@/features/marketing/components/hero';
import { ProblemSection } from '@/features/marketing/components/problem-section';
import { ProductShowcase } from '@/features/marketing/components/product-showcase';
import { Services } from '@/features/marketing/components/services';
import { Solutions } from '@/features/marketing/components/solutions';
import { Work } from '@/features/marketing/components/work';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <ProblemSection />
      <Services />
      <Solutions />
      <ProductShowcase />
      <Work />
      <About />
      <CTA />
      <ContactForm />
    </>
  );
}
