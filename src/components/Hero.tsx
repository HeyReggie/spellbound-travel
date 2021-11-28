export default function Hero() {
  return (
    <section className="bg-hero-image h-screen bg-no-repeat bg-cover flex items-center justify-center">
      <div className="h-1/2 w-2/5 flex flex-col items-center justify-center gap-5 text-white">
        <h1 className="text-7xl">Magic. For the Modern Explorer.</h1>
        <p>Untold stories to uncover. Coolest hotels. Savviest guides.</p>
        <button className="bg-black px-5 py-3">Read More</button>
      </div>
    </section>
  );
}
