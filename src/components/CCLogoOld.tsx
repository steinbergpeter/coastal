import React from 'react';
import Image from 'next/image';

export default function CCLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full min-h-80 ${className}`}>
      <Image
        src='/assets/CoastalLogoMod.svg'
        alt='Coastal Concierge Logo'
        fill
        className='object-cover'
        priority
      />
    </div>
  );
}
