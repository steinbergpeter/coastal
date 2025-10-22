import CCLogo from '@/components/CCLogo';
import ContactSection from '@/components/ContactSection';
import { contacts, packages, services } from '@/components/Data';
import IntroSection from '@/components/IntroSection';
import PackageSection from '@/components/PackageSection';
import ServiceSection from '@/components/ServiceSection';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/IMG_1018.JPG')",
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
      }}
      className='flex flex-col items-center justify-items-center min-h-screen px-4 gap-8 sm:gap-16 md:gap-8'
    >
      <div
        id='top'
        className='bg-white/50 backdrop-blur-md shadow-lg flex flex-col items-center justify-start w-full max-w-5xl p-4 sm:p-6 md:p-8 gap-8 sm:gap-12 md:gap-16 overflow-hidden'
      >
        <header className='relative max-w-md overflow-hidden rounded-xl'>
          <CCLogo className='w-full opacity-70' />
        </header>
        <main className='flex flex-col gap-8 sm:gap-12 md:gap-16 items-center justify-start w-full'>
          <IntroSection />
          <ServiceSection services={services} />
          <PackageSection packages={packages} />
          <ContactSection contacts={contacts} />
        </main>
        <BackToTop />
      </div>
    </div>
  );
}
