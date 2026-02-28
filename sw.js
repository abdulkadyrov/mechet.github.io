import { KEYS, load, save, uid, nowISO } from "../storage.js";

function seedOnce(){
  const admin = load(KEYS.admin, null);
  if(admin) return;

  save(KEYS.admin, { pin: "1234" });

  save(KEYS.polls, [
    {
      id: uid("poll"),
      title: "Темы проповеди на эту пятницу",
      createdAt: nowISO(),
      status: "active",
      options: [
        { id: uid("opt"), text: "Смысл искренности (ихляс)" },
        { id: uid("opt"), text: "Права родителей" },
        { id: uid("opt"), text: "Польза зикра и дуа" }
      ]
    }
  ]);

  save(KEYS.votes, {});

  save(KEYS.campaigns, [
    {
      id: uid("camp"),
      title: "Реставрация и ремонт мечети",
      goal: 250000,
      raised: 73500,
      createdAt: nowISO(),
      active: true,
      details: "Сбор средств на материалы и работу. Отчёты публикуются регулярно."
    }
  ]);

  save(KEYS.reports, []);

  save(KEYS.sermons, [
    {
      id: uid("sermon"),
      title: "О важности намерения",
      date: nowISO(),
      description: "Короткое наставление о том, как намерение влияет на поклонение.",
      audioUrl: "",
      videoUrl: "",
      videoLink: ""
    }
  ]);

  save(KEYS.schedule, {
    monthLabel: new Date().toLocaleDateString("ru-RU", {month:"long", year:"numeric"}),
    imageUrl: ""
  });

  save(KEYS.questions, []);
}

seedOnce();
export { seedOnce };