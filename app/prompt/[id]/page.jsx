"use client";

import abi from "../../../lib/abi";
import Logo from "@/components/logo";
import LogoBnb from "@/components/logo/logo-bnb";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PromptCompletion from "./completion";
import { ipfsGateway } from "@/lib/ipfs";
import { truncateAddress } from "@/lib/utils";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const account = useAccount();
  const [prompt, setPrompt] = useState([]);

  const {
    data: tokenURI,
    isLoading,
    isError,
  } = useReadContract({
    abi,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    functionName: "tokenURI",
    args: [id],
  });

  const { data: ownerOf } = useReadContract({
    abi,
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    functionName: "ownerOf",
    args: [id],
  });

  useEffect(() => {
    if (!isLoading && isError) {
      toast.error("Failed to fetch NFT");

      setTimeout(() => {
        router.push("/prompt");
      }, 1000);
      return;
    }

    if (!isLoading && tokenURI) {
      fetch(`/api/pinata/fetch?cid=${tokenURI.substr(7)}`)
        .then((res) => res.json())
        .then((res) => setPrompt(res));
    }
  }, [tokenURI, isLoading, isError, router]);

  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        <div>
          <div className="w-full bg-white/10 rounded-md">
            <div className="p-1">
              {prompt?.image ? (
                <img src={ipfsGateway(prompt?.image?.replace("ipfs://", ""))} alt={prompt?.title} />
              ) : (
                <div className="w-full aspect-square"></div>
              )}
            </div>
            <div className="px-4 pb-4 pt-3 flex flex-col justify-between">
              <span className={`text-xs text-white/60`}>By: {truncateAddress(ownerOf ?? "")}</span>
              <hr className="my-4 border-white/10" />
              <div className="flex items-center gap-2">
                {account?.isConnected ? (
                  <Dialog>
                    <DialogTrigger className="gap-2 bg-primary text-dark hover:bg-primary/90 h-10 px-4 py-2 flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300">
                      <span>Try Prompt</span>
                      <h6 className={`flex items-center gap-1`}>
                        <LogoBnb className="w-4 h-4" />
                        <span>{prompt?.price_to_use}</span>
                      </h6>
                    </DialogTrigger>
                    <DialogContent className="bg-zinc-800 border-dark">
                      <DialogHeader>
                        <DialogTitle className="text-lg font-bold">Try Prompt: {prompt?.title}</DialogTitle>
                        <div>
                          <PromptCompletion tokenId={id} prompt={prompt} />
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    className="gap-2 flex-1"
                    variant="primary"
                    onClick={() => {
                      toast.error("Connect your wallet");
                    }}
                  >
                    <span>Try Prompt</span>
                    <h6 className={`flex items-center gap-1`}>
                      <LogoBnb className="w-4 h-4" />
                      <span>10</span>
                    </h6>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="font-bold text-2xl">{prompt?.name}</h1>
          <hr className="my-4 border-white/10" />
          <p className="text-white/70">{prompt?.description}</p>

          {prompt?.prompt?.preview && (
            <div className="mt-6">
              <h5 className="font-bold text-xl mb-2">Preview Output</h5>
              <p className="whitespace-pre-wrap text-white/70">{prompt?.prompt?.preview}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
