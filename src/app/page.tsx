import { FaInstagram } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';

export default function Home() {
  return (
    <div className='font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <header className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <h2 className='text-2xl font-semibold'>Header</h2>
      </header>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <section className='flex flex-col gap-4 max-w-3xl'>
          <h2 className='text-2xl font-bold'>WHO WE ARE</h2>
          <h3 className='text-lg font-medium'>
            At Coastal Concierge, our mission is to bring simplicity and ease to
            everyday life—creating space for the moments that matter most to
            you.
          </h3>
        </section>
        <section className='flex flex-col gap-4 max-w-3xl'>
          <h2 className='text-2xl font-bold'>OUR SERVICES</h2>
          <ul className='list-decimal list-inside flex flex-col gap-2'>
            <li className='flex flex-col gap-4 justify-start items-start'>
              <h3 className='text-xl font-semibold'>
                Home Organization & Refresh
              </h3>
              <h4 className='text-lg font-medium'>
                Create calm, functional spaces that fit your family’s lifestyle.
                From decluttering to seasonal refreshes, we help make your home
                feel effortless and inviting.
              </h4>
            </li>
            <li className='flex flex-col gap-4 justify-start items-start'>
              <h3 className='text-xl font-semibold'>
                Event Preparation & Support
              </h3>
              <h4 className='text-lg font-medium'>
                Hosting a gathering or celebration? We help plan, prepare, and
                manage logistics so you can enjoy time with your guests, not
                stress over the details.
              </h4>
            </li>
            <li className='flex flex-col gap-4 justify-start items-start'>
              <h3 className='text-xl font-semibold'>Home Management</h3>
              <h4 className='text-lg font-medium'>
                Whether you’re away or just busy, we coordinate repairs,
                schedule maintenance, and manage service providers— keeping your
                home running smoothly year-round.
              </h4>
            </li>
            <li className='flex flex-col gap-4 justify-start items-start'>
              <h3 className='text-xl font-semibold'>Personal Assistance</h3>
              <h4 className='text-lg font-medium'>
                Simplify daily life with help for errands, scheduling, shopping,
                or househuld tasks—freeing you to focus on what matters most.
              </h4>
            </li>
            <li className='flex flex-col gap-4 justify-start items-start'>
              <h3 className='text-xl font-semibold'>
                Travel & Activity Planning
              </h3>
              <h4 className='text-lg font-medium'>
                From weekend getaways to schoul breaks, we coordinate
                itineraries, accommodations, and local experiences—so every trip
                feels easy and memorable.
              </h4>
            </li>
            <li className='flex flex-col gap-4 justify-start items-start'>
              <h3 className='text-xl font-semibold'>
                Custom Concierge Support
              </h3>
              <h4 className='text-lg font-medium'>
                Tailored help for unique needs—moving support, seasonal
                projects, or special requests. If it simplifies your life, we’re
                here for it.
              </h4>
            </li>
          </ul>
        </section>
        <section className='flex flex-col gap-4 w-full max-w-7xl'>
          <h2 className='text-2xl font-bold'>PACKAGES AT A GLANCE</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                Essentials
              </h3>
              <p className='text-lg font-medium mb-3 text-blue-600'>
                $450/month (up to 10 hours)
              </p>
              <p className='text-gray-600 mb-4'>
                Ideal for busy professionals or families needing flexible
                lifestyle support. Includes home organization, errands,
                scheduling, and light travel planning—perfect for everyday
                balance.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                Comfort
              </h3>
              <p className='text-lg font-medium mb-3 text-blue-600'>
                $850/month (up to 20 hours)
              </p>
              <p className='text-gray-600 mb-4'>
                Ideal for households seeking ongoing help with home and personal
                management. Includes home management, event preparation, and
                seasonal refreshes to keep life running smoothly.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                Complete
              </h3>
              <p className='text-lg font-medium mb-3 text-blue-600'>
                $1,500/month (up to 40 hours)
              </p>
              <p className='text-gray-600 mb-4'>
                Ideal for second-home owners or clients seeking full-service
                support. Comprehensive home and lifestyle coordination,
                including travel planning, vendor management, and dedicated
                concierge support.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
              <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                À La Carte Services
              </h3>
              <p className='text-lg font-medium mb-3 text-blue-600'>$50/hour</p>
              <p className='text-gray-600 mb-4'>
                Perfect for one-time needs such as event prep, move
                coordination, or custom projects. Flexible assistance when you
                need it most.
              </p>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-4 max-w-3xl w-full'>
          <h2 className='text-2xl font-bold'>CONTACT US</h2>
          <ul className='flex justify-between'>
            <li className='text-lg font-medium flex justify-between items-center gap-4'>
              <IoCallOutline size={24} />
              970.409.9957
            </li>
            <li className='text-lg font-medium flex justify-between items-center gap-4'>
              <MdOutlineMailOutline size={24} />
              coastalconcierge805@gmail.com
            </li>
            <li className='text-lg font-medium flex justify-between items-center gap-4'>
              <FaInstagram size={24} />
              @coastalconcierge805
            </li>
          </ul>
          <h2 className='text-2xl font-bold'>Your life, simplified.</h2>
        </section>
      </main>
    </div>
  );
}
