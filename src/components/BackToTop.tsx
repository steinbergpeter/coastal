'use client';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <h2 className='mt-2 mb-4 text-lg text-coastal-secondary font-semibold sm:text-lg md:text-2xl font-serif pt-4'>
        Your life, simplified.
      </h2>
      <button
        onClick={scrollToTop}
        className='mt-4 mb-4 px-3 py-1 bg-coastal-primary/90 text-white font-semibold text-sm rounded-full shadow-lg hover:bg-coastal-secondary/90 transition-colors'
        aria-label='Back to Top'
      >
        Back to Top
      </button>
    </>
  );
}
