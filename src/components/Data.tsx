import type { Contact, Package, Service } from '@/app/types';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';

export const packages: Package[] = [
  {
    title: 'Essentials',
    price: '$450/month (up to 10 hrs)',
    description:
      'Ideal for busy professionals or families needing flexible lifestyle support. Includes home organization, errands, scheduling, and light travel planning—perfect for everyday balance.',
  },
  {
    title: 'Comfort',
    price: '$850/month (up to 20 hrs)',
    description:
      'Ideal for households seeking ongoing help with home and personal management. Includes home management, event preparation, and seasonal refreshes to keep life running smoothly.',
  },
  {
    title: 'Complete',
    price: '$1,500/month (up to 40 hrs)',
    description:
      'Ideal for second-home owners or clients seeking full-service support. Comprehensive home and lifestyle coordination, including travel planning, vendor management, and dedicated concierge support.',
  },
  {
    title: 'À La Carte Services',
    price: '$50/hour',
    description:
      'Perfect for one-time needs such as event prep, move coordination, or custom projects. Flexible assistance when you need it most.',
  },
];

export const contacts: Contact[] = [
  {
    href: 'tel:9704099957',
    icon: <IoCallOutline size={24} />,
    children: '970.409.9957',
  },
  {
    href: 'mailto:coastalconcierge805@gmail.com',
    icon: <MdOutlineMailOutline size={24} />,
    children: 'coastalconcierge805@gmail.com',
  },
  {
    href: 'https://instagram.com/coastalconcierge805',
    icon: <FaInstagram size={24} />,
    children: '@coastalconcierge805',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61582232960760',
    icon: <FaFacebook size={24} />,
    children: 'Coastal Concierge',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export const services: Service[] = [
  {
    title: 'Home Organization & Refresh',
    description:
      'Create calm, functional spaces that fit your family’s lifestyle. From decluttering to seasonal refreshes, we help make your home feel effortless and inviting.',
  },
  {
    title: 'Event Preparation & Support',
    description:
      'Hosting a gathering or celebration? We help plan, prepare, and manage logistics so you can enjoy time with your guests, not stress over the details.',
  },
  {
    title: 'Home Management',
    description:
      'Whether you’re away or just busy, we coordinate repairs, schedule maintenance, and manage service providers— keeping your home running smoothly year-round.',
  },
  {
    title: 'Personal Assistance',
    description:
      'Simplify daily life with help for errands, scheduling, shopping, or househuld tasks—freeing you to focus on what matters most.',
  },
  {
    title: 'Travel & Activity Planning',
    description:
      'From weekend getaways to schoul breaks, we coordinate itineraries, accommodations, and local experiences—so every trip feels easy and memorable.',
  },
  {
    title: 'Custom Concierge Support',
    description:
      'Tailored help for unique needs—moving support, seasonal projects, or special requests. If it simplifies your life, we’re here for it.',
  },
];
