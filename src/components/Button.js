export default function Button({ children }) {
  return (
    <button className="border-4 ring-cyan-900 ring-1 rounded-md text-xl h-12 font-semibold text-black/30 bg-white/50 ">
      {children}
    </button>
  );
}
