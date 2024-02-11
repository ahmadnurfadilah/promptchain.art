import "./globals.css";
import { Toaster } from "react-hot-toast";

import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { Providers } from "./provider";
import { config } from "@/lib/config";

export const metadata = {
  title: "PromptChain",
  description: "Discover, Trade, and Monetize Your Prompts",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className="antialiased">
        <Providers initialState={initialState}>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
