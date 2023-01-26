import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-slate-900 flex flex-col items-center py-8">
      <h1 className="text-white text-5xl after:h-0.5 after:w-10 after:bg-slate-700 after:block after:mx-auto after:mt-4">
        Last readings
      </h1>
      <div className="max-w-5xl w-full mx-auto grid grid-cols-2 grid-rows-3 p-10 gap-x-4">
        <div className="row-span-full p-4 border-2 border-slate-700 rounded-md">
          <div className="relative overflow-hidden w-full h-96 rounded-md mb-4">
            <Image
              src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <span className="text-gray-400 mb-4 block text-sm">8 min read</span>
          <h1 className="text-white text-2xl mb-4 font-bold">
            Best productive works advices
          </h1>
          <div className="flex items-center gap-3">
            <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-700 ring-offset-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
            <div>
              <strong className="block text-white font-bold">Jane Allen</strong>
              <time className="text-gray-400">20 apr 2022</time>
            </div>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="h-full relative overflow-hidden w-72 rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 mb-3 text-sm">8 min read</span>
            <strong className="text-xl font-bold text-white">
              Best practices front-end
            </strong>
            <div className="flex items-center gap-3 mt-auto">
              <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-700 ring-offset-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div>
                <strong className="block text-white font-bold">
                  Jane Allen
                </strong>
                <time className="text-gray-400">20 apr 2022</time>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="h-full relative overflow-hidden w-72 rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 mb-3 text-sm">8 min read</span>
            <strong className="text-xl font-bold text-white">
              Best practices front-end
            </strong>
            <div className="flex items-center gap-3 mt-auto">
              <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-700 ring-offset-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div>
                <strong className="block text-white font-bold">
                  Jane Allen
                </strong>
                <time className="text-gray-400">20 apr 2022</time>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="h-full relative overflow-hidden w-72 rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 mb-3 text-sm">8 min read</span>
            <strong className="text-xl font-bold text-white">
              Best practices front-end
            </strong>
            <div className="flex items-center gap-3 mt-auto">
              <div className="overflow-hidden w-10 h-10 rounded-full relative ring-offset-2 ring-2 ring-slate-700 ring-offset-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div>
                <strong className="block text-white font-bold">
                  Jane Allen
                </strong>
                <time className="text-gray-400">20 apr 2022</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
