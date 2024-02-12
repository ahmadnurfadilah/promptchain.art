import { twMerge } from "tailwind-merge";

function LogoBnb({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={twMerge("w-4 aspect-square", className)} viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-3.884-17.596L16 10.52l3.886 3.886l2.26-2.26L16 6l-6.144 6.144zM6 16l2.26 2.26L10.52 16l-2.26-2.26zm6.116 1.596l-2.263 2.257l.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48zM21.48 16l2.26 2.26L26 16l-2.26-2.26zm-3.188-.002h.001L16 13.706L14.305 15.4l-.195.195l-.401.402l-.004.003l.004.003l2.29 2.291l2.294-2.293l.001-.001l-.002-.001z"
      ></path>
    </svg>
  );
}

export default LogoBnb;
