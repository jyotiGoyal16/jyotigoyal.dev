import Link from "next/link";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { navItems, site } from "@/lib/site";
import Container from "@/components/ui/Container";

export default function SiteHeader() {
  return (
    <header className="portfolio-shadow-header sticky top-0 z-50 border-b border-border bg-surface-1/90 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link
          href="/#top"
          className="text-base font-bold tracking-tight text-foreground sm:text-lg"
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-15 md:flex">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-muted">
            <a
              href={site.social.github}
              target="_blank"
              aria-label="GitHub"
              className="transition-colors hover:text-accent"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href={site.social.leetcode}
              target="_blank"
              aria-label="LeetCode"
              className="transition-colors hover:text-accent"
            >
              <SiLeetcode className="h-4 w-4" />
            </a>
          </div>
        </div>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-md border border-border-strong bg-surface-1 px-2.5 py-2 text-foreground [&::-webkit-details-marker]:hidden">
            <Menu className="h-5 w-5 shrink-0" />
          </summary>
          <div className="portfolio-shadow-card absolute right-0 mt-2 w-[min(18rem,calc(100vw-2rem))] rounded-lg border border-border bg-surface-1 py-2">
            <nav className="px-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mx-3 my-2 h-px bg-border/90" />
            <div className="flex items-center justify-center gap-5 px-3 pb-1 pt-0 text-muted">
              <a
                href={site.social.github}
                target="_blank"
                aria-label="GitHub"
                className="rounded-md p-2 transition-colors hover:bg-surface-2 hover:text-accent"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className="rounded-md p-2 transition-colors hover:bg-surface-2 hover:text-accent"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href={site.social.leetcode}
                target="_blank"
                aria-label="LeetCode"
                className="rounded-md p-2 transition-colors hover:bg-surface-2 hover:text-accent"
              >
                <SiLeetcode className="h-5 w-5" />
              </a>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
