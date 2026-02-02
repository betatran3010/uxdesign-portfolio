
import React from 'react';
import {
  Goal,
  Search,
  Layout,
  Activity,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

type CarouselItem = {
  img: string;
  label: string;
};

const ImageCarousel: React.FC<{ items: CarouselItem[] }> = ({ items }) => {
  const [current, setCurrent] = React.useState(0);

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4 w-full max-w-4xl">

        {/* Left Arrow */}
        <button
          onClick={() =>
            setCurrent((current - 1 + items.length) % items.length)
          }
          className="bg-white border border-primary/40 text-primary rounded-full p-2.5 shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="w-full">
          <img
            src={items[current].img}
            alt={items[current].label}
            className="w-full h-auto rounded-xl border border-slate-200 shadow-sm"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setCurrent((current + 1) % items.length)
          }
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

const proficiencyClarificationImages = [
  { label: "Low Proficiency Clarification: Clarifies both simple and complex unfamiliar terms", img: `${import.meta.env.BASE_URL}images/low-clarification.png` },
  { label: "Medium Proficiency Clarification: Focuses on figurative, abstract, or less transparent expressions", img: `${import.meta.env.BASE_URL}images/medium-clarification.png` },
  { label: "High Proficiency Clarification: Prioritizes clarifications for niche, domain-specific terms where even highly fluent users may lack prior exposure", img: `${import.meta.env.BASE_URL}images/high-clarification.png` }
];

const proficiencySuggestionImages = [
  { img: `${import.meta.env.BASE_URL}images/low-suggestion.png`, label: "Low Proficiency Suggestion: Idea-level + sentence-level suggestions with explicit agree/disagree framing to lower production pressure and sentence construction effort" },
  { img: `${import.meta.env.BASE_URL}images/medium-suggestion.png`, label: "Medium Proficiency Suggestion: Sentence-level ideas that support planning without serving as ready-made responses so users are required to formulate their own wording" },
  { img: `${import.meta.env.BASE_URL}images/high-suggestion.png`, label: "High Proficiency Suggestion: Compact, abstract, conceptual descriptors to preserve agency and reduce reading time" }
];

const XplainPersonalizationSection: React.FC = () => {

  return (
    <div className="space-y-20 animate-[fadeIn_0.5s_ease-out]">
      {/* Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-black text-ink mb-6 flex items-center gap-3">
          <span className="text-primary">03.</span> Personalization Study: Adapting Proactive Support Across Proficiency Levels
        </h2>

        {/* Motivation / Context */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
            <div className="p-2 bg-primary-light rounded-lg">
              <Goal className="w-5 h-5 text-primary-dark" />
            </div>
            <h3 className="text-xl font-heading font-bold text-ink">Motivation & Study Goal</h3>
          </div>

          <p className="text-ink-light mb-6 text-lg">
            Baseline analyses revealed <span className="text-ink font-bold">proficiency-related differences</span> in clarification uptake, suggestion integration/reliance, and reading time and perceived usefulness of these features, motivating an investigation into <span className="text-ink font-bold">proficiency-aware</span> rather than uniform proactive support.
          </p>

          {/* Problem Statement */}
          <div className="mt-8 bg-ink text-white p-6 md:p-10 rounded-3xl shadow-card relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 text-primary font-bold uppercase tracking-widest text-xs">
                <Search className="w-4 h-4" /> Problem Statement
              </div>
              <h3 className="text-lg md:text-2xl font-heading font-bold leading-relaxed">
                Can proactively tailoring clarification targets and suggestion framing to users’ language proficiency improve perceived usefulness and preserve self-agency where over-scaffolding becomes costly in real-time conversations?
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* 3.1 Scenario & Design */}
      <section className="space-y-10">
        <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
          <div className="p-2 bg-primary-light rounded-lg">
            <Layout className="w-5 h-5 text-primary-dark" />
          </div>
          <h3 className="text-xl font-heading font-bold text-ink">Conversational Scenario & Feature Design</h3>
        </div>

        {/* Scenario Script */}
        <p className="text-ink-light mb-6 text-lg">
          We evaluated personalization using a <span className="text-ink font-bold">data privacy</span> discussion as it involves abstract concepts, institutional language, and culturally specific terminology that vary widely across proficiency levels while still eliciting participants’ values and perspectives easily.
        </p>

        {/* Feature Design: Clarifications */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-start">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
                <span className="bg-ink text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span> Clarifications
              </h4>
              <p className="text-ink-light mb-4 text-lg">
                Clarifications focused on 5 common sources of confusion: <span className="text-ink font-bold">slang, idioms, initialisms, complex words, and cultural references</span>. We tuned how difficult the clarified terms were at each proficiency level:
              </p>
            </div>
          </div>

          {/* Visuals */}
          <ImageCarousel items={proficiencyClarificationImages} />
        </div>

        {/* Feature Design: Suggestions */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
            <span className="bg-ink text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span> Suggestions
          </h4>

          <p className="text-ink-light mb-4 text-lg">
            Suggestions can either support response planning or compete with users’ own reasoning. We redesigned suggestion framing to scale with support needs.          </p>

          <div className="bg-primary/10 border-l-4 border-primary/50 p-6 rounded-r-xl mb-6">
            <p className="text-ink text-lg leading-relaxed">
              <span className="font-bold">UI Change:</span> Replaced the original generic label “Sentence/Idea Suggestions” with the actual question being asked, helping users quickly orient and refer back to relevant prompts.
            </p>
          </div>

          {/* Visuals */}
          <ImageCarousel items={proficiencySuggestionImages} />
        </div>

        {/* Feature Design: Summaries */}
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-bold text-ink mb-3 flex items-center gap-2">
              <span className="bg-ink text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span> Summaries
            </h4>

            <p className="text-ink-light mb-6 text-lg">
              Summaries showed no clear proficiency differences, but baseline findings revealed they were often ignored mid-conversation due to time pressure.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary/50 p-6 rounded-r-xl mb-6 mt-8">
              <p className="text-ink text-lg leading-relaxed">
                <span className="font-bold text-ink">UI Change:</span> Summaries were displayed in a minimized form with a brief 3-5 word descriptor, allowing users to quickly reference key context without reading the full summary and preserving access even when the panel auto-minimized for subsequent support.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/all-summary.png`}
              alt="Iterated Summary Design"
              className="w-full max-w-3xl h-auto rounded-xl border border-slate-200 shadow-sm"
            />
            <p className="text-sm font-bold text-ink-light text-center">
              Iterated Summary Design
            </p>
          </div>
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
              I ran <span className="text-ink font-bold">11 live Wizard-of-Oz Zoom user study sessions</span> using proficiency-matched Figma flows. Data collection and analysis for this study is still ongoing. I am currently responsible for the thematic analysis of interview data in <span className="text-ink font-bold">ATLAS.ti</span>.            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default XplainPersonalizationSection;
