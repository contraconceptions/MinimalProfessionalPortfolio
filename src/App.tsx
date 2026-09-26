import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, useInView } from "motion/react";

const assetPathPrefix = "/assets";

const imgArrowRight = `${assetPathPrefix}/6ecb2.svg`;
const imgArrowRight1 = `${assetPathPrefix}/a93f9.svg`;
const imgArrowRight2 = `${assetPathPrefix}/e102e.svg`;
const imgEllipse = `${assetPathPrefix}/49b96.svg`;
const imgEllipse1 = `${assetPathPrefix}/e9afa.svg`;

// Section heading marker
function SectionMarker({ label }: { label: string }) {
  return (
    <div className="flex gap-[8px] items-center">
      <div className="bg-[#00f0ff] rounded-[2px] shadow-[0px_0px_8px_0px_#00f0ff] shrink-0 size-[12px]" />
      <p className="font-['Outfit:Bold'] font-bold text-[20px] text-white uppercase leading-none tracking-wide">
        {label}
      </p>
    </div>
  );
}

// Hairline divider
function Divider() {
  return <div className="h-px w-full bg-[rgba(255,255,255,0.08)]" />;
}

// Fade-in wrapper for scroll reveals
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- NAV ---
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,15,0.85)] backdrop-blur-md"
          : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex gap-[12px] items-center">
          <span className="font-['Outfit:ExtraBold'] font-extrabold text-[18px] text-white leading-none">
            DEV
          </span>
          <div className="bg-[#00f0ff] h-px w-[24px]" />
          <span className="font-['Geist:Bold'] font-bold text-[12px] text-[#606070] uppercase tracking-widest">
            PORTFOLIO
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-['Geist:Regular'] font-normal text-[14px] text-[#a0a0b0] hover:text-[#00f0ff] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.5)] text-[#00f0ff] font-['Geist:Bold'] font-bold text-[13px] uppercase px-[16px] py-[8px] rounded-[100px] hover:bg-[rgba(0,240,255,0.1)] hover:shadow-[0px_0px_12px_0px_rgba(0,240,255,0.3)] transition-all duration-200"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

// --- HERO ---
function Hero() {
  const [typed, setTyped] = useState("");
  const full = "full-stack engineer & systems architect";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= full.length) {
        setTyped(full.slice(0, i));
        i++;
      } else {
        clearInterval(t);
      }
    }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-20 max-w-[1200px] mx-auto">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[rgba(0,240,255,0.04)] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[rgba(255,0,229,0.04)] blur-[120px]" />

      <FadeIn delay={0.1}>
        <div className="flex items-center gap-[10px] mb-8">
          <div className="relative size-[8px]">
            <div className="absolute inset-[-75%]">
              <img alt="" className="block size-full" src={imgEllipse} />
            </div>
            <div className="absolute inset-0 rounded-full bg-[#39ff14] pulse-glow" />
          </div>
          <p className="font-['Geist:Bold'] font-bold text-[12px] text-[#39ff14] uppercase tracking-widest">
            Available for work
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mb-4">
          <p className="font-['Outfit:ExtraBold'] font-extrabold text-[14px] text-[#00f0ff] uppercase tracking-[0.2em] leading-none mb-4">
            HELLO, I&rsquo;M
          </p>
          <h1 className="font-['Outfit:ExtraBold'] font-extrabold text-[clamp(48px,8vw,96px)] text-white leading-[0.95] tracking-tight">
            Alex
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff00e5]">
              Mercer.
            </span>
          </h1>
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="flex items-center gap-3 mb-8 h-8">
          <span className="font-['JetBrains Mono:Medium'] font-medium text-[16px] md:text-[18px] text-[#a0a0b0]">
            {typed}
          </span>
          <span className="inline-block w-[2px] h-[20px] bg-[#00f0ff] shadow-[0px_0px_6px_0px_#00f0ff] animate-pulse" />
        </div>
      </FadeIn>

      <FadeIn delay={0.45}>
        <p className="font-['Geist:Regular'] font-normal text-[16px] text-[#a0a0b0] leading-[1.7] max-w-[560px] mb-12">
          I build high-performance systems and elegant user experiences. Six years
          shipping production code across distributed infrastructure, developer
          tooling, and data-intensive web applications.
        </p>
      </FadeIn>

      <FadeIn delay={0.55}>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-[#ff00e5] text-white font-['Geist:Bold'] font-bold text-[14px] uppercase px-[28px] py-[14px] rounded-[100px] drop-shadow-[0px_4px_20px_#ff00e5] hover:drop-shadow-[0px_4px_30px_#ff00e5] hover:scale-[1.02] transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="bg-[rgba(0,240,255,0.05)] border border-[rgba(0,240,255,0.5)] text-[#00f0ff] font-['Geist:Bold'] font-bold text-[14px] uppercase px-[28px] py-[14px] rounded-[100px] shadow-[0px_0px_8px_0px_#00f0ff] hover:bg-[rgba(0,240,255,0.1)] hover:shadow-[0px_0px_20px_0px_#00f0ff] transition-all duration-200"
          >
            About Me
          </a>
        </div>
      </FadeIn>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-40">
        <p className="font-['JetBrains Mono:Medium'] font-medium text-[10px] text-[#606070] uppercase tracking-widest">
          scroll
        </p>
        <div className="w-px h-[40px] bg-gradient-to-b from-[#606070] to-transparent" />
      </div>
    </section>
  );
}

// --- ABOUT ---
const techStack = [
  { label: "TypeScript", color: "#00f0ff" },
  { label: "Rust", color: "#ff00e5" },
  { label: "Go", color: "#39ff14" },
  { label: "React", color: "#00f0ff" },
  { label: "Node.js", color: "#39ff14" },
  { label: "PostgreSQL", color: "#ffb800" },
  { label: "Redis", color: "#ff00e5" },
  { label: "Kubernetes", color: "#00f0ff" },
  { label: "AWS", color: "#ffb800" },
  { label: "GraphQL", color: "#ff00e5" },
];

function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto">
      <FadeIn>
        <div className="flex flex-col gap-4 mb-12">
          <SectionMarker label="01 / About" />
          <Divider />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-6">
            <h2 className="font-['Outfit:Bold'] font-bold text-[36px] text-white leading-[1.15]">
              Building systems that
              <br />
              <span className="text-[#00f0ff]">scale under pressure.</span>
            </h2>
            <p className="font-['Geist:Regular'] font-normal text-[15px] text-[#a0a0b0] leading-[1.75]">
              Based in San Francisco. I specialize in designing and implementing
              backend infrastructure, developer-facing APIs, and real-time data
              pipelines. I care deeply about performance characteristics, code
              clarity, and the interface between systems thinking and product
              ergonomics.
            </p>
            <p className="font-['Geist:Regular'] font-normal text-[15px] text-[#a0a0b0] leading-[1.75]">
              Previously at Stripe (infrastructure team), Vercel (DX), and two
              early-stage startups where I wore every hat. I open-source
              aggressively and write about distributed systems at my blog.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "6+", label: "Years exp." },
                { value: "40+", label: "Projects shipped" },
                { value: "12k", label: "GitHub stars" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#111118] border border-[rgba(255,255,255,0.12)] rounded-[16px] p-5 flex flex-col gap-1"
                >
                  <span className="font-['Outfit:Bold'] font-bold text-[28px] text-[#00f0ff] leading-none">
                    {value}
                  </span>
                  <span className="font-['Geist:Regular'] font-normal text-[12px] text-[#606070] uppercase tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col gap-8">
            <div className="bg-[#111118] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-8">
              <p className="font-['Outfit:Bold'] font-bold text-[16px] text-white uppercase mb-6">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map(({ label, color }) => (
                  <div
                    key={label}
                    className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[14px] py-[8px] flex items-center gap-2 hover:border-[rgba(0,240,255,0.3)] transition-colors duration-200"
                  >
                    <div
                      className="w-[6px] h-[6px] rounded-full shrink-0"
                      style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
                    />
                    <span
                      className="font-['JetBrains Mono:Medium'] font-medium text-[12px]"
                      style={{ color }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current focus */}
            <div className="border border-[rgba(0,240,255,0.3)] rounded-[20px] p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.04)] to-transparent pointer-events-none" />
              <p className="font-['Geist:Bold'] font-bold text-[12px] text-[#00f0ff] uppercase tracking-widest mb-3">
                Currently focused on
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "WebAssembly runtime optimization",
                  "Edge-native distributed databases",
                  "AI-assisted developer tooling",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-[4px] h-[4px] rounded-full bg-[#00f0ff] shrink-0" />
                    <span className="font-['Geist:Regular'] font-normal text-[14px] text-[#a0a0b0]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- PROJECTS ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  accentDim: string;
  gradient: [string, string];
  link: string;
  cta: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: "NeuralSync API",
    description:
      "High-throughput ML inference gateway supporting 50k+ req/s with sub-10ms p99 latency. Features dynamic batching, model sharding, and live A/B traffic splitting across model versions.",
    tags: ["Rust", "gRPC", "Kubernetes", "ML Serving"],
    accent: "#ff00e5",
    accentDim: "rgba(255,0,229,0.12)",
    gradient: ["#0f0b13", "#170b1d"],
    link: "#",
    cta: "View architecture",
    icon: imgArrowRight,
  },
  {
    title: "VaultGuard",
    description:
      "Zero-trust secrets management platform with hardware-backed key derivation, audit log streaming, and policy-as-code enforcement. OSS core with 2.8k GitHub stars.",
    tags: ["Go", "PostgreSQL", "Vault", "OIDC"],
    accent: "#00f0ff",
    accentDim: "rgba(0,240,255,0.12)",
    gradient: ["#0b0f13", "#0b1d1d"],
    link: "#",
    cta: "Open GitHub",
    icon: imgArrowRight1,
  },
  {
    title: "FlowState CLI",
    description:
      "Developer productivity tool that instruments your local build/test loop, surfaces bottlenecks, and auto-suggests caching strategies. Adopted by 400+ engineering teams.",
    tags: ["TypeScript", "Node.js", "SQLite", "OpenTelemetry"],
    accent: "#39ff14",
    accentDim: "rgba(57,255,20,0.12)",
    gradient: ["#0b1d0f", "#0b0f13"],
    link: "#",
    cta: "Read case study",
    icon: imgArrowRight2,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { title, description, tags, accent, accentDim, gradient, link, cta, icon } =
    project;
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.12}>
      <a
        href={link}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block relative rounded-[38px] overflow-hidden border transition-all duration-300 h-full"
        style={{
          borderColor: hovered ? accent : `${accent}80`,
        }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[38px]"
          style={{
            background: `linear-gradient(to bottom, ${gradient[0]}, ${gradient[1]})`,
          }}
        />

        {/* Bottom glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[38px] transition-opacity duration-300"
          style={{
            boxShadow: `inset 0px -34px 26.7px -10px ${accent}80, inset 0px -30px 46.8px -33px ${accent}`,
            opacity: hovered ? 1 : 0.7,
          }}
        />

        <div className="relative flex flex-col gap-8 px-10 py-14">
          {/* Icon badge */}
          <div
            className="flex items-center justify-center rounded-[20px] size-[48px] shrink-0"
            style={{ backgroundColor: accentDim }}
          >
            <div
              className="w-[20px] h-[20px] rounded-full"
              style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Outfit:Medium'] font-medium text-[28px] md:text-[32px] text-white leading-tight">
              {title}
            </h3>
            <p className="font-['Geist:Regular'] font-normal text-[15px] text-[#a0a0b0] leading-[1.65]">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-['JetBrains Mono:Medium'] font-medium text-[11px] uppercase px-[10px] py-[5px] rounded-[6px]"
                style={{
                  color: accent,
                  backgroundColor: accentDim,
                  border: `1px solid ${accent}40`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 pt-2">
            <span
              className="font-['Geist:Medium'] font-medium text-[15px]"
              style={{ color: accent }}
            >
              {cta}
            </span>
            <img alt="" className="size-[16px]" src={icon} />
          </div>
        </div>
      </a>
    </FadeIn>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto">
      <FadeIn>
        <div className="flex flex-col gap-4 mb-12">
          <SectionMarker label="02 / Projects" />
          <p className="font-['Geist:Regular'] font-normal text-[14px] text-[#a0a0b0]">
            Selected work — production systems and open-source tools.
          </p>
          <Divider />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Additional mini projects row */}
      <FadeIn delay={0.3}>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "edge-kv",
              desc: "In-memory KV store with LRU eviction and TTL, implemented in Rust",
              stars: "980",
              lang: "Rust",
              color: "#ff00e5",
            },
            {
              title: "pqtest",
              desc: "Property-based testing framework for TypeScript with shrinking support",
              stars: "1.2k",
              lang: "TypeScript",
              color: "#00f0ff",
            },
            {
              title: "grpc-trace",
              desc: "Automatic distributed tracing injection for gRPC in Go",
              stars: "640",
              lang: "Go",
              color: "#39ff14",
            },
            {
              title: "sql-migrate-rs",
              desc: "Zero-downtime schema migration library with rollback guarantees",
              stars: "420",
              lang: "Rust",
              color: "#ff00e5",
            },
          ].map(({ title, desc, stars, lang, color }) => (
            <div
              key={title}
              className="bg-[#111118] border border-[rgba(255,255,255,0.12)] rounded-[16px] p-6 flex items-start gap-4 hover:border-[rgba(0,240,255,0.2)] transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex-1 min-w-0">
                <p className="font-['Geist:Bold'] font-bold text-[15px] text-white mb-1 group-hover:text-[#00f0ff] transition-colors">
                  {title}
                </p>
                <p className="font-['Geist:Regular'] font-normal text-[13px] text-[#606070] leading-[1.5] mb-3">
                  {desc}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className="font-['JetBrains Mono:Medium'] font-medium text-[11px]"
                    style={{ color }}
                  >
                    {lang}
                  </span>
                  <span className="font-['Geist:Regular'] font-normal text-[11px] text-[#606070]">
                    ★ {stars}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

// --- CONTACT ---
type FormState = "idle" | "sending" | "sent" | "error";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  }

  const inputBase =
    "w-full bg-[#1a1a24] font-['Geist:Regular'] font-normal text-[14px] text-white placeholder:text-[#606070] rounded-[12px] px-[16px] py-[14px] outline-none transition-all duration-200";
  const inputIdle = "border border-[rgba(255,255,255,0.1)]";
  const inputFocused =
    "border border-[rgba(0,240,255,0.5)] shadow-[inset_0px_0px_12px_0px_rgba(0,240,255,0.1)]";

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-[1200px] mx-auto">
      <FadeIn>
        <div className="flex flex-col gap-4 mb-12">
          <SectionMarker label="03 / Contact" />
          <p className="font-['Geist:Regular'] font-normal text-[14px] text-[#a0a0b0]">
            Open to senior engineering roles, consulting, and interesting
            collaborations.
          </p>
          <Divider />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: info */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-['Outfit:Bold'] font-bold text-[36px] text-white leading-[1.15] mb-4">
                Let&rsquo;s build something
                <br />
                <span className="text-[#00f0ff]">remarkable.</span>
              </h2>
              <p className="font-['Geist:Regular'] font-normal text-[15px] text-[#a0a0b0] leading-[1.75]">
                Whether you&rsquo;re hiring, have a challenging technical problem, or
                want to collaborate on open-source — I&rsquo;d love to hear from you.
                Response within 24&nbsp;hours guaranteed.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-4">
              {[
                { label: "EMAIL", value: "alex@amercer.dev", color: "#00f0ff" },
                { label: "GITHUB", value: "github.com/amercer", color: "#ff00e5" },
                { label: "LINKEDIN", value: "linkedin.com/in/alexmercer", color: "#39ff14" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <span
                    className="font-['JetBrains Mono:Medium'] font-medium text-[11px] w-[80px] shrink-0"
                    style={{ color }}
                  >
                    {label}
                  </span>
                  <span className="font-['Geist:Regular'] font-normal text-[14px] text-[#a0a0b0]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-3 bg-[rgba(57,255,20,0.07)] border border-[rgba(57,255,20,0.3)] rounded-[8px] px-[16px] py-[10px]">
              <div className="relative size-[8px]">
                <div className="absolute inset-[-100%]">
                  <img alt="" className="block size-full" src={imgEllipse1} />
                </div>
              </div>
              <span className="font-['Geist:Bold'] font-bold text-[13px] text-[#39ff14] uppercase tracking-wide">
                OPEN TO OPPORTUNITIES
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Right: form */}
        <FadeIn delay={0.2}>
          <div className="bg-[#111118] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[320px] gap-4 text-center">
                <div className="size-[56px] rounded-full bg-[rgba(57,255,20,0.12)] flex items-center justify-center">
                  <div className="size-[20px] rounded-full bg-[#39ff14] shadow-[0_0_20px_#39ff14]" />
                </div>
                <p className="font-['Outfit:Bold'] font-bold text-[20px] text-white">
                  Message sent.
                </p>
                <p className="font-['Geist:Regular'] font-normal text-[14px] text-[#a0a0b0]">
                  I&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p className="font-['Outfit:Bold'] font-bold text-[16px] text-white uppercase mb-2">
                  Send a Message
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Geist:Bold'] font-bold text-[12px] text-[#a0a0b0] uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${focused === "name" ? inputFocused : inputIdle}`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Geist:Bold'] font-bold text-[12px] text-[#a0a0b0] uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} ${focused === "email" ? inputFocused : inputIdle}`}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Geist:Bold'] font-bold text-[12px] text-[#a0a0b0] uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} resize-none ${focused === "message" ? inputFocused : inputIdle}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-[#ff00e5] text-white font-['Geist:Bold'] font-bold text-[14px] uppercase px-[24px] py-[14px] rounded-[100px] drop-shadow-[0px_4px_12px_#ff00e5] hover:drop-shadow-[0px_4px_24px_#ff00e5] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-2"
                >
                  {status === "sending" ? "Transmitting..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-10 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-['Outfit:ExtraBold'] font-extrabold text-[14px] text-white">
            DEV
          </span>
          <div className="bg-[#00f0ff] h-px w-[16px]" />
          <span className="font-['JetBrains Mono:Medium'] font-medium text-[11px] text-[#606070] uppercase tracking-widest">
            PORTFOLIO
          </span>
        </div>
        <p className="font-['Geist:Regular'] font-normal text-[12px] text-[#606070]">
          © 2026 Alex Mercer — Built with React + Vite
        </p>
        <p className="font-['JetBrains Mono:Medium'] font-medium text-[11px] text-[#00f0ff] uppercase tracking-widest">
          SYSTEM ONLINE
        </p>
      </div>
    </footer>
  );
}

// --- APP ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
