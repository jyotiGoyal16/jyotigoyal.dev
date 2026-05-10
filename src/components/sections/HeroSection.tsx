import Image from "next/image";
import { site } from "@/lib/site";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";

export default function HeroSection() {
  const firstName = site.name.split(" ")[0];

  const heroPhoto = (
    <div className="portfolio-shadow-card relative mx-auto aspect-square w-full max-w-[min(19.5rem,86%)] overflow-hidden rounded-3xl border border-border-strong bg-surface-2 ring-1 ring-accent/10 sm:max-w-[min(23rem,88%)] lg:mx-0 lg:max-w-[min(30rem,42vw)]">
      <Image
        src={site.avatarUrl}
        alt={site.name}
        width={767}
        height={1024}
        loading="eager"
        fetchPriority="high"
        sizes="(max-width: 640px) min(280px, 86vw), (max-width: 1024px) min(368px, 88vw), min(480px, 42vw)"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );

  const heroBody = (
    <>
      <h1 className="mx-auto mt-0 max-w-2xl text-pretty text-center text-lg font-medium leading-relaxed text-muted sm:text-xl lg:mx-0 lg:mt-3 lg:text-left">
        <span className="mr-2 inline-block text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
          {site.professionalTitle}
        </span>
        {site.heroIntro}
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-pretty text-center text-base leading-relaxed text-muted sm:text-lg lg:mx-0 lg:text-left">
        {site.heroIntroSecondary}
      </p>
      <div className="mt-7 flex justify-center lg:justify-start">
        <a
          href={`mailto:${site.contactEmail}`}
          className="inline-flex items-center gap-2 rounded-md border border-accent/55 bg-transparent px-4 py-2.5 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent/12 hover:text-accent-hover"
        >
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5.75C3 5.34 3.34 5 3.75 5h12.5c.41 0 .75.34.75.75v8.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-8.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="m3.5 6 6.05 4.43a.75.75 0 0 0 .9 0L16.5 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Say hello
        </a>
      </div>
    </>
  );

  const greetingHeading = (
    <p className="text-base font-medium tracking-tight text-foreground/95 sm:text-lg">
      Hi, <span className="text-accent">{firstName}</span> here.
    </p>
  );

  return (
    <section
      id="top"
      className="surface-depth border-b border-border/90 flex min-h-0 items-start py-16 sm:py-20 max-md:min-h-[calc(100svh-3.5rem)] max-md:items-center lg:min-h-[calc(100svh-3.5rem)] lg:items-center"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.55fr)] lg:gap-10 lg:items-center">
          {/* Mobile: photo + name + location as one centered unit */}
          <div className="flex flex-col items-center gap-2 lg:hidden">
            <FadeIn className="flex w-full justify-center">{heroPhoto}</FadeIn>
            <FadeIn delay={0.06} className="w-full">
              <div className="text-center">
                {greetingHeading}
                <p className="mt-1 text-sm text-subtle">{site.location}</p>
              </div>
            </FadeIn>
          </div>

          {/* Mobile: headline + copy + CTA */}
          <div className="lg:hidden">
            <FadeIn delay={0.1}>{heroBody}</FadeIn>
          </div>

          {/* Desktop: full text column */}
          <div className="hidden lg:order-1 lg:block">
            <FadeIn>
              <div>
                {greetingHeading}
                <p className="mt-1.5 text-sm text-subtle">{site.location}</p>
              </div>
              {heroBody}
            </FadeIn>
          </div>

          {/* Desktop: photo */}
          <FadeIn
            delay={0.08}
            className="hidden lg:order-2 lg:flex lg:w-full lg:justify-end"
          >
            {heroPhoto}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
