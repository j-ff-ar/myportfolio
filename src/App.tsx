import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Uber Clone",
    category: "MERN stack · Full-stack development",
    description:
      "Developed a ride-booking application using the MERN stack, enabling users to book rides and drivers to manage ride requests.",
    skills: ["MongoDB", "Express", "React", "Node.js", "JWT", "Socket.IO"],
    repo: "https://github.com/j-ff-ar/mernstack-uber-clone",
    year: "2026",
    image: "/uber-clone-project.png",
    alt: "Ride-booking payment illustration with a car and mobile app",
    tone: "bg-[#3458f5]",
  },
  {
    number: "02",
    title: "Testing Automation Agent",
    category: "AI-powered testing platform",
    description:
      "Built an AI-powered platform integrating GitHub for code analysis, automated code generation, and test execution in a cloud-based browser environment.",
    skills: ["Next", "React", "AI", "Browserbase"],
    year: "2024",
    image: "/testing-automation-project.png",
    alt: "AI assistant automating tasks and analyzing test results",
    tone: "bg-[#f0522d]",
  },
  {
    number: "03",
    title: "QuickStay",
    category: "Full-stack hotel booking platform",
    description:
      "Developed a full-stack hotel booking platform using the MERN stack, enabling users to explore hotels, view room availability, and book accommodations.",
    skills: ["MongoDB", "React", "Express", "Node.js"],
    repo: "https://github.com/j-ff-ar/mern-hotel-booking-app",
    year: "2024",
    image: "/quickstay-project.png",
    alt: "Hotel booking application displayed on a smartphone",
    tone: "bg-[#d7ff3f]",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend Languages",
    skills: ["JavaScript", "React JS", "Next JS", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend Languages",
    skills: ["Node.js", "Express.js", "Socket.IO", "JWT", "C++", "Java"],
  },
  {
    number: "03",
    title: "Database Management",
    skills: ["SQL", "PostgreSQL", "MongoDB"],
  },
  {
    number: "04",
    title: "AI & Automation",
    skills: ["N8N"],
  },
  {
    number: "05",
    title: "UI/UX Designing",
    skills: ["Figma"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function IslamabadTime() {
  const getTime = () =>
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());

  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getTime()), 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return <>{time} PKT</>;
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f0e8] text-[#141414] selection:bg-[#3458f5] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-[#f3f0e8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
          <a
            href="#top"
            className="font-display text-2xl leading-none tracking-tight"
            aria-label="Jaffar home"
          >
            Jaffar<span className="text-[#3458f5]">.Me</span>
          </a>
          <nav className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.16em] sm:flex md:gap-9">
            <a
              className="transition-colors hover:text-[#3458f5]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="transition-colors hover:text-[#3458f5]"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="hidden transition-colors hover:text-[#3458f5] sm:inline"
              href="#about"
            >
              About
            </a>
            <a
              className="hidden transition-colors hover:text-[#3458f5] sm:inline"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <a
            href="/jaffar-cv.pdf"
            download="Syed-Muhammad-Jaffar-Tayyar-CV.pdf"
            className="cv-download group flex shrink-0 items-center gap-3 rounded-full bg-[#141414] py-2.5 pl-5 pr-3 text-xs font-semibold uppercase tracking-[0.12em] transition-transform hover:-translate-y-0.5"
          >
            <span className="whitespace-nowrap">Download CV</span>
            <span className="grid size-7 place-items-center rounded-full bg-[#d7ff3f] text-base text-black transition-transform group-hover:rotate-45">
              <span aria-hidden="true">↓</span>
            </span>
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-12"
      >
        <div className="absolute right-[8%] top-28 hidden size-32 animate-[spin_18s_linear_infinite] rounded-full border border-black/20 lg:block">
          <span className="absolute left-1/2 top-0 h-1/2 w-px bg-black/20" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-black/20" />
          <span className="absolute inset-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0522d]" />
        </div>

        <div>
          <div className="mb-2 flex max-w-xl items-center gap-4 md:ml-[45%] md:gap-5">
            <img
              src="/jaffar-headshot.png"
              alt="Jaffar"
              className="size-14 shrink-0 rounded-full object-cover ring-1 ring-black/15 md:size-16"
            />
            <p className="max-w-md text-base leading-relaxed text-black/60 md:text-lg">
              I’m Jaffar, a full-stack developer building modern, scalable, and
              user-friendly web applications.
            </p>
          </div>
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <span className="availability-dot size-2 rounded-full bg-[#21a558]" />
            <span className="availability-typewriter">Available</span>
          </div>
          <h1 className="max-w-6xl font-display text-[13vw] leading-[0.82] tracking-[-0.065em] sm:text-[11vw] lg:text-[9vw]">
            Where Code Meets Creativity
          </h1>
          <div className="mt-4 flex items-end justify-between gap-5">
            <p className="hidden pb-4 text-xs font-semibold uppercase tracking-[0.15em] text-black/45 md:block">
              Based in Islamabad
              <br />
              Working worldwide
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-between border-t border-black/25 pt-4 text-xs font-semibold uppercase tracking-[0.15em]">
          <span>Scroll to explore</span>
          <span>© 2026</span>
        </div>
      </section>

      <section id="projects" className="bg-[#141414] py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-16 flex flex-col justify-between gap-8 border-b border-white/20 pb-8 md:mb-24 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7ff3f]">
                Selected projects · 2025-2026
              </p>
              <h2 className="font-display text-6xl leading-none tracking-[-0.04em] md:text-8xl">
                Featured
                <br />
                <span className="font-serif italic text-white/55 ">Builds</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-white/55">
              A collection of web applications and software solutions built with modern technologies and clean code.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group grid items-center gap-7 md:grid-cols-12 md:gap-10 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-8">
                  <a
                    href={"repo" in project ? project.repo : "#contact"}
                    target={"repo" in project ? "_blank" : undefined}
                    rel={"repo" in project ? "noreferrer" : undefined}
                    className={`relative block aspect-[4/3] overflow-hidden rounded-sm ${project.tone}`}
                    aria-label={`View ${project.title} project`}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute right-5 top-5 grid size-14 place-items-center rounded-full bg-white text-xl text-black opacity-0 transition duration-300 group-hover:rotate-45 group-hover:opacity-100">
                      <Arrow />
                    </span>
                  </a>
                </div>
                <div className="md:col-span-4">
                  <div className="mb-7 flex justify-between border-b border-white/20 pb-3 text-xs uppercase tracking-[0.16em] text-white/50">
                    <span>{project.number}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-display text-4xl tracking-[-0.03em] md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/50">
                    {project.category}
                  </p>
                  {"description" in project && (
                    <p className="mt-5 text-sm leading-relaxed text-white/70">
                      {project.description}
                    </p>
                  )}
                  {"skills" in project && (
                    <div
                      className="mt-6 flex flex-wrap gap-2"
                      aria-label="Project skills"
                    >
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/25 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  {"repo" in project && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-[#d7ff3f] hover:bg-[#d7ff3f] hover:text-black"
                    >
                      Check repo
                      <Arrow />
                    </a>
                  )}
                  {!("repo" in project) && (
                    <button
                      type="button"
                      disabled
                      className="mt-7 inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-white/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/60"
                    >
                      Check repo
                      <Arrow />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-[#f3f0e8] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-16 grid gap-8 border-b border-black/25 pb-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3458f5]">
                Skills & technologies
              </p>
              <h2 className="font-display text-6xl leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl">
                Built for the
                <br />
                <span className="font-serif italic text-black/45">
                  full stack.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-black/60 md:col-span-4">
              A practical mix of programming, web development, databases, and
              foundational AI knowledge—supported by strong communication and
              a continuous learning mindset.
            </p>
          </div>

          <div className="grid border-t border-black/20 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className={`group border-b border-black/20 py-8 md:p-10 ${
                  index === skillGroups.length - 1
                    ? "md:col-span-2"
                    : index % 2 === 0
                      ? "md:border-r"
                      : ""
                }`}
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-black/35">
                    {group.number}
                  </span>
                  <span className="size-3 rounded-full bg-[#f0522d] transition-transform duration-300 group-hover:scale-[2]" />
                </div>
                <h3 className="font-display text-4xl tracking-[-0.035em] md:text-5xl">
                  {group.title}
                </h3>
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors group-hover:border-[#3458f5] group-hover:text-[#3458f5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#3458f5] py-24 text-white md:py-36">
        <div className="absolute -right-24 top-16 size-72 rounded-full border border-white/20 md:size-96">
          <div className="absolute inset-10 rounded-full border border-white/20" />
          <div className="absolute inset-20 rounded-full border border-white/20" />
        </div>
        <div className="relative mx-auto grid max-w-[1600px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7ff3f]">
              About Me
            </p>
            <div className="mt-8 aspect-[2/3] w-full">
              <img
                src="/jaffar-about-v2.png"
                alt="Jaffar wearing a dark suit"
                className="about-portrait h-full w-full object-contain object-bottom"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display max-w-5xl text-3xl leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              Developing Complex ideas to seamless solutions
            </h2>
            <div className="mt-16 grid gap-10 border-t border-white/25 pt-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-white/75">
                I’m Jaffar, a full-stack developer passionate about building
                modern web applications and intelligent digital solutions.
                From crafting intuitive user interfaces to developing robust
                backend systems and AI-powered tools, I focus on turning
                complex ideas into reliable, scalable, and user-friendly
                products.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-display text-3xl md:text-4xl">MERN</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/55">
                    Core Stack
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl md:text-4xl">15</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/55">
                    Total Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e8] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <p className="mb-12 text-s font-semibold uppercase tracking-[0.18em] text-black help-typewriter">
            How I can help
          </p>
          {["Full-Stack Web Development", "UI/UX Designing", "AI Automation Development", "Project Collaboration"].map(
            (service, index) => (
              <div
                key={service}
                className="group flex items-center justify-between border-t border-black/25 py-6 md:py-8"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-xs text-black/40">0{index + 1}</span>
                  <h3 className="font-display text-3xl tracking-[-0.03em] transition-transform group-hover:translate-x-3 sm:text-5xl md:text-6xl">
                    {service}
                  </h3>
                </div>
                <span className="text-3xl transition-transform group-hover:rotate-45">
                  <Arrow />
                </span>
              </div>
            ),
          )}
          <div className="border-t border-black/25" />
        </div>
      </section>

      <footer id="contact" className="bg-[#d7ff3f] text-[#141414]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
          <p className="mb-10 text-xs font-semibold uppercase tracking-[0.18em]">
            Have a project in mind?
          </p>
          <a
            href="mailto:smjaffarh@gmail.com"
            className="group block border-b border-black pb-8"
          >
            <span className="flex items-end justify-between gap-4">
              <span className="font-display text-[13vw] leading-[0.8] tracking-[-0.065em]">
                Say hello
              </span>
              <span className="mb-1 text-5xl transition-transform group-hover:rotate-45 md:mb-5 md:text-7xl">
                <Arrow />
              </span>
            </span>
          </a>
          <div className="mt-10 flex flex-col justify-between gap-8 text-xs font-semibold uppercase tracking-[0.14em] md:flex-row md:items-end">
            <div>
              <p>conatc.muhammadjaffar.me</p>
              <p className="mt-2 text-black/50">
                Islamabad · <IslamabadTime />
              </p>
            </div>
            <div className="flex gap-7">
              <a
                className="hover:underline"
                href="https://www.instagram.com/_jaffartayyar/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/smjaffart"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hover:underline"
                href="https://github.com/j-ff-ar/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <a className="hover:underline" href="#top">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
