import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { company } from "@/data/company";

const columns: { title: string; links: { label: string; to: string; params?: Record<string, string> }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Services", to: "/services" },
      { label: "Expertise", to: "/expertise" },
      { label: "Talent & Staffing", to: "/talent-staffing" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "IT Services",
    links: [
      { label: "Software Development", to: "/services/$slug", params: { slug: "software-development" } },
      { label: "Application Maintenance", to: "/services/$slug", params: { slug: "application-maintenance" } },
      { label: "Cloud Migration", to: "/services/$slug", params: { slug: "cloud-migration" } },
      { label: "Data Engineering", to: "/services/$slug", params: { slug: "data-engineering" } },
      { label: "API Integration", to: "/services/$slug", params: { slug: "api-integration" } },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Banking IT", to: "/expertise/$slug", params: { slug: "banking-it" } },
      { label: "Insurance Technology", to: "/expertise/$slug", params: { slug: "insurance-technology" } },
      { label: "AI & Python", to: "/expertise/$slug", params: { slug: "ai-python" } },
    ],
  },
  {
    title: "Training",
    links: [
      { label: "Training Programs", to: "/training" },
      { label: "HTD Model Courses", to: "/courses/$slug", params: { slug: "htd-model-courses" } },
      { label: "Upskill Training", to: "/courses/$slug", params: { slug: "upskill-training" } },
      { label: "All Courses", to: "/courses" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <Container className="pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-sm">
              Malaysia's trusted IT services and talent development partner — specialized in banking,
              insurance technology, AI solutions, and HRDC-approved professional training.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 text-cyan-accent shrink-0" />
                <span>
                  {company.address.line1}, {company.address.line2}, {company.address.city}
                </span>
              </div>
              <a href={company.phoneHref} className="flex items-center gap-3 text-white/70 hover:text-cyan-accent">
                <Phone className="h-4 w-4 text-cyan-accent shrink-0" /> {company.phone}
              </a>
              <a href={company.emailHref} className="flex items-center gap-3 text-white/70 hover:text-cyan-accent">
                <Mail className="h-4 w-4 text-cyan-accent shrink-0" /> {company.email}
              </a>
            </div>
            <div className="mt-6 flex gap-2">
              {[
                { icon: Linkedin, href: company.socials.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: company.socials.facebook, label: "Facebook" },
                { icon: Twitter, href: company.socials.twitter, label: "Twitter" },
                { icon: Instagram, href: company.socials.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-white/5 hover:bg-royal transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to as string}
                        params={l.params as never}
                        className="text-sm text-white/60 hover:text-cyan-accent transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-cyan-accent font-medium">
              HRDC Approved Training Provider
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
