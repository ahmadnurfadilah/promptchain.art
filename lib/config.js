import { http, createConfig, cookieStorage, createStorage } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

export const config = createConfig({
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  chains: [bsc, bscTestnet],
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
});
