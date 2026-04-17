import { useEffect, useMemo, useState } from "react";
import { translations, type Lang } from "./i18n";
import { videos, resources } from "./data";

const PHONE = "01223983153";
const WA_INTL = "201223983153";
const FB = "https://www.facebook.com/MrAdhamSerag";
const YT = "https://www.youtube.com/@mr.adhamserag";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }, [lang, isAr]);

  return (
    <div className="min-h-screen bg-mint-50 text-slate-800 selection:bg-mint-500 selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} isAr={isAr} />
      <About t={t} />
      <Tracks t={t} isAr={isAr} />
      <VideoLibrary t={t} lang={lang} />
      <ResourceCenter t={t} lang={lang} />
      <Contact t={t} isAr={isAr} />
      <Footer t={t} />
      <FloatingWhatsApp label={t.whatsapp} />
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#tracks", label: t.nav.tracks },
    { href: "#videos", label: t.nav.videos },
    { href: "#resources", label: t.nav.resources },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-lg shadow-[0_4px_24px_-12px_rgba(36,56,69,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-18 flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-mint-500 to-mint-700 grid place-items-center text-white font-extrabold text-lg shadow-lg glow-mint group-hover:scale-105 transition-transform">
            ∑
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-[15px] text-slate-800">
              Mr. Adham Serag
            </div>
            <div className="text-[11px] text-mint-700 font-semibold tracking-wide">
              MATH · MASTERY
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-mint-700 hover:bg-mint-100 rounded-full transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-mint-300 hover:border-mint-500 hover:bg-mint-100 text-slate-700 text-sm font-bold transition-all"
            aria-label="Toggle language"
          >
            <GlobeIcon className="w-4 h-4" />
            {t.nav.lang}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg glow-gold transition-all hover:-translate-y-0.5"
          >
            {t.hero.cta1}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-mint-100 text-slate-800"
            aria-label="Menu"
          >
            {open ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-mint-100 shadow-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-mint-100 font-semibold text-slate-700"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="mt-2 px-4 py-3 rounded-xl bg-mint-100 font-bold text-mint-800"
            >
              🌐 {t.nav.lang}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ t, isAr }: { t: typeof translations.en; isAr: boolean }) {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* background blobs */}
      <div className="absolute inset-0 math-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-mint-300/40 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-40 -right-20 w-[28rem] h-[28rem] bg-gold-300/30 rounded-full blur-3xl animate-blob pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-white border border-mint-200 text-mint-800 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900">
            <span className="block">{t.hero.title1}</span>
            <span className="block bg-gradient-to-r from-mint-600 via-mint-500 to-gold-500 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#tracks"
              className="group inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-7 py-4 rounded-2xl font-bold shadow-xl glow-gold hover:-translate-y-1 transition-all"
            >
              {t.hero.cta1}
              <ArrowIcon className={`w-5 h-5 transition-transform ${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
            </a>
            <a
              href="#resources"
              className="inline-flex items-center gap-2 bg-white border-2 border-mint-300 hover:border-mint-500 text-slate-800 px-7 py-4 rounded-2xl font-bold shadow-sm hover:-translate-y-1 transition-all"
            >
              <DownloadIcon className="w-5 h-5 text-mint-600" />
              {t.hero.cta2}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
            {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur rounded-2xl p-4 border border-mint-100 shadow-sm"
              >
                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-mint-700 to-mint-500 bg-clip-text text-transparent">
                  {s.split(" ")[0]}
                </div>
                <div className="text-xs md:text-sm text-slate-500 font-semibold mt-1">
                  {s.split(" ").slice(1).join(" ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero card */}
        <div className="lg:col-span-5 relative animate-fade-up">
          <div className="absolute -inset-6 bg-gradient-to-tr from-mint-300/40 to-gold-300/40 rounded-[2.5rem] blur-2xl" />
          <div className="relative bg-gradient-to-br from-slate-bg to-slate-deep rounded-[2rem] p-8 shadow-2xl text-white overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-mint-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400/20 rounded-full blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint-400 to-mint-600 grid place-items-center text-2xl font-extrabold">
                  AS
                </div>
                <div>
                  <div className="font-bold">Mr. Adham Serag</div>
                  <div className="text-xs text-mint-200">
                    {isAr ? "مدرس رياضيات · ثانوية عامة & دولي" : "Math Educator · National & International"}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { e: "f(x) = ax² + bx + c", a: "Quadratic" },
                  { e: "∫ sin(x) dx = -cos(x) + C", a: "Calculus" },
                  { e: "sin²θ + cos²θ = 1", a: "Trig Identity" },
                ].map((eq, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.07] border border-white/10 rounded-xl p-3 flex items-center justify-between gap-3 animate-floaty"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <code className="font-mono text-mint-200 text-sm md:text-base" dir="ltr">
                      {eq.e}
                    </code>
                    <span className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                      {eq.a}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-mint-200 font-semibold">
                  {isAr ? "متاح الآن للحجز" : "Now booking"}
                </div>
                <div className="flex -space-x-2">
                  {["A", "M", "S", "K"].map((n, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-slate-bg bg-gradient-to-br from-mint-400 to-gold-400 grid place-items-center text-[11px] font-bold"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About({ t }: { t: typeof translations.en }) {
  const features = [
    { icon: "🚀", title: t.about.f1t, desc: t.about.f1d },
    { icon: "🎯", title: t.about.f2t, desc: t.about.f2d },
    { icon: "🏆", title: t.about.f3t, desc: t.about.f3d },
    { icon: "💬", title: t.about.f4t, desc: t.about.f4d },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Kicker>{t.about.kicker}</Kicker>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {t.about.title}
          </h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">{t.about.p1}</p>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">{t.about.p2}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Thanaweya Amma", "SAT", "IGCSE", "American Diploma"].map((b) => (
              <span
                key={b}
                className="px-4 py-2 bg-mint-100 text-mint-800 rounded-full text-sm font-bold border border-mint-200"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-6 border border-mint-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint-100 to-mint-200 grid place-items-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">{f.title}</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRACKS ---------------- */
function Tracks({ t, isAr }: { t: typeof translations.en; isAr: boolean }) {
  const tracksData = [
    {
      ...t.tracks.a,
      gradient: "from-mint-500 to-mint-700",
      ring: "ring-mint-200",
      icon: "📘",
    },
    {
      ...t.tracks.b,
      gradient: "from-gold-500 to-gold-600",
      ring: "ring-gold-200",
      icon: "🌍",
    },
  ];

  return (
    <section id="tracks" className="py-24 bg-gradient-to-b from-mint-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Kicker center>{t.tracks.kicker}</Kicker>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
            {t.tracks.title}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{t.tracks.subtitle}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {tracksData.map((tr, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-xl ring-1 ${tr.ring} hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${tr.gradient}`} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold text-white bg-gradient-to-r ${tr.gradient} mb-4`}>
                    {tr.tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                    {tr.name}
                  </h3>
                  <p className="text-mint-700 font-bold mt-1 text-sm">{tr.sub}</p>
                </div>
                <div className="text-5xl">{tr.icon}</div>
              </div>

              <p className="mt-5 text-slate-600 leading-relaxed">{tr.desc}</p>

              <ul className="mt-6 space-y-3">
                {tr.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${tr.gradient} grid place-items-center flex-shrink-0`}>
                      <CheckIcon className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-slate-700">{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center gap-2 bg-gradient-to-r ${tr.gradient} text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all`}
              >
                {tr.cta}
                <ArrowIcon className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VIDEO LIBRARY ---------------- */
function VideoLibrary({ t, lang }: { t: typeof translations.en; lang: Lang }) {
  const [active, setActive] = useState(0);
  const filters = t.videos.filters;

  const filtered = useMemo(() => {
    if (active === 0) return videos;
    const cat = filters[active];
    return videos.filter((v) => v.category[lang] === cat);
  }, [active, lang, filters]);

  return (
    <section id="videos" className="py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Kicker>{t.videos.kicker}</Kicker>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
              {t.videos.title}
            </h2>
            <p className="mt-3 text-slate-600 text-lg max-w-xl">{t.videos.subtitle}</p>
          </div>
          <a
            href={YT}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-mint-700 hover:text-mint-800 font-bold"
          >
            <YoutubeIcon className="w-5 h-5" />
            {t.videos.seeAll}
          </a>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                active === i
                  ? "bg-slate-bg text-white shadow-lg"
                  : "bg-white text-slate-700 border border-mint-200 hover:border-mint-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noreferrer"
              className="group bg-white rounded-3xl overflow-hidden border border-mint-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-bg">
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/70 via-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-14 h-14 rounded-full bg-white/95 grid place-items-center shadow-xl group-hover:scale-110 group-hover:bg-gold-500 transition-all">
                    <PlayIcon className="w-5 h-5 text-slate-bg group-hover:text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                  {v.duration}
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-mint-700">
                  {v.category[lang]}
                </span>
                <h3 className="mt-1 font-bold text-slate-900 leading-snug group-hover:text-mint-700 transition-colors">
                  {v.title[lang]}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESOURCES ---------------- */
function ResourceCenter({ t, lang }: { t: typeof translations.en; lang: Lang }) {
  return (
    <section id="resources" className="py-24 bg-gradient-to-b from-white to-mint-50 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Kicker center>{t.resources.kicker}</Kicker>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
            {t.resources.title}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{t.resources.subtitle}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-6 border border-mint-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className={`absolute -right-12 -top-12 w-40 h-40 rounded-full bg-gradient-to-br ${r.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-16 rounded-xl bg-gradient-to-br ${r.color} grid place-items-center shadow-lg`}>
                    <PdfIcon className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-mint-100 text-mint-800">
                    {r.track[lang]}
                  </span>
                </div>

                <h3 className="mt-5 font-extrabold text-lg text-slate-900">
                  {r.title[lang]}
                </h3>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                  {r.desc[lang]}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-semibold">
                    📄 {r.pages} {t.resources.pages}
                  </span>
                  <button className="inline-flex items-center gap-1.5 text-gold-600 hover:text-gold-700 font-bold">
                    <DownloadIcon className="w-4 h-4" />
                    {t.resources.download}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact({ t, isAr }: { t: typeof translations.en; isAr: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Info card */}
          <div className="relative bg-gradient-to-br from-slate-bg via-slate-deep to-slate-ink text-white rounded-[2rem] p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-mint-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl" />

            <div className="relative">
              <Kicker dark>{t.contact.kicker}</Kicker>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-mint-100/80 text-lg">{t.contact.subtitle}</p>

              <div className="mt-10 space-y-4">
                <ContactRow
                  icon={<PhoneIcon className="w-5 h-5" />}
                  label={t.contact.info.phone}
                  value={PHONE}
                  href={`tel:${PHONE}`}
                />
                <ContactRow
                  icon={<WhatsAppIcon className="w-5 h-5" />}
                  label="WhatsApp"
                  value={PHONE}
                  href={`https://wa.me/${WA_INTL}`}
                  external
                  accent
                />
                <ContactRow
                  icon={<FacebookIcon className="w-5 h-5" />}
                  label={t.contact.info.facebook}
                  value="@MrAdhamSerag"
                  href={FB}
                  external
                />
                <ContactRow
                  icon={<YoutubeIcon className="w-5 h-5" />}
                  label={t.contact.info.youtube}
                  value="@mr.adhamserag"
                  href={YT}
                  external
                />
                <ContactRow
                  icon={<PinIcon className="w-5 h-5" />}
                  label={isAr ? "الموقع" : "Location"}
                  value={t.contact.info.location}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 5000);
              (e.target as HTMLFormElement).reset();
            }}
            className="bg-white rounded-[2rem] p-8 md:p-10 border border-mint-100 shadow-xl"
          >
            <div className="space-y-5">
              <Field label={t.contact.form.name}>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-mint-100 bg-mint-50/40 focus:border-mint-500 focus:bg-white outline-none transition-all"
                />
              </Field>
              <Field label={t.contact.form.phone}>
                <input
                  required
                  type="tel"
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-xl border-2 border-mint-100 bg-mint-50/40 focus:border-mint-500 focus:bg-white outline-none transition-all"
                />
              </Field>
              <Field label={t.contact.form.grade}>
                <select
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border-2 border-mint-100 bg-mint-50/40 focus:border-mint-500 focus:bg-white outline-none transition-all"
                >
                  <option value="" disabled>
                    {t.contact.form.gradePlaceholder}
                  </option>
                  <option>{t.tracks.a.name} — {t.tracks.a.sub}</option>
                  <option>{t.tracks.b.name} — {t.tracks.b.sub}</option>
                </select>
              </Field>
              <Field label={t.contact.form.message}>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-mint-100 bg-mint-50/40 focus:border-mint-500 focus:bg-white outline-none transition-all resize-none"
                />
              </Field>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-4 rounded-2xl font-extrabold shadow-xl glow-gold hover:-translate-y-0.5 transition-all"
              >
                {t.contact.form.send}
                <ArrowIcon className={`w-5 h-5 ${isAr ? "rotate-180" : ""}`} />
              </button>

              {submitted && (
                <div className="p-4 bg-mint-100 border border-mint-300 text-mint-800 rounded-xl font-bold text-center animate-fade-up">
                  {t.contact.form.success}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-bold text-slate-700 mb-2">{label}</span>
      {children}
    </label>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  accent?: boolean;
}) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/[0.06] transition-colors group"
    >
      <div
        className={`w-11 h-11 rounded-xl grid place-items-center flex-shrink-0 ${
          accent
            ? "bg-gradient-to-br from-green-400 to-green-600 text-white"
            : "bg-white/10 text-mint-200 group-hover:bg-white/20"
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-mint-200/70 font-bold">
          {label}
        </div>
        <div className="font-bold truncate" dir="ltr">{value}</div>
      </div>
    </Tag>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ t }: { t: typeof translations.en }) {
  return (
    <footer className="bg-slate-ink text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-mint-400 to-mint-600 grid place-items-center text-white font-extrabold text-xl">
              ∑
            </div>
            <div>
              <div className="font-extrabold">Mr. Adham Serag</div>
              <div className="text-xs text-mint-300">MATH · MASTERY</div>
            </div>
          </div>
          <p className="mt-4 text-mint-100/70 leading-relaxed text-sm">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <div className="font-extrabold mb-4">{t.footer.quick}</div>
          <ul className="space-y-2 text-sm text-mint-100/80">
            <li><a href="#about" className="hover:text-gold-400">{t.nav.about}</a></li>
            <li><a href="#tracks" className="hover:text-gold-400">{t.nav.tracks}</a></li>
            <li><a href="#videos" className="hover:text-gold-400">{t.nav.videos}</a></li>
            <li><a href="#resources" className="hover:text-gold-400">{t.nav.resources}</a></li>
            <li><a href="#contact" className="hover:text-gold-400">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <div className="font-extrabold mb-4">{t.footer.follow}</div>
          <div className="flex gap-3">
            <SocialBtn href={`https://wa.me/${WA_INTL}`} label="WhatsApp">
              <WhatsAppIcon className="w-5 h-5" />
            </SocialBtn>
            <SocialBtn href={FB} label="Facebook">
              <FacebookIcon className="w-5 h-5" />
            </SocialBtn>
            <SocialBtn href={YT} label="YouTube">
              <YoutubeIcon className="w-5 h-5" />
            </SocialBtn>
            <SocialBtn href={`tel:${PHONE}`} label="Phone">
              <PhoneIcon className="w-5 h-5" />
            </SocialBtn>
          </div>
          <div className="mt-5 text-sm text-mint-100/80" dir="ltr">{PHONE}</div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 max-w-7xl mx-auto px-5 lg:px-8 text-center text-xs text-mint-100/60">
        © {new Date().getFullYear()} Mr. Adham Serag. {t.footer.rights}
      </div>
    </footer>
  );
}

function SocialBtn({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-xl bg-white/10 hover:bg-gold-500 grid place-items-center transition-colors"
    >
      {children}
    </a>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWhatsApp({ label }: { label: string }) {
  return (
    <a
      href={`https://wa.me/${WA_INTL}`}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center gap-3">
        <span className="hidden md:block bg-white text-slate-bg font-bold text-sm px-4 py-2 rounded-full shadow-xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
          {label}
        </span>
        <span className="relative w-15 h-15 grid place-items-center bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-2xl animate-pulse-ring hover:scale-110 transition-transform"
              style={{ width: "60px", height: "60px" }}>
          <WhatsAppIcon className="w-7 h-7" />
        </span>
      </div>
    </a>
  );
}

/* ---------------- HELPERS ---------------- */
function Kicker({
  children,
  center,
  dark,
}: {
  children: React.ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className={`h-px w-8 ${dark ? "bg-mint-300" : "bg-mint-500"}`} />
      <span className={`text-xs font-extrabold uppercase tracking-[0.2em] ${dark ? "text-mint-300" : "text-mint-700"}`}>
        {children}
      </span>
      <span className={`h-px w-8 ${dark ? "bg-mint-300" : "bg-mint-500"}`} />
    </div>
  );
}

/* ---------------- ICONS ---------------- */
function GlobeIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={p.className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}
function MenuIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={p.className}><path d="M4 7h16M4 12h16M4 17h16"/></svg>);
}
function CloseIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={p.className}><path d="M6 6l12 12M18 6L6 18"/></svg>);
}
function ArrowIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={p.className}><path d="M5 12h14M13 5l7 7-7 7"/></svg>);
}
function DownloadIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={p.className}><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>);
}
function CheckIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={p.className}><path d="M5 12l5 5L20 7"/></svg>);
}
function PlayIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M8 5v14l11-7z"/></svg>);
}
function PdfIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={p.className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 14h6M9 18h4"/></svg>);
}
function YoutubeIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M23 7.5s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.7 4 12 4 12 4s-4.7 0-7.9.2c-.4 0-1.3.1-2.1 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.2 7.7.2s4.7 0 7.9-.2c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.7 14.6V8.4l6.2 3.1-6.2 3.1z"/></svg>);
}
function FacebookIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9V15H8V12h2.4V9.8C10.4 7.5 11.8 6.2 14 6.2c1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 3h-2.2v6.9C18.3 21.1 22 17 22 12z"/></svg>);
}
function WhatsAppIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6 0-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.1.2 2.2 3.4 5.4 4.7.8.3 1.3.5 1.8.7.8.2 1.4.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.5.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C3.9 14.8 3.5 13.4 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/></svg>);
}
function PhoneIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={p.className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 16.9z"/></svg>);
}
function PinIcon(p: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={p.className}><path d="M12 22s8-7.6 8-13A8 8 0 0 0 4 9c0 5.4 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>);
}
