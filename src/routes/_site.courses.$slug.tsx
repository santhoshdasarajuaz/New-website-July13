import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Layers, Monitor, Users, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTAButton } from "@/components/ui/cta-button";
import { CTASection } from "@/components/sections/CTASection";
import { getCourse } from "@/data/courses";

export const Route = createFileRoute("/_site/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    if (!c) return {};
    return {
      meta: [
        { title: `${c.title} — Course — Niaga Prestasi` },
        { name: "description", content: c.tagline },
        { property: "og:title", content: `${c.title} — Niaga Prestasi` },
        { property: "og:description", content: c.tagline },
        { property: "og:url", content: `/courses/${c.slug}` },
      ],
      links: [{ rel: "canonical", href: `/courses/${c.slug}` }],
    };
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData() as { course: import("@/data/courses").Course };
  return (
    <>
      <PageHero
        eyebrow={
          course.category === "htd"
            ? "HTD Model Course"
            : course.category === "upskill"
              ? "Upskill Course"
              : "Course Collection"
        }
        title={course.title}
        description={course.tagline}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: course.title },
        ]}
        actions={
          <>
            <CTAButton to="/contact" search={{ subject: course.title }} size="lg">
              Enroll Now
            </CTAButton>
            <CTAButton to="/courses" size="lg" variant="outline-white" withArrow={false}>
              <ArrowLeft className="h-4 w-4" /> Back to Courses
            </CTAButton>
          </>
        }
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-royal">
                  Overview
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink">About this course</h2>
                <div
                  className="mt-2 h-[3px] w-12 rounded-full bg-linear-to-r from-royal to-cyan-accent"
                  aria-hidden="true"
                />
                <p className="mt-5 text-lg text-ink-soft leading-relaxed">{course.overview}</p>
              </Reveal>

              <Reveal>
                <h3 className="mt-12 font-display text-2xl font-bold text-ink">Topics covered</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <h3 className="mt-12 font-display text-2xl font-bold text-ink">Prerequisites</h3>
                <ul className="mt-5 space-y-2">
                  {course.prerequisites.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-ink-soft">
                      <CheckCircle2 className="h-4 w-4 text-royal mt-1 shrink-0" /> <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <h3 className="mt-12 font-display text-2xl font-bold text-ink">
                  Learning outcomes
                </h3>
                <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 rounded-lg border border-border bg-surface p-4 text-sm text-ink"
                    >
                      <CheckCircle2 className="h-5 w-5 text-royal shrink-0 mt-0.5" />{" "}
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal>
                <h3 className="mt-12 font-display text-2xl font-bold text-ink">
                  Who should attend
                </h3>
                <ul className="mt-5 space-y-2">
                  {course.audience.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-ink-soft">
                      <Users className="h-4 w-4 text-royal mt-1 shrink-0" /> <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <Reveal>
                  <div className="rounded-xl border border-border bg-surface p-6">
                    <h4 className="font-display text-lg font-bold text-ink">Course details</h4>
                    <ul className="mt-4 space-y-3 text-sm">
                      <li className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-royal mt-0.5" />
                        <div>
                          <div className="font-semibold text-ink">Duration</div>
                          <div className="text-ink-soft">{course.duration}</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Layers className="h-4 w-4 text-royal mt-0.5" />
                        <div>
                          <div className="font-semibold text-ink">Modules</div>
                          <div className="text-ink-soft">{course.modules} modules</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Monitor className="h-4 w-4 text-royal mt-0.5" />
                        <div>
                          <div className="font-semibold text-ink">Format</div>
                          <div className="text-ink-soft">{course.format}</div>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6 space-y-2">
                      <CTAButton
                        to="/contact"
                        search={{ subject: course.title }}
                        className="w-full justify-center"
                      >
                        Enroll Now
                      </CTAButton>
                      <Link
                        to="/courses"
                        className="block text-center text-sm text-royal font-semibold py-2 hover:underline"
                      >
                        Back to Courses
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection primaryLabel="Enquire about this course" />
    </>
  );
}
