import type { Contact } from '@/app/types';

type ContactSectionProps = {
  contacts: Contact[];
};

export default function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <div className='flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl'>
      <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-coastal-primary font-sans'>
        CONTACT US
      </h2>
      <ul className='flex flex-col sm:flex-row gap-6 sm:gap-12'>
        {contacts.map(({ href, icon, children, target, rel }) => (
          <ContactLink
            key={children}
            href={href}
            icon={icon}
            target={target}
            rel={rel}
          >
            {children}
          </ContactLink>
        ))}
      </ul>
      <h2 className='text-md sm:text-lg md:text-xl font-medium font-serif'>
        Your life, simplified.
      </h2>
    </div>
  );
}

function ContactLink({ href, icon, children, ...props }: Contact) {
  return (
    <li>
      <a
        href={href}
        {...props}
        className='text-lg font-semibold flex justify-between items-center gap-2 text-coastal-secondary hover:text-coastal-primary transition-colors duration-200 cursor-pointer'
      >
        {icon}
        {children}
      </a>
    </li>
  );
}
