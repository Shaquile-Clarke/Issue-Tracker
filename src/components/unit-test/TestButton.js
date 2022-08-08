export default function TestButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="p-2 text-lg bg-white/50">
      {children}
    </button>
  );
}
