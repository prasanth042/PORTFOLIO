import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail, Phone, MapPin, Github, Linkedin, Download, ArrowRight,
  Code2, Database, Cpu, GraduationCap, ExternalLink, Menu, X,
} from "lucide-react";
import heroPortrait from "@/assets/prasanth-portrait.jpg.asset.json";
import plagiarismImg from "@/assets/plagiarism.jpg";
import meditrackImg from "@/assets/meditrack.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prasanth C — Aspiring Software Engineer" },
      { name: "description", content: "Portfolio of Prasanth C, final-year CSE student at Adhi College of Engineering. Java, C, SQL developer." },
      { property: "og:title", content: "Prasanth C — Aspiring Software Engineer" },
      { property: "og:description", content: "Portfolio of Prasanth C, final-year CSE student. Java, C, SQL developer." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "activities", label: "Activities" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  { name: "Java", level: 85, icon: Code2 },
  { name: "C Programming", level: 80, icon: Cpu },
  { name: "SQL", level: 78, icon: Database },
  { name: "OOP Concepts", level: 82, icon: Code2 },
  { name: "DBMS", level: 75, icon: Database },
];

const ACTIVITIES = [
  {
    title: "IoT Workshop — Smart Devices",
    org: "Hands-on Training Program",
    desc: "Built sensor-based prototypes using Arduino and ESP32, exploring real-time data monitoring and cloud integration fundamentals.",
    icon: Cpu,
  },
  {
    title: "Technical Webinar Series",
    org: "Emerging Technologies",
    desc: "Attended sessions on AI/ML fundamentals, cloud computing trends, and modern software development practices.",
    icon: Code2,
  },
  {
    title: "Career Readiness Webinar",
    org: "Industry Preparation",
    desc: "Gained insights on resume building, aptitude preparation, and interview strategies for campus placements.",
    icon: GraduationCap,
  },
  {
    title: "Database & SQL Workshop",
    org: "Data Management",
    desc: "Practiced advanced querying, normalization, and database design concepts through guided exercises.",
    icon: Database,
  },
];
  {
    title: "Plagiarism Detection System",
    img: plagiarismImg,
    desc: "A document similarity checker that compares text content to flag duplicated work and protect academic integrity.",
    tech: ["Java", "SQL", "Text Analysis"],
  },
  {
    title: "MediTrack",
    img: meditrackImg,
    desc: "A healthcare management application for patient records, appointment scheduling, and medicine tracking.",
    tech: ["Java", "SQL", "DBMS"],
  },
];

function Portfolio() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-6 mt-4">
          <nav className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
            <button onClick={() => go("home")} className="font-display font-bold text-lg">
              <span className="text-gradient">Prasanth</span>.C
            </button>
            <div className="hidden md:flex items-center gap-1">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    active === n.id ? "text-foreground bg-white/10" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
          {open && (
            <div className="glass md:hidden mt-2 rounded-2xl p-3 flex flex-col gap-1 animate-fade-up">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => go(n.id)} className="text-left px-3 py-2 rounded-lg hover:bg-white/10">
                  {n.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs mb-6">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">Prasanth C</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Aspiring Software Engineer · Java Developer · Problem Solver
            </p>
            <p className="mt-3 text-sm text-muted-foreground flex items-center gap-2">
              <MapPin size={14} /> Thiruvannamalai, Tamil Nadu
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="btn-gradient px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2">
                <Download size={18} /> Download Resume
              </a>
              <button onClick={() => go("contact")} className="btn-outline px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2">
                Contact Me <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-primary/40 to-accent/30 rounded-full" />
            <div className="relative glass rounded-3xl overflow-hidden aspect-square max-w-md mx-auto">
              <img src={heroPortrait.url} alt="Prasanth C" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="01 — About" title="A bit about me" />
          <div className="grid md:grid-cols-5 gap-8 mt-12">
            <div className="md:col-span-3 glass rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate <span className="text-foreground font-medium">final-year Computer Science and Engineering</span> student at Adhi College of Engineering and Technology, Kanchipuram. I love building practical software, learning modern technologies and solving problems with clean, dependable code.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My strongest areas are Java, C and SQL. I'm actively preparing for software engineering roles and looking forward to contributing to real-world products at top IT companies.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-4">
              <Stat label="Degree" value="B.E. CSE" />
              <Stat label="Year" value="Final Year" />
              <Stat label="Experience" value="Fresher" />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-pad">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="02 — Skills" title="Tools I work with" />
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {SKILLS.map((s, i) => (
              <div key={s.name} className="glass rounded-2xl p-5 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary/15 text-primary grid place-items-center">
                      <s.icon size={20} />
                    </div>
                    <span className="font-medium">{s.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full animate-grow" style={{ width: `${s.level}%`, background: "var(--gradient-hero)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-pad">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="03 — Projects" title="Things I've built" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {PROJECTS.map((p) => (
              <article key={p.title} className="glass rounded-2xl overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href="https://github.com/prasanth042" target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                      <Github size={16} /> Code
                    </a>
                    <a href="#" className="btn-outline px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section-pad">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="04 — Education" title="Academic journey" />
          <div className="mt-12 relative pl-8 border-l-2 border-primary/30">
            <TimelineItem
              title="B.E. Computer Science and Engineering"
              org="Adhi College of Engineering and Technology, Kanchipuram"
              period="Final Year · Currently Pursuing"
              desc="Core focus on data structures, DBMS, operating systems and software engineering."
            />
            <TimelineItem
              title="Higher Secondary Education"
              org="Thiruvannamalai, Tamil Nadu"
              period="Completed"
              desc="Foundation in mathematics, physics and computer science."
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="05 — Contact" title="Let's work together" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="glass rounded-2xl p-8 space-y-5">
              <ContactRow icon={Mail} label="Email" value="prasanth9626794137@gmail.com" href="mailto:prasanth9626794137@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="+91 63829 27813" href="tel:+916382927813" />
              <ContactRow icon={MapPin} label="Location" value="Thiruvannamalai, Tamil Nadu" />
              <div className="flex gap-3 pt-2">
                <a href="#" aria-label="LinkedIn" className="btn-outline size-11 rounded-xl grid place-items-center"><Linkedin size={18} /></a>
                <a href="https://github.com/prasanth042" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-outline size-11 rounded-xl grid place-items-center"><Github size={18} /></a>
                <a href="mailto:prasanth9626794137@gmail.com" aria-label="Email" className="btn-outline size-11 rounded-xl grid place-items-center"><Mail size={18} /></a>
              </div>
            </div>
            <form
              className="glass rounded-2xl p-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                window.location.href = `mailto:prasanth9626794137@gmail.com?subject=Portfolio contact from ${fd.get("name")}&body=${fd.get("message")}%0A%0AFrom: ${fd.get("email")}`;
              }}
            >
              <Field name="name" label="Your name" placeholder="John Doe" />
              <Field name="email" label="Email" type="email" placeholder="john@example.com" />
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea name="message" required rows={4} placeholder="Tell me about your opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors resize-none" />
              </div>
              <button type="submit" className="btn-gradient w-full py-3 rounded-xl font-medium inline-flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 mt-12">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Prasanth C. Crafted with care.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground"><Linkedin size={16} /></a>
            <a href="https://github.com/prasanth042" target="_blank" rel="noopener noreferrer" className="hover:text-foreground"><Github size={16} /></a>
            <a href="mailto:prasanth9626794137@gmail.com" className="hover:text-foreground"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="animate-fade-up">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{eyebrow}</p>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full" style={{ background: "var(--gradient-hero)" }} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-display font-semibold text-gradient">{value}</p>
    </div>
  );
}

function TimelineItem({ title, org, period, desc }: { title: string; org: string; period: string; desc: string }) {
  return (
    <div className="relative mb-10 last:mb-0">
      <div className="absolute -left-[42px] top-1 size-4 rounded-full border-2 border-primary bg-background">
        <div className="absolute inset-0.5 rounded-full" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <GraduationCap size={16} /> {period}
        </div>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{org}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} className="flex items-center gap-4 group">
      <div className="size-11 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:bg-primary/25 transition-colors">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-foreground font-medium">{value}</p>
      </div>
    </Wrap>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm text-muted-foreground mb-1.5 block">{label}</label>
      <input name={name} type={type} required placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/60 transition-colors" />
    </div>
  );
}
