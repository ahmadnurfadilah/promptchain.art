import { http, createConfig, cookieStorage, createStorage } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

export const config = createConfig({
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  chains: process.env.NEXT_PUBLIC_CHAINS.split(",").map((i) => (i == "bsc" && bsc) || (i == "bscTestnet" && bscTestnet)),
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
});
