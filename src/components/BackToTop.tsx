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
        className='mt-4 mb-12 px-3 py-2 bg-coastal-primary/60 font-semibold rounded-full shadow-lg hover:bg-coastal-secondary/60 transition-colors text-2xl'
        aria-label='Back to Top'
      >
        🔝
      </button>
    </>
  );
}
