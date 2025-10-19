export default function Home() {
  return (
    <div className='font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <header className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <h2 className='text-2xl font-semibold'>Header</h2>
      </header>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <h1 className='text-3xl font-bold'>Coastal Concierge</h1>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <h2 className='text-2xl font-semibold'>Footer</h2>
      </footer>
    </div>
  );
}
