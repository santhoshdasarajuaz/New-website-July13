import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Layers } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CTASection } from "@/components/sections/CTASection";
import { htdCourses, upskillCourses } from "@/data/courses";

export const Route = createFileRoute("/_site/courses/")({
  head: () => ({
    meta: [
      { title: "Our Courses — Niaga Prestasi" },
      { name: "description", content: "HTD Model Courses and Upskill Training programs — hands-on, industry-relevant IT courses." },
      { property: "og:title", content: "Courses — Niaga Prestasi" },
      { property: "og:description", content: "HTD and Upskill IT courses across AI, data, cloud and more." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesIndex,
});

const partners = ["AWS", "Cisco", "CompTIA", "Databricks", "EC-Council", "Google Cloud", "ISACA", "Microsoft", "Oracle", "PMI", "Snowflake", "Splunk"];

function CoursesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Professional courses"
        title={<>Our <span className="text-gradient-cyan">Course Offerings</span></>}
        description="Choose from our comprehensive catalog of HTD Model Courses and Upskill Training Programs — each designed with industry partners and tailored for career advancement."
        crumbs={[{ label: "Home", to: "/" }, { label: "Courses" }]}
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CourseColumn
              tag="HTD"
              tagColor="bg-royal"
              title="HTD Model Courses"
              collectionSlug="htd-model-courses"
              description="Hire-Train-Deploy model courses designed for rapid skill acquisition and immediate deployment. Each course is structured with intensive modules covering cutting-edge technologies."
              courses={htdCourses()}
            />
            <CourseColumn
              tag="UP"
              tagColor="bg-cyan-accent text-navy-deep"
              title="Upskill Training Courses"
              collectionSlug="upskill-training"
              description="Comprehensive upskilling programs for professionals seeking to advance their careers. Flexible scheduling with practical, hands-on learning from industry experts."
              courses={upskillCourses()}
            />
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Certifications" title="Industry Partners & Certifications" />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {partners.map((p) => (
              <div key={p} className="rounded-lg border border-border bg-white px-4 py-4 text-center text-sm font-medium text-ink hover:border-royal hover:text-royal transition-colors">
                {p}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

function CourseColumn({
  tag, tagColor, title, collectionSlug, description, courses,
}: {
  tag: string; tagColor: string; title: string; collectionSlug: string; description: string;
  courses: Array<{ slug: string; title: string; duration: string; modules: number }>;
}) {
  return (
    <Reveal>
      <div>
        <div className="flex items-center gap-3">
          <span className={`h-10 w-10 rounded-md text-white font-display font-bold flex items-center justify-center ${tagColor}`}>{tag}</span>
          <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
        </div>
        <p className="mt-3 text-ink-soft">{description}</p>
        <div className="mt-6 space-y-3">
          {courses.map((c) => (
            <Link
              key={c.slug}
              to="/courses/$slug"
              params={{ slug: c.slug }}
              className="group flex items-center justify-between rounded-lg border border-border bg-white p-4 hover:border-royal hover:shadow-sm transition-all"
            >
              <div>
                <div className="font-semibold text-ink group-hover:text-royal transition-colors">{c.title}</div>
                <div className="mt-1 text-xs text-ink-soft flex items-center gap-3">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                  <span className="inline-flex items-center gap-1"><Layers className="h-3 w-3" /> {c.modules} modules</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-ink-soft group-hover:text-royal group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <Link
            to="/courses/$slug"
            params={{ slug: collectionSlug }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-royal text-royal font-semibold py-3 hover:bg-royal hover:text-white transition-colors"
          >
            View all {tag === "HTD" ? "HTD" : "Upskill"} courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
