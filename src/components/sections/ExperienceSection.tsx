import { experience } from "@/lib/site";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";

function parseBold(text: string) {
  return text.split(/\*\*(.*?)\*\*/).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-accent">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-border bg-transparent py-20 sm:py-24"
    >
      <Container>
        <FadeIn>
          <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            Experience
          </p>
          <div className="mt-3 h-px w-32 bg-gradient-to-r from-accent/70 to-transparent" />
          <ol className="mt-12 space-y-12 border-l border-border pb-6 pl-6">
            {experience.map((job) => (
              <li key={job.title + job.period} className="relative">
                <span className="portfolio-shadow-timeline-dot absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted">
                      {job.org} · {job.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium tabular-nums text-subtle">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent/50">
                  {job.bullets.map((b) => (
                    <li key={b}>{parseBold(b)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </FadeIn>
      </Container>
    </section>
  );
}
