import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const t: Dict = {
  "nav.about": { en: "About", ar: "نبذة" },
  "nav.skills": { en: "Skills", ar: "المهارات" },
  "nav.projects": { en: "Projects", ar: "المشاريع" },
  "nav.experience": { en: "Experience", ar: "الخبرات" },
  "nav.contact": { en: "Contact", ar: "تواصل" },

  "hero.eyebrow": {
    en: "Available for select engagements",
    ar: "متاح لمشاريع مختارة",
  },
  "hero.role": {
    en: "Marketplace Systems Architect & Full-Stack Engineer",
    ar: "مهندس أنظمة الأسواق ومطوّر متكامل",
  },
  "hero.title1": { en: "Building marketplaces", ar: "أبني أسواقاً رقمية" },
  "hero.title2": { en: "that scale to millions.", ar: "تتوسّع لملايين المستخدمين." },
  "hero.subtitle": {
    en: "I design and ship multi-vendor platforms, real-time bidding engines, and high-scale commerce systems end to end.",
    ar: "أصمّم وأطلق منصّات متعددة البائعين، ومحرّكات المزايدة الفورية، وأنظمة تجارة عالية الحجم من البداية للنهاية.",
  },
  "hero.cta1": { en: "View Work", ar: "استعرض الأعمال" },
  "hero.cta2": { en: "Get in Touch", ar: "تواصل معي" },

  "about.title": { en: "About Me", ar: "نبذة عني" },
  "about.kicker": { en: "Marketplace specialist", ar: "متخصص في الأسواق" },
  "about.body": {
    en: "Over the last decade I've architected and led the engineering of multi-vendor marketplaces handling hundreds of millions in GMV. My focus is the hard parts of marketplace systems — vendor onboarding, payment splits, search & ranking, fraud, and real-time logistics — wired into clean, maintainable full-stack codebases.",
    ar: "على مدى العقد الماضي صمّمتُ وقدتُ هندسة أسواق متعددة البائعين تعالج مئات الملايين في حجم المبيعات. أركّز على الأجزاء الصعبة من أنظمة الأسواق — تأهيل البائعين، تقسيم المدفوعات، البحث والترتيب، مكافحة الاحتيال، والخدمات اللوجستية الفورية.",
  },
  "skills.title": { en: "Skills & Expertise", ar: "المهارات والخبرات" },
  "projects.title": { en: "Featured Projects", ar: "مشاريع مختارة" },
  "experience.title": { en: "Experience", ar: "الخبرات" },
  "testimonials.title": { en: "What Clients Say", ar: "آراء العملاء" },

  "contact.title": { en: "Let's Build Something", ar: "لنبنِ شيئاً معاً" },
  "contact.subtitle": {
    en: "Have a marketplace idea or a system that needs to scale? Drop a line.",
    ar: "لديك فكرة سوق رقمي أو نظام يحتاج للتوسّع؟ راسلني.",
  },
  "contact.name": { en: "Name", ar: "الاسم" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.success": {
    en: "Message sent — I'll get back to you soon!",
    ar: "تم إرسال الرسالة — سأعود إليك قريباً!",
  },
};

interface I18nContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  toggleLang: () => void;
  tr: (key: keyof typeof t | string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));
  const tr = (key: string) => t[key]?.[lang] ?? key;

  return (
    <I18nContext.Provider
      value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", toggleLang, tr }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
