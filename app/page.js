import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="container px-4 h-full">
          <div className="h-full overflow-hidden absolute w-2/3 right-0 top-0">
            <img src="/img/bg/circle-blur.svg" alt="BG" className="w-full" />
          </div>

          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-black text-5xl leading-snug mb-4">Discover, Trade, and Monetize Your Prompts</h1>
              <p className="leading-loose text-white/70 text-sm md:text-lg">The innovative platform that connects creators and enthusiasts to buy and sell prompts using blockchain technology. We empower your creativity by enabling you to sell captivating ideas embedded within intriguing prompts.</p>
            </div>
            <div>
              <img src="/img/illustration/sally.webp" alt="" className="w-full relative animate-updown" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
