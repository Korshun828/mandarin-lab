import type { Language } from "@/i18n/types";

export type CourseId = "beginner" | "hsk" | "business" | "travel" | "kids";

export type CurriculumStep = {
  number: string;
  title: string;
  detail: string;
};

export type LearningItem = {
  title: string;
  detail: string;
};

export type MicroLesson =
  | {
      kind: "reveal";
      label: string;
      chinese: string;
      pinyin: string;
      translation: string;
    }
  | {
      kind: "quiz";
      label: string;
      question: string;
      pinyin: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };

export type Course = {
  id: CourseId;
  number: string;
  title: string;
  chinese: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  secondaryImagePosition: string;
  href: string;
  page: {
    seoTitle: string;
    seoDescription: string;
    headline: [string, string];
    positioning: string;
    audience: string;
    level: string;
    visualStatement: [string, string?];
    chineseWords: string[];
    learning: LearningItem[];
    outcomes: string[];
    curriculum: CurriculumStep[];
    microLesson: MicroLesson;
    ctaLabel: string;
    ctaChinese: string;
  };
};

export const courseFormat = {
  format: "Online",
  lesson: "60 min",
  frequency: "3× / week",
  program: "12 lessons / month",
  language: "Chinese + Russian / English support",
};

export const lessonMethod = [
  { number: "01", title: "Learn", detail: "Meet useful language through clear, focused examples." },
  { number: "02", title: "Practice", detail: "Build accuracy with guided exercises and correction." },
  { number: "03", title: "Speak", detail: "Use new language in realistic conversations." },
  { number: "04", title: "Review", detail: "Revisit key material before it fades." },
  { number: "05", title: "Progress", detail: "Track improvement and move into the next level." },
];

export const courses: Course[] = [
  {
    id: "beginner",
    number: "01",
    title: "Beginner",
    chinese: "从零开始",
    description: "For complete beginners.",
    image: "/course-previews/editorial/beginner-study.jpg",
    imageAlt: "Chinese language study desk with handwritten characters and pinyin",
    imagePosition: "50% 54%",
    secondaryImagePosition: "50% 72%",
    href: "/courses/beginner",
    page: {
      seoTitle: "Mandarin Lab Beginner Chinese Course",
      seoDescription: "Start learning Mandarin from zero with practical lessons in pronunciation, tones, pinyin, characters and everyday Chinese.",
      headline: ["Start Chinese", "from zero."],
      positioning: "Build a practical foundation in Mandarin—from pronunciation to real communication.",
      audience: "Complete beginners starting Mandarin for the first time, and returning learners who want to rebuild the essentials with clarity.",
      level: "Beginner",
      visualStatement: ["Start with sound.", "Build with meaning."],
      chineseWords: ["你好", "学习", "中文"],
      learning: [
        { title: "Pronunciation", detail: "Pinyin, initials, finals and the four tones." },
        { title: "Core vocabulary", detail: "Useful words and phrases for everyday life." },
        { title: "Grammar", detail: "Build clear, natural basic sentences." },
        { title: "Characters", detail: "Recognize and understand essential Chinese characters." },
        { title: "Speaking", detail: "Use Chinese in guided real conversations." },
      ],
      outcomes: ["Introduce yourself.", "Ask simple questions.", "Understand basic daily Chinese.", "Recognize core characters.", "Continue toward HSK."],
      curriculum: [
        { number: "01", title: "Foundation", detail: "Pinyin / tones / pronunciation" },
        { number: "02", title: "Core language", detail: "Vocabulary / grammar / characters" },
        { number: "03", title: "Real communication", detail: "Greetings / questions / everyday phrases" },
        { number: "04", title: "Practice", detail: "Speaking / listening / exercises / feedback" },
        { number: "05", title: "Progress", detail: "Review / assessment / HSK pathway" },
      ],
      microLesson: { kind: "reveal", label: "A first conversation", chinese: "你好", pinyin: "nǐ hǎo", translation: "hello" },
      ctaLabel: "Start beginner",
      ctaChinese: "从这里开始。",
    },
  },
  {
    id: "hsk",
    number: "02",
    title: "HSK 1—4",
    chinese: "汉语水平考试",
    description: "Structured exam preparation.",
    image: "/course-previews/editorial/hsk-preparation.jpg",
    imageAlt: "HSK Chinese exam preparation materials and study notes",
    imagePosition: "50% 57%",
    secondaryImagePosition: "50% 72%",
    href: "/courses/hsk",
    page: {
      seoTitle: "Mandarin Lab HSK 1–4 Preparation",
      seoDescription: "Prepare for HSK 1–4 with a clear study plan, exam strategy, mock tests and practical Mandarin support.",
      headline: ["Pass the test.", "Use the language."],
      positioning: "Structured HSK preparation that strengthens exam performance and practical Mandarin together.",
      audience: "Students preparing for HSK 1–4 who want a clear progression plan and confident test-day performance.",
      level: "HSK 1—4",
      visualStatement: ["Structure your study.", "Control the test."],
      chineseWords: ["听力", "阅读", "词汇"],
      learning: [
        { title: "Vocabulary", detail: "Build the word bank required at each target level." },
        { title: "Grammar", detail: "Understand patterns instead of memorizing isolated answers." },
        { title: "Listening", detail: "Catch key details at natural exam speed." },
        { title: "Reading", detail: "Read faster and recognize question logic." },
        { title: "Exam strategy", detail: "Manage timing, mock tests and common traps." },
      ],
      outcomes: ["Follow a clear study plan.", "Read with more speed.", "Listen for key information.", "Approach mock tests confidently.", "Use HSK language beyond the exam."],
      curriculum: [
        { number: "01", title: "Foundation", detail: "Assessment / target score / level map" },
        { number: "02", title: "Core language", detail: "Vocabulary / grammar / characters" },
        { number: "03", title: "Exam skills", detail: "Listening / reading / writing" },
        { number: "04", title: "Practice", detail: "Timed tasks / mock tests / strategy" },
        { number: "05", title: "Progress", detail: "Review / feedback / exam readiness" },
      ],
      microLesson: { kind: "quiz", label: "Sample question", question: "我 ___ 学生。", pinyin: "Wǒ ___ xuésheng.", options: ["是", "有", "在"], correctIndex: 0, explanation: "是 (shì) links the subject with a noun: I am a student." },
      ctaLabel: "Start HSK preparation",
      ctaChinese: "准备好，更进一步。",
    },
  },
  {
    id: "business",
    number: "03",
    title: "Business",
    chinese: "商务中文",
    description: "Chinese for work, meetings and communication.",
    image: "/course-previews/editorial/business-shanghai-office.jpg",
    imageAlt: "Modern Shanghai office and business environment at night",
    imagePosition: "52% 48%",
    secondaryImagePosition: "50% 30%",
    href: "/courses/business",
    page: {
      seoTitle: "Mandarin Lab Business Chinese",
      seoDescription: "Practical Business Chinese for meetings, negotiations, WeChat communication and professional situations in China.",
      headline: ["Speak Chinese", "for work."],
      positioning: "Communicate with clarity in meetings, messages and real professional situations connected to China.",
      audience: "Professionals, entrepreneurs, students and people working with China who need practical business communication.",
      level: "Adapted",
      visualStatement: ["Speak with purpose."],
      chineseWords: ["商务", "会议", "合作"],
      learning: [
        { title: "Introductions", detail: "Present yourself, your role and your company naturally." },
        { title: "Meetings", detail: "Follow agendas, share opinions and clarify decisions." },
        { title: "Negotiation", detail: "Discuss terms, timing and next steps with control." },
        { title: "WeChat", detail: "Write concise, appropriate professional messages." },
        { title: "Etiquette", detail: "Understand tone, hierarchy and relationship building." },
      ],
      outcomes: ["Introduce your company.", "Handle basic meetings.", "Write clearer WeChat messages.", "Use common business expressions.", "Communicate with cultural awareness."],
      curriculum: [
        { number: "01", title: "Foundation", detail: "Roles / companies / introductions" },
        { number: "02", title: "Core language", detail: "Vocabulary / tone / key structures" },
        { number: "03", title: "Real communication", detail: "Meetings / messages / negotiation" },
        { number: "04", title: "Practice", detail: "Role-play / scenarios / feedback" },
        { number: "05", title: "Progress", detail: "Personal situations / applied fluency" },
      ],
      microLesson: { kind: "reveal", label: "Professional introduction", chinese: "很高兴认识您", pinyin: "hěn gāoxìng rènshi nín", translation: "Nice to meet you." },
      ctaLabel: "Start business Chinese",
      ctaChinese: "为工作而说。",
    },
  },
  {
    id: "travel",
    number: "04",
    title: "Travel",
    chinese: "旅行中文",
    description: "Real-life Chinese for travel and daily situations.",
    image: "/course-previews/editorial/travel-shanghai-metro.jpg",
    imageAlt: "Shanghai metro and urban travel environment",
    imagePosition: "48% 45%",
    secondaryImagePosition: "48% 24%",
    href: "/courses/travel",
    page: {
      seoTitle: "Mandarin Lab Travel Chinese",
      seoDescription: "Learn practical Mandarin for airports, hotels, transport, restaurants, shopping and everyday travel in China.",
      headline: ["Chinese", "for real life."],
      positioning: "Use practical Mandarin to move through China with more confidence, independence and curiosity.",
      audience: "Travelers and people planning to visit China who want useful language from arrival to everyday city life.",
      level: "Practical",
      visualStatement: ["Use Chinese", "where it matters."],
      chineseWords: ["地铁", "酒店", "餐厅"],
      learning: [
        { title: "Arrival", detail: "Handle the airport, immigration and hotel check-in." },
        { title: "Transport", detail: "Use taxis, metro systems and payment tools." },
        { title: "Food", detail: "Order clearly and understand essential menu language." },
        { title: "Directions", detail: "Ask where things are and follow simple answers." },
        { title: "Problems", detail: "Ask for help in unexpected situations." },
      ],
      outcomes: ["Navigate the metro.", "Check into a hotel.", "Order food confidently.", "Ask for directions.", "Handle common travel problems."],
      curriculum: [
        { number: "01", title: "Foundation", detail: "Arrival / essentials / polite language" },
        { number: "02", title: "Core language", detail: "Transport / payments / directions" },
        { number: "03", title: "Real communication", detail: "Hotels / restaurants / shopping" },
        { number: "04", title: "Practice", detail: "Role-play / listening / trip scenarios" },
        { number: "05", title: "Progress", detail: "Problem-solving / independent travel" },
      ],
      microLesson: { kind: "reveal", label: "Find your way", chinese: "地铁站在哪里？", pinyin: "dìtiě zhàn zài nǎlǐ?", translation: "Where is the metro station?" },
      ctaLabel: "Start travel Chinese",
      ctaChinese: "到达以后，自信开口。",
    },
  },
  {
    id: "kids",
    number: "05",
    title: "Kids",
    chinese: "儿童中文",
    description: "Interactive Chinese lessons for younger learners.",
    image: "/course-previews/editorial/kids-learning-desk.jpg",
    imageAlt: "Modern Chinese learning desk for children",
    imagePosition: "50% 55%",
    secondaryImagePosition: "50% 68%",
    href: "/courses/kids",
    page: {
      seoTitle: "Mandarin Lab Chinese for Kids",
      seoDescription: "Engaging Chinese lessons for children using games, visuals, speaking and short interactive activities.",
      headline: ["Learn Chinese", "through play."],
      positioning: "Build curiosity, confidence and a positive learning rhythm through creative, structured lessons.",
      audience: "Children and younger learners who respond best to visual prompts, movement, play and short focused activities.",
      level: "Young learners",
      visualStatement: ["Learn through", "curiosity."],
      chineseWords: ["颜色", "动物", "数字"],
      learning: [
        { title: "Sounds", detail: "Hear and repeat Mandarin pronunciation with confidence." },
        { title: "Everyday words", detail: "Build useful vocabulary through visual associations." },
        { title: "Characters", detail: "Meet simple characters through shape and meaning." },
        { title: "Speaking", detail: "Answer short questions and join mini-dialogues." },
        { title: "Games & stories", detail: "Remember language through playful structured practice." },
      ],
      outcomes: ["Enjoy using Chinese.", "Recognize familiar words.", "Answer simple questions.", "Understand basic characters.", "Build a positive study routine."],
      curriculum: [
        { number: "01", title: "Foundation", detail: "Sounds / songs / listening" },
        { number: "02", title: "Core language", detail: "People / colors / objects / actions" },
        { number: "03", title: "Real communication", detail: "Questions / answers / mini-dialogues" },
        { number: "04", title: "Practice", detail: "Games / visuals / simple stories" },
        { number: "05", title: "Progress", detail: "Review / confidence / positive routine" },
      ],
      microLesson: { kind: "reveal", label: "Word discovery", chinese: "猫", pinyin: "māo", translation: "cat" },
      ctaLabel: "Start kids Chinese",
      ctaChinese: "从好奇开始。",
    },
  },
];

const russianCourseContent: Record<CourseId, Pick<Course, "title" | "description" | "imageAlt"> & { page: Course["page"] }> = {
  beginner: {
    title: "С нуля",
    description: "Для тех, кто начинает с нуля.",
    imageAlt: "Стол для изучения китайского с рукописными иероглифами и пиньинем",
    page: {
      seoTitle: "Китайский с нуля — MANDARIN LAB",
      seoDescription: "Начни изучать китайский с нуля: произношение, тоны, пиньинь, иероглифы и практическая речь.",
      headline: ["Начни китайский", "с нуля."],
      positioning: "Создай прочную базу китайского — от произношения до реального общения.",
      audience: "Для тех, кто впервые начинает изучать китайский, и для тех, кто хочет заново выстроить понятную базу.",
      level: "С нуля",
      visualStatement: ["Начни со звука.", "Строй через смысл."],
      chineseWords: ["你好", "学习", "中文"],
      learning: [
        { title: "Произношение", detail: "Пиньинь, инициали, финали и четыре тона." },
        { title: "Базовая лексика", detail: "Полезные слова и фразы для повседневной жизни." },
        { title: "Грамматика", detail: "Понятные и естественные базовые предложения." },
        { title: "Иероглифы", detail: "Узнавай и понимай основные китайские иероглифы." },
        { title: "Разговорная речь", detail: "Используй китайский в диалогах с поддержкой преподавателя." },
      ],
      outcomes: ["Представиться.", "Задать простые вопросы.", "Понимать базовый повседневный китайский.", "Узнавать основные иероглифы.", "Продолжить путь к HSK."],
      curriculum: [
        { number: "01", title: "Основа", detail: "Пиньинь / тоны / произношение" },
        { number: "02", title: "Базовый язык", detail: "Лексика / грамматика / иероглифы" },
        { number: "03", title: "Живое общение", detail: "Приветствия / вопросы / повседневные фразы" },
        { number: "04", title: "Практика", detail: "Речь / аудирование / упражнения / обратная связь" },
        { number: "05", title: "Прогресс", detail: "Повторение / оценка / путь к HSK" },
      ],
      microLesson: { kind: "reveal", label: "Первый диалог", chinese: "你好", pinyin: "nǐ hǎo", translation: "привет" },
      ctaLabel: "Начать курс с нуля",
      ctaChinese: "从这里开始。",
    },
  },
  hsk: {
    title: "HSK 1—4",
    description: "Системная подготовка к экзамену.",
    imageAlt: "Материалы и конспекты для подготовки к экзамену HSK",
    page: {
      seoTitle: "Подготовка к HSK 1–4 — MANDARIN LAB",
      seoDescription: "Системная подготовка к HSK 1–4: учебный план, экзаменационная стратегия, пробные тесты и практический китайский.",
      headline: ["Сдай экзамен.", "Используй язык."],
      positioning: "Системная подготовка к HSK, которая одновременно улучшает результат на экзамене и практический китайский.",
      audience: "Для учеников, которые готовятся к HSK 1–4 и хотят понятный план, последовательный прогресс и уверенность на экзамене.",
      level: "HSK 1—4",
      visualStatement: ["Выстрой систему.", "Контролируй экзамен."],
      chineseWords: ["听力", "阅读", "词汇"],
      learning: [
        { title: "Лексика", detail: "Освой словарный запас каждого целевого уровня." },
        { title: "Грамматика", detail: "Понимай модели вместо заучивания отдельных ответов." },
        { title: "Аудирование", detail: "Улавливай ключевые детали в естественном темпе экзамена." },
        { title: "Чтение", detail: "Читай быстрее и понимай логику заданий." },
        { title: "Стратегия", detail: "Управляй временем, пробными тестами и типичными ловушками." },
      ],
      outcomes: ["Следовать понятному плану.", "Читать быстрее.", "Слышать ключевую информацию.", "Уверенно выполнять пробные тесты.", "Использовать лексику HSK вне экзамена."],
      curriculum: [
        { number: "01", title: "Основа", detail: "Диагностика / цель / карта уровня" },
        { number: "02", title: "Базовый язык", detail: "Лексика / грамматика / иероглифы" },
        { number: "03", title: "Навыки экзамена", detail: "Аудирование / чтение / письмо" },
        { number: "04", title: "Практика", detail: "Задания на время / пробные тесты / стратегия" },
        { number: "05", title: "Готовность", detail: "Повторение / обратная связь / готовность к экзамену" },
      ],
      microLesson: { kind: "quiz", label: "Пример задания", question: "我 ___ 学生。", pinyin: "Wǒ ___ xuésheng.", options: ["是", "有", "在"], correctIndex: 0, explanation: "是 (shì) связывает подлежащее с существительным: я — ученик." },
      ctaLabel: "Начать подготовку к HSK",
      ctaChinese: "准备好，更进一步。",
    },
  },
  business: {
    title: "Бизнес",
    description: "Китайский для работы, встреч и делового общения.",
    imageAlt: "Современный офис и деловая среда ночного Шанхая",
    page: {
      seoTitle: "Бизнес-китайский онлайн — MANDARIN LAB",
      seoDescription: "Практический бизнес-китайский для встреч, переговоров, общения в WeChat и профессиональных ситуаций в Китае.",
      headline: ["Говори по-китайски", "для работы."],
      positioning: "Общайся ясно на встречах, в сообщениях и реальных профессиональных ситуациях, связанных с Китаем.",
      audience: "Для специалистов, предпринимателей, студентов и всех, кто работает с Китаем и нуждается в практическом деловом общении.",
      level: "Адаптивный",
      visualStatement: ["Говори с целью."],
      chineseWords: ["商务", "会议", "合作"],
      learning: [
        { title: "Знакомство", detail: "Естественно представь себя, свою роль и компанию." },
        { title: "Встречи", detail: "Следуй повестке, выражай мнение и уточняй решения." },
        { title: "Переговоры", detail: "Обсуждай условия, сроки и следующие шаги." },
        { title: "WeChat", detail: "Пиши лаконичные и уместные деловые сообщения." },
        { title: "Этикет", detail: "Понимай тон, иерархию и роль деловых отношений." },
      ],
      outcomes: ["Представить свою компанию.", "Провести базовую встречу.", "Писать понятнее в WeChat.", "Использовать деловые выражения.", "Общаться с учётом культуры."],
      curriculum: [
        { number: "01", title: "Основа", detail: "Роли / компании / представление" },
        { number: "02", title: "Базовый язык", detail: "Лексика / тон / ключевые структуры" },
        { number: "03", title: "Живое общение", detail: "Встречи / сообщения / переговоры" },
        { number: "04", title: "Практика", detail: "Ролевые игры / ситуации / обратная связь" },
        { number: "05", title: "Прогресс", detail: "Личные задачи / прикладная беглость" },
      ],
      microLesson: { kind: "reveal", label: "Деловое знакомство", chinese: "很高兴认识您", pinyin: "hěn gāoxìng rènshi nín", translation: "Рад познакомиться." },
      ctaLabel: "Начать бизнес-китайский",
      ctaChinese: "为工作而说。",
    },
  },
  travel: {
    title: "Путешествия",
    description: "Практический китайский для поездок и повседневных ситуаций.",
    imageAlt: "Метро Шанхая и современная городская среда для путешествий",
    page: {
      seoTitle: "Китайский для путешествий — MANDARIN LAB",
      seoDescription: "Практический китайский для аэропорта, отеля, транспорта, ресторанов, покупок и поездок по Китаю.",
      headline: ["Китайский", "для реальной жизни."],
      positioning: "Используй практический китайский, чтобы путешествовать по Китаю увереннее, самостоятельнее и свободнее.",
      audience: "Для путешественников и тех, кто планирует поездку в Китай и хочет полезный язык от прилёта до повседневной городской жизни.",
      level: "Практический",
      visualStatement: ["Используй китайский", "там, где он нужен."],
      chineseWords: ["地铁", "酒店", "餐厅"],
      learning: [
        { title: "Прибытие", detail: "Аэропорт, паспортный контроль и заселение в отель." },
        { title: "Транспорт", detail: "Такси, метро и способы оплаты." },
        { title: "Еда", detail: "Заказывай уверенно и понимай основные слова в меню." },
        { title: "Маршрут", detail: "Спрашивай дорогу и понимай простые ответы." },
        { title: "Проблемы", detail: "Проси о помощи в неожиданных ситуациях." },
      ],
      outcomes: ["Ориентироваться в метро.", "Заселиться в отель.", "Уверенно заказать еду.", "Спросить дорогу.", "Решать типичные проблемы в поездке."],
      curriculum: [
        { number: "01", title: "Основа", detail: "Прибытие / необходимое / вежливые фразы" },
        { number: "02", title: "Базовый язык", detail: "Транспорт / оплата / направления" },
        { number: "03", title: "Живое общение", detail: "Отели / рестораны / покупки" },
        { number: "04", title: "Практика", detail: "Ролевые игры / аудирование / ситуации поездки" },
        { number: "05", title: "Уверенность", detail: "Решение проблем / самостоятельное путешествие" },
      ],
      microLesson: { kind: "reveal", label: "Найди дорогу", chinese: "地铁站在哪里？", pinyin: "dìtiě zhàn zài nǎlǐ?", translation: "Где находится станция метро?" },
      ctaLabel: "Начать китайский для поездок",
      ctaChinese: "到达以后，自信开口。",
    },
  },
  kids: {
    title: "Для детей",
    description: "Интерактивный китайский для детей.",
    imageAlt: "Современный стол с материалами для изучения китайского детьми",
    page: {
      seoTitle: "Китайский для детей онлайн — MANDARIN LAB",
      seoDescription: "Увлекательные уроки китайского для детей: игры, визуальные материалы, разговорная практика и короткие интерактивные задания.",
      headline: ["Учи китайский", "через игру."],
      positioning: "Развивай интерес, уверенность и полезную привычку к обучению через творческие и структурированные занятия.",
      audience: "Для детей и юных учеников, которым лучше подходят визуальные подсказки, движение, игра и короткие сфокусированные задания.",
      level: "Для детей",
      visualStatement: ["Учись через", "любопытство."],
      chineseWords: ["颜色", "动物", "数字"],
      learning: [
        { title: "Звуки", detail: "Слушай и уверенно повторяй китайское произношение." },
        { title: "Повседневные слова", detail: "Запоминай полезную лексику через визуальные ассоциации." },
        { title: "Иероглифы", detail: "Знакомься с простыми иероглифами через форму и смысл." },
        { title: "Разговорная речь", detail: "Отвечай на короткие вопросы и участвуй в мини-диалогах." },
        { title: "Игры и истории", detail: "Запоминай язык через игровую структурированную практику." },
      ],
      outcomes: ["С удовольствием использовать китайский.", "Узнавать знакомые слова.", "Отвечать на простые вопросы.", "Понимать базовые иероглифы.", "Создать позитивную учебную привычку."],
      curriculum: [
        { number: "01", title: "Основа", detail: "Звуки / песни / аудирование" },
        { number: "02", title: "Базовый язык", detail: "Люди / цвета / предметы / действия" },
        { number: "03", title: "Живое общение", detail: "Вопросы / ответы / мини-диалоги" },
        { number: "04", title: "Практика", detail: "Игры / визуальные материалы / простые истории" },
        { number: "05", title: "Прогресс", detail: "Повторение / уверенность / полезная привычка" },
      ],
      microLesson: { kind: "reveal", label: "Открой слово", chinese: "猫", pinyin: "māo", translation: "кошка" },
      ctaLabel: "Начать китайский для детей",
      ctaChinese: "从好奇开始。",
    },
  },
};

export const coursesRu: Course[] = courses.map((course) => ({
  ...course,
  ...russianCourseContent[course.id],
  page: russianCourseContent[course.id].page,
}));

export const courseIds = courses.map((course) => course.id);

export const courseFormatRu = {
  format: "Онлайн",
  lesson: "60 мин",
  frequency: "3× / неделю",
  program: "12 занятий / месяц",
  language: "Китайский + поддержка на русском / английском",
};

export const lessonMethodRu = [
  { number: "01", title: "Изучи", detail: "Знакомься с полезным языком на понятных, точных примерах." },
  { number: "02", title: "Практикуй", detail: "Развивай точность через упражнения и обратную связь." },
  { number: "03", title: "Говори", detail: "Используй новый язык в реалистичных диалогах." },
  { number: "04", title: "Повторяй", detail: "Возвращайся к важному материалу, пока он не забылся." },
  { number: "05", title: "Продвигайся", detail: "Отслеживай прогресс и переходи на следующий уровень." },
];

export function getCourses(language: Language) {
  return language === "ru" ? coursesRu : courses;
}

export function getCourseBySlug(slug: string, language: Language = "en") {
  return getCourses(language).find((course) => course.id === slug);
}

export function getRelatedCourses(course: Course, language: Language = "en") {
  return getCourses(language).filter((related) => related.id !== course.id);
}

export function getCourseFormat(language: Language) {
  return language === "ru" ? courseFormatRu : courseFormat;
}

export function getLessonMethod(language: Language) {
  return language === "ru" ? lessonMethodRu : lessonMethod;
}

export function getCourseFacts(course: Course, language: Language = "en") {
  const format = getCourseFormat(language);
  const labels = language === "ru"
    ? ["Формат", "Занятие", "Частота", "Программа", "Уровень"]
    : ["Format", "Lesson", "Frequency", "Program", "Level"];
  return [
    { label: labels[0], value: format.format },
    { label: labels[1], value: format.lesson },
    { label: labels[2], value: format.frequency },
    { label: labels[3], value: format.program },
    { label: labels[4], value: course.page.level },
  ];
}
