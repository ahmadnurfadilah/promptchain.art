import { ipfsGateway } from "@/lib/ipfs";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const data = await fetch(ipfsGateway(searchParams.get("cid"))).then((res) => res.json());

  return Response.json(data);
}
