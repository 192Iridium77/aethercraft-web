export function ComingSoonButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`relative grid w-[min(100%,20rem)] place-items-center border-0 bg-transparent p-0 text-[0.95rem] font-semibold md:w-[26rem] md:text-[1.2rem] ${className}`}
    >
      <img
        src="/AetherCraft/button.webp"
        alt=""
        width={1584}
        height={672}
        className="col-start-1 row-start-1 h-auto w-full"
      />
      <span className="col-start-1 row-start-1 translate-y-[0.2em] text-white">
        Coming Soon
      </span>
    </button>
  );
}
