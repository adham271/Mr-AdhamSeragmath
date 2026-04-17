export type Lang = "en" | "ar";

type TDict = {
  nav: { home: string; about: string; tracks: string; videos: string; resources: string; contact: string; lang: string };
  hero: { badge: string; title1: string; title2: string; subtitle: string; cta1: string; cta2: string; stat1: string; stat2: string; stat3: string };
  about: { kicker: string; title: string; p1: string; p2: string; f1t: string; f1d: string; f2t: string; f2d: string; f3t: string; f3d: string; f4t: string; f4d: string };
  tracks: {
    kicker: string; title: string; subtitle: string;
    a: { tag: string; name: string; sub: string; desc: string; items: string[]; cta: string };
    b: { tag: string; name: string; sub: string; desc: string; items: string[]; cta: string };
  };
  videos: { kicker: string; title: string; subtitle: string; filters: string[]; watch: string; seeAll: string };
  resources: { kicker: string; title: string; subtitle: string; download: string; preview: string; pages: string };
  contact: {
    kicker: string; title: string; subtitle: string;
    form: { name: string; phone: string; grade: string; gradePlaceholder: string; message: string; send: string; success: string };
    info: { phone: string; facebook: string; youtube: string; location: string };
  };
  footer: { tagline: string; rights: string; quick: string; follow: string };
  whatsapp: string;
};

export const translations: Record<Lang, TDict> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      tracks: "Tracks",
      videos: "Videos",
      resources: "Resources",
      contact: "Contact",
      lang: "العربية",
    },
    hero: {
      badge: "✨ New term enrollment is open",
      title1: "Master Math.",
      title2: "Unlock Your Future.",
      subtitle:
        "Live classes, on-demand videos, and clear study notes — built for high-school students who want to think like mathematicians, not memorize like robots.",
      cta1: "Start Learning",
      cta2: "Download Resources",
      stat1: "10K+ Students",
      stat2: "500+ Video Lessons",
      stat3: "98% Pass Rate",
    },
    about: {
      kicker: "About the Educator",
      title: "Meet Mr. Adham Serag",
      p1: "A passionate mathematics educator with years of experience guiding high-school students through the Egyptian National Curriculum, SAT, and IGCSE. His mission is simple: turn math from a source of stress into a source of confidence.",
      p2: "Mr. Adham blends modern educational technology — interactive whiteboards, animated explainers, and a digital resource library — with a warm, human teaching style that meets every student where they are.",
      f1t: "Modern Tech",
      f1d: "Interactive lessons & digital tools",
      f2t: "Clear Method",
      f2d: "Step-by-step problem solving",
      f3t: "Real Results",
      f3d: "Top scores in national & international exams",
      f4t: "Always Available",
      f4d: "Direct WhatsApp support for every student",
    },
    tracks: {
      kicker: "Learning Tracks",
      title: "Choose Your Path",
      subtitle: "Two complete curricula, one trusted teacher.",
      a: {
        tag: "Track A",
        name: "National Curriculum",
        sub: "Thanaweya Amma · المنهج المصري",
        desc: "Full coverage of the Egyptian high-school math syllabus with focused exam preparation and weekly problem sets.",
        items: [
          "Pure Mathematics — Algebra & Trigonometry",
          "Applied Mathematics — Statics & Dynamics",
          "Past-paper drills & model answers",
          "Weekly live revision sessions",
        ],
        cta: "Join Track A",
      },
      b: {
        tag: "Track B",
        name: "International & Languages",
        sub: "SAT · IGCSE · American Diploma",
        desc: "Structured English-medium lessons that align with international standards and university admissions.",
        items: [
          "SAT Math — strategies & full mocks",
          "IGCSE Mathematics (0580 / 0606)",
          "Pre-Calculus & Calculus foundations",
          "English-language problem solving",
        ],
        cta: "Join Track B",
      },
    },
    videos: {
      kicker: "Video Library",
      title: "Learn at Your Own Pace",
      subtitle: "Hundreds of free lessons, organized by branch of mathematics.",
      filters: ["All", "Algebra", "Geometry", "Calculus", "Trigonometry", "Statistics"],
      watch: "Watch on YouTube",
      seeAll: "See full channel",
    },
    resources: {
      kicker: "Resource Center",
      title: "Study Notes & PDFs",
      subtitle: "High-quality, classroom-tested materials — free to download.",
      download: "Download PDF",
      preview: "Preview",
      pages: "pages",
    },
    contact: {
      kicker: "Get in Touch",
      title: "Ready to Start?",
      subtitle: "Send a quick inquiry or message me directly on WhatsApp.",
      form: {
        name: "Full Name",
        phone: "Phone Number",
        grade: "Grade / Track",
        gradePlaceholder: "Select a track",
        message: "Your Message",
        send: "Send Inquiry",
        success: "✓ Thanks! I'll reach out within 24 hours.",
      },
      info: {
        phone: "Phone & WhatsApp",
        facebook: "Facebook Page",
        youtube: "YouTube Channel",
        location: "Alexandria, Egypt",
      },
    },
    footer: {
      tagline: "Mathematics, made human.",
      rights: "All rights reserved.",
      quick: "Quick Links",
      follow: "Follow",
    },
    whatsapp: "Chat on WhatsApp",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن المدرس",
      tracks: "المسارات",
      videos: "الفيديوهات",
      resources: "المذكرات",
      contact: "تواصل",
      lang: "English",
    },
    hero: {
      badge: "✨ الحجز مفتوح للترم الجديد",
      title1: "اتقن الرياضيات.",
      title2: "افتح أبواب مستقبلك.",
      subtitle:
        "حصص مباشرة، فيديوهات على مدار الساعة، ومذكرات منظمة — لطلاب الثانوية اللي عايزين يفكروا زي الرياضيين، مش يحفظوا زي الروبوتات.",
      cta1: "ابدأ التعلم",
      cta2: "تحميل المذكرات",
      stat1: "+10 آلاف طالب",
      stat2: "+500 فيديو شرح",
      stat3: "98% نسبة نجاح",
    },
    about: {
      kicker: "تعرف على المدرس",
      title: "أ. أدهم سراج",
      p1: "مدرس رياضيات شغوف بسنوات من الخبرة في تدريس طلاب الثانوية في المنهج المصري والـ SAT والـ IGCSE. هدفه بسيط: يحوّل الرياضيات من مصدر قلق لمصدر ثقة.",
      p2: "أ. أدهم بيدمج بين أحدث تقنيات التعليم — السبورات التفاعلية، الفيديوهات المتحركة، والمكتبة الرقمية — وأسلوب تدريس إنساني وودود يقابل كل طالب على مستواه.",
      f1t: "تكنولوجيا حديثة",
      f1d: "دروس تفاعلية وأدوات رقمية",
      f2t: "شرح واضح",
      f2d: "حل المسائل خطوة بخطوة",
      f3t: "نتائج حقيقية",
      f3d: "تفوق في الامتحانات المحلية والدولية",
      f4t: "متاح دائمًا",
      f4d: "تواصل مباشر على واتساب لكل طالب",
    },
    tracks: {
      kicker: "مسارات التعلم",
      title: "اختر مسارك",
      subtitle: "منهجان كاملان، ومدرس واحد تثق فيه.",
      a: {
        tag: "المسار أ",
        name: "المنهج الوطني",
        sub: "الثانوية العامة · المنهج المصري",
        desc: "تغطية كاملة لمنهج الرياضيات للثانوية المصرية مع تحضير مكثف للامتحانات وواجبات أسبوعية.",
        items: [
          "الرياضيات البحتة — جبر وحساب مثلثات",
          "الرياضيات التطبيقية — استاتيكا وديناميكا",
          "حل امتحانات السنوات السابقة",
          "مراجعات أسبوعية مباشرة",
        ],
        cta: "انضم للمسار أ",
      },
      b: {
        tag: "المسار ب",
        name: "الدولي واللغات",
        sub: "SAT · IGCSE · الدبلومة الأمريكية",
        desc: "دروس منظمة باللغة الإنجليزية متوافقة مع المعايير الدولية ومتطلبات القبول الجامعي.",
        items: [
          "SAT Math — استراتيجيات واختبارات كاملة",
          "IGCSE Mathematics (0580 / 0606)",
          "أساسيات Pre-Calculus وCalculus",
          "حل المسائل باللغة الإنجليزية",
        ],
        cta: "انضم للمسار ب",
      },
    },
    videos: {
      kicker: "مكتبة الفيديوهات",
      title: "اتعلم على راحتك",
      subtitle: "مئات الدروس المجانية مرتبة حسب فروع الرياضيات.",
      filters: ["الكل", "جبر", "هندسة", "تفاضل وتكامل", "حساب مثلثات", "إحصاء"],
      watch: "مشاهدة على يوتيوب",
      seeAll: "زيارة القناة كاملة",
    },
    resources: {
      kicker: "مركز المذكرات",
      title: "مذكرات وملفات PDF",
      subtitle: "مواد عالية الجودة ومجربة في الفصل — متاحة للتحميل مجانًا.",
      download: "تحميل PDF",
      preview: "معاينة",
      pages: "صفحة",
    },
    contact: {
      kicker: "تواصل معنا",
      title: "جاهز تبدأ؟",
      subtitle: "ابعت استفسار سريع أو كلمني مباشرة على واتساب.",
      form: {
        name: "الاسم بالكامل",
        phone: "رقم الموبايل",
        grade: "الصف / المسار",
        gradePlaceholder: "اختر المسار",
        message: "رسالتك",
        send: "إرسال الاستفسار",
        success: "✓ شكرًا! هتوصلك رسالة خلال 24 ساعة.",
      },
      info: {
        phone: "الهاتف والواتساب",
        facebook: "صفحة الفيسبوك",
        youtube: "قناة اليوتيوب",
        location: "الإسكندرية، مصر",
      },
    },
    footer: {
      tagline: "الرياضيات بأسلوب إنساني.",
      rights: "جميع الحقوق محفوظة.",
      quick: "روابط سريعة",
      follow: "تابعنا",
    },
    whatsapp: "تواصل على واتساب",
  },
};
