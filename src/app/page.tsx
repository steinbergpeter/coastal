import CCLogo from '@/components/CCLogo';
import ContactSection from '@/components/ContactSection';
import { contacts, packages, services } from '@/components/Data';
import IntroSection from '@/components/IntroSection';
import PackageSection from '@/components/PackageSection';
import ServiceSection from '@/components/ServiceSection';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen p-4 gap-8 sm:gap-16 md:gap-8'>
      <header className='relative max-w-md overflow-hidden'>
        <CCLogo className='w-full' />
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
