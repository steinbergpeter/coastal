import { FaInstagram } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import coastalLogo from '../../public/assets/coastal-logo.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 w-full'>
      <header className='relative h-48 w-full flex gap-[24px] flex-wrap items-center justify-center bg-amber-300 overflow-hidden max-w-2xl'>
        <Image
          src={coastalLogo}
          alt='Coastal Concierge Logo'
          fill
          className='object-cover object-[center_39%]'
        />
      </header>
      <main className='flex flex-col gap-[32px] items-center justify-start'>
        <div className='flex flex-col gap-4 max-w-3xl'>
          <h2 className='text-2xl font-bold text-coastal-primary font-sans'>
            WHO WE ARE
          </h2>
          <h3 className='text-lg font-medium font-serif'>
            At Coastal Concierge, our mission is to bring simplicity and ease to
            everyday life—creating space for the moments that matter most to
            you.
          </h3>
        </div>
        <div className='flex flex-col gap-4 max-w-3xl'>
          <h2 className='text-2xl font-bold text-coastal-primary font-sans'>
            OUR SERVICES
          </h2>
          <ul className='list-decimal list-inside flex flex-col gap-6'>
            <li className='flex flex-col justify-start items-start'>
              <h3 className='text-md font-bold text-coastal-secondary font-serif'>
                Home Organization & Refresh
              </h3>
              <p className='text-md font-medium font-serif'>
                Create calm, functional spaces that fit your family’s lifestyle.
                From decluttering to seasonal refreshes, we help make your home
                feel effortless and inviting.
              </p>
            </li>
            <li className='flex flex-col justify-start items-start'>
              <h3 className='text-md font-bold  font-serif text-coastal-secondary'>
                Event Preparation & Support
              </h3>
              <p className='text-md font-medium font-serif '>
                Hosting a gathering or celebration? We help plan, prepare, and
                manage logistics so you can enjoy time with your guests, not
                stress over the details.
              </p>
            </li>
            <li className='flex flex-col justify-start items-start'>
              <h3 className='text-md font-bold  font-serif text-coastal-secondary'>
                Home Management
              </h3>
              <p className='text-md font-medium font-serif'>
                Whether you’re away or just busy, we coordinate repairs,
                schedule maintenance, and manage service providers— keeping your
                home running smoothly year-round.
              </p>
            </li>
            <li className='flex flex-col justify-start items-start'>
              <h3 className='text-md font-bold  font-serif text-coastal-secondary'>
                Personal Assistance
              </h3>
              <p className='text-md font-medium font-serif'>
                Simplify daily life with help for errands, scheduling, shopping,
                or househuld tasks—freeing you to focus on what matters most.
              </p>
            </li>
            <li className='flex flex-col justify-start items-start'>
              <h3 className='text-md font-bold  font-serif text-coastal-secondary'>
                Travel & Activity Planning
              </h3>
              <p className='text-md font-medium font-serif'>
                From weekend getaways to schoul breaks, we coordinate
                itineraries, accommodations, and local experiences—so every trip
                feels easy and memorable.
              </p>
            </li>
            <li className='flex flex-col justify-start items-start'>
              <h3 className='text-md font-bold  font-serif text-coastal-secondary'>
                Custom Concierge Support
              </h3>
              <p className='text-md font-medium font-serif'>
                Tailored help for unique needs—moving support, seasonal
                projects, or special requests. If it simplifies your life, we’re
                here for it.
              </p>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4 max-w-3xl'>
          <h2 className='text-2xl font-bold text-coastal-primary font-sans'>
            PACKAGES AT A GLANCE
          </h2>
          <div className='flex flex-wrap gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-lg font-bold mb-2 text-coastal-secondary'>
                Essentials
              </h3>
              <p className='text-lg font-medium mb-3'>
                $450/month (up to 10 hrs)
              </p>
              <p className='text-gray-600 mb-4'>
                Ideal for busy professionals or families needing flexible
                lifestyle support. Includes home organization, errands,
                scheduling, and light travel planning—perfect for everyday
                balance.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-lg font-bold mb-2 text-coastal-secondary'>
                Comfort
              </h3>
              <p className='text-lg font-medium mb-3'>
                $850/month (up to 20 hrs)
              </p>
              <p className='text-gray-600 mb-4'>
                Ideal for households seeking ongoing help with home and personal
                management. Includes home management, event preparation, and
                seasonal refreshes to keep life running smoothly.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-lg font-bold mb-2 text-coastal-secondary'>
                Complete
              </h3>
              <p className='text-lg font-medium mb-3'>
                $1,500/month (up to 40 hrs)
              </p>
              <p className='text-gray-600 mb-4'>
                Ideal for second-home owners or clients seeking full-service
                support. Comprehensive home and lifestyle coordination,
                including travel planning, vendor management, and dedicated
                concierge support.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-lg font-bold mb-2 text-coastal-secondary'>
                À La Carte Services
              </h3>
              <p className='text-lg font-medium mb-3'>$50/hour</p>
              <p className='text-gray-600 mb-4'>
                Perfect for one-time needs such as event prep, move
                coordination, or custom projects. Flexible assistance when you
                need it most.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 max-w-3xl min-w-full'>
          <h2 className='text-2xl font-bold text-coastal-primary font-sans'>
            CONTACT US
          </h2>
          <ul className='flex justify-start gap-12'>
            <li>
              <a
                href='tel:9704099957'
                className='text-lg font-semibold flex justify-between items-center gap-2 text-coastal-secondary hover:text-coastal-primary transition-colors duration-200 cursor-pointer'
              >
                <IoCallOutline size={24} />
                970.409.9957
              </a>
            </li>
            <li>
              <a
                href='mailto:coastalconcierge805@gmail.com'
                className='text-lg font-semibold flex justify-between items-center gap-2 text-coastal-secondary hover:text-coastal-primary transition-colors duration-200 cursor-pointer'
              >
                <MdOutlineMailOutline size={24} />
                coastalconcierge805@gmail.com
              </a>
            </li>
            <li>
              <a
                href='https://instagram.com/coastalconcierge805'
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-semibold flex justify-between items-center gap-2 text-coastal-secondary hover:text-coastal-primary transition-colors duration-200 cursor-pointer'
              >
                <FaInstagram size={24} />
                @coastalconcierge805
              </a>
            </li>
          </ul>
          <h2 className='text-xl font-medium font-serif'>
            Your life, simplified.
          </h2>
        </div>
      </main>
    </div>
  );
}
