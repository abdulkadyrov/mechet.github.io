const KEYS = {
  questions: "mp_questions_v1",
  polls: "mp_polls_v1",
  votes: "mp_votes_v1",
  campaigns: "mp_campaigns_v1",
  reports: "mp_reports_v1",
  sermons: "mp_sermons_v1",
  schedule: "mp_schedule_v1",
  admin: "mp_admin_v1"
};

function uid(prefix="id"){
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function load(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  }catch(e){
    return fallback;
  }
}

function save(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

function nowISO(){
  return new Date().toISOString();
}

export { KEYS, uid, load, save, nowISO };