export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center">
      <h1 className="text-3xl font-title font-extrabold text-neutral mb-5">
        Antonio Parra
      </h1>
      <section className="flex flex-row items-center justify-center w-min h-2/5 rounded-lg p-5 pl-10 pr-10 bg-white shadow-lg gap-3">
        <section className="flex flex-col items-center justify-center">
          <figure className="bg-cold-primary size-50 rounded-4xl"></figure>
          <h1 className="text-xl font-subtitle font-bold text-neutral mt-1">
            #00D6D1
          </h1>
        </section>
        <section className="flex flex-col items-center justify-center">
          <figure className="bg-cold-secondary size-50 rounded-4xl"></figure>
          <h1 className="text-xl font-subtitle font-bold text-neutral mt-1">
            #5AFFDE
          </h1>
        </section>
        <section className="flex flex-col items-center justify-center">
          <figure className="bg-neutral size-50 rounded-4xl"></figure>
          <h1 className="text-xl font-subtitle font-bold text-neutral mt-1">
            #252323
          </h1>
        </section>
        <section className="flex flex-col items-center justify-center">
          <figure className="bg-warm-primary size-50 rounded-4xl"></figure>
          <h1 className="text-xl font-subtitle font-bold text-neutral mt-1">
            #B10F2E
          </h1>
        </section>
        <section className="flex flex-col items-center justify-center">
          <figure className="bg-warm-secondary size-50 rounded-4xl"></figure>
          <h1 className="text-xl font-subtitle font-bold text-neutral mt-1">
            #33032F
          </h1>
        </section>
      </section>
    </main>
  );
}
