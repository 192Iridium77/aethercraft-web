export function ComingSoonButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`relative cursor-pointer overflow-hidden px-10 py-6 text-sm font-semibold md:px-16 md:py-8 md:text-lg ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-[url('/AetherCraft/ButtonSprite.png')] bg-cover bg-center bg-no-repeat"
        style={{ filter: "brightness(0.8)" }}
      />
      <span className="relative z-10">Coming Soon</span>
    </button>
  );
}
