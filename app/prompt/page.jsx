"use client";

import LogoBnb from "@/components/logo/logo-bnb";
import { Skeleton } from "@/components/ui/skeleton";
import { ipfsGateway } from "@/lib/ipfs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [prompts, setPrompts] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchNfts = async () => {
      setFetching(true);
      const data = await fetch(`/api/nft/get-all?chain=${process.env.NEXT_PUBLIC_CHAINS}`).then((res) => res.json());
      const result = data?.result?.map((i) => {
        const metadata = JSON.parse(i.metadata);
        return {
          id: i?.token_id,
          title: metadata?.name,
          description: metadata?.description,
          image: metadata?.image,
          attributes: metadata?.attributes,
          price_to_use: metadata?.price_to_use,
        };
      });
      setPrompts(result);
      setFetching(false);
    };

    fetchNfts();
  }, []);

  return (
    <div className="container px-4 pt-32">
      <h1 className="font-bold text-4xl mb-8">Discover</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fetching ? (
          <>
            <div className="space-y-2">
              <Skeleton className="w-full aspect-square rounded-md" />
              <Skeleton className="w-2/3 h-4" />
              <Skeleton className="w-full h-2" />
              <Skeleton className="w-4/5 h-2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="w-full aspect-square rounded-md" />
              <Skeleton className="w-2/3 h-4" />
              <Skeleton className="w-full h-2" />
              <Skeleton className="w-4/5 h-2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="w-full aspect-square rounded-md" />
              <Skeleton className="w-2/3 h-4" />
              <Skeleton className="w-full h-2" />
              <Skeleton className="w-4/5 h-2" />
            </div>
            <div className="space-y-2">
              <Skeleton className="w-full aspect-square rounded-md" />
              <Skeleton className="w-2/3 h-4" />
              <Skeleton className="w-full h-2" />
              <Skeleton className="w-4/5 h-2" />
            </div>
          </>
        ) : (
          <>
            {prompts.map((i, idx) => (
              <Link
                href={`/prompt/${i.id}`}
                className="w-full bg-white/10 rounded-md group border border-transparent hover:border-primary transition-all hover:shadow-xl hover:scale-[1.01] duration-200"
                key={i.id}
              >
                <div className="p-1">
                  {i?.image ? (
                    <img src={ipfsGateway(i?.image?.replace("ipfs://", ""))} alt={i?.title} />
                  ) : (
                    <div className="w-full aspect-square"></div>
                  )}
                </div>
                <div className="px-4 pb-4 pt-3">
                  <h4 className="font-bold mb-1 line-clamp-1">{i.title}</h4>
                  <p className="text-xs line-clamp-2 text-white/70">{i.description}</p>
                  <hr className="my-4 border-white/10" />
                  <div className="flex items-center gap-2">
                    <LogoBnb className="w-4 h-4 group-hover:text-amber-300" />
                    <p className="text-xs">{i.price_to_use}</p>
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
