import ContactSection from '@/app/components/ContactSection';
import { contacts, packages, services } from '@/app/components/Data';
import IntroSection from '@/app/components/IntroSection';
import CoastalConciergeLogo from '@/app/components/Logo';
import PackageSection from '@/app/components/PackageSection';
import ServiceSection from '@/app/components/ServiceSection';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen p-4 sm:p-8 md:p-20 pb-20 gap-8 sm:gap-16 md:gap-8 w-full'>
      <header className='relative w-full max-w-full sm:max-w-xl md:max-w-2xl h-40 sm:h-48 md:h-64 flex gap-[24px] flex-wrap items-center justify-center overflow-hidden'>
        <CoastalConciergeLogo
          width={400}
          height={400}
          className=' bg-pink-200 w-full p-12'
          offset='0 90'
        />
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
