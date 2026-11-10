import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center bg-[#080d0f] px-8 py-16">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-8 md:grid-cols-3">
        <p className="text-center text-sm md:text-left md:text-base">
          HYPERLEXAI 2025
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/AetherCraft/SimpleLogo.png"
            alt="AetherCraft"
            width={1584}
            height={672}
            className="h-auto w-48 object-contain md:w-[300px]"
          />
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <a
            href="mailto:dev@hyperlexai.com"
            className="text-sm md:text-base"
          >
            DEV@HYPERLEXAI.COM
          </a>
        </div>
      </div>
    </footer>
  );
}
