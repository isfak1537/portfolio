export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30"
    >
      <div className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-cyan-200/20 blur-[130px]" />
      <div className="absolute top-1/2 left-10 h-80 w-80 rounded-full bg-indigo-200/15 blur-[120px]" />
    </div>
  );
}