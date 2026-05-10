import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";
import { skillCards } from "@/lib/site";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-border bg-surface-2/35 py-20 sm:py-24"
    >
      <Container>
        <FadeIn>
          <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            Skills
          </p>
          <div className="mt-3 h-px w-32 bg-gradient-to-r from-accent/70 to-transparent" />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skillCards.map((group) => (
              <li
                key={group.title}
                className="portfolio-shadow-card flex flex-col rounded-xl border border-border bg-surface-1 p-5 transition hover:border-accent/25"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
