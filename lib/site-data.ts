export type Language = "en" | "am";
export type PackageCategory = "umrah" | "hajj" | "uae" | "world";

export type LocalizedText = Record<Language, string>;

export type TravelPackage = {
  id: string;
  category: PackageCategory;
  title: LocalizedText;
  duration: LocalizedText;
  description: LocalizedText;
  location: LocalizedText;
  image: string;
  featured?: boolean;
  features: LocalizedText[];
};

export const contact = {
  primaryPhone: "+251990333355",
  primaryDisplay: "0990 333 355",
  secondaryPhone: "+251990333377",
  secondaryDisplay: "0990 333 377",
  whatsapp: "251990333377",
  email: "Info@sewabgroups.com",
  office: "Addis Ababa, Ethiopia",
  hours: "Mon–Sat · 8:30 AM–6:00 PM",
  social: {
    facebook: "https://facebook.com/sewab_travel",
    instagram: "https://instagram.com/sewab_travel",
    telegram: "https://t.me/sewab_travel",
    tiktok: "https://tiktok.com/@sewab_travel",
  },
};

export const copy = {
  en: {
    nav: [
      ["Home", "#home"],
      ["Services", "#services"],
      ["Packages", "#packages"],
      ["How it works", "#process"],
      ["Stories", "#stories"],
      ["Contact", "#contact"],
    ],
    menu: "Menu",
    close: "Close",
    language: "አማ",
    eyebrow: "Umrah, Hajj & curated journeys from Ethiopia",
    heroTitleA: "Travel with",
    heroTitleB: "purpose.",
    heroTitleC: "Return with stories.",
    heroBody:
      "SEWAB designs carefully managed spiritual and leisure journeys—from Addis Ababa to the Holy Cities, the UAE, and inspiring destinations worldwide.",
    explore: "Explore packages",
    whatsapp: "Plan on WhatsApp",
    available: "Travel advisors available",
    heroProof: ["Visa guidance", "Flight coordination", "Trusted hotels", "Amharic support"],
    trustTitle: "Every detail, thoughtfully managed.",
    trustBody:
      "A journey should feel exciting—not complicated. Our team combines local support, careful planning, and reliable partners so you can focus on what matters.",
    serviceEyebrow: "What we design",
    serviceTitle: "Journeys built around your reason for going.",
    services: [
      {
        icon: "kaaba",
        title: "Umrah & Hajj",
        body: "Complete pilgrimage coordination with visa support, flights, hotels, transport, and knowledgeable guidance.",
      },
      {
        icon: "building",
        title: "UAE Experiences",
        body: "Curated Dubai and Abu Dhabi journeys for families, groups, shopping, business, and celebrations.",
      },
      {
        icon: "globe",
        title: "World Tours",
        body: "Memorable international itineraries designed around your interests, comfort, pace, and budget.",
      },
      {
        icon: "briefcase",
        title: "Corporate Travel",
        body: "Organized travel support for teams, conferences, delegations, and business journeys.",
      },
    ],
    packagesEyebrow: "Featured journeys",
    packagesTitle: "Choose a starting point. We’ll tailor the rest.",
    packagesBody:
      "Package details can be adapted to your dates, group size, comfort level, and travel goals. Contact our advisors for current availability and pricing.",
    filters: {
      all: "All journeys",
      umrah: "Umrah",
      hajj: "Hajj",
      uae: "UAE",
      world: "World",
    },
    viewDetails: "Ask about this trip",
    processEyebrow: "Simple from the start",
    processTitle: "From first message to safe return.",
    process: [
      {
        number: "01",
        title: "Tell us your plan",
        body: "Share your destination, preferred dates, group size, and the experience you want.",
      },
      {
        number: "02",
        title: "Review your options",
        body: "We prepare clear itinerary and package options matched to your priorities.",
      },
      {
        number: "03",
        title: "We coordinate",
        body: "Our team manages travel documents, bookings, timing, transfers, and guidance.",
      },
      {
        number: "04",
        title: "Travel confidently",
        body: "Receive pre-departure support and stay connected with our team throughout your journey.",
      },
    ],
    pilgrimageEyebrow: "Pilgrimage with peace of mind",
    pilgrimageTitle: "Your heart on worship. Our hands on the details.",
    pilgrimageBody:
      "From the first briefing in Addis Ababa to Makkah and Madinah, SEWAB supports pilgrims with dignity, clarity, and attentive coordination.",
    pilgrimagePoints: [
      "Return flight coordination from Addis Ababa",
      "Visa and document guidance",
      "Hotels selected for practical access",
      "Ground transport and group coordination",
      "Experienced Amharic-speaking support",
      "Pre-departure orientation and checklists",
    ],
    stats: [
      ["Addis Ababa", "Local support"],
      ["End-to-end", "Journey care"],
      ["Amharic", "Guidance available"],
      ["Mon–Sat", "Travel advisors"],
    ],
    storiesEyebrow: "Traveller stories",
    storiesTitle: "The best journeys are felt long after returning.",
    testimonials: [
      {
        quote:
          "Everything was arranged before we landed. The guidance made every step feel clear, calm, and meaningful. Alhamdulillah.",
        name: "Ahmed Yusuf",
        location: "Addis Ababa",
      },
      {
        quote:
          "SEWAB listened to our family’s needs and made the whole experience feel organized. We always knew what came next.",
        name: "Samira M.",
        location: "Adama",
      },
      {
        quote:
          "The communication was excellent from the first call until we returned. Their team handled the details with real care.",
        name: "Mohammed A.",
        location: "Dire Dawa",
      },
    ],
    previous: "Previous story",
    next: "Next story",
    faqEyebrow: "Before you travel",
    faqTitle: "Answers for a more confident journey.",
    faqs: [
      {
        q: "What is normally included in an Umrah package?",
        a: "Packages commonly include return flights, visa processing support, accommodation, airport and intercity transfers, and group guidance. Exact inclusions are confirmed clearly before booking.",
      },
      {
        q: "Can packages be adjusted for families or private groups?",
        a: "Yes. Dates, hotel level, room setup, duration, transport, and itinerary can be adapted based on availability and your group’s priorities.",
      },
      {
        q: "Do you help with travel documents and visa preparation?",
        a: "Our advisors explain the required documents, review your preparation, and coordinate the applicable visa process for the selected destination.",
      },
      {
        q: "How early should I contact SEWAB?",
        a: "Earlier planning gives you more flight and accommodation options. Contact us as soon as you have approximate dates, especially for peak pilgrimage seasons and group travel.",
      },
      {
        q: "How do I receive current prices?",
        a: "Airfare, hotel rates, and visa costs change. Send your dates and group details through the enquiry form or WhatsApp for an up-to-date, tailored quotation.",
      },
    ],
    contactEyebrow: "Start your journey",
    contactTitle: "Tell us where you want to go.",
    contactBody:
      "Share a few details and we’ll open a prepared WhatsApp message to our travel advisors. No payment is collected on this website.",
    form: {
      name: "Full name",
      namePlaceholder: "Your name",
      phone: "Phone number",
      phonePlaceholder: "09…",
      journey: "Journey type",
      choose: "Choose a journey",
      date: "Preferred travel month",
      travellers: "Number of travellers",
      notes: "Anything else we should know?",
      notesPlaceholder: "Dates, children, hotel preference, group needs…",
      submit: "Send enquiry on WhatsApp",
      privacy: "Your details stay in your browser until WhatsApp opens.",
      error: "Please complete your name, phone number, and journey type.",
    },
    office: "SEWAB office",
    call: "Call our advisors",
    email: "Email us",
    footerBody:
      "Thoughtfully designed spiritual and leisure journeys from Ethiopia to the world.",
    quickLinks: "Explore",
    getInTouch: "Get in touch",
    rights: "All rights reserved.",
    powered: "Powered by HisabTech",
    backTop: "Back to top",
  },
  am: {
    nav: [
      ["መነሻ", "#home"],
      ["አገልግሎቶች", "#services"],
      ["ፓኬጆች", "#packages"],
      ["አሰራራችን", "#process"],
      ["ተሞክሮዎች", "#stories"],
      ["ያግኙን", "#contact"],
    ],
    menu: "ምናሌ",
    close: "ዝጋ",
    language: "EN",
    eyebrow: "ከኢትዮጵያ የሚጀምሩ የዑምራ፣ የሐጅ እና የጉብኝት ጉዞዎች",
    heroTitleA: "በዓላማ",
    heroTitleB: "ይጓዙ።",
    heroTitleC: "በታሪክ ይመለሱ።",
    heroBody:
      "ሰዋብ ከአዲስ አበባ ወደ ቅዱሳን ከተሞች፣ ዩኤኢ እና የዓለም መዳረሻዎች የሚደረጉ መንፈሳዊና የመዝናኛ ጉዞዎችን በጥንቃቄ ያዘጋጃል።",
    explore: "ፓኬጆችን ይመልከቱ",
    whatsapp: "በዋትስአፕ ያቅዱ",
    available: "የጉዞ አማካሪዎቻችን ዝግጁ ናቸው",
    heroProof: ["የቪዛ ድጋፍ", "የበረራ ዝግጅት", "ታማኝ ሆቴሎች", "የአማርኛ ድጋፍ"],
    trustTitle: "እያንዳንዱ ዝርዝር በጥንቃቄ ይከናወናል።",
    trustBody:
      "ጉዞ አስደሳች እንጂ ውስብስብ መሆን የለበትም። ቡድናችን እርስዎ በአስፈላጊው ነገር ላይ እንዲያተኩሩ የአካባቢ ድጋፍን፣ ጥንቃቄ የተሞላበት ዕቅድን እና ታማኝ አጋሮችን ያጣምራል።",
    serviceEyebrow: "የምናዘጋጃቸው ጉዞዎች",
    serviceTitle: "ለጉዞዎ ዓላማ ተስማሚ የሆነ አገልግሎት።",
    services: [
      {
        icon: "kaaba",
        title: "ዑምራ እና ሐጅ",
        body: "ቪዛ፣ በረራ፣ ሆቴል፣ ትራንስፖርት እና የጉዞ መመሪያን ያካተተ ሙሉ የሐጅና ዑምራ ዝግጅት።",
      },
      {
        icon: "building",
        title: "የዩኤኢ ጉብኝት",
        body: "ለቤተሰብ፣ ለቡድን፣ ለግብይት፣ ለንግድ እና ለበዓላት የተዘጋጁ የዱባይና አቡዳቢ ጉዞዎች።",
      },
      {
        icon: "globe",
        title: "የዓለም ጉብኝት",
        body: "ከፍላጎትዎ፣ ከምቾትዎ፣ ከጊዜዎ እና ከበጀትዎ ጋር የሚስማሙ ዓለም አቀፍ ጉዞዎች።",
      },
      {
        icon: "briefcase",
        title: "የድርጅት ጉዞ",
        body: "ለቡድኖች፣ ለኮንፈረንሶች፣ ለልዑካን እና ለንግድ ጉዞዎች የተደራጀ ድጋፍ።",
      },
    ],
    packagesEyebrow: "የተመረጡ ጉዞዎች",
    packagesTitle: "መነሻዎን ይምረጡ፤ ቀሪውን እኛ እናስተካክላለን።",
    packagesBody:
      "የፓኬጅ ዝርዝሮች በቀንዎ፣ በቡድንዎ ብዛት፣ በምቾት ደረጃዎ እና በጉዞ ዓላማዎ መሠረት ሊስተካከሉ ይችላሉ። ለወቅታዊ ዋጋና ቦታ ያነጋግሩን።",
    filters: {
      all: "ሁሉም",
      umrah: "ዑምራ",
      hajj: "ሐጅ",
      uae: "ዩኤኢ",
      world: "ዓለም",
    },
    viewDetails: "ስለዚህ ጉዞ ይጠይቁ",
    processEyebrow: "ቀላል አሰራር",
    processTitle: "ከመጀመሪያው መልዕክት እስከ ደህና መመለስ።",
    process: [
      { number: "01", title: "ዕቅድዎን ይንገሩን", body: "መዳረሻዎን፣ ቀንዎን፣ የተጓዦችን ብዛት እና የሚፈልጉትን ተሞክሮ ያጋሩ።" },
      { number: "02", title: "አማራጮችን ይመልከቱ", body: "ከቅድሚያዎ ጋር የሚስማሙ ግልጽ የጉዞና የፓኬጅ አማራጮችን እናዘጋጃለን።" },
      { number: "03", title: "ዝግጅቱን እንመራለን", body: "ሰነዶችን፣ ቦታ ማስያዝን፣ የጊዜ ሰሌዳን፣ ትራንስፖርትን እና መመሪያን እናስተዳድራለን።" },
      { number: "04", title: "በእምነት ይጓዙ", body: "ከጉዞ በፊት ድጋፍ ያግኙ እና በጉዞዎ ሙሉ ጊዜ ከቡድናችን ጋር ይገናኙ።" },
    ],
    pilgrimageEyebrow: "በሰላም የሚከናወን የእምነት ጉዞ",
    pilgrimageTitle: "ልብዎ በአምልኮ፤ ዝርዝሩ በእኛ እጅ።",
    pilgrimageBody:
      "ከአዲስ አበባው የመጀመሪያ መመሪያ እስከ መካና መዲና፣ ሰዋብ ምዕመናንን በክብር፣ በግልጽነት እና በጥንቃቄ ይደግፋል።",
    pilgrimagePoints: ["ከአዲስ አበባ የበረራ ዝግጅት", "የቪዛና የሰነድ ድጋፍ", "ተግባራዊ ቅርበት ያላቸው ሆቴሎች", "የመሬት ትራንስፖርትና የቡድን አስተዳደር", "ልምድ ያለው የአማርኛ ድጋፍ", "ከጉዞ በፊት መመሪያና የማረጋገጫ ዝርዝር"],
    stats: [["አዲስ አበባ", "የአካባቢ ድጋፍ"], ["ከጅምር እስከ ፍጻሜ", "የጉዞ እንክብካቤ"], ["አማርኛ", "የመመሪያ ድጋፍ"], ["ሰኞ–ቅዳሜ", "የጉዞ አማካሪዎች"]],
    storiesEyebrow: "የተጓዦች ተሞክሮ",
    storiesTitle: "ምርጥ ጉዞዎች ከተመለሱ በኋላም ይሰማሉ።",
    testimonials: [
      { quote: "ከመድረሳችን በፊት ሁሉም ነገር ተዘጋጅቶ ነበር። መመሪያው እያንዳንዱን ደረጃ ግልጽና ሰላማዊ አደረገው። አልሐምዱሊላህ።", name: "አሕመድ ዩሱፍ", location: "አዲስ አበባ" },
      { quote: "ሰዋብ የቤተሰባችንን ፍላጎት አዳምጦ ሙሉ ጉዞውን በጥሩ ሁኔታ አደራጀ። ቀጥሎ የሚሆነውን ሁልጊዜ እናውቅ ነበር።", name: "ሰሚራ ኤም.", location: "አዳማ" },
      { quote: "ከመጀመሪያው ጥሪ እስከ ተመለስንበት ድረስ ግንኙነቱ ግሩም ነበር። ዝርዝሮቹን በእውነተኛ እንክብካቤ አስተናግደዋል።", name: "መሐመድ ኤ.", location: "ድሬዳዋ" },
    ],
    previous: "የቀድሞ ተሞክሮ",
    next: "ቀጣይ ተሞክሮ",
    faqEyebrow: "ከጉዞ በፊት",
    faqTitle: "በድፍረት ለመጓዝ የሚረዱ መልሶች።",
    faqs: [
      { q: "የዑምራ ፓኬጅ በተለምዶ ምን ያካትታል?", a: "ፓኬጆች በተለምዶ የመልስ በረራ፣ የቪዛ ሂደት ድጋፍ፣ ማረፊያ፣ የአየር ማረፊያና የከተማ መካከል ትራንስፖርት እና የቡድን መመሪያ ያካትታሉ።" },
      { q: "ፓኬጆች ለቤተሰብ ወይም ለግል ቡድን ሊስተካከሉ ይችላሉ?", a: "አዎ። ቀኖች፣ የሆቴል ደረጃ፣ የክፍል አወቃቀር፣ ቆይታ፣ ትራንስፖርት እና የጉዞ መርሐ ግብር በቦታ አቅርቦትና በቡድንዎ ፍላጎት ሊስተካከሉ ይችላሉ።" },
      { q: "በጉዞ ሰነድና ቪዛ ዝግጅት ትረዳላችሁ?", a: "አማካሪዎቻችን የሚያስፈልጉትን ሰነዶች ያብራራሉ፣ ዝግጅትዎን ይመለከታሉ እና ለተመረጠው መዳረሻ የሚመለከተውን የቪዛ ሂደት ያስተባብራሉ።" },
      { q: "ሰዋብን ምን ያህል ቀደም ብዬ ማነጋገር አለብኝ?", a: "ቀደም ብሎ ማቀድ ተጨማሪ የበረራና የማረፊያ አማራጭ ይሰጣል። በተለይ በየሐጅ ወቅትና በቡድን ጉዞ ግምታዊ ቀን እንዳለዎት ያነጋግሩን።" },
      { q: "ወቅታዊ ዋጋ እንዴት አገኛለሁ?", a: "የበረራ፣ የሆቴልና የቪዛ ወጪዎች ይለዋወጣሉ። ቀንዎንና የቡድንዎን ዝርዝር በቅጹ ወይም በዋትስአፕ ይላኩ።" },
    ],
    contactEyebrow: "ጉዞዎን ይጀምሩ",
    contactTitle: "የት መሄድ እንደሚፈልጉ ይንገሩን።",
    contactBody: "ጥቂት ዝርዝሮችን ያጋሩ፤ በዋትስአፕ ለጉዞ አማካሪዎቻችን የተዘጋጀ መልዕክት እንከፍታለን። በዚህ ድረ-ገጽ ክፍያ አንቀበልም።",
    form: {
      name: "ሙሉ ስም", namePlaceholder: "ስምዎ", phone: "ስልክ ቁጥር", phonePlaceholder: "09…", journey: "የጉዞ ዓይነት", choose: "ጉዞ ይምረጡ", date: "የሚመርጡት የጉዞ ወር", travellers: "የተጓዦች ብዛት", notes: "ሌላ ማወቅ ያለብን ነገር?", notesPlaceholder: "ቀን፣ ልጆች፣ የሆቴል ምርጫ፣ የቡድን ፍላጎት…", submit: "ጥያቄውን በዋትስአፕ ይላኩ", privacy: "ዋትስአፕ እስኪከፈት ድረስ ዝርዝርዎ በአሳሽዎ ውስጥ ብቻ ይቆያል።", error: "እባክዎ ስምዎን፣ ስልክዎን እና የጉዞ ዓይነቱን ይሙሉ።",
    },
    office: "የሰዋብ ቢሮ", call: "አማካሪዎቻችንን ይደውሉ", email: "ኢሜይል ይላኩ", footerBody: "ከኢትዮጵያ ወደ ዓለም በጥንቃቄ የተዘጋጁ መንፈሳዊና የመዝናኛ ጉዞዎች።", quickLinks: "ያስሱ", getInTouch: "ያግኙን", rights: "መብቱ በህግ የተጠበቀ ነው።", powered: "በHisabTech የተጎላበተ", backTop: "ወደ ላይ",
  },
} as const;

export const packages: TravelPackage[] = [
  {
    id: "essential-umrah",
    category: "umrah",
    title: { en: "Essential Umrah", am: "መሠረታዊ ዑምራ" },
    duration: { en: "10 days · Flexible hotel class", am: "10 ቀን · ተለዋዋጭ የሆቴል ደረጃ" },
    description: { en: "A thoughtfully coordinated pilgrimage covering the essentials from departure to return.", am: "ከመነሻ እስከ መመለስ አስፈላጊዎቹን ሁሉ የሚያካትት በጥንቃቄ የተዘጋጀ የዑምራ ጉዞ።" },
    location: { en: "Makkah & Madinah", am: "መካ እና መዲና" },
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=85",
    featured: true,
    features: [
      { en: "Return flight coordination", am: "የመልስ በረራ ዝግጅት" },
      { en: "Visa process guidance", am: "የቪዛ ሂደት ድጋፍ" },
      { en: "Hotel and transfers", am: "ሆቴልና ትራንስፖርት" },
    ],
  },
  {
    id: "comfort-umrah",
    category: "umrah",
    title: { en: "Comfort Umrah", am: "ምቹ ዑምራ" },
    duration: { en: "14 days · Enhanced comfort", am: "14 ቀን · የተሻለ ምቾት" },
    description: { en: "A longer spiritual stay with enhanced hotel, pacing, and group-support options.", am: "ረዘም ያለ መንፈሳዊ ቆይታ፣ የተሻለ ሆቴልና የቡድን ድጋፍ።" },
    location: { en: "Makkah & Madinah", am: "መካ እና መዲና" },
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1600&q=85",
    features: [
      { en: "Extended stay", am: "የተራዘመ ቆይታ" },
      { en: "Closer hotel options", am: "ቅርብ የሆቴል አማራጭ" },
      { en: "Amharic group support", am: "የአማርኛ የቡድን ድጋፍ" },
    ],
  },
  {
    id: "hajj-guided",
    category: "hajj",
    title: { en: "Guided Hajj Journey", am: "መመሪያ ያለው የሐጅ ጉዞ" },
    duration: { en: "Seasonal · Registration required", am: "ወቅታዊ · ምዝገባ ያስፈልጋል" },
    description: { en: "Structured preparation and on-journey coordination for the sacred days of Hajj.", am: "ለቅዱሳን የሐጅ ቀናት የተዘጋጀ ስልጠናና በጉዞ ላይ ድጋፍ።" },
    location: { en: "Makkah, Mina, Arafat & Madinah", am: "መካ፣ ሚና፣ አረፋት እና መዲና" },
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=85",
    features: [
      { en: "Pre-Hajj orientation", am: "ከሐጅ በፊት መመሪያ" },
      { en: "Rites-focused guidance", am: "በሥርዓቱ ላይ ያተኮረ መመሪያ" },
      { en: "Group coordination", am: "የቡድን አስተዳደር" },
    ],
  },
  {
    id: "dubai-city",
    category: "uae",
    title: { en: "Dubai City Escape", am: "የዱባይ ከተማ ጉብኝት" },
    duration: { en: "5–7 days · Customisable", am: "5–7 ቀን · ሊስተካከል የሚችል" },
    description: { en: "A polished city experience balancing landmarks, shopping, relaxation, and discovery.", am: "የከተማ መስህቦችን፣ ግብይትን፣ እረፍትንና ግኝትን ያጣመረ ጉዞ።" },
    location: { en: "Dubai, UAE", am: "ዱባይ፣ ዩኤኢ" },
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    features: [
      { en: "Hotel and airport transfer", am: "ሆቴልና የአየር ማረፊያ ትራንስፖርት" },
      { en: "Curated city itinerary", am: "የተመረጠ የከተማ መርሐ ግብር" },
      { en: "Family and group options", am: "የቤተሰብና የቡድን አማራጮች" },
    ],
  },
  {
    id: "dubai-abu-dhabi",
    category: "uae",
    title: { en: "Dubai & Abu Dhabi", am: "ዱባይ እና አቡዳቢ" },
    duration: { en: "7–9 days · Two-city itinerary", am: "7–9 ቀን · የሁለት ከተማ ጉዞ" },
    description: { en: "A premium two-city journey combining iconic architecture, culture, and leisure.", am: "ታዋቂ ሕንፃዎችን፣ ባህልንና መዝናኛን ያጣመረ የሁለት ከተማ ጉዞ።" },
    location: { en: "Dubai & Abu Dhabi", am: "ዱባይ እና አቡዳቢ" },
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1600&q=85",
    features: [
      { en: "Two-city transfers", am: "የሁለት ከተማ ትራንስፖርት" },
      { en: "Landmark experiences", am: "የታዋቂ ስፍራዎች ጉብኝት" },
      { en: "Flexible free time", am: "ተለዋዋጭ ነፃ ጊዜ" },
    ],
  },
  {
    id: "istanbul-discovery",
    category: "world",
    title: { en: "Istanbul Discovery", am: "የኢስታንቡል ግኝት" },
    duration: { en: "7 days · Culture & leisure", am: "7 ቀን · ባህልና መዝናኛ" },
    description: { en: "History, food, waterfront moments, and curated city discoveries in one itinerary.", am: "ታሪክ፣ ምግብ፣ የውሃ ዳርቻ ተሞክሮና የከተማ ግኝት በአንድ መርሐ ግብር።" },
    location: { en: "Istanbul, Türkiye", am: "ኢስታንቡል፣ ቱርክ" },
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=85",
    features: [
      { en: "Historic highlights", am: "ታሪካዊ መስህቦች" },
      { en: "Guided city experiences", am: "መመሪያ ያለው የከተማ ጉብኝት" },
      { en: "Shopping and leisure time", am: "የግብይትና የመዝናኛ ጊዜ" },
    ],
  },
];
