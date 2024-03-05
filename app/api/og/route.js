import Image from "next/image";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const fontData = await fetch(new URL("../../../assets/PlusJakartaSans-ExtraBold.ttf", import.meta.url)).then((res) => res.arrayBuffer());

    let width;
    let height;
    const size = searchParams.get("size");
    if (size === "square") {
      width = 1080;
      height = 1080;
    } else if (size === "landscape") {
      width = 1920;
      height = 1080;
    } else if (size === "portrait") {
      width = 1080;
      height = 1920;
    } else {
      width = 1200;
      height = 630;
    }

    const imageData = await fetch(new URL("../../../assets/bg-nft.png", import.meta.url)).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            color: "#7af32a",
            background: "#010101",
            width: "100%",
            height: "100%",
            textAlign: "left",
            fontFamily: '"PlusJakarta"',
            // padding: "10%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <img alt="Image" src={imageData} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%" }} />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100",
              height: "100",
              color: "#7af32a",
              position: "absolute",
              left: "10%",
              top: "10%",
            }}
            fill="none"
            viewBox="0 0 30 32"
          >
            <path
              fill="currentcolor"
              d="M14.515 0A4.803 4.803 0 009.71 4.8c0 2.65 2.152 4.8 4.805 4.8a4.803 4.803 0 004.806-4.8c0-2.65-2.152-4.8-4.806-4.8zm0 3.2a1.6 1.6 0 11.002 3.202 1.6 1.6 0 01-.002-3.202zM4.704 5.6A4.804 4.804 0 00.645 8a4.796 4.796 0 001.758 6.556A4.81 4.81 0 008.968 12.8a4.797 4.797 0 00-1.76-6.556A4.786 4.786 0 004.703 5.6zm19.393 0c-.774.02-1.555.23-2.273.644a4.797 4.797 0 00-1.76 6.556 4.81 4.81 0 006.565 1.756A4.796 4.796 0 0028.386 8a4.805 4.805 0 00-4.29-2.4zM4.772 8.8a1.598 1.598 0 011.42 2.4A1.602 1.602 0 013.42 9.6c.29-.502.812-.788 1.353-.8zm19.41 0a1.603 1.603 0 011.43.8c.443.765.18 1.744-.585 2.185a1.602 1.602 0 01-2.188-.585 1.598 1.598 0 011.343-2.4zm-9.573 4.002a3.207 3.207 0 00-3.044 1.952 3.196 3.196 0 00.685 3.509A3.205 3.205 0 0017.72 16a3.199 3.199 0 00-3.11-3.198zM4.676 16.8c-.775.02-1.555.23-2.273.644A4.796 4.796 0 00.645 24a4.807 4.807 0 006.563 1.756 4.797 4.797 0 001.76-6.556 4.809 4.809 0 00-4.292-2.4zm19.445 0a4.804 4.804 0 00-4.058 2.4 4.797 4.797 0 001.76 6.556A4.807 4.807 0 0028.386 24a4.796 4.796 0 00-1.758-6.556 4.793 4.793 0 00-2.507-.644zM4.764 20a1.6 1.6 0 01.842 2.985A1.602 1.602 0 013.42 22.4 1.598 1.598 0 014.764 20zm19.426 0a1.598 1.598 0 011.422 2.4 1.602 1.602 0 01-2.773-1.6c.29-.502.81-.788 1.351-.8zm-9.675 2.4a4.803 4.803 0 00-4.805 4.8c0 2.65 2.152 4.8 4.805 4.8a4.803 4.803 0 004.806-4.8c0-2.65-2.152-4.8-4.806-4.8zm0 3.2a1.6 1.6 0 11.002 3.202 1.6 1.6 0 01-.002-3.202z"
            ></path>
          </svg>
          <p
            style={{
              background: "white",
              color: "#010101",
              padding: `10px 20px`,
              marginTop: `50px`,
              borderRadius: `1000px`,
              fontSize: "22",
              position: "absolute",
              right: "10%",
              top: "8%",
            }}
          >
            {searchParams.get("category")}
          </p>
          <div
            style={{
              fontSize: 200,
              position: "absolute",
              left: "10%",
              bottom: "10%",
              display: "flex",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "white",
                opacity: 0.1,
              }}
            >
              #
            </p>
            <p
              style={{
                margin: 0,
              }}
            >
              {searchParams.get("id")}
            </p>
          </div>
        </div>
      ),
      {
        width: width,
        height: height,
        fonts: [
          {
            name: "PlusJakarta",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
