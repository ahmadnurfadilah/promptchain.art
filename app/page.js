import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Wallet2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-dark">
      <div className="fixed top-8 inset-x-0 z-10">
        <div className="w-full container px-4">
          <div className="w-full h-16 bg-white/10 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2 text-primary font-bold">
              <Logo />
              <h2>PromptChain</h2>
            </Link>
            <div className="flex items-center gap-8 md:gap-12">
              <div className="flex items-center gap-8 md:gap-12 text-sm font-medium text-white/70">
                <Link href="/" className="hover:text-white hover:underline transition-all hover:underline-offset-8 hover:decoration-2">Home</Link>
                <Link href="/" className="hover:text-white hover:underline transition-all hover:underline-offset-8 hover:decoration-2">Discover</Link>
                <Link href="/" className="hover:text-white hover:underline transition-all hover:underline-offset-8 hover:decoration-2">Sell Prompt</Link>
              </div>
              <Button variant="primary" className="rounded-full gap-2">
                <Wallet2 className="w-4 h-4" />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
