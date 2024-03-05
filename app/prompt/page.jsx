"use client";

import LogoBnb from "@/components/logo/logo-bnb";
import { ipfsGateway } from "@/lib/ipfs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchNfts = async () => {
      const data = await fetch(`/api/nft/get-all?chain=${process.env.NEXT_PUBLIC_CHAINS}`).then((res) => res.json());
      const result = data?.result?.map((i) => {
        const metadata = JSON.parse(i.metadata);
        return {id: i.token_id, title: metadata.name, description: metadata.description, image: metadata.image, attributes: metadata.attributes, price_to_use: metadata.price_to_use}
      });
      setPrompts(result);
    }

    fetchNfts();
  }, []);

  return (
    <div className="container px-4">
      <h1 className="font-bold text-4xl mb-8">Discover</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {prompts.map((i, idx) => (
          <Link
            href={`/prompt/${i.id}`}
            className="w-full bg-white/10 rounded-md group border border-transparent hover:border-primary transition-all hover:shadow-xl hover:scale-[1.01] duration-200"
            key={i.id}
          >
            <div className="p-1">
              <img src={ipfsGateway(i.image.replace("ipfs://", ""))} alt={i.title} />
            </div>
            <div className="px-4 pb-4 pt-3">
              <h4 className="font-bold mb-1">{i.title}</h4>
              <p className="text-xs line-clamp-2 text-white/70">{i.description}</p>
              <hr className="my-4 border-white/10" />
              <div className="flex items-center gap-2">
                <LogoBnb className="w-4 h-4 group-hover:text-amber-300" />
                <p className="text-xs">{i.price_to_use}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
