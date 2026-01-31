import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({ children, align = "left" }: SectionHeadingProps) {
  return (
    <h2
      className={`text-xs font-semibold uppercase tracking-[0.5em] text-textdark/70 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {children}
    </h2>
  );
}
