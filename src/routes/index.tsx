import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import resumeAsset from "@/assets/Kimaya_Ahire_AResume.pdf.asset.json";
import {
  ArrowUpRight,
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Cpu,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Briefcase,
  Award,
  Star,
  CheckCircle2,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kimaya Ahire — Software Engineer & AI/ML Developer" },
      {
        name: "description",
        content:
          "Final-year CSE student in Hyderabad building software and AI/ML systems — recommendation engines, predictive analytics, agentic AI, and Java applications.",
      },
      { property: "og:title", content: "Kimaya Ahire — SDE & AI/ML Portfolio" },
      {
        property: "og:description",
        content:
          "Projects across ride-matching ML, real-estate analytics, recommender systems, and Java apps. Open to SDE and AI/ML roles.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = {
  Languages: ["Python", "Java", "SQL"],
  "AI / ML": [
    "Machine Learning",
    "Model Training",
    "Feature Engineering",
    "Data Preprocessing",
    "Regression",
    "Classification",
    "Clustering",
    "RAG",
    "Agentic AI",
  ],
  "CS Foundations": ["Data Structures & Algorithms", "DBMS", "OOP", "Computer Networks"],
  "Tools": ["Git", "GitHub", "Google Colab", "Java Swing"],
};


const projects = [
  {
    title: "AI Carpooling Platform",
    tag: "ML · Recommendations · Safety",
    period: "Jul 2025 — Apr 2026",
    blurb:
      "Ride-matching platform that pairs users on route similarity, travel preferences, and safety signals — designed around women, students, and working professionals.",
    bullets: [
      "ML-based matching logic for accuracy across diverse rider profiles",
      "User verification, preference filtering, and trust mechanisms",
      "Python ML pipelines powering ride requests and real-time ops",
    ],
    stack: ["Python", "ML", "Recommendation"],
    link: "https://github.com/Kimayaahire/AI-Carpooling-System",
    accent: "from-[oklch(0.78_0.16_55)] to-[oklch(0.72_0.18_35)]",
  },
  {
    title: "Smart Property Discovery",
    tag: "Regression · Forecasting · Analytics",
    period: "Jul 2024 — Apr 2025",
    blurb:
      "Real-estate analytics platform for price prediction and market trend forecasting, helping users make data-driven investment decisions.",
    bullets: [
      "Regression models with engineered features on property datasets",
      "Interactive comparison surface for properties and markets",
      "Historical pattern analysis driving recommendations",
    ],
    stack: ["Python", "Regression", "EDA"],
    link: "https://github.com/Kimayaahire/VueLibreEstate",
    accent: "from-[oklch(0.86_0.10_75)] to-[oklch(0.78_0.16_55)]",
  },
  {
    title: "Travel Destination Recommender",
    tag: "KNN · Random Forest · Decision Tree",
    period: "Jul — Sep 2023",
    blurb:
      "Recommender comparing KNN, Random Forest, and Decision Tree to surface personalized destinations from budget, interests, and travel style.",
    bullets: [
      "Model bake-off using accuracy and evaluation metrics",
      "Data cleaning, feature extraction, and hyperparameter tuning",
      "Personalized output tailored to user preferences",
    ],
    stack: ["Python", "scikit-learn", "Classification"],
    link: "https://github.com/Kimayaahire/Travelling-Destination-Recommendor",
    accent: "from-[oklch(0.72_0.18_35)] to-[oklch(0.86_0.10_75)]",
  },
  {
    title: "Expense Tracker (Java Swing)",
    tag: "Java · OOP · GUI",
    period: "Apr — Jun 2023",
    blurb:
      "Console + GUI expense management app built with Java Swing, designed with OOP principles for a modular, maintainable architecture.",
    bullets: [
      "Record, categorize, and track financial transactions",
      "Automated summaries and clean object-oriented design",
      "Dual interface: console workflow and Swing UI",
    ],
    stack: ["Java", "Swing", "OOP"],
    accent: "from-[oklch(0.66_0.12_220)] to-[oklch(0.78_0.16_55)]",
  },
];

const experience = [
  {
    role: "Management Trainee Intern",
    org: "Samyak Eco Solutions LLP",
    period: "Dec 2025 — Apr 2026 · On-site",
    points: [
      "Tested internal dashboards and tools — documented bugs, validated UI, maintained test logs",
      "Authored technical process documentation to standardize operations",
      "Client correspondence and cross-functional collaboration",
    ],
  },
  {
    role: "Agentic AI: From Learner to Builder",
    org: "IBM SkillsBuild × CSRBOX Foundation",
    period: "Jul — Aug 2025 · Virtual",
    points: [
      "Agent architectures, decision workflows, and ethical design principles",
      "Prompt engineering and Retrieval-Augmented Generation (RAG)",
      "Built context-aware assistants — HR bots, automated procurement",
    ],
  },
  {
    role: "Mastering Data with Machine Learning",
    org: "IBM SkillsBuild",
    period: "Oct — Nov 2024 · Virtual",
    points: [
      "End-to-end data science pipeline with Python visualization",
      "Supervised + unsupervised methods: regression, classification, clustering",
      "Feature engineering and evaluation metrics on real-world datasets",
    ],
  },
  {
    role: "AI Job Simulation",
    org: "Cognizant (Forage)",
    period: "Jul 2024 · Virtual",
    points: [
      "EDA on retail supply chain data in Python / Colab",
      "Built and evaluated an ML model with a production-ready Python module",
      "Communicated findings through structured reports",
    ],
  },
  {
    role: "Technology Job Simulation",
    org: "Deloitte (Forage)",
    period: "Jul 2025 · Virtual",
    points: [
      "Requirement analysis, software planning, structured documentation",
      "Scenario-based platform engineering and coding tasks",
    ],
  },
];

const certifications = [
  "AI for Everyone — DeepLearning.AI",
  "Python for Everybody — Coursera",
  "Data Science with Python — IBM",
  "SQL & Relational Databases — IBM",
  "Basic Python & Java — HackerRank",
];

function Portfolio() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grain opacity-60" />
        <div className="absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-[oklch(0.78_0.16_55)/0.18] blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[420px] w-[420px] rounded-full bg-[oklch(0.66_0.12_220)/0.12] blur-3xl" />
      </div>

      <Nav />
      <Hero />
      <Marquee />
      <About />
      <WhyMe />
      <Skills />
      <Projects />
      <Experience />
      <EducationAndCerts />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-ember animate-pulse-ring" />
          <span>kimaya.ahire</span>

        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#why" className="hover:text-foreground transition">Why me</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#experience" className="hover:text-foreground transition">Experience</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/Kimaya_Ahire_Resume.pdf"
            download
            className="group inline-flex items-center gap-1.5 rounded-full bg-ember px-3 sm:px-3.5 py-1.5 text-xs font-medium text-primary-foreground glow-ember hover:translate-y-[-1px] transition"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </a>
          <a
            href="#contact"
            className="group hidden sm:inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-ember hover:text-primary-foreground transition"
          >
            Hire me
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}



function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20 md:pt-32 md:pb-32">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-mono text-muted-foreground">
            <Sparkles className="h-3 w-3 text-ember" />
            Available · Graduating 2026 · Hyderabad, India
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,7vw,5.5rem)] font-500 leading-[0.95] tracking-tight text-balance">
            Software Engineer crafting{" "}
            <span className="italic ember-gradient-text">AI-powered solutions</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground text-balance">
            I&apos;m <span className="text-foreground">Kimaya Ahire</span> — a final-year Computer Science student
            developing end-to-end software and AI projects across{" "}
            <span className="text-foreground">software engineering</span> and{" "}
            <span className="text-foreground">AI/ML</span>. From ride-matching recommenders to real-estate forecasting and
            agentic AI workflows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/Kimaya_Ahire_Resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-primary-foreground glow-ember hover:translate-y-[-1px] transition"
            >
              <Download className="h-4 w-4" />
              Download Resume (PDF)
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm text-foreground hover:bg-surface-2 transition"
            >
              See selected work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/Kimayaahire"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm text-foreground hover:bg-surface-2 transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kimaya-ahire-494291292/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm text-foreground hover:bg-surface-2 transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>


        <div className="md:col-span-4 animate-fade-up [animation-delay:120ms]">
          <div className="relative rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur">
            <div className="absolute -top-3 left-6 rounded-full bg-ember px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary-foreground">
              focus
            </div>
            <ul className="space-y-3 text-sm">
              <Focus icon={<Code2 className="h-4 w-4" />} label="Software Engineer" sub="Python · Java · SQL · OOP · DSA" />
              <Focus icon={<Cpu className="h-4 w-4" />} label="AI / ML Engineer" sub="Regression · Classification · RAG · Agents" />
              <Focus icon={<Database className="h-4 w-4" />} label="Data Pipelines" sub="EDA · Feature engineering · Model eval" />
            </ul>
            <div className="hairline my-5" />
            <div className="grid grid-cols-3 gap-4 text-center">
              <Stat n="8.0" l="CGPA" />
              <Stat n="4+" l="Projects" />
              <Stat n="5" l="Programs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Focus({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-md bg-ember/15 text-ember">{icon}</span>
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </li>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl">{n}</div>
      <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{l}</div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Python", "Machine Learning", "Java", "SQL", "RAG", "Agentic AI",
    "Regression", "Classification", "Clustering", "Feature Engineering",
    "DSA", "DBMS", "Recommendation Systems", "EDA",
  ];
  return (
    <div className="border-y border-border/60 bg-surface/30 py-5 ticker-mask overflow-hidden">
      <div className="flex w-max gap-10 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-mono text-sm text-muted-foreground">
            <span className="text-ember mr-2">✦</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28 reveal">
      <div className="mb-10 md:mb-12 grid items-end gap-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">{eyebrow}</div>
        </div>
        <h2 className="md:col-span-9 font-display text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-balance">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}


function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={<>I learn fast, ship often, and care about the <span className="italic ember-gradient-text">why</span> behind every model.</>}
    >
      <div className="grid gap-10 md:grid-cols-12">
        <p className="md:col-span-7 text-lg leading-relaxed text-muted-foreground text-balance">
          Final-year Computer Science undergraduate at KG Reddy College of Engineering and Technology, graduating in 2026.
          I&apos;ve built projects spanning real-estate analytics, travel recommenders, ride-matching platforms, and
          Java-based applications — practicing the full ML pipeline from preprocessing to evaluation. Through internships
          at Samyak Eco Solutions and training programs with IBM, Cognizant, and Deloitte, I&apos;ve picked up agentic AI,
          data science workflows, and professional engineering habits. I&apos;m looking for a role where I can keep
          shipping and keep learning.
        </p>
        <div className="md:col-span-5 grid grid-cols-2 gap-3">
          {[
            { k: "Location", v: "Hyderabad, IN" },
            { k: "Degree", v: "B.Tech CSE" },
            { k: "Class of", v: "2026" },
            { k: "CGPA", v: "8.0 / 10" },
            { k: "Open to", v: "SDE roles" },
            { k: "Also open to", v: "AI/ML roles" },
          ].map((x) => (
            <div key={x.k} className="rounded-lg border border-border bg-surface/50 p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{x.k}</div>
              <div className="mt-1 text-sm">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Toolkit" title={<>The stack I build with.</>}>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="group rounded-2xl border border-border bg-surface/40 p-6 hover:bg-surface/70 transition">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl">{group}</h3>
              <GitBranch className="h-4 w-4 text-muted-foreground group-hover:text-ember transition" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-mono text-foreground/90"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="work"
      eyebrow="03 — Selected work"
      title={<>Projects across <span className="italic ember-gradient-text">ML</span> and software.</>}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const Wrapper: any = p.link ? "a" : "article";
          const wrapperProps = p.link
            ? { href: p.link, target: "_blank", rel: "noopener noreferrer", "aria-label": `${p.title} on GitHub` }
            : {};
          return (
          <Wrapper
            key={p.title}
            {...wrapperProps}
            className="group card-lift relative block overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 sm:p-7 hover:border-ember/50"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div
              aria-hidden
              className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl group-hover:opacity-25 transition`}
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ember">{p.tag}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{p.period}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <ul className="mt-5 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/85">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-ember" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md bg-background/60 px-2 py-1 text-[10px] font-mono text-muted-foreground">
                    {s}
                  </span>
                ))}
                {p.link && (
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-ember/40 px-2 py-1 text-[11px] font-mono text-ember group-hover:bg-ember/10 transition">
                    <Github className="h-3 w-3" />
                    View on GitHub
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                )}
              </div>
            </div>
          </Wrapper>
          );
        })}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title={<>Internships, training, and <span className="italic ember-gradient-text">hands-on</span> programs.</>}
    >
      <ol className="relative space-y-8 md:space-y-10 border-l border-border pl-6 md:pl-10">
        {experience.map((e) => (
          <li key={e.role + e.org} className="relative">
            <span className="absolute -left-[31px] md:-left-[43px] top-2 grid h-5 w-5 place-items-center rounded-full border border-ember/50 bg-background">
              <Briefcase className="h-2.5 w-2.5 text-ember" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl md:text-2xl">{e.role}</h3>
              <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
            </div>
            <div className="mt-0.5 text-sm text-ember">{e.org}</div>
            <ul className="mt-3 space-y-1.5">
              {e.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function EducationAndCerts() {
  return (
    <Section id="education" eyebrow="05 — Credentials" title={<>Education & certifications.</>}>
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-7 space-y-4">
          <EduRow
            title="B.Tech, Computer Science & Engineering"
            org="KG Reddy College of Engineering and Technology"
            meta="2022 – 2026 · CGPA 8.0 / 10"
          />
          <EduRow title="Senior Secondary (XII)" org="Aakash Institute" meta="2022 · 83%" />
          <EduRow title="Secondary (X)" org="International School Shaikpet" meta="2020 · 70%" />
        </div>
        <div className="md:col-span-5 rounded-2xl border border-border bg-surface/40 p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ember">
            <Award className="h-3.5 w-3.5" /> Certifications
          </div>
          <ul className="mt-4 space-y-2.5">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm">
                <Star className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember" />
                {c}
              </li>
            ))}
          </ul>
          <div className="hairline my-5" />
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ember">
            <Sparkles className="h-3.5 w-3.5" /> Beyond code
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            President of the Dance Club — leading planning and execution of large-scale performances. Active in the
            Photography and Sports clubs.
          </p>
        </div>
      </div>
    </Section>
  );
}

function EduRow({ title, org, meta }: { title: string; org: string; meta: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface/40 p-5">
      <span className="mt-1 grid h-9 w-9 place-items-center rounded-lg bg-ember/15 text-ember">
        <GraduationCap className="h-4 w-4" />
      </span>
      <div className="flex-1">
        <div className="font-display text-lg">{title}</div>
        <div className="text-sm text-muted-foreground">{org}</div>
      </div>
      <div className="font-mono text-xs text-muted-foreground whitespace-nowrap">{meta}</div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-ember/30 bg-surface/40 p-10 md:p-16">
        <div aria-hidden className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-ember/20 blur-3xl animate-float-slow" />
        <div className="relative grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">06 — Let&apos;s build</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              Got an <span className="italic ember-gradient-text">SDE</span> or{" "}
              <span className="italic ember-gradient-text">AI/ML</span> role in mind? Let&apos;s talk.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              I&apos;m actively looking for full-time opportunities and meaningful internships. Open to on-site,
              remote &amp; hybrid jobs.
            </p>
          </div>
          <div className="md:col-span-4 space-y-3">
            <ContactRow icon={<Mail className="h-4 w-4" />} label="ahirekim.2444@gmail.com" href="mailto:ahirekim.2444@gmail.com" />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="+91 80748 12795" href="tel:+918074812795" />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Hyderabad, India" />
            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="kimaya-ahire" href="https://www.linkedin.com/in/kimaya-ahire-494291292/" />
            <ContactRow icon={<Github className="h-4 w-4" />} label="Kimayaahire" href="https://github.com/Kimayaahire" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const Inner = (
    <>
      <span className="grid h-8 w-8 place-items-center rounded-md bg-ember/15 text-ember">{icon}</span>
      <span className="text-sm">{label}</span>
      {href && <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />}
    </>
  );
  const cls =
    "flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 hover:border-ember/50 hover:bg-surface/60 transition";
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
      {Inner}
    </a>
  ) : (
    <div className={cls}>{Inner}</div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 md:flex-row md:items-center">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kimaya Ahire · Designed & built with care.
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          Hyderabad · IN — open to opportunities worldwide
        </div>
      </div>
    </footer>
  );
}

const whyMePoints = [
  { t: "Strong Python foundation", d: "Comfortable across scripting, data, and ML stacks." },
  { t: "AI & ML project experience", d: "Recommenders, regression, classification, RAG, agentic AI." },
  { t: "Software engineering mindset", d: "OOP, DSA, DBMS, clean modular design." },
  { t: "Internship experience", d: "Shipped, tested and documented production tools." },
  { t: "Quick learner", d: "Five training programs across IBM, Cognizant, Deloitte." },
  { t: "Open to SDE & AI/ML roles", d: "Flexible across product, platform, and ML teams." },
];

function WhyMe() {
  return (
    <Section
      id="why"
      eyebrow="02 — Why me"
      title={<>What I bring to a <span className="italic ember-gradient-text">team</span>.</>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyMePoints.map((x) => (
          <div
            key={x.t}
            className="card-lift rounded-2xl border border-border bg-surface/40 p-5 hover:border-ember/50"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-ember/15 text-ember">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <div>
                <div className="font-medium">{x.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-ember text-primary-foreground glow-ember transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

