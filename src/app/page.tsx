import ContactSection from '@/components/ContactSection';
import { contacts, packages, services } from '@/components/Data';
import IntroSection from '@/components/IntroSection';
import PackageSection from '@/components/PackageSection';
import ServiceSection from '@/components/ServiceSection';
import Image from 'next/image';
import coastalLogo from '../../public/assets/coastal-logo.jpg';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen p-4 sm:p-8 md:p-20 pb-20 gap-8 sm:gap-16 md:gap-20 w-full'>
      <header className='relative w-full max-w-full sm:max-w-xl md:max-w-2xl h-40 sm:h-48 md:h-64 flex gap-[24px] flex-wrap items-center justify-center overflow-hidden'>
        <Image
          src={coastalLogo}
          alt='Coastal Concierge Logo'
          fill
          className='object-cover object-[center_43%]'
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
