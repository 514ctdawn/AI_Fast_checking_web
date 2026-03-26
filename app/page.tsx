import {
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Building2,
  Smartphone,
  ArrowRight,
  ListChecks,
  Link2,
  Globe2,
  ServerCog,
  SmartphoneNfc
} from "lucide-react";

/* RightPick Technology Limited – VeriGuard AI landing page. Single-page React component. */

const VERIFY_CTA_LABEL = "Verify Now 立即查證";

const GUIDE_STEPS = [
  {
    platform: "WhatsApp",
    step: "Open the chat, type @VeriGuard and send the message you want checked. 在聊天室輸入 @VeriGuard 並送出想查證的訊息。",
    icon: MessageCircle
  },
  {
    platform: "Douyin / 抖音",
    step: "In comments or DM, @ mention VeriGuard AI and paste the claim for instant verification. 在留言或私訊標註後貼上內容即可快速查證。",
    icon: MessageCircle
  }
];

const KNOWLEDGE_FAKE = [
  {
    label: "Fake 不實",
    claim: "Drink lemon juice and baking soda to cure cancer in 2 weeks.",
    verdict: "False. No single home remedy cures cancer. Always follow your doctor’s plan."
  },
  {
    label: "Fake 不實",
    claim: "Forward this to 10 people or you will have bad luck.",
    verdict: "Hoax. Chain messages have no power over your life or device."
  }
];

const KNOWLEDGE_TRUE = [
  {
    label: "True 真實",
    claim: "WHO recommends handwashing with soap to reduce infection spread.",
    verdict: "Correct. Supported by WHO and national health authorities."
  },
  {
    label: "True 真實",
    claim: "Your bank will never ask for your PIN or password by SMS or phone.",
    verdict: "Correct. Legitimate banks do not request sensitive details this way."
  }
];

const APP_DOES = [
  "Provides a mobile-friendly dashboard for recent verification records. 提供手機友善的近期查核儀表板。",
  "Supports quick verification entry from social context (especially Threads). 支援從社群情境快速發起查證（特別是 Threads）。",
  "Uses AI analysis (or mock logic in demo mode) to classify content as True (真實), False (不實), or Caution (注意).",
  "Shows readable explanations, confidence, and source links. 提供易讀解釋、信心分數與來源連結。"
];

const CORE_FLOW = [
  "User submits content (social mention, pasted link, photo, or voice input). 使用者送出內容（標註、連結、圖片或語音）。",
  "System fetches or extracts source content. 系統擷取與解析來源內容。",
  "AI (or mock analyzer) evaluates claim reliability. AI（或展示模式分析器）評估可信度。",
  "Result appears in the dashboard and detail page. 查核結果顯示於儀表板與詳情頁。",
  "User can review explanation and open original source. 使用者可閱讀說明並開啟原始來源。"
];

const FEATURE_BLOCKS = [
  {
    title: "1) Verification Dashboard 驗證儀表板",
    icon: ListChecks,
    bullets: [
      "Clean list of recent checks with status color accents. 近期查核列表清楚顯示狀態顏色。",
      "Pull-to-refresh and manual refresh support. 支援下拉與手動更新。",
      "Processing and error states for transparency. 提供處理中與錯誤狀態提示。"
    ]
  },
  {
    title: "2) Result Detail View 查核詳情",
    icon: Smartphone,
    bullets: [
      "Full explanation in Traditional Chinese. 以繁體中文完整解釋查核結果。",
      "Optional image preview with graceful fallback. 支援圖片預覽與失敗備援。",
      "Source URL button to open original post. 可一鍵開啟原文來源連結。",
      "Voice playback for accessibility. 提供語音播放提升無障礙體驗。"
    ]
  },
  {
    title: "3) Threads Link Deep-Link Verification 深連結查證",
    icon: Link2,
    bullets: [
      "Detects Threads post URLs from clipboard or pasted input. 自動偵測剪貼簿或貼上的 Threads 連結。",
      "Parses post IDs and starts verification directly. 解析貼文 ID 後直接啟動查證。",
      "Creates a processing card immediately, then fills final result. 先建立處理中卡片，再更新最終結果。"
    ]
  },
  {
    title: "4) Social Sync (Webhook Pipeline) 社群同步",
    icon: Globe2,
    bullets: [
      "Backend supports webhook-style ingestion for social mentions. 後端支援 webhook 方式接收社群標註。",
      "Mention pattern like @VeriSenior 幫我查證 can trigger analysis flow.",
      "Results are persisted and returned by /api/verifications. 結果可持久化並由 /api/verifications 提供。"
    ]
  },
  {
    title: "5) AI + Fallback Modes AI 與備援模式",
    icon: ServerCog,
    bullets: [
      "AI provider support (OpenAI / Gemini) via backend environment variables. 可透過環境變數接入 OpenAI / Gemini。",
      "If no AI keys are configured, mock heuristic analysis is used. 未設定金鑰時自動切換模擬分析。",
      "GitHub Pages/demo mode can run in mock mode without backend. 在 GitHub Pages 展示模式可無後端運行。"
    ]
  },
  {
    title: "6) PWA & Mobile Experience 行動體驗",
    icon: SmartphoneNfc,
    bullets: [
      "Installable Progressive Web App (PWA) behavior. 支援可安裝的 PWA 體驗。",
      "Responsive UI optimized for phone usage. 響應式介面針對手機優化。",
      "Offline/service-worker support for static assets. 靜態資源具備離線與 service worker 支援。"
    ]
  }
];

const INTERFACE_SAMPLES = [
  {
    title: "Home Dashboard / 首頁儀表板",
    description:
      "Recent checks, trust score, and quick AI verify button designed for seniors.",
    image: "/samples/interface-home.png"
  },
  {
    title: "Knowledge Library / 查核庫",
    description:
      "Topic-based browsing for verified claims in Health, Finance, and Social News.",
    image: "/samples/interface-library.png"
  },
  {
    title: "Social Integration / 社群整合",
    description:
      "Cross-platform cards for Facebook, Threads, WhatsApp, and Douyin mention flows.",
    image: "/samples/interface-social.png"
  },
  {
    title: "Interactive Demo / 互動教學",
    description:
      "Step-by-step mention example with AI response in Traditional Chinese.",
    image: "/samples/interface-demo.png"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white antialiased">
      {/* ─── Hero Section ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,74,173,0.25),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-base font-medium uppercase tracking-widest text-slate-400 sm:text-lg">
            VeriGuard AI · RightPick Technology Limited
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Seniors with{" "}
            <span className="bg-gradient-to-r from-[#004aad] to-[#10b981] bg-clip-text text-transparent">
              Universal AI Fact-Checking
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
            One tap to verify. Share suspicious posts from WhatsApp, Douyin, or any app—get clear, trustworthy answers in seconds.
          </p>
          <div className="mt-10">
            <a
              href="#knowledge"
              className="inline-flex min-h-[3.25rem] min-w-[12rem] items-center justify-center gap-2 rounded-xl bg-[#004aad] px-8 py-4 text-lg font-semibold text-white shadow-[0_4px_24px_rgba(0,74,173,0.5)] transition hover:bg-[#003d8f] focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <ShieldCheck className="h-6 w-6" aria-hidden />
              {VERIFY_CTA_LABEL}
            </a>
          </div>
        </div>
      </section>

      {/* ─── Visual Guide: How to @mention the bot (WhatsApp / Douyin) ───── */}
      <section
        id="how-it-works"
        className="border-b border-slate-800/80 bg-slate-900/40 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How to use VeriGuard AI 如何使用 VeriGuard AI
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Simple steps for seniors: @mention the bot where you already chat.
          </p>
          <p className="mt-2 text-base text-slate-400">
            長輩可直接在熟悉的社群平台標註 @VeriSenior，即時取得查證結果。
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {GUIDE_STEPS.map((item) => (
              <div
                key={item.platform}
                className="flex gap-4 rounded-2xl border border-slate-700/80 bg-slate-800/60 p-6 shadow-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#004aad]/20 text-[#10b981]">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">{item.platform}</p>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">
                    {item.step}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
            <Smartphone className="h-5 w-5" />
            <span className="text-base">Works in the apps you already use—no new app to install.</span>
          </div>
        </div>
      </section>

      {/* ─── Knowledge Base preview: Fake vs True cards ─────────────────── */}
      <section
        id="knowledge"
        className="border-b border-slate-800/80 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Knowledge Base preview 查核知識庫預覽
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            See how VeriGuard AI labels claims—Fake vs True—with clear explanations.
          </p>
          <p className="mt-2 text-base text-slate-400">
            透過「真實 / 不實 / 注意」標示，協助長輩快速理解訊息可信度。
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Fake examples */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-red-400">
                <XCircle className="h-6 w-6" />
                Fake 不實
              </h3>
              <div className="space-y-4">
                {KNOWLEDGE_FAKE.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-red-900/50 bg-slate-900/80 p-5 shadow-lg"
                  >
                    <p className="text-base font-medium text-slate-200">
                      &ldquo;{item.claim}&rdquo;
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                      {item.verdict}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* True examples */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[#10b981]">
                <CheckCircle2 className="h-6 w-6" />
                True 真實
              </h3>
              <div className="space-y-4">
                {KNOWLEDGE_TRUE.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-[#10b981]/30 bg-slate-900/80 p-5 shadow-lg"
                  >
                    <p className="text-base font-medium text-slate-200">
                      &ldquo;{item.claim}&rdquo;
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                      {item.verdict}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/60 px-6 py-3 text-base font-semibold text-white transition hover:border-[#10b981] hover:bg-slate-800"
            >
              Request full Knowledge Base access 申請完整知識庫
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Interface Preview 介面預覽
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Real product interface samples with consistent visual language and
            senior-friendly readability.
          </p>
          <p className="mt-2 text-base text-slate-400">
            以下為介面示意圖，呈現首頁、查核庫、社群整合與互動教學流程。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {INTERFACE_SAMPLES.map((sample) => (
              <article
                key={sample.title}
                className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/70 shadow-lg"
              >
                <div className="aspect-[3/4] w-full bg-slate-800">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{sample.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {sample.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80 bg-slate-900/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            VeriSenior AI FastCheck App 產品介紹
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            VeriSenior is a fact-checking assistant designed for seniors. It helps
            users quickly verify suspicious social posts, links, and claims with
            simple Traditional Chinese explanations.
          </p>
          <p className="mt-2 text-base text-slate-400">
            VeriSenior 是專為長者設計的查證助手，以清楚易懂的繁體中文提供解釋與建議。
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <h3 className="text-2xl font-semibold text-white">What This App Does 這個 App 做什麼</h3>
              <ul className="mt-4 space-y-3 text-base text-slate-300">
                {APP_DOES.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#10b981]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <h3 className="text-2xl font-semibold text-white">Core User Flow 核心流程</h3>
              <ol className="mt-4 space-y-3 text-base text-slate-300">
                {CORE_FLOW.map((item, idx) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#004aad]/30 text-xs font-semibold text-[#93c5fd]">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Key Features 核心功能
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Built for high trust, senior accessibility, and cross-platform social verification.
          </p>
          <p className="mt-2 text-base text-slate-400">
            以高可信度、長輩友善與跨平台社群整合為核心設計。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FEATURE_BLOCKS.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004aad]/20 text-[#10b981]">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#10b981]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/80 bg-slate-900/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech Stack (Current) 目前技術架構
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 text-slate-300">
              <p className="font-semibold text-white">Frontend 前端</p>
              <p className="mt-2 text-sm">React + Vite + TypeScript + React Router</p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 text-slate-300">
              <p className="font-semibold text-white">UI 介面</p>
              <p className="mt-2 text-sm">Tailwind-style utility classes + Lucide icons</p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 text-slate-300">
              <p className="font-semibold text-white">Backend 後端</p>
              <p className="mt-2 text-sm">Node.js + Express + TypeScript</p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 text-slate-300">
              <p className="font-semibold text-white">Deployment 部署</p>
              <p className="mt-2 text-sm">Frontend: GitHub Pages / Backend: HTTPS Node host</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-700/40 bg-amber-950/20 p-5">
            <p className="text-base font-semibold text-amber-200">Deployment Note 部署說明</p>
            <p className="mt-2 text-sm leading-relaxed text-amber-100/90">
              GitHub Pages serves only static files, so real-time API/webhook features
              require a separate backend deployment. Without backend, the app can still
              run in mock/demo mode for UI and flow testing.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Footer: RightPick Technology branding ──────────────────────── */}
      <footer
        id="contact"
        className="bg-slate-900/80 px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004aad] text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  RightPick Technology Limited
                </p>
                <p className="text-sm text-slate-400">
                  VeriGuard AI · Universal fact-checking for seniors 長輩跨平台查證助手
                </p>
              </div>
            </div>
            <p className="text-base text-slate-400">
              © 2026 RightPick Technology Limited. All rights reserved. 保留所有權利。
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
