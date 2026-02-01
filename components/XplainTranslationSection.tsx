
import React from 'react';
import {
  Languages,
  Layers,
  Search,
  MessageSquare,
  ArrowRight,
  Layout,
  ClipboardCheck,
  FileText,
  Monitor,
  BookOpen,
  Eye,
  Activity,
  CircleQuestionMark,
  CircleCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type CarouselItem = {
  img: string;
  label: string;
};

const VideoCarousel: React.FC<{ items: CarouselItem[] }> = ({ items }) => {
  const [current, setCurrent] = React.useState(0);

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4 w-full max-w-4xl">

        {/* Left Arrow */}
        <button
          onClick={() => setCurrent((current - 1 + items.length) % items.length)}
          className="bg-white border border-primary/40 text-primary rounded-full p-2.5 shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Video */}
        <div className="w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
          <video
            key={items[current].src}   // forces reload when switching
            src={items[current].src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrent((current + 1) % items.length)}
          className="bg-white border border-primary/40 text-primary rounded-full p-2.5 shadow-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full ${i === current ? "bg-primary" : "bg-slate-300"
              }`}
          />
        ))}
      </div>

      {/* Label */}
      <p className="text-sm font-bold text-ink-light text-center">
        {items[current].label}
      </p>
    </div>
  );
};

const videoItems = [
  {
    src: `${import.meta.env.BASE_URL}videos/language-switching.mp4`,
    label: "Language-switching interaction",
  },
  {
    src: `${import.meta.env.BASE_URL}videos/translation-conversation.mp4`,
    label: "The conversation with embedded clarifications and counterbalanced items",
  },
];

const XplainTranslationSection: React.FC = () => {
  return (
    <div className="space-y-20 animate-[fadeIn_0.5s_ease-out]">

      {/* Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-black text-ink mb-6 flex items-center gap-3">
          <span className="text-primary">04.</span> Translation Study: When and How Language Support Helps in Real-Time Conversations
        </h2>
      </div>

      {/* 4.1 Motivation & Study Goal */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
          <div className="p-2 bg-primary-light rounded-lg">
            <Languages className="w-5 h-5 text-primary-dark" />
          </div>
          <h3 className="text-xl font-heading font-bold text-ink">Motivation & Study Goal</h3>
        </div>

        <p className="text-ink-light mb-6 text-lg">
          In earlier studies, non-native speakers expressed conflicting needs around translation. Some preferred native-language explanations as they would feel faster and less mentally taxing. Others said they would find translation disruptive, especially when preparing to speak, because it adds reading and integration effort during already time-pressured moments. <span className="text-ink font-bold">This revealed a core design tension: Translation can reduce comprehension effort, but it can also interfere with response planning in an English conversation.</span> Rather than assuming translation is always helpful, we explored when translation supports real-time participation and when it undermines it.
        </p>

        {/* Problem Statement Box */}
        <div className="mt-8 bg-ink text-white p-6 md:p-10 rounded-3xl shadow-card relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-primary font-bold uppercase tracking-widest text-xs">
              <Search className="w-4 h-4" /> Problem Statement
            </div>
            <h3 className="text-lg md:text-2xl font-heading font-bold leading-relaxed">
              How should language support be presented during live conversations so it improves understanding and participation without increasing cognitive load or disrupting turn-taking for non-native speakers?            </h3>
          </div>
        </div>
      </section>

      {/* 4.2 Key Design Dimensions */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
          <div className="p-2 bg-primary-light rounded-lg">
            <Layers className="w-5 h-5 text-primary-dark" />
          </div>
          <h3 className="text-xl font-heading font-bold text-ink">Key Design Dimensions</h3>
        </div>

        <p className="text-ink-light mb-6 text-lg">
          From psycholinguistic literature reviews, we identified 2 factors that strongly shape language support usefulness:
        </p>

        {/* Conversational Context */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-start">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
                <span className="bg-ink text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> Conversational Context
              </h4>
              <ul className="space-y-2 text-lg text-ink-light list-disc pl-6 marker:text-primary">
                <li><span className="text-ink font-bold">Comprehension:</span> Listening and integrating incoming information</li>
                <li><span className="text-ink font-bold">Production:</span> Preparing and delivering a response under time pressure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Domain Type */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-start">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
                <span className="bg-ink text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span> Domain Type
              </h4>
              <ul className="space-y-2 text-lg text-ink-light list-disc pl-6 marker:text-primary">
                <li><span className="text-ink font-bold">High-Domain:</span> Technical, specialized terminology requiring domain expertise for full comprehension and application</li>
                <li><span className="text-ink font-bold">Low-Domain:</span> Descriptive, academic, or everyday vocabulary not requiring specialized domain knowledge</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-ink-light mb-6 text-lg">
          These dimensions matter as:
        </p>

        <ul className="space-y-2 text-lg text-ink-light list-disc pl-6 marker:text-primary">
          <li><span className="text-ink font-bold">Technical</span> concepts may be more strongly represented in one language than another </li>
          <li><span className="text-ink font-bold">Comprehension</span> allows time to integrate information, while <span className="text-ink font-bold">Production</span> requires immediate transformation into speech</li>
        </ul>

        <p className="text-ink-light mb-6 text-lg">
          Rather than committing to a single translation strategy, we explored how different language formats behave across these real conversational situations.
        </p>
      </section>

      {/* 4.3 Why Only Clarifications? */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
          <div className="p-2 bg-primary-light rounded-lg">
            <CircleQuestionMark className="w-5 h-5 text-primary-dark" />
          </div>
          <h3 className="text-xl font-heading font-bold text-ink">Why Only Clarifications (and Not Other Features)</h3>
        </div>

        <p className="text-ink-light mb-6 text-lg">
          To keep the experience realistic and the study manageable due to time constraints, we focused exclusively on clarifications:
        </p>

        <ul className="space-y-2 text-lg text-ink-light list-disc pl-6 marker:text-primary">
          <li> They were easier to control without changing conversational flow</li>
          <li> They allowed us to vary language format without altering what participants were asked to say </li>
        </ul>

        <p className="text-ink-light mb-6 text-lg">
          Including suggestions or summaries would have added competing interventions, increased session length, and made it harder to isolate how language format affects real-time interaction.        </p>
      </section>

      {/* 4.4 Hypotheses */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
          <div className="p-2 bg-primary-light rounded-lg">
            <CircleQuestionMark className="w-5 h-5 text-primary-dark" />
          </div>
          <h3 className="text-xl font-heading font-bold text-ink">Hypotheses We Needed to Validate</h3>
        </div>

        <p className="text-ink-light mb-6 text-lg">
          From psycholinguistic literature reviews, we developed several hypotheses:
        </p>

        <ul className="space-y-2 text-lg text-ink-light list-disc pl-6 marker:text-primary">
          <li> 1) High-Domain content will show greater sensitivity to display format than Low-Domain content.</li>
          <li> 2) Formats that have translations (L1/Bilingual) will help more in Comprehension than in Production.</li>
          <li> 3) The Domain × Format interaction will be strongest in Comprehension and attenuated in Production.</li>
          <li> 4) Lower L2 proficiency participants will show larger Translation benefits.</li>
        </ul>

        <p className="text-ink-light mb-6 text-lg">
          This study was designed to evaluate these hypotheses before committing to a single product strategy.
        </p>
      </section>

      {/* 4.4 Conversational Scenario Design */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
          <div className="p-2 bg-primary-light rounded-lg">
            <MessageSquare className="w-5 h-5 text-primary-dark" />
          </div>
          <h3 className="text-xl font-heading font-bold text-ink">Conversational Scenario Design</h3>
        </div>

        <div>
          <p className="text-ink-light leading-relaxed mb-8 max-w-4xl text-lg">
            We chose a dietitian visit as  it naturally integrates:
          </p>

          <ul className="space-y-3 text-lg text-ink-light list-disc pl-6 marker:text-primary mb-10">
            <li><span className="text-ink font-bold">High-Domain</span> (medical, diet terminology) and <span className="text-ink font-bold">low-domain</span> (non-technical) terms</li>
            <li><span className="text-ink font-bold">Comprehension</span> (listening to explanations) and <span className="text-ink font-bold">Production</span> (responding and describing habits, conditions, etc.)</li>
            <li><span className="text-ink font-bold">Realistic time pressure</span> without requiring specialized prior knowledge.</li>
            <li><span className="text-ink font-bold">Broad relevance and accessibility for college students (participants):</span> diet, eating routines, sleep, and gym habits are familiar and applicable to most participants, allowing them to meaningfully engage, contribute responses, and ask questions, unlike niche medical topics tied to chronic conditions or older populations</li>
          </ul>
        </div>
      </section>

      {/* 4.5 Feature Design */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
          <div className="p-2 bg-primary-light rounded-lg">
            <Layout className="w-5 h-5 text-primary-dark" />
          </div>
          <h3 className="text-xl font-heading font-bold text-ink">Feature Design</h3>
        </div>

        {/* Vertical Stack: Text -> Images below */}
        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            <p className="text-ink-light leading-relaxed text-lg">
              Clarifications appear in <span className="text-ink font-bold">Translation, English, or Bilingual formats</span> depending on the factorial assigned condition. They appear either during <span className="text-ink font-bold">comprehension</span> (while listening), or <span className="text-ink font-bold">immediately before speaking</span> (during response preparation). Users can <span className="text-ink font-bold">manually switch languages at any time</span>, preserving autonomy and revealing preference behavior.            </p>

            <div className="bg-primary/10 border-l-4 border-primary/50 p-6 rounded-r-xl">
              <p className="text-ink text-lg leading-relaxed">
                <span className="font-bold">UI Change:</span> Script constrained to 1–2 lines per slide to simulate real caption timing and prevent premature clicking.
              </p>
            </div>
          </div>

          {/* Videos */}
          <VideoCarousel items={videoItems} />
        </div>
      </section>

      {/* Note: Ongoing Data Collection & Analysis */}
      <section>
        <div className="border-2 border-dashed border-slate-300 bg-slate-50 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="p-4 bg-white rounded-full shadow-sm border border-slate-100 shrink-0">
            <Activity className="w-6 h-6 text-slate-400 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Evaluation & Status</div>
            <p className="text-ink-light text-lg md:text-lg leading-relaxed">
              I have run <span className="text-ink font-bold">4 live Wizard-of-Oz Zoom user study sessions</span> for this study. Data collection and analysis for this study is still ongoing. I am currently responsible for the thematic analysis of interview data in <span className="text-ink font-bold">ATLAS.ti</span>.            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default XplainTranslationSection;
