/* ============================================================
   Portfolio data — every project from the original 13 "daughter"
   pages + 4 category hubs, structured for the rebuilt single-page
   portfolio (filter tabs + flip-card detail).
   ============================================================ */

const CHAPTERS = [
  { id: "writing",  label: "Writing & Publications",   thread: "ink"    },
  { id: "media",    label: "Media & Storytelling",     thread: "amber" },
  { id: "community",label: "Community Projects",       thread: "coral" },
  { id: "venture",  label: "Entrepreneurial Projects",  thread: "sage"  },
];

const PROJECTS = [
  // ---------- WRITING & PUBLICATIONS ----------
  {
    id: "legacy-in-ink",
    chapter: "writing",
    title: "The Ancient Bricks and the Flowers of Identity",
    subtitle: "Legacy in Ink (2025) — Top 50 Nationwide",
    img: "https://static.wixstatic.com/media/2b7630_abc410123f6e4910818f52b5392b86e4~mv2.jpg",
    stat: { value: "Top 50", label: "of 15–25 yr-old writers, nationwide" },
    body: `Selected as one of the Top 50 in Legacy in Ink, a nationwide writing
    contest co-hosted by Nhà Xuất Bản Thế Giới and The Penlogue, gathering aspiring
    writers from across Vietnam and Vietnamese students abroad. Works were judged by
    a jury of Vietnamese and international authors, who recognized this piece for
    its originality and narrative voice.`,
  },
  {
    id: "khan-quang-do",
    chapter: "writing",
    title: "The Last Wish",
    subtitle: "Khăn Quàng Đỏ Magazine — debut short story",
    img: "https://static.wixstatic.com/media/2b7630_9c377b6a12bb421fbb8f3f29e6bca8ed~mv2.jpg",
    stat: { value: "01", label: "first published story" },
    body: `A 15-year-old girl meets a robot identical to herself, capable of
    granting every wish. Her dreams come true one by one — except the last: to see
    her late mother again. In the final scene the robot embraces her, whispering
    words of comfort as if from her mother. A debut exploring youth, imagination,
    and maternal love that marked the first real step into storytelling.`,
  },
  {
    id: "teachers-day",
    chapter: "writing",
    title: "Unexpected Goodbye",
    subtitle: "Short story for Teachers' Day (2022)",
    img: "https://static.wixstatic.com/media/2b7630_9c377b6a12bb421fbb8f3f29e6bca8ed~mv2.jpg",
    stat: { value: "20/11", label: "Vietnamese Teachers' Day contest" },
    body: `A heartfelt tribute to a late teacher, written for the 20/11 writing
    contest across Vinschool campuses — aimed not at winning, but at preserving the
    memory of a mentor who might otherwise be forgotten. The story moved teachers
    and students alike, and was the moment authenticity, not award-chasing, became
    the standard for everything written since.`,
  },
  {
    id: "vinpress",
    chapter: "writing",
    title: "A Part of Me Is Written in White Chalk…",
    subtitle: "Vinpress (2025) — Second Prize",
    img: "https://static.wixstatic.com/media/2b7630_169fb2f42e614f0b99fed4a3f3a94042~mv2.png",
    stat: { value: "2nd", label: "prize" },
    body: `A reflective essay on how three teachers gently shaped emotional
    growth through years of vulnerability and self-doubt. Their words, presence,
    and silent faith turned fragility into empathy and inner strength — a tribute
    to educators, and a reminder that the most lasting lessons aren't written in
    textbooks, but in students' hearts.`,
  },

  // ---------- MEDIA & STORYTELLING ----------
  {
    id: "podcast",
    chapter: "media",
    title: "17 Degrees Podcast",
    subtitle: "Creator & host — launched July 29, 2025",
    img: "https://static.wixstatic.com/media/2b7630_bfbb6d35b2b34c419c2784dd905b9faa~mv2.jpg",
    stat: { value: "224", label: "total plays · 3 countries" },
    body: `A youth-led podcast where even the smallest stories deserve to be
    heard — self-reflection, creativity, and a touch of "I've been there too,"
    making space for conversations on mental health and student life. 5 episodes
    each in Vietnamese and English (10 releases), 136 streams across platforms,
    1,112 Spotify impressions, listeners in Vietnam, Australia, and the US.`,
    link: { href: "https://open.spotify.com/show/4bcUDruHAUujNpIDKQqNTY", label: "Listen on Spotify" },
  },
  {
    id: "music-video",
    chapter: "media",
    title: "Female Lead — Media Studies Music Video",
    subtitle: "Acting & on-set production",
    img: "https://static.wixstatic.com/media/2b7630_d5b41425cc5345de985d8fd7accd9201~mv2.jpg",
    stat: { value: "12th", label: "grade student film project" },
    body: `Invited to play the female lead in a music video created by 12th-grade
    students for their Media Studies course. Beyond acting, this meant learning the
    basics of production first-hand — storyboarding, camera angles, shot composition
    — while experiencing what it feels like to perform in front of the lens.`,
  },
  {
    id: "personal-blog",
    chapter: "media",
    title: "Cửa Sổ Mở — Through the Window",
    subtitle: "Personal blog on Instagram & TikTok",
    img: "https://static.wixstatic.com/media/2b7630_849e6202eeaa4229be5df32be71dd286~mv2.jpg",
    stat: { value: "words &", label: "humanity — the blog's theme" },
    body: `A personal storytelling space sharing reflections on books, films, and
    literature — blending reviews with personal insight to spark conversation. Still
    modest in reach, it remains a space of authentic expression, growing slowly and
    honestly rather than chasing scale.`,
    link: { href: "https://www.instagram.com/cua_so_mo/", label: "Instagram" },
  },
  {
    id: "career-exploration",
    chapter: "media",
    title: "Career Exploration Program",
    subtitle: "Thanh Niên Newspaper × University of Social Sciences & Humanities",
    img: "https://static.wixstatic.com/media/2b7630_5bc5f13721c94387aad2db954352b6fe~mv2.jpg",
    stat: { value: "G11", label: "school-organized field program" },
    body: `Chose Media & Journalism for a grade-11 career exploration program. At
    USSH: workshops on media and communication, hosting, public speaking, and
    basics of filming, photography, and news editing. At Thanh Niên Newspaper:
    stepped into a real newsroom, observed editors and reporters at work, and
    practiced entry-level journalism tasks first-hand.`,
  },
  {
    id: "meraki-blog-contest",
    chapter: "media",
    title: "All About Our Story",
    subtitle: "Meraki Blog Contest — Cyberbullying & Online Stalking",
    img: "https://static.wixstatic.com/media/2b7630_af7c2132966b4bf7920c795ec7c810a7~mv2.jpg",
    stat: { value: "1st", label: "prize, secondary-school level" },
    body: `A video amplifying the voices of children silenced by fear,
    cyberbullying, and online stalking. As lead actress and narrator, also
    co-developed the story outline and used first-person inner monologue to make a
    complex psychological experience relatable to a youth audience — raising
    awareness and encouraging more compassionate online behavior.`,
  },

  // ---------- COMMUNITY PROJECTS ----------
  {
    id: "tinkle-project",
    chapter: "community",
    title: "Tinkle Project",
    subtitle: "Founder & Leader (2024) — 6-person team",
    img: "https://static.wixstatic.com/media/2b7630_01a0991c48734a3fa7c75c43ef60a333~mv2.jpg",
    stat: { value: "3,000,000₫", label: "raised through Tinkle Bakery" },
    body: `A three-stage initiative for disadvantaged children. Stage 1 — Tinkle
    Bakery: built a bakery brand from scratch (recipes, packaging, logo) to fund the
    project. Stage 2 — Media Campaign: a Facebook page, reels, and customer reviews
    built brand identity. Stage 3 — a 5-part sexual-education video series (Gender
    Equality, Changes in Our Psychology, Body Odor, My Body Belongs to Me!, First
    Crush) plus interactive slides, delivered directly to the children.`,
  },
  {
    id: "wellbeing-session",
    chapter: "community",
    title: "Wellbeing Session",
    subtitle: "Co-host — a workshop on sensitivity",
    img: "https://static.wixstatic.com/media/2b7630_1fe9fbb98cda4a079ee6ece9e3aedf6a~mv2.jpg",
    stat: { value: "5+ yrs", label: "co-hosted with a best friend" },
    body: `Built by two self-described sensitive people, for anyone who's felt
    sensitivity as isolating rather than a strength. Activities: a Word Cloud Game
    (QR icebreaker), Four Corners (opinion-mapping on sticky notes), and a Feelings
    Jar mood check-in — plus take-home engraved keychains and handmade scented
    thank-you cards.`,
  },
  {
    id: "book-sharing",
    chapter: "community",
    title: "My Sweet Orange Tree",
    subtitle: "Book-sharing session host — Lectio",
    img: "https://static.wixstatic.com/media/2b7630_9ea659fcd3f1440d98021c1b09c71448~mv2.jpg",
    stat: { value: "01", label: "first time on stage, public speaking" },
    body: `Planned and hosted a session reflecting on Zézé's tender, painful
    childhood with guidance from Lectio's founding team. More than an event — it was
    the first time stepping onto a stage and finding the courage to share a voice
    of one's own.`,
  },
  {
    id: "lectio-reading-society",
    chapter: "community",
    title: "Lectio Reading Society",
    subtitle: "Content Team → Vice President (G10–G12)",
    img: "https://static.wixstatic.com/media/2b7630_921ca56d853546b6908ea6d43b55894e~mv2.jpg",
    stat: { value: "G10→12", label: "Content Team to Vice President" },
    body: `Joined in Grade 10 on the Content Team, contributing event ideas and
    hosting a solo book-sharing session. Entrusted as Vice President in Grade 11,
    a role carried through Grade 12. The club grew from intimate book talks into a
    community blending reading culture, festive fundraising, and clinic
    volunteering. "Books brought us together. Stories kept us growing."`,
    link: { href: "https://www.facebook.com/lectioreadingsociety", label: "Facebook" },
  },
  {
    id: "seeds-of-health",
    chapter: "community",
    title: "Gieo Mầm Sức Khỏe — Seeds of Health",
    subtitle: "Co-founder & Project Lead — 6-month project",
    img: "https://static.wixstatic.com/media/2b7630_f54eb103a82b4bc9b74c1fe9f95f3028~mv2.jpg",
    stat: { value: "3", label: "original health comics written & illustrated" },
    body: `A six-month project (2024–25 to 2025–26) combining creativity and
    compassion. Stage 1 — fundraising ("Healthy Sip" drinks, "Portraits from the
    Heart" sketches). Stage 2 — writing and illustrating 3 comics: Watch Out for the
    Sun! (heatstroke safety), Mom, My Stomach Hurts! (food safety), What to Do When
    Drowning? (water safety). Stage 3 — delivering books and gifts in person to
    children at Children's Hospital 1.`,
  },
  {
    id: "vsac",
    chapter: "community",
    title: "Vinschool Social Activities Club",
    subtitle: "PR Department → Vice Head of PR",
    img: "https://static.wixstatic.com/media/2b7630_9d4c37cc44074e7eae8c48ce16268241~mv2.jpg",
    stat: { value: "6 mo", label: "to promotion as Vice Head of PR" },
    body: `"Leading Hands, Changing Lives." Joined PR in Grade 10, promoted to
    Vice Head of PR within six months. Managed social platforms, designed
    fundraising-event content, led a small PR team. Paused direct participation in
    Grade 12 to focus on personal projects, while continuing to mentor younger PR
    members remotely. "Leadership is not only about taking charge, but inspiring
    others to act with compassion."`,
  },
  {
    id: "vinpsy",
    chapter: "community",
    title: "Vinpsy — Psychology Club",
    subtitle: "Content Member → Head of Content",
    img: "https://static.wixstatic.com/media/2b7630_ffd4a5672c594ab7a655586bfb02d2cd~mv2.jpg",
    stat: { value: "G10→12", label: "Content Member to Head of Content" },
    body: `"Where psychology becomes a safe space." Joined as a Content Member
    at the end of Grade 10, writing psychological articles, workshop content, and
    scripts. Promoted to Head of Content in Grade 12 — leading the department,
    training new members, and shaping Vinpsy's voice and workshop concepts.`,
    link: { href: "https://www.facebook.com/vcp.psychologyclub/about", label: "Facebook" },
  },
  {
    id: "safe-space-booth",
    chapter: "community",
    title: "Safe Space Booth",
    subtitle: "Initiative Leader — SEL research",
    img: "https://static.wixstatic.com/media/2b7630_9c065016cfb94732a07ae188bd003274~mv2.jpg",
    stat: { value: "Top 15", label: "schoolwide wellbeing initiative" },
    body: `A data-driven study of Social & Emotional Learning (SEL) competencies,
    built as an interactive booth instead of a traditional survey — combining
    written notes, positive reinforcement, and anonymous QR-based sharing. Findings:
    strong social awareness and empathy but moderate self-regulation under stress,
    and a clear, real demand for further mental-health support among students who
    left contact details asking for it.`,
  },

  // ---------- ENTREPRENEURIAL PROJECTS ----------
  {
    id: "rolld-case-competition",
    chapter: "venture",
    title: "Vietnam Case Competition — Roll'd",
    subtitle: "Top 20 Finalist — Top 10% nationwide",
    img: "https://static.wixstatic.com/media/2b7630_9dd0dadd572e4a96bfefa670b2aa444b~mv2.png",
    stat: { value: "Top 10%", label: "of all competing teams" },
    body: `Brief: how can Roll'd expand into Vietnam while keeping its identity and
    winning over Gen Z? Led Gen-Z behavioral research, co-designed the "Vietnamese
    Fast-Fine Cuisine" positioning, and proposed a Rollers Club App with AI
    personalization — alongside cultural product innovation (rice paper kits,
    signature sauces) and a 12-month rollout plan.`,
    link: { href: "https://37291e76-6094-4aff-b675-d2072063dca6.filesusr.com/ugd/2b7630_84dc0271f3cc4a4da8ae734bd0bd83a8.pdf", label: "View pitch deck (PDF)" },
  },
  {
    id: "vietsoulbox-vnec2026",
    chapter: "venture",
    title: "VietSoulBox",
    subtitle: "VNEC 2026 — phygital cultural gift box",
    img: "https://static.wixstatic.com/media/2b7630_fd1280725123401c912674525b860a4a~mv2.png",
    stat: { value: "Web-AR", label: "+ AI multilingual guide" },
    body: `Brief: Vietnamese souvenirs that lack storytelling and fail to engage
    modern travelers. Co-developed a "phygital" gift box activated by Web-AR and QR
    code, paired with an AI-powered multilingual cultural guide and immersive 3D
    content — built around a B2C and corporate-gifting business model. "A narrative
    about how technology can carry the soul of a nation."`,
    link: { href: "https://37291e76-6094-4aff-b675-d2072063dca6.filesusr.com/ugd/2b7630_616c30bc6a7a455693410d04ba33c94d.pdf", label: "View pitch deck (PDF)" },
  },
];
