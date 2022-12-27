import { MagnifyingGlass } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full flex justify-center bg-slate-900 p-6">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-72 py-2 px-4 text-base text-gray-200 rounded-md bg-slate-800"
            placeholder="Search"
            required
          />
          <button className="cursor-pointer rounded-md focus:border-none absolute top-1/2 transform -translate-y-1/2 right-1 bg-slate-900 p-2 hover:opacity-80 transition-all">
            <MagnifyingGlass size={16} color="#fff" />
          </button>
        </div>
      </form>
    </header>
  );
}
