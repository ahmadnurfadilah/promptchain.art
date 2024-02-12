import "@rainbow-me/rainbowkit/styles.css";
import Link from "next/link";
import Logo from "./logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <div className="fixed top-8 inset-x-0 z-10">
      <div className="w-full container px-4">
        <div className="w-full h-16 bg-white/10 rounded-full backdrop-blur-xl border border-white/10 flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold">
            <Logo />
            <h2>PromptChain</h2>
          </Link>
          <div className="flex items-center gap-8 md:gap-12">
            <div className="flex items-center gap-8 md:gap-12 text-sm font-medium text-white/70">
              <Link href="/" className="hover:text-white hover:underline transition-all hover:underline-offset-8 hover:decoration-2">
                Home
              </Link>
              <Link href="/prompt" className="hover:text-white hover:underline transition-all hover:underline-offset-8 hover:decoration-2">
                Discover
              </Link>
              <Link href="/" className="hover:text-white hover:underline transition-all hover:underline-offset-8 hover:decoration-2">
                Sell Prompt
              </Link>
            </div>
            <ConnectButton accountStatus="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
