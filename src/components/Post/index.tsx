import Image from "next/image";

export function Post() {
  return (
    <article className="py-8 border-t border-slate-700">
      <header className="flex gap-3 items-center mb-6">
        <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-900 ring-offset-slate-700">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div>
          <strong className="block text-white">Jane Allen</strong>
          <span className="text-slate-400">20 apr 2022 - 4 min read</span>
        </div>
      </header>
      <main className="grid grid-cols-3 gap-16 mb-6">
        <div className="col-span-2">
          <h1 className="text-3xl text-white mb-4 font-bold">
            Why I Decided to Invest in My Portfolio as a Junior Developer
          </h1>
          <p className="text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            reprehenderit nobis facere exercitationem ipsum optio, ducimus fugit
            blanditiis inventore ut?
          </p>
        </div>
        <div className="relative overflow-hidden h-full rounded-md mb-4">
          <Image
            src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </main>
      <ul className="flex gap-3 text-slate-400">
        <li className="bg-slate-700 px-4 py-2 rounded-lg">Dev</li>
        <li className="bg-slate-700 px-4 py-2 rounded-lg">Dev</li>
      </ul>
    </article>
  );
}
