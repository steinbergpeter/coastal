import ContactSection from '@/components/ContactSection';
import { contacts, packages, services } from '@/components/Data';
import IntroSection from '@/components/IntroSection';
// import CoastalConciergeLogo from '@/components/Logo';
import PackageSection from '@/components/PackageSection';
import ServiceSection from '@/components/ServiceSection';
import CCLogo from '@/components/CCLogo';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen p-4 gap-8 sm:gap-16 md:gap-8 w-full bg-pink-400'>
      <header className='relative w-full max-w-full sm:max-w-xl md:max-w-2xl h-20 sm:h-48 md:h-64 flex gap-[24px] flex-wrap items-center justify-center overflow-hidden bg-amber-400'>
        <CCLogo className='w-full bg-green-500' />
      </header>
      <main className='flex flex-col gap-8 sm:gap-12 md:gap-16 items-center justify-start w-full'>
        <IntroSection />
        <ServiceSection services={services} />
        <PackageSection packages={packages} />
        <ContactSection contacts={contacts} />
      </main>
    </div>
  );
}
