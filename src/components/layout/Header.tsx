import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Mail, Phone } from "lucide-react";
import { nav, type NavItem } from "@/data/navigation";
import { company } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { CTAButton } from "@/components/ui/cta-button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [pathname]);

  const isActive = (item: NavItem) => {
    if (item.to === "/") return pathname === "/";
    return pathname === item.to || pathname.startsWith(item.to + "/");
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white border-b border-transparent",
      )}
    >
      {/* Contact strip */}
      <div className="hidden lg:block bg-navy-deep text-white/80 text-xs">
        <Container className="flex items-center justify-between py-2">
          <span className="tracking-wide">{company.headerStrip}</span>
          <div className="flex items-center gap-6">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-cyan-accent transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="inline-flex items-center gap-1.5 hover:text-cyan-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" /> {company.email}
            </a>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <Container className="flex items-center justify-between h-16 lg:h-20">
        <Link
          to="/"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
        >
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {nav.map((item) => {
            const active = isActive(item);
            if (item.children?.length) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <Link
                    to={item.to}
                    data-active={active}
                    className={cn(
                      "nav-underline flex items-center gap-1 px-3 py-2 text-sm font-medium text-ink hover:text-royal transition-colors rounded-md",
                      "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      active && "text-royal",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform"
                      style={{ transform: open === item.label ? "rotate(180deg)" : undefined }}
                    />
                  </Link>
                  <AnimatePresence>
                    {open === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3 z-50"
                      >
                        <div className="min-w-[280px] rounded-xl border border-border bg-white p-2 shadow-xl shadow-navy/10">
                          {item.children.map((c) => (
                            <Link
                              key={c.label}
                              to={c.to as string}
                              params={c.params as never}
                              className="block rounded-md px-3 py-2.5 text-sm text-ink hover:bg-surface-muted hover:text-royal transition-colors focus:outline-none focus-visible:outline-none focus-visible:bg-surface-muted focus-visible:text-royal"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.to}
                data-active={active}
                className={cn(
                  "nav-underline px-3 py-2 text-sm font-medium text-ink hover:text-royal transition-colors rounded-md",
                  "focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  active && "text-royal",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <CTAButton to="/contact" size="md" withArrow>
            Get Started
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-ink"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
