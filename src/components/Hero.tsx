import Image from "next/image";
import { ComingSoonButton } from "./ComingSoonButton";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden">
      <Image
        src="/AetherCraft/HeroBackground.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/[0.55] via-black/[0.32] to-black/[0.87]"
      />
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center justify-center gap-8 px-8 py-20 md:gap-10">
        <Image
          src="/AetherCraft/BigLogo.png"
          alt="AetherCraft"
          width={1024}
          height={1024}
          priority
          sizes="(min-width: 768px) 33.6rem, 24rem"
          className="h-auto w-full max-w-[min(100%,24rem)] md:max-w-[33.6rem]"
        />
        <h1 className="max-w-xl text-center text-sm text-balance sm:text-base md:max-w-4xl md:text-2xl">
          An ethereal realm where heroes fight for victory
        </h1>
        <ComingSoonButton />
      </div>
    </section>
  );
}
