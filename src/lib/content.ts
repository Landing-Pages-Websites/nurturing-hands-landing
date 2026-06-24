/**
 * Real Nurturing Hands Doulas content — grounded in the page blueprint
 * copy_direction and the client site. No invented facts, stats, or coverage
 * promises. Carrot / HSA / FSA are framed only as "may apply" with an explicit
 * eligibility disclaimer — never as guaranteed coverage, reimbursement, or savings.
 */

export const PHONE_DISPLAY = "(415) 910-3796";
export const PHONE_HREF = "tel:+14159103796";
export const EMAIL = "Info@nurturinghandsdoulas.com";
export const EMAIL_HREF = "mailto:Info@nurturinghandsdoulas.com";
export const SERVICE_AREA = "San Francisco Bay Area";

/** Every primary CTA scrolls to the dedicated lead-form section. */
export const FORM_ANCHOR = "#contact";
export const CTA_LABEL = "Request a Consultation";

export const BENEFITS_DISCLAIMER =
  "Eligibility and coverage vary by employer and plan — we'll help you check, but we can't guarantee coverage, reimbursement, or savings.";

export interface TrustPoint {
  icon: string;
  label: string;
}

/** Trust strip shown directly under the hero. */
export const TRUST_POINTS: readonly TrustPoint[] = [
  { icon: "badge", label: "Certified doula team" },
  { icon: "shield", label: "CPR-current & background-checked" },
  { icon: "clock", label: "14+ years of experience" },
  { icon: "lifebuoy", label: "Reliable backup coverage" },
  { icon: "wallet", label: "Accepts Carrot · HSA · FSA" },
];

/** Compact microtrust row inside the hero copy column. */
export const HERO_MICROTRUST: readonly string[] = [
  "Certified team",
  "14+ years",
  "Accepts Carrot / HSA / FSA",
  "Backup coverage",
];

export interface BenefitCard {
  id: string;
  icon: string;
  eyebrow: string;
  title: string;
  body: string;
}

export const BENEFITS: readonly BenefitCard[] = [
  {
    id: "carrot",
    icon: "gift",
    eyebrow: "Family-building benefits",
    title: "Carrot Fertility",
    body:
      "Many Bay Area employers now offer Carrot Fertility as part of their family-building benefits — and those benefits may be used toward doula and newborn-care support like ours. If Carrot is part of your plan, we'll help you understand what it includes and how to make the most of it, so you can focus on your family instead of paperwork. Carrot programs differ from one employer to the next, so the details matter. We aren't affiliated with or endorsed by Carrot — we simply work with many families who have it, and we're glad to walk you through your options on your free discovery call.",
  },
  {
    id: "hsa-fsa",
    icon: "wallet",
    eyebrow: "Pre-tax accounts",
    title: "HSA / FSA",
    body:
      "Have an HSA or FSA through your employer? Many families choose to put those pre-tax dollars toward doula support, and we're happy to provide the documentation you may need for your plan. Because every plan sets its own rules for what qualifies, it's worth checking your specific account before you assume one way or the other. On your free discovery call we'll explain how families typically use HSA and FSA funds with us and what paperwork tends to help — so you can make an informed decision with your benefits administrator. No guesswork, no pressure, just clear information for your family.",
  },
];

export interface HowItWorksStep {
  num: string;
  icon: string;
  title: string;
  body: string;
}

export const HOW_IT_WORKS: readonly HowItWorksStep[] = [
  {
    num: "01",
    icon: "chat",
    title: "Book your free discovery call",
    body:
      "Tell us a little about your family and what you're hoping for. This first call is free, friendly, and completely no-obligation — a chance to ask questions and see if we're the right fit.",
  },
  {
    num: "02",
    icon: "users",
    title: "We match you with 2–3 doulas",
    body:
      "Based on your needs, timing, and personality, we hand-pick two or three doulas from our certified team who would be a wonderful match for your family.",
  },
  {
    num: "03",
    icon: "heartchat",
    title: "Interview each doula",
    body:
      "Meet your matches individually so you can ask questions and get a feel for each one. There's no pressure here — it's simply about finding the person who feels right.",
  },
  {
    num: "04",
    icon: "heart",
    title: "Choose your doula",
    body:
      "Pick the doula you connect with best, and we'll introduce your backup too — so you always have reliable coverage if life happens.",
  },
];

export interface ServiceItem {
  id: string;
  icon: string;
  name: string;
  tag: string;
  image: string;
  alt: string;
  body: string;
}

export const SERVICES: readonly ServiceItem[] = [
  {
    id: "postpartum",
    icon: "heart",
    name: "Postpartum & Recovery Support",
    tag: "Most requested",
    image: "/images/nh-istock-1.png",
    alt: "Doula gently supporting a parent with their newborn at home",
    body:
      "The early weeks home with a newborn are tender and exhausting. Our postpartum doulas step in so you can rest, heal, and bond — caring for your baby while you nap, preparing nourishing meals, tidying the nursery, and being a calm, knowledgeable presence you can ask anything. We support feeding however you choose, soothe a fussy newborn, and help you find your footing as a parent. This is practical, emotional, non-medical care shaped entirely around your family's rhythm — whether you need a few daytime hours a week or steady support through the fourth trimester.",
  },
  {
    id: "overnight",
    icon: "moon",
    name: "Overnight Newborn Care",
    tag: "Rest, restored",
    image: "/images/nh-istock-3.png",
    alt: "Peaceful sleeping newborn cared for overnight",
    body:
      "Sleep is everything for a recovering parent. With overnight newborn care, one of our experienced doulas stays through the night so you can truly rest. We handle diaper changes, soothing, and settling, bring the baby to you for feeds (or manage bottles to your plan), and keep gentle notes so your mornings start easier. You wake up rested, and your newborn is cared for by someone calm, attentive, and trained in safe-sleep practices. Many families use overnight support in the first weeks home or during a sleep-shaping stretch — as often or as occasionally as you need.",
  },
  {
    id: "birth",
    icon: "sunrise",
    name: "Birth Doula Support",
    tag: "By your side",
    image: "/images/nh-istock-2.png",
    alt: "Birth doula reassuring an expecting parent",
    body:
      "A birth doula is steady, judgment-free support before, during, and after your baby arrives. We meet with you prenatally to understand your hopes and preferences, stay reachable as your due date nears, and are by your side through labor with comfort measures, position changes, encouragement, and reassurance for you and your partner. We don't replace your medical team — we complement them with continuous, non-clinical support so you feel informed and held through every stage. After the birth, we follow up to help you settle in. Whatever path your birth takes, you won't go through it alone.",
  },
  {
    id: "lactation-sleep",
    icon: "sparkle",
    name: "Lactation Education & Gentle Sleep Support",
    tag: "Feeding & sleep",
    image: "/images/nh-istock-4.png",
    alt: "Caregiver supporting a baby during a daytime visit",
    body:
      "Feeding and sleep are where new parents feel the most pressure — and where good support changes everything. Our lactation education helps you build confidence with latch, positioning, supply questions, pumping, and bottle feeding, with patient guidance that meets your goals (this is educational support, not medical treatment). Our gentle, responsive sleep support helps you read your baby's cues and ease into healthier rhythms without harsh methods. We tailor everything to your baby's age and temperament and your family's values, so you leave each visit with a clear, doable next step instead of conflicting advice from the internet.",
  },
];

export interface TrustReason {
  icon: string;
  title: string;
  body: string;
}

export const WHY_US_REASONS: readonly TrustReason[] = [
  {
    icon: "clock",
    title: "14+ years of experience",
    body: "More than a decade caring for Bay Area families through birth, recovery, and those first tender months at home.",
  },
  {
    icon: "badge",
    title: "Certified, CPR-current & background-checked",
    body: "Every doula on our team is certified, holds current CPR training, and is fully background-checked before they ever meet your family.",
  },
  {
    icon: "lifebuoy",
    title: "Reliable backup coverage",
    body: "Life happens — so every family is introduced to a backup doula and is never left without trusted support when they need it.",
  },
  {
    icon: "heart",
    title: "Founder-led, team-based care",
    body: "Founded and guided by Carla Rocha, our close-knit team works the way she does: warm, dependable, and genuinely present.",
  },
];

export interface VoiceTheme {
  icon: string;
  title: string;
  body: string;
}

/**
 * Voice-of-customer themes — NOT fabricated named reviews or star ratings.
 * Per the blueprint, real attributable testimonials weren't supplied, so we
 * describe the kind of experience families have and offer references on request.
 */
export const VOICE_THEMES: readonly VoiceTheme[] = [
  {
    icon: "moon",
    title: "Rest in the fourth trimester",
    body: "The gift families mention most is rest — knowing someone experienced is caring for their newborn so they can finally sleep, heal, and feel human again.",
  },
  {
    icon: "users",
    title: "A doula who truly fit",
    body: "Parents value being matched thoughtfully and getting to choose the doula who felt right for their family — never assigned a stranger.",
  },
  {
    icon: "heart",
    title: "Support without judgment",
    body: "Whether feeding goes to plan or takes a different path, families appreciate calm, non-judgmental guidance that meets them exactly where they are.",
  },
];

export const REFERENCES_STATEMENT =
  "We're proud of the relationships we build with the families we serve — and we're glad to share references from past clients during your free discovery call.";

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: readonly Faq[] = [
  {
    q: "Will my employer benefit or HSA/FSA cover doula support?",
    a: "It may — many Bay Area families use Carrot family-building benefits or pre-tax HSA/FSA funds toward doula support. But eligibility and coverage vary by employer and plan, so we can't promise coverage, reimbursement, or savings. What we can do is help you understand your options and provide documentation you may need; the final word always comes from your plan or benefits administrator.",
  },
  {
    q: "What does a doula actually do?",
    a: "A doula provides practical and emotional support — not medical care. Depending on the type of support, that can mean comfort and reassurance during labor, caring for your newborn so you can rest, help with feeding and gentle sleep, light newborn-related tasks, and simply being an experienced, calming presence. We complement your medical providers; we never replace them.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve families across the San Francisco Bay Area. If you're not sure whether you're in our range, just ask on your discovery call and we'll let you know.",
  },
  {
    q: "How does matching work?",
    a: "After your free discovery call, we match you with two or three certified doulas suited to your needs and personality. You interview each one and choose who feels right — and we introduce a backup doula so you're always covered.",
  },
  {
    q: "When should I book?",
    a: "Earlier is easier — many families reach out during pregnancy so their doula is lined up before baby arrives, but it's never too late. If you already have a newborn at home, we can often arrange support quickly. The best first step is a free discovery call.",
  },
  {
    q: "How does pricing work?",
    a: "Every family's needs are different, so we talk through pricing personally on your free discovery call once we understand the kind of support you're looking for. There's no obligation, and we'll be transparent about options — including how Carrot, HSA, or FSA benefits may apply.",
  },
];

export interface ServiceOption {
  value: string;
  label: string;
}

export const SERVICE_INTEREST_OPTIONS: readonly ServiceOption[] = [
  { value: "postpartum", label: "Postpartum support" },
  { value: "overnight", label: "Overnight newborn care" },
  { value: "birth", label: "Birth support" },
  { value: "lactation-sleep", label: "Lactation & sleep support" },
  { value: "not-sure", label: "Not sure yet" },
];
