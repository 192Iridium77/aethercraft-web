export function ComingSoonButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`relative grid w-[min(100%,18rem)] place-items-center border-0 bg-transparent p-0 text-sm font-semibold md:w-[22rem] md:text-lg ${className}`}
    >
      <img
        src="/AetherCraft/button.webp"
        alt=""
        width={720}
        height={313}
        className="col-start-1 row-start-1 h-auto w-full"
      />
      <span className="col-start-1 row-start-1">Coming Soon</span>
    </button>
  );
}
