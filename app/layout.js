import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "PromptChain",
  description: "Discover, Trade, and Monetize Your Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
