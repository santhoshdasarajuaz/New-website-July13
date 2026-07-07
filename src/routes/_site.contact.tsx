import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/data/company";

const search = z.object({ subject: z.string().optional() });

export const Route = createFileRoute("/_site/contact")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Contact — Niaga Prestasi" },
      {
        name: "description",
        content:
          "Get in touch with Niaga Prestasi Sdn Bhd for IT services, training programs, or talent solutions in Malaysia.",
      },
      { property: "og:title", content: "Contact Niaga Prestasi" },
      { property: "og:description", content: "Talk to our Malaysia-based team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { subject } = Route.useSearch();
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk"
        description="Ready to start a project, explore a training program, or discuss your IT staffing needs? Reach out to our team today."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        size="sm"
      />

      <section className="section-y bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <Reveal className="lg:col-span-2">
              <div className="space-y-4">
                <ContactCard icon={MapPin} title="Our Office">
                  <div>{company.address.line1}</div>
                  <div>{company.address.line2}</div>
                  <div>{company.address.city}</div>
                </ContactCard>
                <ContactCard icon={Phone} title="Phone">
                  <a href={company.phoneHref} className="text-royal font-medium hover:underline">
                    {company.phone}
                  </a>
                </ContactCard>
                <ContactCard icon={Mail} title="Email">
                  <a href={company.emailHref} className="text-royal font-medium hover:underline">
                    {company.email}
                  </a>
                </ContactCard>
                <ContactCard icon={Clock} title="Business Hours">
                  {company.hours.map((h) => (
                    <div key={h.day}>
                      <span className="font-medium text-ink">{h.day}:</span> {h.time}
                    </div>
                  ))}
                </ContactCard>
                <div className="rounded-xl bg-royal p-6 text-white">
                  <h4 className="font-display font-bold text-lg">{company.name}</h4>
                  <p className="mt-2 text-sm text-white/85">
                    IT services, HRDC-aligned training, and talent support for organizations across
                    Malaysia.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-3" delay={0.1}>
              <div className="mb-4">
                <h2 className="font-display text-2xl font-bold text-ink">Send us a message</h2>
                <div
                  className="mt-2 h-[3px] w-10 rounded-full bg-linear-to-r from-royal to-cyan-accent"
                  aria-hidden="true"
                />
                <p className="mt-2 text-ink-soft">We reply within one business day.</p>
              </div>
              <ContactForm defaultSubject={subject} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-16 lg:pb-20">
        <Container>
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-border bg-navy-deep aspect-[21/9] relative">
              <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm text-center px-6">
                <div>
                  <MapPin className="h-8 w-8 mx-auto text-cyan-accent mb-2" />
                  <div className="font-display text-lg text-white">{company.address.line1}</div>
                  <div>
                    {company.address.line2}, {company.address.city}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-5 flex gap-4 transition-[border-color,box-shadow] duration-[280ms] hover:border-royal/40 hover:shadow-[0_16px_40px_-28px_rgba(23,105,255,0.25)]">
      <div className="h-11 w-11 shrink-0 rounded-lg bg-royal text-white flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="font-display font-bold text-ink">{title}</div>
        <div className="mt-1 text-sm text-ink-soft space-y-0.5">{children}</div>
      </div>
    </div>
  );
}
