import { BackgroundBeams } from "@/components/ui/background-beams";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Coins, ListChecksIcon, SearchCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gradient-to-t from-dark to-white/5 relative pt-32">
        <div className="z-10 container px-4 h-full relative">
          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-black text-5xl leading-snug mb-4">Discover, Trade, and Monetize Your Prompts</h1>
              <p className="leading-loose text-white/70 text-sm md:text-lg mb-6">
                The innovative platform that connects creators and enthusiasts to buy and sell prompts using blockchain technology. We empower your creativity
                by enabling you to sell captivating ideas embedded within intriguing prompts.
              </p>
              <Link href="/prompt" className={`${buttonVariants({ variant: "primary" })} gap-2`}>
                <ArrowRight className="w-4 h-4" />
                Discover Prompts
              </Link>
            </div>
            <div className="relative aspect-square">
              <Image src="/img/illustration/sally.webp" alt="Sally" className="w-full relative animate-updown" fill />
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>

      <section className="container px-4 lg:px-6 my-20" id="features">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-black text-2xl md:text-3xl lg:text-4xl mb-8 text-center">
            Trade Ideas Seamlessly with <span className="text-primary">Promptchain</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 border rounded-md bg-white/5 border-white/10 cursor-crosshair hover:shadow-lg hover:-translate-y-px hover:border-primary transition-all group">
            <div className="w-12 h-12 rounded-md bg-lime border border-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all text-primary group-hover:text-primary group-hover:scale-105 group-hover:-rotate-12 group-hover:shadow-xl delay-75 duration-200">
              <ListChecksIcon />
            </div>
            <h3 className="font-extrabold text-xl mb-2 text-primary">List Your Prompts</h3>
            <p className="opacity-80">As a creative mind, you can post your unique prompts on Promptchain, converting your ideas into valuable NFTs.</p>
          </div>
          <div className="p-8 border rounded-md bg-white/5 border-white/10 cursor-crosshair hover:shadow-lg hover:-translate-y-px hover:border-primary transition-all group">
            <div className="w-12 h-12 rounded-md bg-lime border border-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all text-primary group-hover:text-primary group-hover:scale-105 group-hover:-rotate-12 group-hover:shadow-xl delay-75 duration-200">
              <SearchCheckIcon />
            </div>
            <h3 className="font-extrabold text-xl mb-2 text-primary">Explore Prompts</h3>
            <p className="opacity-80">
              You can explore prompts and choose to either try one (ownership remains with the creator) or purchase one.
            </p>
          </div>
          <div className="p-8 border rounded-md bg-white/5 border-white/10 cursor-crosshair hover:shadow-lg hover:-translate-y-px hover:border-primary transition-all group">
            <div className="w-12 h-12 rounded-md bg-lime border border-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all text-primary group-hover:text-primary group-hover:scale-105 group-hover:-rotate-12 group-hover:shadow-xl delay-75 duration-200">
              <Coins />
            </div>
            <h3 className="font-extrabold text-xl mb-2 text-primary">Earn Royalties</h3>
            <p className="opacity-80">
              Every time user interact with a prompt, creators earn royalties, encouraging their continuous creativity and innovation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
