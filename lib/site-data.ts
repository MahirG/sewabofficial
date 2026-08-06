export type Language = "en" | "am";
export type PackageCategory = "umrah" | "hajj";

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
      ["Pilgrim services", "#services"],
      ["Packages", "#packages"],
      ["How it works", "#process"],
      ["Pilgrim stories", "#stories"],
      ["Contact", "#contact"],
    ],
    menu: "Menu",
    close: "Close",
    language: "አማ",
    eyebrow: "Umrah and Hajj journeys from Ethiopia",
    heroTitleA: "Journey for",
    heroTitleB: "worship.",
    heroTitleC: "Travel with peace of mind.",
    heroBody:
      "SEWAB coordinates Umrah and Hajj journeys from Addis Ababa to Makkah and Madinah with clear guidance, trusted accommodation, organized transport, and attentive pilgrim support.",
    explore: "Explore pilgrimage packages",
    whatsapp: "Plan on WhatsApp",
    available: "Pilgrimage advisors available",
    heroProof: ["Visa guidance", "Flight coordination", "Trusted hotels", "Multilingual support"],
    trustTitle: "Every pilgrimage detail, thoughtfully managed.",
    trustBody:
      "Your attention belongs on worship. Our team coordinates documents, flights, accommodation, transport, orientation, and group care so your sacred journey feels clear and well supported.",
    serviceEyebrow: "Pilgrim services",
    serviceTitle: "Focused support for Umrah and Hajj.",
    services: [
      {
        icon: "kaaba",
        title: "Umrah Coordination",
        body: "Complete Umrah planning with visa guidance, flights, Makkah and Madinah hotels, transfers, orientation, and group assistance.",
      },
      {
        icon: "shield",
        title: "Hajj Coordination",
        body: "Structured Hajj preparation, registration guidance, ritual-focused orientation, accommodation, transport, and group care.",
      },
      {
        icon: "briefcase",
        title: "Documents & Visa Guidance",
        body: "Clear document checklists, preparation reviews, and support through the applicable pilgrimage visa process.",
      },
      {
        icon: "travellers",
        title: "Pilgrim Care",
        body: "Pre-departure briefings, multilingual assistance, group coordination, and practical support throughout the journey.",
      },
    ],
    packagesEyebrow: "Umrah and Hajj packages",
    packagesTitle: "Choose the pilgrimage journey that fits your needs.",
    packagesBody:
      "Package details can be adapted to your dates, group size, room needs, hotel preference, and mobility requirements. Contact our advisors for current availability and pricing.",
    filters: {
      all: "All pilgrimage packages",
      umrah: "Umrah",
      hajj: "Hajj",
    },
    viewDetails: "Ask about this package",
    processEyebrow: "Simple from the start",
    processTitle: "From your first enquiry to your safe return.",
    process: [
      {
        number: "01",
        title: "Tell us your pilgrimage plan",
        body: "Share whether you are planning Umrah or Hajj, your preferred dates, group size, and support needs.",
      },
      {
        number: "02",
        title: "Review clear package options",
        body: "We prepare suitable pilgrimage options with transparent inclusions, accommodation, and timing.",
      },
      {
        number: "03",
        title: "We coordinate the details",
        body: "Our team manages documents, bookings, flights, transfers, orientation, and group arrangements.",
      },
      {
        number: "04",
        title: "Travel ready for worship",
        body: "Receive pre-departure guidance and stay connected with our pilgrim support team throughout the journey.",
      },
    ],
    pilgrimageEyebrow: "Pilgrimage with peace of mind",
    pilgrimageTitle: "Your heart on worship. Our hands on the details.",
    pilgrimageBody:
      "From the first briefing in Addis Ababa to Makkah and Madinah, SEWAB supports Umrah and Hajj pilgrims with dignity, clarity, and attentive coordination.",
    pilgrimagePoints: [
      "Return flight coordination from Addis Ababa",
      "Umrah and Hajj visa and document guidance",
      "Hotels selected for practical Haram access",
      "Ground transport and group coordination",
      "English, Amharic, Afaan Oromo, and Arabic support",
      "Pre-departure ritual orientation and checklists",
    ],
    stats: [
      ["Addis Ababa", "Local pilgrim support"],
      ["Umrah & Hajj", "Exclusive focus"],
      ["4 languages", "Guidance available"],
      ["Mon–Sat", "Pilgrimage advisors"],
    ],
    storiesEyebrow: "Pilgrim stories",
    storiesTitle: "Sacred journeys remembered with gratitude.",
    testimonials: [
      {
        quote:
          "Everything was arranged before departure. The guidance made every step feel clear, calm, and meaningful. Alhamdulillah.",
        name: "Ahmed Yusuf",
        location: "Addis Ababa",
      },
      {
        quote:
          "SEWAB listened to our family’s needs and organized our Umrah with care. We always knew what came next.",
        name: "Samira M.",
        location: "Adama",
      },
      {
        quote:
          "The communication and pilgrimage orientation were excellent from the first call until we returned.",
        name: "Mohammed A.",
        location: "Dire Dawa",
      },
    ],
    previous: "Previous story",
    next: "Next story",
    faqEyebrow: "Before your pilgrimage",
    faqTitle: "Answers for a more prepared Umrah or Hajj journey.",
    faqs: [
      {
        q: "What is normally included in an Umrah package?",
        a: "Packages commonly include return flight coordination, visa support, accommodation in Makkah and Madinah, airport and intercity transfers, orientation, and group guidance. Exact inclusions are confirmed before booking.",
      },
      {
        q: "Do you organize Hajj packages from Ethiopia?",
        a: "Yes. SEWAB supports Hajj preparation and coordination based on registration periods, applicable requirements, package availability, and official pilgrimage procedures.",
      },
      {
        q: "Can packages be adjusted for families or elderly pilgrims?",
        a: "Yes. Hotel access, room setup, trip duration, transport, pacing, and assistance can be adapted based on availability and the needs of your group.",
      },
      {
        q: "Do you help with pilgrimage documents and visa preparation?",
        a: "Our advisors explain required documents, review your preparation, and coordinate the applicable Umrah or Hajj visa process. Final approval remains with the relevant authorities.",
      },
      {
        q: "How early should I contact SEWAB?",
        a: "Contact us as early as possible, especially for Ramadan Umrah and Hajj. Early planning provides more flight, room, and group options.",
      },
    ],
    contactEyebrow: "Start your pilgrimage",
    contactTitle: "Tell us whether you are planning Umrah or Hajj.",
    contactBody:
      "Share a few details and we’ll open a prepared WhatsApp message to our pilgrimage advisors. No payment is collected on this website.",
    form: {
      name: "Full name",
      namePlaceholder: "Your name",
      phone: "Phone number",
      phonePlaceholder: "09…",
      journey: "Pilgrimage type",
      choose: "Choose Umrah or Hajj",
      date: "Preferred travel month",
      travellers: "Number of pilgrims",
      notes: "Anything else we should know?",
      notesPlaceholder: "Children, elderly pilgrims, hotel preference, room needs…",
      submit: "Send enquiry on WhatsApp",
      privacy: "Your details stay in your browser until WhatsApp opens.",
      error: "Please complete your name, phone number, and pilgrimage type.",
    },
    office: "SEWAB office",
    call: "Call our pilgrimage advisors",
    email: "Email us",
    footerBody:
      "Thoughtfully coordinated Umrah and Hajj journeys from Ethiopia to the Holy Cities.",
    quickLinks: "Explore",
    getInTouch: "Get in touch",
    rights: "All rights reserved.",
    powered: "Powered by HisabTech",
    backTop: "Back to top",
  },
  am: {
    nav: [
      ["መነሻ", "#home"],
      ["የምዕመናን አገልግሎት", "#services"],
      ["ፓኬጆች", "#packages"],
      ["አሰራራችን", "#process"],
      ["የምዕመናን ተሞክሮ", "#stories"],
      ["ያግኙን", "#contact"],
    ],
    menu: "ምናሌ",
    close: "ዝጋ",
    language: "EN",
    eyebrow: "ከኢትዮጵያ የሚጀምሩ የዑምራና የሐጅ ጉዞዎች",
    heroTitleA: "ለአምልኮ",
    heroTitleB: "ይጓዙ።",
    heroTitleC: "በሰላም እና በዝግጅት።",
    heroBody:
      "ሰዋብ ከአዲስ አበባ ወደ መካና መዲና የሚደረጉ የዑምራና የሐጅ ጉዞዎችን በግልጽ መመሪያ፣ ታማኝ ሆቴል፣ የተደራጀ ትራንስፖርትና የምዕመናን ድጋፍ ያስተባብራል።",
    explore: "የዑምራና የሐጅ ፓኬጆችን ይመልከቱ",
    whatsapp: "በዋትስአፕ ያቅዱ",
    available: "የዑምራና ሐጅ አማካሪዎች ዝግጁ ናቸው",
    heroProof: ["የቪዛ መመሪያ", "የበረራ ዝግጅት", "ታማኝ ሆቴሎች", "የብዙ ቋንቋ ድጋፍ"],
    trustTitle: "የእምነት ጉዞዎ ዝርዝር ሁሉ በጥንቃቄ ይከናወናል።",
    trustBody:
      "ትኩረትዎ በአምልኮ ላይ እንዲሆን ሰነድ፣ በረራ፣ ማረፊያ፣ ትራንስፖርት፣ መመሪያና የቡድን ድጋፍን እናስተባብራለን።",
    serviceEyebrow: "የምዕመናን አገልግሎት",
    serviceTitle: "ለዑምራና ሐጅ ብቻ የተዘጋጀ ድጋፍ።",
    services: [
      { icon: "kaaba", title: "የዑምራ ዝግጅት", body: "ቪዛ፣ በረራ፣ የመካና መዲና ሆቴሎች፣ ትራንስፖርት፣ መመሪያና የቡድን ድጋፍ።" },
      { icon: "shield", title: "የሐጅ ዝግጅት", body: "የሐጅ ቅድመ ዝግጅት፣ የምዝገባ መመሪያ፣ የሥርዓት ስልጠና፣ ማረፊያና ትራንስፖርት።" },
      { icon: "briefcase", title: "የሰነድና ቪዛ መመሪያ", body: "ግልጽ የሰነድ ዝርዝር፣ የዝግጅት ምርመራና ለሚመለከተው የዑምራ ወይም የሐጅ ቪዛ ሂደት ድጋፍ።" },
      { icon: "travellers", title: "የምዕመናን እንክብካቤ", body: "ከጉዞ በፊት መመሪያ፣ የብዙ ቋንቋ ድጋፍ፣ የቡድን ቅንጅትና በጉዞው ሙሉ ድጋፍ።" },
    ],
    packagesEyebrow: "የዑምራና የሐጅ ፓኬጆች",
    packagesTitle: "ለፍላጎትዎ የሚስማማውን የእምነት ጉዞ ይምረጡ።",
    packagesBody: "ፓኬጆች በቀን፣ በቡድን ብዛት፣ በክፍል ፍላጎት፣ በሆቴል ምርጫና በእንቅስቃሴ ፍላጎት ሊስተካከሉ ይችላሉ።",
    filters: { all: "ሁሉም ፓኬጆች", umrah: "ዑምራ", hajj: "ሐጅ" },
    viewDetails: "ስለዚህ ፓኬጅ ይጠይቁ",
    processEyebrow: "ቀላል አሰራር",
    processTitle: "ከመጀመሪያ ጥያቄ እስከ ደህና መመለስ።",
    process: [
      { number: "01", title: "የጉዞ ዕቅድዎን ይንገሩን", body: "ዑምራ ወይም ሐጅ፣ ቀን፣ የቡድን ብዛትና የድጋፍ ፍላጎትዎን ያጋሩ።" },
      { number: "02", title: "ግልጽ አማራጮችን ይመልከቱ", body: "የተካተቱ አገልግሎቶች፣ ሆቴልና ጊዜ በግልጽ የተገለጹ ፓኬጆችን እናዘጋጃለን።" },
      { number: "03", title: "ዝርዝሩን እናስተባብራለን", body: "ሰነድ፣ ቦታ ማስያዝ፣ በረራ፣ ትራንስፖርትና መመሪያን እንቆጣጠራለን።" },
      { number: "04", title: "ለአምልኮ ዝግጁ ሆነው ይጓዙ", body: "ከጉዞ በፊት መመሪያ ያግኙ እና በጉዞዎ ሙሉ ጊዜ ከቡድናችን ጋር ይገናኙ።" },
    ],
    pilgrimageEyebrow: "በሰላም የሚከናወን የእምነት ጉዞ",
    pilgrimageTitle: "ልብዎ በአምልኮ፤ ዝርዝሩ በእኛ እጅ።",
    pilgrimageBody: "ከአዲስ አበባ መመሪያ እስከ መካና መዲና፣ ሰዋብ የዑምራና የሐጅ ምዕመናንን በክብር፣ በግልጽነትና በጥንቃቄ ይደግፋል።",
    pilgrimagePoints: ["ከአዲስ አበባ የመልስ በረራ ዝግጅት", "የዑምራና ሐጅ ቪዛና ሰነድ መመሪያ", "ለሐረም ቅርብ የሆኑ ሆቴሎች", "የመሬት ትራንስፖርትና የቡድን ቅንጅት", "የአማርኛ፣ ኦሮምኛ፣ እንግሊዝኛና ዓረብኛ ድጋፍ", "ከጉዞ በፊት የሥርዓት መመሪያ"],
    stats: [["አዲስ አበባ", "የአካባቢ ድጋፍ"], ["ዑምራና ሐጅ", "ብቸኛ ትኩረት"], ["4 ቋንቋዎች", "መመሪያ አለ"], ["ሰኞ–ቅዳሜ", "አማካሪዎች"]],
    storiesEyebrow: "የምዕመናን ተሞክሮ",
    storiesTitle: "በምስጋና የሚታወሱ ቅዱሳን ጉዞዎች።",
    testimonials: [
      { quote: "ከመነሳታችን በፊት ሁሉም ነገር ተዘጋጅቶ ነበር። መመሪያው እያንዳንዱን ደረጃ ግልጽና ሰላማዊ አደረገው።", name: "አሕመድ ዩሱፍ", location: "አዲስ አበባ" },
      { quote: "ሰዋብ የቤተሰባችንን ፍላጎት አዳምጦ ዑምራችንን በጥንቃቄ አደራጀ።", name: "ሰሚራ ኤም.", location: "አዳማ" },
      { quote: "ከመጀመሪያው ጥሪ እስከ ተመለስንበት ድረስ ግንኙነቱና መመሪያው ግሩም ነበር።", name: "መሐመድ ኤ.", location: "ድሬዳዋ" },
    ],
    previous: "የቀድሞ ተሞክሮ",
    next: "ቀጣይ ተሞክሮ",
    faqEyebrow: "ከእምነት ጉዞዎ በፊት",
    faqTitle: "ለተዘጋጀ የዑምራ ወይም የሐጅ ጉዞ መልሶች።",
    faqs: [
      { q: "የዑምራ ፓኬጅ ምን ያካትታል?", a: "በተለምዶ የመልስ በረራ፣ የቪዛ ድጋፍ፣ የመካና መዲና ማረፊያ፣ ትራንስፖርት፣ መመሪያና የቡድን ድጋፍ ያካትታል።" },
      { q: "ከኢትዮጵያ የሐጅ ፓኬጅ ታዘጋጃላችሁ?", a: "አዎ። በምዝገባ ጊዜ፣ በሚመለከቱ መስፈርቶችና በፓኬጅ አቅርቦት መሠረት የሐጅ ዝግጅትና ቅንጅት እናደርጋለን።" },
      { q: "ፓኬጆች ለቤተሰብና ለአረጋውያን ሊስተካከሉ ይችላሉ?", a: "አዎ። የሆቴል ቅርበት፣ የክፍል አወቃቀር፣ ቆይታ፣ ትራንስፖርትና ድጋፍ በፍላጎትዎ ሊስተካከሉ ይችላሉ።" },
      { q: "በሰነድና ቪዛ ዝግጅት ትረዳላችሁ?", a: "አማካሪዎቻችን የሚያስፈልጉ ሰነዶችን ያብራራሉ እና የሚመለከተውን የዑምራ ወይም የሐጅ ቪዛ ሂደት ያስተባብራሉ።" },
      { q: "ሰዋብን መቼ ማነጋገር አለብኝ?", a: "በተለይ ለረመዳን ዑምራና ሐጅ በተቻለ ፍጥነት ያነጋግሩን።" },
    ],
    contactEyebrow: "የእምነት ጉዞዎን ይጀምሩ",
    contactTitle: "ዑምራ ወይም ሐጅ እያቀዱ መሆንዎን ይንገሩን።",
    contactBody: "ጥቂት ዝርዝሮችን ያጋሩ፤ ለአማካሪዎቻችን የተዘጋጀ የዋትስአፕ መልዕክት እንከፍታለን።",
    form: { name: "ሙሉ ስም", namePlaceholder: "ስምዎ", phone: "ስልክ ቁጥር", phonePlaceholder: "09…", journey: "የእምነት ጉዞ", choose: "ዑምራ ወይም ሐጅ ይምረጡ", date: "የጉዞ ወር", travellers: "የምዕመናን ብዛት", notes: "ሌላ ማስታወሻ", notesPlaceholder: "ልጆች፣ አረጋውያን፣ የሆቴልና የክፍል ፍላጎት…", submit: "በዋትስአፕ ይላኩ", privacy: "ዋትስአፕ እስኪከፈት ድረስ መረጃዎ በአሳሽዎ ውስጥ ይቆያል።", error: "ስም፣ ስልክና የጉዞ አይነት ያስገቡ።" },
    office: "የሰዋብ ቢሮ",
    call: "የእምነት ጉዞ አማካሪዎቻችንን ይደውሉ",
    email: "ኢሜይል ይላኩ",
    footerBody: "ከኢትዮጵያ ወደ ቅዱሳን ከተሞች በጥንቃቄ የተዘጋጁ የዑምራና የሐጅ ጉዞዎች።",
    quickLinks: "ይመልከቱ",
    getInTouch: "ያግኙን",
    rights: "መብቱ የተጠበቀ ነው።",
    powered: "በHisabTech የተደገፈ",
    backTop: "ወደ ላይ",
  },
};

export const packages: TravelPackage[] = [
  {
    id: "essential-umrah",
    category: "umrah",
    featured: true,
    title: { en: "Essential Umrah", am: "መሠረታዊ ዑምራ" },
    duration: { en: "10 days · Flexible hotel category", am: "10 ቀን · ተለዋዋጭ የሆቴል ደረጃ" },
    description: { en: "A carefully coordinated Umrah journey covering the essentials from departure to return.", am: "ከመነሳት እስከ መመለስ ዋና ዋና የዑምራ ፍላጎቶችን ያካተተ ጉዞ።" },
    location: { en: "Makkah & Madinah", am: "መካ እና መዲና" },
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=85",
    features: [
      { en: "Return flight coordination", am: "የመልስ በረራ ዝግጅት" },
      { en: "Visa process guidance", am: "የቪዛ ሂደት መመሪያ" },
      { en: "Hotels and transfers", am: "ሆቴልና ትራንስፖርት" },
    ],
  },
  {
    id: "comfort-umrah",
    category: "umrah",
    title: { en: "Comfort Umrah", am: "ምቹ ዑምራ" },
    duration: { en: "14 days · Enhanced comfort", am: "14 ቀን · የተሻለ ምቾት" },
    description: { en: "A longer spiritual stay with improved hotel access, comfortable pacing, and added group support.", am: "የተሻለ የሆቴል ቅርበት፣ ምቹ ጊዜ ሰሌዳና ተጨማሪ የቡድን ድጋፍ ያለው ረዘም ያለ የዑምራ ጉዞ።" },
    location: { en: "Makkah & Madinah", am: "መካ እና መዲና" },
    image: "https://cdn.kibrispdr.org/data/717/kubah-hijau-masjid-nabawi-35.jpg",
    features: [
      { en: "Extended stay", am: "የተራዘመ ቆይታ" },
      { en: "Closer hotel options", am: "ቅርብ የሆቴል አማራጮች" },
      { en: "Multilingual group support", am: "የብዙ ቋንቋ የቡድን ድጋፍ" },
    ],
  },
  {
    id: "family-umrah",
    category: "umrah",
    title: { en: "Family Umrah", am: "የቤተሰብ ዑምራ" },
    duration: { en: "Custom duration · Family-focused", am: "ተለዋዋጭ ቆይታ · ለቤተሰብ" },
    description: { en: "Flexible room arrangements, practical hotel access, and pacing designed for families, children, and elderly pilgrims.", am: "ለቤተሰብ፣ ለልጆችና ለአረጋውያን የሚስማማ የክፍል፣ የሆቴልና የጊዜ አወቃቀር።" },
    location: { en: "Makkah & Madinah", am: "መካ እና መዲና" },
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1600&q=85",
    features: [
      { en: "Family room planning", am: "የቤተሰብ ክፍል ዝግጅት" },
      { en: "Manageable itinerary", am: "ምቹ የጉዞ መርሐ ግብር" },
      { en: "Support for elderly pilgrims", am: "ለአረጋውያን ድጋፍ" },
    ],
  },
  {
    id: "ramadan-umrah",
    category: "umrah",
    title: { en: "Ramadan Umrah", am: "የረመዳን ዑምራ" },
    duration: { en: "Seasonal · Early booking advised", am: "ወቅታዊ · ቀድሞ ማስያዝ ይመከራል" },
    description: { en: "A carefully timed Ramadan pilgrimage package with crowd-aware planning and worship-focused support.", am: "የረመዳን ወቅትንና የሕዝብ ብዛትን በመገንዘብ ለአምልኮ የተዘጋጀ የዑምራ ፓኬጅ።" },
    location: { en: "Makkah & Madinah", am: "መካ እና መዲና" },
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1600&q=85",
    features: [
      { en: "Ramadan-focused schedule", am: "ለረመዳን የተዘጋጀ ጊዜ ሰሌዳ" },
      { en: "Crowd-aware coordination", am: "የሕዝብ ብዛትን የሚገነዘብ ቅንጅት" },
      { en: "Pre-departure orientation", am: "ከጉዞ በፊት መመሪያ" },
    ],
  },
  {
    id: "hajj-guided",
    category: "hajj",
    featured: true,
    title: { en: "Guided Hajj Journey", am: "መመሪያ ያለው የሐጅ ጉዞ" },
    duration: { en: "Seasonal · Registration required", am: "ወቅታዊ · ምዝገባ ያስፈልጋል" },
    description: { en: "Structured preparation and coordinated pilgrim support for the sacred days of Hajj.", am: "ለቅዱሳን የሐጅ ቀናት የተዘጋጀ የቅድመ ዝግጅትና የምዕመናን ድጋፍ።" },
    location: { en: "Makkah, Mina, Arafat & Madinah", am: "መካ፣ ሚና፣ አረፋት እና መዲና" },
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=88",
    features: [
      { en: "Pre-Hajj orientation", am: "ከሐጅ በፊት መመሪያ" },
      { en: "Ritual-focused guidance", am: "በሐጅ ሥርዓት ላይ የተመሠረተ መመሪያ" },
      { en: "Group coordination", am: "የቡድን ቅንጅት" },
    ],
  },
];
