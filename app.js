(() => {
  const DATA = window.INATURA_DATA;
  const $ = (id) => document.getElementById(id);

  const state = {
    module: "chas",
    category: null,
    q: "",
  };

  const modulePalette = {
    chas: "pill",
    suplementos: "pill violet",
    protocolos: "pill orange",
    tabelas: "pill sky",
    receitas: "pill green",
    seguranca: "pill red",
  };

  const teaCategoryClass = {
    "Digestivo": "cat-digestivo",
    "Circulação": "cat-circulacao",
    "Calmantes": "cat-calmantes",
    "Imunidade": "cat-imunidade",
    "Femininos": "cat-femininos",
    "Chás especiais": "cat-especiais"
  };

  const teaCategoryColor = {
    "Digestivo": "#14b8a6",
    "Circulação": "#ef4444",
    "Calmantes": "#8b5cf6",
    "Imunidade": "#22c55e",
    "Femininos": "#ec4899",
    "Chás especiais": "#f59e0b"
  };

  function hexToRgb(hex){
    const h = (hex||"").replace("#","").trim();
    if(h.length===3){
      const r=parseInt(h[0]+h[0],16), g=parseInt(h[1]+h[1],16), b=parseInt(h[2]+h[2],16);
      return {r,g,b};
    }
    if(h.length===6){
      const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
      return {r,g,b};
    }
    return {r:17,g:24,b:39};
  }

  function relLuminance({r,g,b}){
    // sRGB relative luminance
    const srgb=[r,g,b].map(v=>v/255).map(v=> (v<=0.03928)? v/12.92 : Math.pow((v+0.055)/1.055,2.4));
    return 0.2126*srgb[0]+0.7152*srgb[1]+0.0722*srgb[2];
  }

  function pickOnColor(bgHex){
    const lum = relLuminance(hexToRgb(bgHex));
    return lum > 0.60 ? "#0b1220" : "#ffffff";
  }

  function cardColors(item){
    // Background: tea category color; otherwise module accent
    let bg = null;
    if(item.module === "chas" && item.category){
      bg = teaCategoryColor[item.category] || null;
    }
    if(!bg){
      const mod = DATA.modules.find(m => m.key === item.module);
      bg = mod?.accent || "#14b8a6";
    }
    const fg = pickOnColor(bg);
    const isLight = fg !== "#ffffff";
    const muted = isLight ? "rgba(11,18,32,.72)" : "rgba(255,255,255,.84)";
    const tagBg = isLight ? "rgba(11,18,32,.08)" : "rgba(255,255,255,.16)";
    const tagBorder = isLight ? "rgba(11,18,32,.12)" : "rgba(255,255,255,.22)";
    const tagFg = isLight ? "rgba(11,18,32,.92)" : "rgba(255,255,255,.94)";
    return {bg, fg, muted, tagBg, tagBorder, tagFg};
  }

  function styleVarsForCard(item){
    const c = cardColors(item);
    return `--cardBg:${c.bg};--cardFg:${c.fg};--cardMuted:${c.muted};--tagBg:${c.tagBg};--tagBorder:${c.tagBorder};--tagFg:${c.tagFg};`;
  }

  function slugify(s){
    return (s||"")
      .toString()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function setAccent(){
    const mod = DATA.modules.find(m => m.key === state.module);
    const accent = (mod && mod.accent) ? mod.accent : "#14b8a6";
    document.documentElement.style.setProperty("--accent", accent);

    // Keep the browser UI light; accent still shows in highlights.
    const meta = document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute("content", "#f8fafc");
  }

  function catClassForItem(item){
    if(item.module !== "chas") return "";
    return teaCategoryClass[item.category] || ("cat-" + slugify(item.category));
  }


  function uniq(arr){ return Array.from(new Set(arr)).filter(Boolean); }

  function setHashToItem(id){
    location.hash = `#/item/${encodeURIComponent(id)}`;
  }

  function openSheet(item){
    $("sheetTitle").textContent = item.title;
    $("sheetMeta").textContent = [labelModule(item.module), item.category].filter(Boolean).join(" • ");
    const panel = document.querySelector(".sheetPanel");
    const cc = cardColors(item);
    panel.style.setProperty("--sheetBg", cc.bg);
    panel.style.setProperty("--sheetFg", cc.fg);
    panel.style.setProperty("--sheetMuted", cc.muted);
    $("sheetBody").innerHTML = renderBlocks(item.blocks || []);
    $("sheetFooter").innerHTML = renderFooterActions(item);
    $("sheet").classList.add("show");
    $("sheet").setAttribute("aria-hidden","false");
  }

  function closeSheet(){
    $("sheet").classList.remove("show");
    const panel = document.querySelector(".sheetPanel");
    panel.style.removeProperty("--sheetBg");
    panel.style.removeProperty("--sheetFg");
    panel.style.removeProperty("--sheetMuted");
    $("sheet").setAttribute("aria-hidden","true");
    // If viewing item route, go back to list
    if (location.hash.startsWith("#/item/")) {
      location.hash = "#/";
    }
  }

  function labelModule(key){
    const mod = DATA.modules.find(m => m.key === key);
    return mod ? mod.title : key;
  }

  function renderBlocks(blocks){
    return blocks.map(b => {
      if(b.type === "hero"){
        const tags = (b.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
        return `
          <div class="block hero">
            <div class="hTitle">${escapeHtml(b.title || "")}</div>
            ${b.subtitle ? `<div class="hSub">${escapeHtml(b.subtitle)}</div>` : ""}
            ${b.badge ? `<div class="hSub"><strong>${escapeHtml(b.badge)}</strong></div>` : ""}
            ${tags ? `<div class="hTags">${tags}</div>` : ""}
          </div>
        `;
      }
      if(b.type === "alert"){
        return `
          <div class="block alert ${escapeHtml(b.tone || "info")}">
            <div class="aTitle">${escapeHtml(b.title || "")}</div>
            <div>${escapeHtml(b.text || "")}</div>
          </div>
        `;
      }
      if(b.type === "steps"){
        const lis = (b.steps || []).map(s => `<li>${escapeHtml(s)}</li>`).join("");
        return `
          <div class="block">
            <h3>${escapeHtml(b.title || "")}</h3>
            <ul class="ul">${lis}</ul>
          </div>
        `;
      }
      if(b.type === "cards"){
        const cards = (b.items || []).map(it => `
          <div class="smallCard">
            <div class="scTitle">${escapeHtml(it.title || "")}</div>
            <div class="scText">${escapeHtml(it.text || "")}</div>
          </div>
        `).join("");
        return `
          <div class="block">
            <h3>${escapeHtml(b.title || "")}</h3>
            <div class="cardsGrid">${cards}</div>
          </div>
        `;
      }
      if(b.type === "table"){
        const head = (b.columns || []).map(c => `<th>${escapeHtml(c)}</th>`).join("");
        const rows = (b.rows || []).map(r => `<tr>${r.map(c => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`).join("");
        return `
          <div class="block">
            <h3>${escapeHtml(b.title || "")}</h3>
            <div class="tableWrap">
              <table>
                <thead><tr>${head}</tr></thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </div>
        `;
      }
      if(b.type === "faq"){
        const items = (b.items || []).map(it => `
          <div class="smallCard">
            <div class="scTitle">${escapeHtml(it.q || "")}</div>
            <div class="scText">${escapeHtml(it.a || "")}</div>
          </div>
        `).join("");
        return `
          <div class="block">
            <h3>${escapeHtml(b.title || "")}</h3>
            <div class="cardsGrid">${items}</div>
          </div>
        `;
      }
      // fallback
      return "";
    }).join("");
  }

  function renderFooterActions(item){
    const shareText = encodeURIComponent(`${item.title} — ${labelModule(item.module)} • ${item.category || ""}`);
    return `
      <div style="padding: 0 14px 14px;">
        <button class="btn ghost" id="copyLinkBtn">Copiar link</button>
      </div>
    `;
  }

  function escapeHtml(str){
    return String(str ?? "").replace(/[&<>"']/g, (m) => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[m]));
  }

  function buildModuleChips(){
    const el = $("moduleChips");
    el.innerHTML = DATA.modules.map(m => `
      <div class="chip ${state.module===m.key?'on':''}" data-module="${m.key}">
        <span class="dot" style="background:${m.accent || 'var(--accent)'}"></span>
        ${escapeHtml(m.title)}
      </div>
    `).join("");

    el.querySelectorAll(".chip").forEach(ch => {
      ch.addEventListener("click", () => {
        state.module = ch.dataset.module;
        state.category = null;
        $("q").value = "";
        state.q = "";
        render();
      });
    });
  }

  function buildBottomNav(){
    const el = $("bottomNav");
    const mainKeys = ["chas","protocolos","suplementos","tabelas"];
    el.innerHTML = mainKeys.map(k => {
      const mod = DATA.modules.find(m => m.key===k);
      return `<button class="navBtn ${state.module===k?'on':''}" data-module="${k}">${escapeHtml(mod?.title || k)}</button>`;
    }).join("");

    el.querySelectorAll(".navBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        state.module = btn.dataset.module;
        state.category = null;
        render();
      });
    });
  }

  function buildCategoryChips(items){
    const cats = uniq(items.map(i => i.category));
    const el = $("categoryChips");

    if(!cats.length){
      el.hidden = true;
      return;
    }
    el.hidden = false;

    const makeChip = (label, cat) => {
      const on = (!cat && !state.category) || (cat && state.category===cat);
      const cls = (state.module==="chas" && cat) ? (teaCategoryClass[cat] || ("cat-" + slugify(cat))) : "";
      const dot = (state.module==="chas" && cat) ? `<span class="dot ${cls}"></span>` : `<span class="dot"></span>`;
      return `<div class="chip ${on?'on':''}" data-cat="${escapeHtml(cat||"")}">${dot}${escapeHtml(label)}</div>`;
    };

    el.innerHTML = [
      makeChip("Todas", ""),
      ...cats.map(c => makeChip(c, c))
    ].join("");

    el.querySelectorAll(".chip").forEach(ch => {
      ch.addEventListener("click", () => {
        const c = ch.dataset.cat || "";
        state.category = c || null;
        render();
      });
    });
  }

  function filteredItems(){
    const q = (state.q || "").trim().toLowerCase();
    return DATA.items
      .filter(i => i.module === state.module)
      .filter(i => !state.category || i.category === state.category)
      .filter(i => {
        if(!q) return true;
        const hay = [
          i.title, i.category, ...(i.tags||[]),
          ...(i.blocks||[]).map(b => (b.title||"") + " " + (b.text||"") + " " + (b.subtitle||"") + " " + (b.steps||[]).join(" "))
        ].join(" ").toLowerCase();
        return hay.includes(q);
      });
  }

  function renderList(items){
    const el = $("list");
    if(!items.length){
      el.innerHTML = `<div class="card" style="cursor:default"><div class="cardTitle">Nada encontrado</div><div class="cardMeta">Tente outra palavra ou limpe os filtros.</div></div>`;
      return;
    }
    el.innerHTML = items.map(i => {
      const pillClass = modulePalette[i.module] || "pill";
      const tags = (i.tags || []).slice(0,6).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
      const desc = guessDescription(i);
      return `
        <div class="card ${catClassForItem(i)}" style="${styleVarsForCard(i)}" data-id="${escapeHtml(i.id)}">
          <div class="cardTop">
            <div>
              <div class="cardTitle">${escapeHtml(i.title)}</div>
              <div class="cardMeta">${escapeHtml(i.category || "")}${desc ? " • " + escapeHtml(desc) : ""}</div>
            </div>
            <div class="${pillClass}">${escapeHtml(labelModule(i.module))}</div>
          </div>
          ${tags ? `<div class="tags">${tags}</div>` : ""}
        </div>
      `;
    }).join("");

    el.querySelectorAll(".card").forEach(c => {
      c.addEventListener("click", () => {
        const id = c.dataset.id;
        setHashToItem(id);
      });
    });
  }

  function guessDescription(item){
    const hero = (item.blocks||[]).find(b => b.type==="hero");
    if(hero?.subtitle) return hero.subtitle;
    const alert = (item.blocks||[]).find(b => b.type==="alert");
    if(alert?.text) return alert.text.slice(0, 80) + (alert.text.length>80?"…":"");
    return "";
  }

  function render(){
    setAccent();
    // update bottom nav selection
    buildBottomNav();

    // items for selected module
    const itemsAll = DATA.items.filter(i => i.module===state.module);
    buildCategoryChips(itemsAll);

    // filtered items
    const items = filteredItems();
    renderList(items);

    // update module chips selection
    buildModuleChips();
  }

  // ---------- ROUTER ----------
  function route(){
    const h = location.hash || "#/";
    if(h.startsWith("#/item/")){
      const id = decodeURIComponent(h.split("#/item/")[1] || "");
      const item = DATA.items.find(x => x.id === id);
      if(item) openSheet(item);
      else closeSheet();
      return;
    }
    // list view
    closeSheet();
  }

  // ---------- INSTALL PROMPT ----------
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $("installBtn").hidden = false;
  });
  $("installBtn").addEventListener("click", async () => {
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    $("installBtn").hidden = true;
  });

  // ---------- EVENTS ----------
  $("q").addEventListener("input", (e) => {
    state.q = e.target.value || "";
    render();
  });

  $("sheetClose").addEventListener("click", closeSheet);
  $("sheetX").addEventListener("click", closeSheet);

  // Copy link in footer (delegated)
  document.addEventListener("click", async (e) => {
    if(e.target && e.target.id === "copyLinkBtn"){
      try{
        await navigator.clipboard.writeText(location.href);
        e.target.textContent = "Link copiado ✅";
        setTimeout(()=> e.target.textContent="Copiar link", 1200);
      }catch(err){
        e.target.textContent = "Não foi possível copiar";
      }
    }
  });

  window.addEventListener("hashchange", route);

  // ---------- SW ----------
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js").catch(()=>{});
  }

  // INIT
  buildModuleChips();
  buildBottomNav();
  render();
  route();
})();
