import "./globals.css";
import { Toaster } from "react-hot-toast";

import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { Providers } from "./provider";
import { config } from "@/lib/config";
import Navbar from "@/components/navbar";
import Loading from "@/components/ui/loading";

export const metadata = {
  title: "PromptChain",
  description: "Discover, Trade, and Monetize Your Prompts",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className="antialiased bg-dark text-white">
        <Providers initialState={initialState}>
          <Navbar />
          <main className="mb-32">
            {children}
          </main>
        </Providers>
        <Loading />
        <Toaster />
      </body>
    </html>
  );
}
