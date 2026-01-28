const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navItems = Array.from(document.querySelectorAll(".nav-item"));
const pages = Array.from(document.querySelectorAll(".page"));
const yearEl = document.getElementById("year");
const langBtn = document.getElementById("langBtn");

yearEl.textContent = new Date().getFullYear();

let currentLang = "ja"; // "ja" or "en"

const i18n = {
  ja: {
    nav_home: "ホーム",
    nav_about: "About",
    nav_what: "What We Do",
    nav_contact: "Contact",

    home_catch: "Hello World! We're E² Bridge Project!!",
    home_lead: "AI × Education で、日本の未来の子どもたちが英語を話せる世界へ。",
    home_meta: "※高校生チームが運営するプロジェクトです / Run by high school students in Japan.",
    home_btn_about: "About を見る",
    home_btn_contact: "お問い合わせ",

    about_title: "About",
    // --- JA（日本語） ---
about_intro: "E² Bridge Project（通称EBP）は、英語を多くの国で発達させ、言語の壁を無くして\n" +
  "よりグローバルな社会の実現を目指すプロジェクトです。\n\n" ,

about_profile_title: "プロフィール",
about_profile_body:
  "つき\n" +
  "N高等学校 9期生\n\n" +
  "N高等学校の「マイプロジェクト」という活動で\n" +
  "E² Bridge Projectを企画し、\n" +
  "英語教育の研究や英語学習アプリ制作を進めています。",

about_origin_title: "名前の由来",
about_origin_body:
  "“English × Education”で世界とつながる橋を創る。\n" +
  "それが E² Bridge Project です。\n\n" +
  "Learn = 学ぶ\n" +
  "Connect = つながる\n" +
  "Shine = 輝く\n\n" +
  "この3つを軸に研究を進めています。",

    // ===== What We Do (JA) =====
what_title: "What We Do",
what_intro:
  "研究→教材制作→体験(ワークショップ)→改良\nこのサイクルを繰り返すことで、今までにない新たな英語教材の開発を目指します",
what_research_title: "研究内容",
research_1: "海外の英語先進国での\n英語教育について",
research_2: "現在の日本での英語教育\nについて",
research_3: "日本の子どもたちの、\n英語に対するイメージ",
research_4: "国際間の言語の壁",
what_apps_title: "制作したアプリ",
app1_name: "Project-Based Learning",
app1_desc: "北欧で採用されているプロジェクト型学習を、\n誰でも気軽に体験できるアプリ。",
app2_name: "Word Note",
app2_desc: "タイピング練習を取り入れた、\n英単語を楽しく覚えられるアプリ。",

    what_links_title: "Links",
    what_links_sub: "ここに、作ったWebアプリや資料リンクをまとめよう！",
    what_link1: "Prototype App 1（あとでURL入れてね）",
    what_link2: "Prototype App 2（あとでURL入れてね）",
    what_link3: "Project Docs（あとでURL入れてね）",

    contact_title: "Contact",
contact_message:
  "お問い合わせ, 取材, ワークショップ参加など、お気軽にご連絡ください！",
contact_message2:
  "また、アンケートにもご協力くださるととても嬉しいです！",
  form_english_survey: "英語に関するアンケート",
form_app_feedback: "アプリを使ってみた感想",
form_contact: "お問い合わせフォーム",
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_what: "What We Do",
    nav_contact: "Contact",

    home_catch: "Hello World! We're E² Bridge Project!!",
    home_lead: "AI × Education for a future where children in Japan can speak English.",
    home_meta: "Run by high school students in Japan.",
    home_btn_about: "See About",
    home_btn_contact: "Contact",

    about_title: "About",
    // --- EN（英語） ---
about_intro:
  "E² Bridge Project (EBP) is a project that develops English across many countries, removes language barriers, and aims for a more global society.",

about_profile_title: "Profile",
about_profile_body:
  "Tsuki\n" +
  "N High School (Cohort 9)\n\n" +
  "Through N High School’s project-based program,\n" +
  "I launched the E² Bridge Project and now work on\n" +
  "research in English education and building English-learning apps.",

about_origin_title: "Name Origin",
about_origin_body:
  "We create a bridge to connect with the world through “English × Education”.\n" +
  "That is E² Bridge Project.\n\n" +
  "Learn = Learn\n" +
  "Connect = Connect\n" +
  "Shine = Shine\n\n" +
  "We move forward based on these three pillars.",

    // ===== What We Do (EN) =====
what_title: "What We Do",
what_intro:
  "Research → Material creation → Experience (workshops) → Improvement\nBy repeating this cycle, we aim to develop a new kind of English learning material.",
what_research_title: "Research Topics",
research_1: "English education in advanced English-speaking countries",
research_2: "Current English education in Japan",
research_3: "Children’s perceptions of English in Japan",
research_4: "Language barriers between countries",
what_apps_title: "Apps We Built",
app1_name: "Project-Based Learning",
app1_desc: "An app that lets anyone experience project-based learning, \ninspired by approaches used in Nordic countries.",
app2_name: "Word Note",
app2_desc: "A vocabulary app that includes typing practice \nto make learning words fun and engaging.",

    what_links_title: "Links",
    what_links_sub: "Put your prototypes and documents here!",
    what_link1: "Prototype App 1 (add your URL later)",
    what_link2: "Prototype App 2 (add your URL later)",
    what_link3: "Project Docs (add your URL later)",

    contact_title: "Contact",
contact_message:
  "For inquiries, interviews, or workshop participation, feel free to contact us!",
contact_message2:
  "We would also greatly appreciate your cooperation in our surveys!",
  form_english_survey: "English Learning Survey",
form_app_feedback: "Feedback on the App",
form_contact: "Contact Form",
  }
};

function openMenu(){
  sidebar.classList.add("is-open");
  overlay.hidden = false;
  menuBtn.setAttribute("aria-expanded", "true");
}

function closeMenu(){
  sidebar.classList.remove("is-open");
  overlay.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Page switching
function showPage(id){
  pages.forEach(p => p.classList.remove("is-visible"));
  const target = document.getElementById(id);
  if (target) target.classList.add("is-visible");

  navItems.forEach(a => a.classList.remove("is-active"));
  const active = navItems.find(a => a.dataset.target === id);
  if (active) active.classList.add("is-active");

  history.replaceState(null, "", `#${id}`);

  closeMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navItems.forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(a.dataset.target);
  });
});

// Hero buttons
document.querySelectorAll("[data-goto]").forEach(btn => {
  btn.addEventListener("click", () => showPage(btn.dataset.goto));
});

// i18n
function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "ja" ? "ja" : "en";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = i18n[lang]?.[key];
    if (value) el.textContent = value;
  });

  // button label
  langBtn.textContent = currentLang === "ja" ? "日本語 / EN" : "EN / 日本語";
}

langBtn.addEventListener("click", () => {
  const next = currentLang === "ja" ? "en" : "ja";
  applyLang(next);
});

// Initial page from hash
const initial = location.hash?.replace("#", "") || "home";
showPage(["home","about","what","contact"].includes(initial) ? initial : "home");
applyLang("ja");
const homeLogoBtn = document.getElementById("homeLogoBtn");
homeLogoBtn.addEventListener("click", () => showPage("home"));
