"use client";

import { RainbowKitProvider, darkTheme, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, cookieStorage, createStorage } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  ssr: true,
  appName: "PromptChain",
  projectId: "026bdd788deb2c204005aeb6c7b33a52",
  storage: createStorage({
    storage: cookieStorage,
  }),
  chains: [bsc, bscTestnet],
});

export function Providers({ children, initialState }) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
        locale="en-US"
          theme={darkTheme({
            accentColor: "#7af32a",
            accentColorForeground: "#010101",
            borderRadius: "small",
            fontStack: "Plus Jakarta Sans",
            overlayBlur: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
