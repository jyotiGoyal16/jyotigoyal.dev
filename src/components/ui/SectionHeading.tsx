import type { ReactNode } from "react";

export const sectionEyebrowClasses =
  "inline-flex w-fit items-center border-b border-accent/45 pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base";

export default function SectionHeading({
  titleId,
  eyebrow,
  title,
  description,
}: {
  titleId: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      <p className={sectionEyebrowClasses}>{eyebrow}</p>
      <h2
        id={titleId}
        className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:mt-5 sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted sm:mt-4">
          {description}
        </p>
      ) : null}
    </header>
  );
}
