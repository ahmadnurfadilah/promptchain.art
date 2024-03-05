export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const data = await fetch(`https://deep-index.moralis.io/api/v2.2/nft/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${searchParams.get("tokenId")}?chain=${searchParams.get("chain")}`, {
    method: "GET",
    headers: {
      "X-API-Key": process.env.MORALIS_API_KEY,
    },
  }).then((res) => res.json());

  return Response.json(data);
}
