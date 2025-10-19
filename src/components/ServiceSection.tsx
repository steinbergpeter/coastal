import React from 'react';
import type { Service } from '@/app/types';

type ServiceSectionProps = {
  services: Service[];
};

export default function ServiceSection({ services }: ServiceSectionProps) {
  return (
    <div className='flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl'>
      <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-coastal-primary font-sans'>
        OUR SERVICES
      </h2>
      <ul className='list-decimal list-inside flex flex-col gap-4 sm:gap-6'>
        {services.map(({ title, description }) => (
          <ServiceItem key={title} title={title} description={description} />
        ))}
      </ul>
    </div>
  );
}

function ServiceItem({ title, description }: Service) {
  return (
    <li className='flex flex-col justify-start items-start'>
      <h3 className='text-md sm:text-lg font-bold text-coastal-secondary font-serif'>
        {title}
      </h3>
      <p className='text-md sm:text-lg font-medium font-serif'>{description}</p>
    </li>
  );
}
