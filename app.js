const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const state = { nav: "home", section: null, tab: "free", query: "" };

const STORAGE = {
  email: "inaturalife_email",
  premiumValidated: "inaturalife_premium_validated",
  premiumValidatedAt: "inaturalife_premium_validated_at"
};

function getConfig(){ return (window.INATURA_CONFIG || {appName:"InaturaLife", premiumCsvUrl:""}); }

function setNav(nav){
  state.nav = nav;
  $$(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.nav === nav));
  $("#viewHome").style.display = nav === "home" ? "" : "none";
  $("#viewSection").style.display = (nav === "chas" || nav === "suplementos" || nav === "protocolos") ? "" : "none";
  $("#viewSobre").style.display = nav === "sobre" ? "" : "none";

  if(nav === "home"){ setHomeHero(); renderHomeCards(); }
  else if(nav === "sobre"){ /* nada */ }
  else { openSection(getSectionInfo(nav)); }
}

function getSectionInfo(nav){
  if(nav === "chas") return {key:"chas", title:"Chás", img:"assets/img/capa-chas.webp", sub:"Amostra grátis por área + Premium completo."};
  if(nav === "suplementos") return {key:"suplementos", title:"Suplementos", img:"assets/img/capa-suplementos.webp", sub:"Grátis: Naturais do dia a dia. Premium: guia completo."};
  if(nav === "protocolos") return {key:"protocolos", title:"Protocolos", img:"assets/img/capa-protocolos.webp", sub:"Rotinas práticas — grátis (amostra) e premium (completo)."};
  return {key:"home", title:"Início", img:"assets/img/capa-chas.webp", sub:""};
}

function setHomeHero(){
  $("#heroImg").src = "assets/img/capa-chas.webp";
  $("#heroTitle").textContent = "InaturaLife";
  $("#heroSub").textContent = "Escolha uma área: Chás, Suplementos ou Protocolos. Grátis = amostra. Premium = completo (liberação por login).";
  $("#heroPill").textContent = isPremiumUnlocked() ? "Premium liberado" : "Premium bloqueado";
}

function renderHomeCards(){
  const cards = [
    {key:"chas", title:"Chás", desc:"Amostra grátis por área + Premium completo"},
    {key:"suplementos", title:"Suplementos", desc:"Grátis: naturais do dia a dia | Premium: guia completo"},
    {key:"protocolos", title:"Protocolos", desc:"Rotinas práticas e semanais"},
    {key:"sobre", title:"Sobre", desc:"Avisos, uso responsável e versão"}
  ];
  const wrap = $("#homeCards");
  wrap.innerHTML = "";
  cards.forEach(c => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="meta">
        <span class="badge">${c.key === "sobre" ? "Info" : "Abrir"}</span>
        <span class="badge ${isPremiumUnlocked() ? "" : "lock"}">${isPremiumUnlocked() ? "Premium OK" : "Premium 🔒"}</span>
      </div>
    `;
    el.addEventListener("click", () => { if(c.key === "sobre") setNav("sobre"); else setNav(c.key); });
    wrap.appendChild(el);
  });
}

async function loadJson(path){
  const res = await fetch(path, {cache:"no-cache"});
  if(!res.ok) throw new Error("Falha ao carregar: " + path);
  return await res.json();
}

function openSection(section){
  state.section = section;
  $("#sectionImg").src = section.img;
  $("#sectionTitle").textContent = section.title;
  $("#sectionSub").textContent = section.sub;
  state.tab = "free";
  renderTabs();
  renderList();
}

function renderTabs(){
  const t = $("#tabs");
  t.innerHTML = "";
  [{id:"free", label:"Grátis"},{id:"premium", label:"Premium"}].forEach(tab => {
    const el = document.createElement("div");
    el.className = "tab" + (state.tab === tab.id ? " active" : "");
    el.textContent = tab.label;
    el.addEventListener("click", () => {
      if(tab.id === "premium" && !isPremiumUnlocked()){ openPremiumGate(); return; }
      state.tab = tab.id;
      renderTabs();
      renderList();
    });
    t.appendChild(el);
  });
  $("#sectionPill").textContent = state.tab === "free" ? "Grátis" : "Premium";
}

function filterItems(items){
  const q = (state.query || "").trim().toLowerCase();
  if(!q) return items;
  return items.filter(it => ((it.title+"\n"+it.text+"\n"+(it.badge||"")).toLowerCase()).includes(q));
}

async function renderList(){
  const key = state.section?.key;
  if(!key) return;
  const list = $("#list");
  list.innerHTML = "";
  const file = `data/${key}_${state.tab}.json`;
  let data;
  try{ data = await loadJson(file); }
  catch(e){ list.innerHTML = `<div class="card" style="cursor:default"><h3>Não encontrei o arquivo</h3><p>${file}</p></div>`; return; }

  const items = filterItems(data.items || []);
  if(items.length === 0){
    list.innerHTML = `<div class="card" style="cursor:default"><h3>Nenhum resultado</h3><p>Tente outro termo na busca.</p></div>`;
    return;
  }

  items.forEach(it => {
    const el = document.createElement("div");
    el.className = "card";
    const badge = it.badge ? `<span class="badge">${escapeHtml(it.badge)}</span>` : `<span class="badge">Info</span>`;
    el.innerHTML = `
      <h3>${escapeHtml(it.title)}</h3>
      <p>${escapeHtml(shorten(it.text, 140))}</p>
      <div class="meta">
        ${badge}
        <span class="badge">${state.tab === "premium" ? "Premium" : "Grátis"}</span>
      </div>
    `;
    el.addEventListener("click", () => openModal(it.title, it.text));
    list.appendChild(el);
  });
}

function shorten(text, n){
  const t = (text||"").replace(/\s+/g," ").trim();
  return t.length > n ? t.slice(0, n-1) + "…" : t;
}
function escapeHtml(s){
  return (s||"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

// Modal
function openModal(title, text, options = {}){
  $("#modalTitle").textContent = title;
  $("#modalText").textContent = text || "";
  $("#modalBackdrop").style.display = "flex";
  $("#modalForm").style.display = options.showForm ? "" : "none";

  const actions = $("#modalActions");
  actions.innerHTML = "";
  (options.actions || [{label:"Fechar", kind:"btn", onClick: closeModal}]).forEach(a => {
    const b = document.createElement("button");
    b.className = a.kind === "primary" ? "btn primary" : "btn";
    b.textContent = a.label;
    b.addEventListener("click", a.onClick);
    actions.appendChild(b);
  });
}
function closeModal(){ $("#modalBackdrop").style.display = "none"; }

$("#modalClose").addEventListener("click", closeModal);
$("#modalBackdrop").addEventListener("click", (e) => { if(e.target.id === "modalBackdrop") closeModal(); });

function openPremiumGate(){
  const cfg = getConfig();
  const email = localStorage.getItem(STORAGE.email) || "";
  $("#emailInput").value = email;
  $("#modalHelp").textContent = cfg.premiumCsvUrl
    ? "Digite o email usado na compra (Hotmart). Vamos conferir na lista de compradores (Google Sheets)."
    : "⚠️ Falta configurar a planilha no arquivo config.js (premiumCsvUrl). Veja README no ZIP.";
  openModal("Conteúdo Premium 🔒","Para acessar o Premium, faça login com o email usado na compra.",{
    showForm:true,
    actions:[
      {label:"Cancelar", kind:"btn", onClick: closeModal},
      {label:"Entrar", kind:"primary", onClick: validatePremiumEmail}
    ]
  });
}

async function validatePremiumEmail(){
  const cfg = getConfig();
  const email = ($("#emailInput").value || "").trim().toLowerCase();
  if(!email || !email.includes("@")){
    openModal("Ops","Digite um email válido.",{actions:[{label:"Ok", kind:"primary", onClick: openPremiumGate}]});
    return;
  }
  localStorage.setItem(STORAGE.email, email);
  if(!cfg.premiumCsvUrl){
    openModal("Falta configurar a planilha","Abra o arquivo config.js e cole a URL CSV pública (premiumCsvUrl). Depois atualize o GitHub Pages.",{actions:[{label:"Ok", kind:"primary", onClick: closeModal}]});
    return;
  }

  try{
    const ok = await checkEmailInCsv(cfg.premiumCsvUrl, email);
    if(ok){
      localStorage.setItem(STORAGE.premiumValidated, "true");
      localStorage.setItem(STORAGE.premiumValidatedAt, String(Date.now()));
      closeModal();
      state.tab = "premium";
      renderTabs();
      renderList();
      setHomeHero();
    } else {
      openModal("Email não encontrado","Não encontrei esse email na lista de compras.\n\nVerifique se digitou o mesmo email da compra e se a planilha está publicada como CSV.",{actions:[{label:"Tentar de novo", kind:"primary", onClick: openPremiumGate}]});
    }
  }catch(e){
    openModal("Não consegui validar agora","Erro ao acessar a planilha.\nVerifique se a URL CSV está pública e tente novamente.",{actions:[{label:"Ok", kind:"primary", onClick: openPremiumGate}]});
  }
}

async function checkEmailInCsv(csvUrl, email){
  const res = await fetch(csvUrl, {cache:"no-cache"});
  if(!res.ok) throw new Error("CSV fetch failed");
  const csv = await res.text();
  return csv.toLowerCase().includes(email);
}

function isPremiumUnlocked(){
  return localStorage.getItem(STORAGE.premiumValidated) === "true";
}

$("#btnAccount").addEventListener("click", () => {
  const email = localStorage.getItem(STORAGE.email) || "";
  const prem = isPremiumUnlocked() ? "Liberado ✅" : "Bloqueado 🔒";
  openModal("Sua conta", `Email: ${email || "(não informado)"}\nPremium: ${prem}`, {
    actions: [
      {label:"Fechar", kind:"btn", onClick: closeModal},
      {label:"Sair", kind:"btn", onClick: () => { localStorage.removeItem(STORAGE.email); localStorage.removeItem(STORAGE.premiumValidated); closeModal(); setHomeHero(); renderTabs(); renderList(); } }
    ]
  });
});

$("#btnPremium").addEventListener("click", () => { isPremiumUnlocked() ? openModal("Premium ✅","Seu Premium está liberado.",{actions:[{label:"Ok", kind:"primary", onClick: closeModal}]}) : openPremiumGate(); });

$("#searchInput").addEventListener("input", (e) => { state.query = e.target.value; if(state.nav !== "home") renderList(); });
$("#btnClear").addEventListener("click", () => { $("#searchInput").value=""; state.query=""; if(state.nav !== "home") renderList(); });

$$(".nav-item").forEach(el => el.addEventListener("click", () => setNav(el.dataset.nav)));

function init(){
  const cfg = getConfig();
  $("#brandName").textContent = cfg.appName || "InaturaLife";
  setNav("home");
  if("serviceWorker" in navigator){ navigator.serviceWorker.register("./service-worker.js"); }
}
init();
