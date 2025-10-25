import ContactSection from '@/components/ContactSection';
import { contacts, packages, services } from '@/components/Data';
import IntroSection from '@/components/IntroSection';
import PackageSection from '@/components/PackageSection';
import ServiceSection from '@/components/ServiceSection';
import BackToTop from '@/components/BackToTop';
import HeaderSectionAlt from '@/components/HeaderSectionAlt';
import HeaderSectionAlt2 from '@/components/HeaderSectionAlt2';
import HeaderSection from '@/components/HeaderSection';

export default function Home() {
  return (
    <div
      className='
        flex flex-col gap-8 sm:gap-16 md:gap-8
        items-center justify-items-center min-h-screen px-4 w-full
      '
      id='top'
    >
      <HeaderSection />
      <HeaderSectionAlt />
      <HeaderSectionAlt2 />
      <main
        className='
        flex flex-col gap-8 sm:gap-12 md:gap-16 
        items-center justify-start w-full mt-16
      '
      >
        <IntroSection />
        <ServiceSection services={services} />
        <PackageSection packages={packages} />
        <ContactSection contacts={contacts} />
      </main>
      <BackToTop />
    </div>
  );
}
