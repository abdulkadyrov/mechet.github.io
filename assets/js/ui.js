function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

function fmtDate(iso){
  try{
    const d = new Date(iso);
    return d.toLocaleString("ru-RU", {year:"numeric", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit"});
  }catch{ return iso; }
}

function setHTML(el, html){ el.innerHTML = html; }
function escapeHTML(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function toast(target, message, type="ok"){
  target.innerHTML = `<div class="notice notice--${type}">${escapeHTML(message)}</div>`;
  setTimeout(()=> target.innerHTML = "", 3500);
}

export { qs, qsa, fmtDate, setHTML, escapeHTML, toast };