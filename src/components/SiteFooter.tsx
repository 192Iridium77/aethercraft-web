import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center bg-[#030b0e] px-8">
      <div className="flex items-center justify-center">
        <Image
          src="/AetherCraft/DividerTop.png"
          alt=""
          width={400}
          height={43}
          className="h-auto w-48 md:w-[320px]"
        />
      </div>
      <div className="container mx-auto my-20 grid w-full grid-cols-1 items-center gap-8 md:grid-cols-3">
        <p className="text-center text-sm md:text-left md:text-base">
          HYPERLEXAI 2025
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/AetherCraft/SimpleLogo.png"
            alt="AetherCraft"
            width={300}
            height={80}
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
