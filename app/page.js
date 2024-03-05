import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="relative"
        style={{ backgroundColor: `#010101`, opacity: 0.8, backgroundImage: `radial-gradient(#7af32a 0.5px, #010101 0.5px)`, backgroundSize: `14px 14px` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark"></div>

        <div className="container px-4 h-full relative">
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
      </div>
    </>
  );
}
