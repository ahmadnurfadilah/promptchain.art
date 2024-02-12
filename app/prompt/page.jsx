import Navbar from "@/components/navbar";
import Link from "next/link";

const DUMMIES = [
  { id: 1, category: "GPT", title: "Text Extender" },
  { id: 2, category: "GPT", title: "Text Extender" },
  { id: 3, category: "GPT", title: "Text Extender" },
  { id: 4, category: "GPT", title: "Text Extender" },
  { id: 5, category: "GPT", title: "Text Extender" },
  { id: 6, category: "GPT", title: "Text Extender" },
  { id: 7, category: "GPT", title: "Text Extender" },
  { id: 8, category: "GPT", title: "Text Extender" },
  { id: 9, category: "GPT", title: "Text Extender" },
  { id: 10, category: "GPT", title: "Text Extender" },
  { id: 11, category: "GPT", title: "Text Extender" },
  { id: 12, category: "GPT", title: "Text Extender" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="my-32">
        <div className="container px-4">
          <h1 className="font-bold text-4xl mb-8">Discover</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {DUMMIES.map((i) => (
              <Link href={`/prompt/${i.id}`} className="w-full bg-white/10 rounded-md group border border-transparent hover:border-primary transition-all hover:shadow-xl hover:scale-[1.01] duration-200" key={i.id}>
                <div className="p-1">
                  <div className="w-full aspect-[3/2] bg-dark rounded-md flex items-center justify-center">
                    <h2 className="font-bold text-4xl text-primary/10 group-hover:text-primary">#{i.id}</h2>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-3">
                  <h4 className="font-bold">{i.title}</h4>
                  <hr className="my-4 border-white/10" />
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                        <path
                          fill="currentColor"
                          d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16m-3.884-17.596L16 10.52l3.886 3.886l2.26-2.26L16 6l-6.144 6.144zM6 16l2.26 2.26L10.52 16l-2.26-2.26zm6.116 1.596l-2.263 2.257l.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48zM21.48 16l2.26 2.26L26 16l-2.26-2.26zm-3.188-.002h.001L16 13.706L14.305 15.4l-.195.195l-.401.402l-.004.003l.004.003l2.29 2.291l2.294-2.293l.001-.001l-.002-.001z"
                        ></path>
                      </svg>
                      <span>1 BNB</span>
                    </div>
                    <div>1 Used</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
