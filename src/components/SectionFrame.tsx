import Image from "next/image";
import type { ReactNode } from "react";

export function SectionFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative flex min-h-screen w-full flex-col ${className}`}
    >
      <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 flex items-center justify-center">
        <Image
          src="/AetherCraft/DividerTop.png"
          alt=""
          width={400}
          height={43}
          className="h-auto w-48 md:w-[320px]"
        />
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 flex items-center justify-center">
        <Image
          src="/AetherCraft/DividerBottom.png"
          alt=""
          width={400}
          height={43}
          className="h-auto w-48 md:w-[320px]"
        />
      </div>
      {children}
    </section>
  );
}
