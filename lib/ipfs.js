import axios from "axios";

export const ipfsGateway = (cid) => {
  return `${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/${cid}?pinataGatewayToken=${process.env.NEXT_PUBLIC_PINATA_GATEWAY_TOKEN}`;
}

export const pinImageUrlToIPFS = async (imageUrl, tokenId) => {
  const image = await fetch(imageUrl).then((res) => res.blob());

  const data = new FormData();
  data.append(`file`, image);

  const pinataMetadata = JSON.stringify({
    name: `promptchain-image-${tokenId}.png`,
  });
  data.append("pinataMetadata", pinataMetadata);

  try {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, {
      maxBodyLength: "Infinity",
      headers: {
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
        pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_API_SECRET,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const pinMetadataToIPFS = async (metadata, tokenId) => {
  const data = JSON.stringify({
    pinataContent: metadata,
    pinataMetadata: {
      name: `promptchain-metadata-${tokenId}.json`,
    },
  });

  try {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", data, {
      headers: {
        "Content-Type": "application/json",
        pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
        pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_API_SECRET,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }

  return null;
};
