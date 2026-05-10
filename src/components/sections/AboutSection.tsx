import { BookOpen, Camera, Code2, Laptop } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";

interface TLDRItem {
  label: string;
  Icon: LucideIcon;
}

const iconClassName = "h-10 w-10 sm:h-12 sm:w-12";

const tldrItems: TLDRItem[] = [
  { label: "Software Engineer", Icon: Code2 },
  { label: "UI Enthusiast", Icon: Laptop },
  { label: "Photographer", Icon: Camera },
  { label: "Curious Reader", Icon: BookOpen },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-border bg-surface-2/35 pb-24 pt-16 sm:scroll-mt-24 sm:pb-28 sm:pt-18"
    >
      <Container>
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,360px)] lg:items-center lg:gap-16 xl:gap-24 2xl:gap-28">
            <div className="min-w-0 lg:pe-10 xl:pe-16 2xl:pe-20">
              <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                About me
              </p>
              <div className="mt-3 h-px w-32 bg-gradient-to-r from-accent/70 to-transparent" />
              <div className="mt-7 max-w-2xl space-y-5 lg:max-w-none">
                <p className="text-pretty text-lg leading-relaxed text-muted">
                  I like building products that feel simple, smooth, and easy to
                  use. I naturally pay attention to small details — whether it
                  is the way something looks, feels, or flows while interacting
                  with it.
                </p>
                <p className="text-pretty text-lg leading-relaxed text-muted">
                  Outside work, I enjoy photography, reading fiction, and
                  coloring with alcohol markers, especially experimenting with
                  shadows, lighting, and depth. I am someone who enjoys
                  learning, exploring new ideas, and continuously improving both
                  creatively and technically.
                </p>
              </div>
            </div>

            <aside>
              <ul className="grid grid-cols-2 grid-rows-2 justify-items-center gap-x-4 gap-y-8 pt-1 sm:gap-x-6 sm:gap-y-10">
                {tldrItems.map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="flex w-full max-w-[140px] flex-col items-center text-center sm:max-w-none"
                  >
                    <div className="flex items-center justify-center text-accent">
                      <Icon className={iconClassName} strokeWidth={1.5} />
                    </div>
                    <span className="mt-4 text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
