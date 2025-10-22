import type { Package } from '@/app/types';

type PackageSectionProps = {
  packages: Package[];
};

export default function PackageSection({ packages }: PackageSectionProps) {
  return (
    <div className='flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl'>
      <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-coastal-primary font-sans'>
        PACKAGES AT A GLANCE
      </h2>
      {packages && packages.length > 0 && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {packages.map(({ title, price, description }) => (
            <PackageCard
              key={title}
              title={title}
              price={price}
              description={description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function PackageCard({ title, price, description }: Package) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
      <h3 className='text-lg font-bold mb-2 font-serif text-coastal-secondary'>
        {title}
      </h3>
      <p className='text-lg font-medium mb-3'>{price}</p>
      <p className='text-gray-600 mb-4'>{description}</p>
    </div>
  );
}
