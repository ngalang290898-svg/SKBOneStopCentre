// app/page.tsx
import HeroSection from '@/components/HeroSection';
import QuickLinkCard from '@/components/QuickLinkCard';

export default function HomePage() {
  return (
    <>
      <HeroSection 
        title="Selamat Datang ke SK Bebuloh" 
        subtitle="Welcome message from the Headmaster goes here."
      />
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-heading text-secondary mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickLinkCard title="One-Stop Centre" href="/one-stop" />
          <QuickLinkCard title="Student Affairs" href="/one-stop#student-affairs" />
          {/* more quick links */}
        </div>
      </section>
    </>
  );
}

