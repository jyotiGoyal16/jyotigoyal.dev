import Link from "next/link";
import { Folder, SquareArrowOutUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { featuredProjects } from "@/lib/site";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-border bg-transparent py-20 sm:py-24"
    >
      <Container>
        <FadeIn>
          <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            Projects
          </p>
          <div className="mt-3 h-px w-32 bg-gradient-to-r from-accent/70 to-transparent" />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <li
                key={project.name}
                className="portfolio-shadow-card portfolio-project-card flex flex-col rounded-xl border border-border bg-surface-1 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent/35"
              >
                <div className="flex items-center justify-between">
                  <Folder className="h-6 w-6 text-accent" strokeWidth={1.8} />
                  <div className="flex items-center gap-2">
                    <Link
                      href={project.repo}
                      className="text-accent/90 transition hover:text-accent"
                      prefetch={false}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaGithub className="h-4.5 w-4.5" />
                    </Link>
                    <Link
                      href={project.demo}
                      className="text-accent/90 transition hover:text-accent"
                      prefetch={false}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <SquareArrowOutUpRight
                        className="h-4.5 w-4.5"
                        strokeWidth={2}
                      />
                    </Link>
                  </div>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border-strong bg-surface-2/55 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
