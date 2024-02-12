import LogoBnb from "@/components/logo/logo-bnb";
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
    <div className="container px-4">
      <h1 className="font-bold text-4xl mb-8">Discover</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DUMMIES.map((i) => (
          <Link
            href={`/prompt/${i.id}`}
            className="w-full bg-white/10 rounded-md group border border-transparent hover:border-primary transition-all hover:shadow-xl hover:scale-[1.01] duration-200"
            key={i.id}
          >
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
                  <LogoBnb className="w-4 h-4" />
                  <span>1 BNB</span>
                </div>
                <div>1 Used</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
