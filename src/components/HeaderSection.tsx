// import CCLogo from '@/components/CCLogo';
import Image from 'next/image';
export default function Header() {
  return (
    <div className='relative'>
      {/* Full-width image bar at the top */}
      <div
        className='w-screen h-[250px] sm:h-[300px] md:h-[350px] z-0 overflow-hidden'
        style={{
          backgroundImage: "url('/assets/IMG_0445.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: '50% 20%', // example fine-grained
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          filter: 'brightness(75%) contrast(200%) saturate(140%)',
        }}
      />
      {/* Centered logo below the image bar, overlapping with Tailwind */}
      <div
        className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-2xl overflow-hidden flex justify-center items-center
        w-64 xs:w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]'
      >
        <CCLogo />
      </div>
    </div>
  );
}

function CCLogo() {
  return (
    <Image
      width={500}
      height={40}
      src='/assets/CoastalLogoEdited.fig.svg'
      alt='Coastal Concierge Logo'
      className='object-center'
      priority
    />
  );
}
