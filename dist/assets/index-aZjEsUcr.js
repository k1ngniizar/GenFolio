(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();const T=` 
:root {
        font-family: "DM Sans", sans-serif;
        color: #181818;
        background: #e9e6df;
        font-synthesis: none;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-width: 320px;
        min-height: 100vh;
        background: #e9e6df;
      }
      .portfolio {
        width: 100%;
        max-width: 1700px;
        min-height: 1100px;
        margin: auto;
        background: var(--bg);
        color: var(--text);
        font-family: "DM Sans", sans-serif;
        overflow: hidden;
        transition: width 0.25s;
        box-shadow: 0 13px 38px rgba(26, 24, 20, 0.15);
      }
      .portfolio.preview-mobile {
        max-width: 460px;
      }
      .portfolio-content {
        min-height: 100%;
      }
      .portfolio-section {
        padding: 70px;
        border-bottom: 1px solid
          color-mix(in srgb, var(--muted) 25%, transparent);
        position: relative;
      }
      .section-kicker {
        display: flex;
        align-items: center;
        gap: 9px;
        color: var(--muted);
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 700;
        margin-bottom: 42px;
      }
      .section-kicker span {
        width: 24px;
        height: 1px;
        background: var(--accent);
      }
      .hero-section {
        padding-top: 100px;
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        align-items: center;
        min-height: 650px;
        position: relative;
        overflow: hidden;
      }
      .eyebrow {
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--muted);
        margin: 0 0 25px;
      }
      .hero-copy h1 {
        font: 600 clamp(60px, 8vw, 94px)/0.87 "Manrope";
        letter-spacing: -6px;
        margin: 0;
        max-width: 700px;
      }
      .hero-title {
        color: var(--accent);
        font: 500 19px "Manrope";
        margin: 20px 0 25px;
      }
      .hero-tagline {
        max-width: 580px;
        color: var(--muted);
        font-size: 15px;
        line-height: 1.7;
      }
      .hero-actions {
        margin-top: 34px;
        display: flex;
        align-items: center;
        gap: 24px;
      }
      .hero-actions a {
        color: var(--text);
        text-decoration: none;
        font-size: 11px;
        font-weight: 600;
      }
      .hero-actions .primary-link {
        background: var(--text);
        color: var(--bg);
        padding: 12px 15px;
        border-radius: 3px;
      }
      .primary-link span {
        margin-left: 14px;
      }
      .hero-visual {
        position: relative;
        display: grid;
        place-items: center;
      }
      .portfolio-avatar {
        width: 220px;
        height: 220px;
        display: grid;
        place-items: center;
        overflow: hidden;
        background: var(--accent);
        color: white;
        border-radius: var(--avatar-shape);
        font: 600 54px "Manrope";
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.11);
      }
      .portfolio-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .availability-card {
        position: absolute;
        bottom: -5px;
        right: -5px;
        background: var(--surface);
        border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.09);
        padding: 10px 14px;
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .availability-card span {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #45a66d;
      }
      .availability-card p {
        margin: 0;
        font-size: 8px;
        color: var(--muted);
      }
      .availability-card strong {
        display: block;
        color: var(--text);
        font-size: 9px;
      }
      .hero-meta {
        position: absolute;
        bottom: 25px;
        left: 70px;
        right: 70px;
        display: flex;
        justify-content: space-between;
        color: var(--muted);
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
      }
      .about-section {
        background: var(--surface);
      }
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
      }
      .about-grid h2,
      .section-heading h2,
      .skills-layout h2,
      .contact-grid h2 {
        font: 600 38px/1.08 "Manrope";
        letter-spacing: -2px;
        margin: 0;
      }
      .about-grid > div {
        color: var(--muted);
        font-size: 12px;
        line-height: 1.7;
      }
      .about-grid .about-lead {
        color: var(--text);
        font-size: 17px;
        line-height: 1.55;
      }
      .about-grid a {
        color: var(--accent);
        font-weight: 600;
        text-decoration: none;
      }
      .section-heading {
        margin-bottom: 34px;
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 30px;
      }
      .section-heading p {
        color: var(--muted);
        font-size: 11px;
        max-width: 220px;
        line-height: 1.5;
      }
      .experience-list {
        border-top: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
      }
      .experience-item {
        display: grid;
        grid-template-columns: 45px 1fr;
        gap: 20px;
        padding: 25px 0;
        border-bottom: 1px solid
          color-mix(in srgb, var(--muted) 25%, transparent);
      }
      .experience-item > span {
        color: var(--accent);
        font-size: 10px;
      }
      .experience-item h3 {
        font: 600 18px "Manrope";
        margin: 0 0 6px;
      }
      .experience-item p {
        color: var(--muted);
        font-size: 10px;
        margin: 0 0 9px;
      }
      .experience-item p strong {
        color: var(--text);
      }
      .experience-item small {
        display: block;
        color: var(--muted);
        font-size: 10px;
        line-height: 1.6;
      }
      .project-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
      }
      .project-card {
        background: var(--surface);
        border: 1px solid color-mix(in srgb, var(--muted) 25%, transparent);
      }
      .project-art {
        height: 210px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        background: var(--text);
      }
      .project-art span {
        font-size: 50px;
        font-weight: 900;
        background-color: var(--accent);
        color: var(--text);
        height: 100px;
        width: 100px;
        text-align: center;
        align-content: center;
        border-radius: 50%;
      }
      .project-card > div:last-child {
        padding: 18px;
      }
      .project-card p {
        font-size: 8px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--muted);
      }
      .project-card h3 {
        font: 600 18px "Manrope";
        margin: 5px 0;
      }
      .project-card small {
        display: block;
        color: var(--muted);
        font-size: 9px;
        line-height: 1.5;
        min-height: 42px;
      }
      .project-card a {
        color: var(--accent);
        text-decoration: none;
        font-size: 9px;
        font-weight: 700;
        display: inline-block;
        margin-top: 12px;
      }
      .skills-section {
        background: var(--text);
        color: var(--bg);
      }
      .skills-section .section-kicker {
        color: color-mix(in srgb, var(--bg) 65%, transparent);
      }
      .skills-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        align-items: center;
      }
      .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .skill-tags span {
        border: 1px solid color-mix(in srgb, var(--bg) 28%, transparent);
        border-radius: 30px;
        padding: 9px 14px;
        font-size: 10px;
      }
      .contact-section {
        background: var(--accent);
        color: white;
      }
      .contact-section .section-kicker {
        color: rgba(255, 255, 255, 0.75);
      }
      .contact-section .section-kicker span {
        background: white;
      }
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: end;
      }
      .contact-grid h2 {
        font-size: 50px;
      }
      .contact-grid p {
        font-size: 14px;
        opacity: 0.8;
      }
      .contact-grid > div > a {
        color: white;
        text-decoration: none;
        font: 600 18px "Manrope";
        font-size: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }
      .contact-details {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 40px;
        font-size: 8px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        opacity: 0.8;
      }
      .template-editorial .hero-copy h1 {
        font-family: "Playfair Display";
        font-style: italic;
        letter-spacing: -4px;
      }
      .template-editorial .hero-section {
        background: var(--surface);
      }
      .template-editorial .hero-copy {
        z-index: 1;
      }
      .template-editorial .hero-visual {
        border-radius: 0;
        width: 170px;
        height: 260px;
      }
      .template-editorial .about-section {
        background: var(--bg);
      }
      .template-editorial .projects-section .project-art {
        height: 240px;
      }
      .template-bold .portfolio-section {
        border-color: color-mix(in srgb, var(--text) 15%, transparent);
      }
      .template-bold .hero-section {
        background: var(--accent);
        color: white;
      }
      .template-bold .hero-copy h1,
      .template-bold .hero-title,
      .template-bold .hero-tagline,
      .template-bold .eyebrow {
        color: white;
      }
      .template-bold .hero-actions .primary-link {
        color: var(--accent);
        background: white;
      }
      .template-bold .portfolio-avatar {
        background: var(--text);
      }
      .template-bold .about-section,
      .template-bold .experience-section,
      .template-bold .projects-section {
        background: var(--surface);
      }
      .template-bold .section-kicker,
      .template-bold .about-grid > div,
      .template-bold .about-grid .about-lead,
      .template-bold .section-heading p,
      .template-bold .experience-item small {
        color: var(--muted);
      }
      .template-bold .contact-section {
        background: var(--text);
      }
      @media (max-width: 900px) {
        .workspace {
          grid-template-columns: 360px minmax(0, 1fr);
        }
        .portfolio-section {
          padding: 45px;
        }
        .hero-section {
          padding-top: 80px;
        }
        .hero-copy h1 {
          font-size: 55px;
        }
        .portfolio-avatar {
          width: 170px;
          height: 170px;
        }
        .about-grid,
        .skills-layout,
        .contact-grid {
          gap: 35px;
        }
      }
      @media (max-width: 720px) {
        .topbar {
          padding: 0 15px;
        }
        .button {
          font-size: 0;
        }
        .button span {
          font-size: 14px;
          margin: 0;
        }
        .workspace {
          display: block;
        }
        .sidebar {
          position: static;
          height: auto;
          min-height: 0;
          border-right: 0;
          border-bottom: 1px solid #d6d1c7;
        }
        .panel-stack {
          padding: 0 18px 30px;
        }
        .preview-toolbar {
          padding: 0 13px;
        }
        .preview-stage {
          padding: 10px;
        }
        .portfolio-section {
          padding: 35px 25px;
        }
        .hero-section {
          min-height: 780px;
          grid-template-columns: 1fr;
          align-content: start;
        }
        .hero-copy h1 {
          font-size: 52px;
          letter-spacing: -3.5px;
        }
        .hero-visual {
          margin-top: 55px;
        }
        .portfolio-avatar {
          width: 180px;
          height: 180px;
        }
        .hero-meta {
          left: 25px;
          right: 25px;
        }
        .about-grid,
        .skills-layout,
        .contact-grid,
        .project-grid {
          grid-template-columns: 1fr;
        }
        .section-heading {
          display: block;
        }
        .section-heading p {
          margin-top: 10px;
        }
        .contact-grid {
          gap: 30px;
        }
      }`,k="genfolio-portfolio-v1",f={hero:{label:"Hero",icon:"✦"},about:{label:"About",icon:"◌"},experience:{label:"Experience",icon:"⌁"},projects:{label:"Projects",icon:"◇"},skills:{label:"Skills",icon:"✧"},contact:{label:"Contact",icon:"↗"}},u={name:"Ebenezer West",title:"Frontend Developer",tagline:"I'm a developer who turns ideas into interactive, functional and memorable experiences on the web.",summary:"I am a Frontend Developer with a strong focus on developing responsive, scalable, and user-centered web applications. I specialize in JavaScript, TypeScript, React, and Next.js, with additional experience in backend development and database management.",email:"huncleniizar@gmail.com",location:"Based in Rivers, Nigeria",website:"ebenezer-west.vercel.app",availability:"Available for select projects",avatar:"",theme:{accent:"#ff5c35",background:"#f5f1e8",text:"#151515",muted:"#6d6a63",surface:"#fffdf8"},template:"editorial",avatarShape:"arch",sections:["hero","about","experience","skills","projects","contact"],experience:[{role:"Frontend Developer",company:"Bromuno Technologies LTD.",period:"2024 — 2025",description:"Frontend developer, turning UI and design interface into functional software."}],projects:[{name:"AFFPROP",category:"Web & Real Estate",description:"The modern real estate marketplace connecting sellers, buyers, and affiliate partners. Share verified listings and earn high commissions on every closing.",link:"https://affprop.vercel.app"},{name:"KUZZYLIFE STORE",category:"Market & Web",description:"Kuzzy Market Systems is a technology-powered marketplace that connects customers to trusted local businesses and independent operators.",link:"https://kuzzylife.com/about"},{name:"Create Groups",category:"Fun & Web",description:"Create groups let's you group people randomly whether it's just for a fun game, to share responsibilities, class grouping, debate teams, etc.",link:"https://k1ngniizar.github.io/match/"},{name:"WORDCHAMPS",category:"Game & Web",description:"A competitive word game platform designed to challenge and entertain. Players can challenge each other in real-time matches and climb the leaderboard to become the ultimate Wordchamp.",link:"https://word-champs.vercel.app/"}],skills:["TYPESCRIPT","REACT","NEXT.JS","TAILWIND CSS","JAVASCRIPT","HTML","CSS","NODE.JS","EXPRESS.JS","POSTGRESQL","MONGODB","GIT","GITHUB"]},A=[{key:"minimal",name:"Quiet Minimal",description:"Clean, editorial and focused"},{key:"editorial",name:"Editorial",description:"Bold typography and expressive rhythm"},{key:"bold",name:"Electric Bold",description:"High contrast, energetic and modern"}],r=t=>document.querySelector(t),z=r("#app");let a=M();console.log("Main data::",a);let p=null;z.innerHTML=`
  <div class="app-shell">
    <header class="topbar">
      <a class="brand" href="#" aria-label="GenFolio home"><span class="brand-mark">G</span><span>GenFolio</span></a>
      <div class="topbar-actions">
        <button class="icon-button" id="saveButton" type="button" title="Save portfolio">⌁</button>
        <button class="button button-dark" id="exportButton" type="button">Export portfolio <span>↗</span></button>
      </div>
    </header>
    <main class="workspace">
      <aside class="sidebar">
        <div class="sidebar-heading"><span>Portfolio studio</span>
        <button id="resetButton" class="text-button" type="button">Reset</button></div>
        <nav class="tabs" aria-label="Editor sections">
          <button class="tab active" data-tab="content" type="button"><span>01</span> Content</button>
          <button class="tab" data-tab="style" type="button"><span>02</span> Style</button>
          <button class="tab" data-tab="layout" type="button"><span>03</span> Layout</button>
        </nav>
        <div class="panel-stack">
          <section class="editor-panel active" data-panel="content">
            <div class="panel-intro">
                <h2>Tell your story</h2>
                <p>Update the details shown across your portfolio.</p>
            </div>
            <div class="form-group">
                <label for="name">Your name</label>
                <input id="name" data-field="name" value="${s(a.name)}" />
            </div>
            <div class="form-group">
                <label for="title">Professional title</label>
                <input id="title" data-field="title" value="${s(a.title)}" />
            </div>
            <div class="form-group">
                <label for="tagline">Hero statement</label>
                <textarea id="tagline" data-field="tagline" rows="3">${s(a.tagline)}</textarea>
            </div>
            <div class="form-group">
                <label for="summary">About you</label>
                <textarea id="summary" data-field="summary" rows="4">${s(a.summary)}</textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" data-field="email" value="${s(a.email)}" />
                </div>
                <div class="form-group">
                    <label for="location">Location</label>
                    <input id="location" data-field="location" value="${s(a.location)}" />
                </div>
            </div>
            <div class="form-group">
                <label for="website">Website</label>
                <input id="website" data-field="website" value="${s(a.website)}" />
            </div>
            <div class="form-group">
                <label for="availability">Availability</label>
                <input id="availability" data-field="availability" value="${s(a.availability)}" />
            </div>
            <div class="form-group">
                <label>Skills</label>
                <div id="skillsEditor" class="tag-editor"></div>
            </div>
            <div class="form-group">
                <label>Projects</label>
                <div id="projectsEditor" class="tag-editor"></div>
            </div>
            <div class="form-group">
                <label>Experience</label>
                <div id="experienceEditor" class="tag-editor"></div>
            </div>
          </section>
          <section class="editor-panel" data-panel="style">
            <div class="panel-intro">
              <h2>Choose your mood</h2>
              <p>Pick a template and tune the visual palette.</p>
            </div>
            <div class="template-grid" id="templateGrid"></div>
            <div class="section-title">Color palette</div>
            <div class="color-grid">
              <label class="color-control">
                <span>Accent</span>
                <input type="color" data-color="accent" value="${a.theme.accent}" />
              </label>
              <label class="color-control">
                <span>Background</span>
                <input type="color" data-color="background" value="${a.theme.background}" />
              </label>
              <label class="color-control">
                <span>Text</span>
                <input type="color" data-color="text" value="${a.theme.text}" />
              </label>
              <label class="color-control">
                <span>Muted</span>
                <input type="color" data-color="muted" value="${a.theme.muted}" />
              </label>
            </div>
            <div class="section-title">Avatar shape</div>
            <div class="shape-grid" id="shapeGrid"></div>
            <label class="upload-zone" for="avatarInput">
              <span class="upload-icon">＋</span>
              <span><strong>Upload your avatar</strong><small>PNG, JPG or SVG · up to 2 MB</small></span>
              <input id="avatarInput" type="file" accept="image/*" />
            </label>
          </section>
          <section class="editor-panel" data-panel="layout">
            <div class="panel-intro">
              <h2>Arrange your story</h2>
              <p>Drag sections to order them exactly how you want.</p>
            </div>
            <div id="sectionList" class="section-list"></div>
            <div class="layout-tip">
              <span>↕</span>
              <p>Drag any section by its handle. Your order is saved automatically.</p>
            </div>
          </section>
        </div>
      </aside>
      <section class="preview-area">
        <div class="preview-toolbar">
          <div>
          <span class="live-dot"></span> Live preview
          </div>
          <div class="device-switch">
            <button class="active" data-device="desktop" type="button">Desktop</button>
            <button data-device="mobile" type="button">Mobile</button>
          </div>
        </div>
        <div class="preview-stage">
          <div id="preview" class="portfolio preview-desktop template-${a.template}" style="--accent:${a.theme.accent};--bg:${a.theme.background};--text:${a.theme.text};--muted:${a.theme.muted};--surface:${a.theme.surface}">
          </div>
        </div>
      </section>
    </main>
  </div>
`;w();$();v();x();y();h();l();b();function M(){try{const t=localStorage.getItem(k);return t?{...u,...JSON.parse(t),theme:{...u.theme,...JSON.parse(t).theme}}:structuredClone(u)}catch{return structuredClone(u)}}function d(){console.log("Save data"),localStorage.setItem(k,JSON.stringify(a));const t=r("#saveButton");t.classList.add("saved"),t.textContent="✓",window.setTimeout(()=>{t.classList.remove("saved"),t.textContent="⌁"},1200)}function b(){console.log("Bind events"),document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>P(t.dataset.tab))),document.querySelectorAll("[data-field]").forEach(t=>t.addEventListener("input",q)),document.querySelectorAll("[data-color]").forEach(t=>t.addEventListener("input",R)),document.querySelectorAll("[data-template]").forEach(t=>t.addEventListener("click",()=>{a.template=t.dataset.template,w(),l(),d(),b()})),document.querySelectorAll("[data-shape]").forEach(t=>t.addEventListener("click",()=>{a.avatarShape=t.dataset.shape,$(),l(),d(),b()})),r("#avatarInput").addEventListener("change",N),r("#sectionList").addEventListener("dragstart",E),r("#sectionList").addEventListener("dragover",t=>t.preventDefault()),r("#sectionList").addEventListener("drop",C),r("#sectionList").addEventListener("dragend",S),r("#sectionList").addEventListener("click",L),r("#resetButton").addEventListener("click",O),r("#saveButton").addEventListener("click",d),r("#exportButton").addEventListener("click",B),document.querySelectorAll("[data-device]").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll("[data-device]").forEach(e=>e.classList.toggle("active",e===t)),r("#preview").classList.toggle("preview-mobile",t.dataset.device==="mobile")})),document.querySelectorAll(".add-item").forEach(t=>t.addEventListener("click",D))}function P(t){document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),document.querySelectorAll(".editor-panel").forEach(e=>e.classList.toggle("active",e.dataset.panel===t))}function q(t){const e=t.currentTarget,o=e.dataset.field;a[o]=e.value,l(),d()}function R(t){const e=t.currentTarget.dataset.color;console.log("Check data:: ",a.theme),a.theme[e]=t.currentTarget.value,console.log("After check:: ",a.theme),l(),d()}function w(){console.log("Render templates"),r("#templateGrid").innerHTML=A.map(t=>`<button class="template-card ${a.template===t.key?"selected":""}" data-template="${t.key}" type="button"><span class="template-preview template-${t.key}"><i></i><b></b><em></em></span><strong>${t.name}</strong><small>${t.description}</small></button>`).join("")}function $(){console.log("Render shapes");const t=["circle","square","diamond","arch"];r("#shapeGrid").innerHTML=t.map(e=>`<button class="shape-option ${a.avatarShape===e?"selected":""}" data-shape="${e}" type="button" aria-label="${e} avatar"><span class="avatar-shape ${e}"></span></button>`).join("")}function v(){var t;console.log("Render Skills"),r("#skillsEditor").innerHTML=`<div class="skill-list">
      ${a.skills.map((e,o)=>`<span>
          <button class="remove-item" type="button" data-remove-skill="${o}" aria-label="Remove ${s(e)}">x</button>
        <input value="${s(e)}" data-skill-index="${o}" />
        
        </span>`).join("")}
        <button class="add-item" data-list="skills" type="button">＋ Add Skill</button>
    </div>`,r("#skillsEditor").querySelectorAll("[data-skill-index]").forEach(e=>e.addEventListener("input",o=>{console.log(Number(o.currentTarget.dataset.skillIndex)),a.skills[Number(o.currentTarget.dataset.skillIndex)]=o.currentTarget.value,l(),d()})),r("#skillsEditor").querySelectorAll("[data-remove-skill]").forEach(e=>e.addEventListener("click",()=>{a.skills.splice(Number(e.dataset.removeSkill),1),v(),l(),d()})),(t=r("#skillsEditor").querySelector(".add-item"))==null||t.addEventListener("click",()=>{a.skills.push("New skill"),v(),l(),d()})}function x(){var t;console.log("render project editor"),r("#projectsEditor").innerHTML=`<div class="project-list">
    ${a.projects.map((e,o)=>(console.log(e),`
      <div class="edit-project-container" data-project-index=${o}>
        <label>
          <p>Name:</p>
          <input data-name="name" value="${s(e.name)}" data-project-name-index="${o}"/>
        </label>
        <label>
          <p>Description:</p>
          <textarea data-name="description" data-project-name-index="${o}">${s(e.description)}</textarea>
        </label>
        <label>
          <p>Category:</p>
          <input data-name="category" value="${s(e.category)}" data-project-name-index="${o}"/>
        </label>
        <label>
          <p>Project link:</p>
          <input data-name="link" value="${s(e.link)}" data-project-name-index="${o}"/>
        </label>
        <button class="remove-item" type="button" data-remove-project="${o}" aria-label="Remove ${s(e.name)}">x</button>
      </div>`)).join("")}
    <button class="add-item" data-list="projects" type="button">＋ Add Project</button>
  </div>`,r("#projectsEditor").querySelectorAll("[data-project-index]").forEach(e=>{e.querySelectorAll("[data-project-name-index]").forEach(o=>{o.addEventListener("input",i=>{const n=o.dataset.name;a.projects[Number(i.currentTarget.dataset.projectNameIndex)][n]=i.currentTarget.value,d(),l()})})}),r("#projectsEditor").querySelectorAll(".remove-item").forEach(e=>{e.addEventListener("click",()=>{a.projects.splice(Number(e.dataset.removeProject),1),d(),l(),x()})}),(t=r("#projectsEditor").querySelector(".add-item"))==null||t.addEventListener("click",()=>{a.projects.push({name:"Enter project name",category:"Enter project category",description:"Enter project description",link:"https://example.com"}),d(),l(),x()})}function y(){var t;console.log("render experience editor"),r("#experienceEditor").innerHTML=`<div class="exp-list">
    ${a.experience.map((e,o)=>(console.log(e),`
      <div class="edit-exp-container" data-experience-index=${o}>
        <label>
          <p>Company:</p>
          <input data-name="company" value="${s(e.company)}" data-experience-name-index="${o}"/>
        </label>
        <label>
          <p>Description:</p>
          <textarea data-name="description" data-experience-name-index="${o}">${s(e.description)}</textarea>
        </label>
        <label>
          <p>Role:</p>
          <input data-name="role" value="${s(e.role)}" data-experience-name-index="${o}"/>
        </label>
        <label>
          <p>Period:</p>
          <input data-name="period" value="${s(e.period)}" data-experience-name-index="${o}"/>
        </label>
        <button class="remove-item" type="button" data-remove-experience="${o}" aria-label="Remove ${s(e.company)}">x</button>
      </div>`)).join("")}
    <button class="add-item" data-list="experience" type="button">＋ Add Experience</button>
  </div>`,r("#experienceEditor").querySelectorAll("[data-experience-index]").forEach(e=>{e.querySelectorAll("[data-experience-name-index]").forEach(o=>{o.addEventListener("input",i=>{const n=o.dataset.name;a.experience[Number(i.currentTarget.dataset.projectNameIndex)][n]=i.currentTarget.value,d(),l()})})}),r("#experienceEditor").querySelectorAll(".remove-item").forEach(e=>{e.addEventListener("click",()=>{a.experience.splice(Number(e.dataset.removeProject),1),d(),l(),y()})}),(t=r("#experienceEditor").querySelector(".add-item"))==null||t.addEventListener("click",()=>{a.experience.push({role:"Enter role",company:"Enter company name",description:"Enter description",period:"e.g 2017 - Now"}),d(),l(),y()})}function h(){console.log("Render Section list"),r("#sectionList").innerHTML=a.sections.map((t,e)=>`<div class="section-row" draggable="true" data-section="${t}">
          <span class="drag-handle">⋮⋮</span><span class="section-icon">${f[t].icon}</span>
          <strong>${f[t].label}</strong>
          <div>
            <button class="move-button" data-move="up" title="Move up" ${e===0?"disabled":""}>↑</button>
            <button class="move-button" data-move="down" title="Move down" ${e===a.sections.length-1?"disabled":""}>↓</button>
            <button class="remove-section" title="Remove section">×</button>
          </div>
        </div>`).join("")}function E(t){var o;const e=t.target.closest("[data-section]");e&&(p=e.dataset.section,e.classList.add("dragging"),(o=t.dataTransfer)==null||o.setData("text/plain",p))}function C(t){t.preventDefault();const e=t.target.closest("[data-section]");if(!e||!p||e.dataset.section===p)return;const o=a.sections.indexOf(p),i=a.sections.indexOf(e.dataset.section),[n]=a.sections.splice(o,1);a.sections.splice(i,0,n),p=null,h(),l(),j(),d()}function S(){p=null,document.querySelectorAll(".dragging").forEach(t=>t.classList.remove("dragging"))}function L(t){const e=t.target.closest("[data-move]"),o=t.target.closest(".remove-section");if(!e&&!o)return;const i=t.target.closest("[data-section]"),n=i==null?void 0:i.dataset.section,c=a.sections.indexOf(n);if(e){const m=e.dataset.move==="up"?-1:1,g=c+m;if(g<0||g>=a.sections.length)return;[a.sections[c],a.sections[g]]=[a.sections[g],a.sections[c]]}o&&a.sections.splice(c,1),h(),l(),j(),d()}function j(){r("#sectionList").querySelectorAll("[data-section]").forEach(t=>{t.addEventListener("dragstart",E),t.addEventListener("dragend",S)}),r("#sectionList").addEventListener("click",L)}function D(t){t.currentTarget.dataset.list==="skills"&&(a.skills.push("New skill"),v()),l(),d()}function l(){var n;console.log("Render Preview");const t=a.name.split(" ").map(c=>c[0]).join("").slice(0,2).toUpperCase(),e=a.avatar?`<img src="${a.avatar}" alt="${s(a.name)}" />`:`<span>${t||"AM"}</span>`,o=a.sections.map(I).join("");r("#preview").innerHTML=`<div class="portfolio-content">${o}</div>`,(n=r("#preview").querySelector(".portfolio-avatar"))==null||n.replaceChildren();const i=r("#preview").querySelector(".portfolio-avatar");i&&(i.innerHTML=e),r("#preview").classList.remove("template-minimal","template-editorial","template-bold"),r("#preview").classList.add(`template-${a.template}`),r("#preview").setAttribute("style",`--accent:${a.theme.accent};--bg:${a.theme.background};--text:${a.theme.text};--muted:${a.theme.muted};--surface:${a.theme.surface}`),r("#preview").style.setProperty("--avatar-shape",a.avatarShape==="circle"?"50%":a.avatarShape==="square"?"0":a.avatarShape==="diamond"?"10%":"50% 50% 0 0")}function I(t){const e=i=>s(i),o=`<div class="section-kicker"><span></span>${f[t].label}</div>`;return t==="hero"?`
  <section class="portfolio-section hero-section">
    <div class="hero-copy">
      <p class="eyebrow">${e(a.availability)}</p>
      <h1>${e(a.name)}</h1>
      <p class="hero-title">${e(a.title)}</p>
      <p class="hero-tagline">${e(a.tagline)}</p>
      <div class="hero-actions">
        <a href="#work" class="primary-link">Explore my work <span>↗</span></a><a href="mailto:${e(a.email)}">Let’s talk</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="portfolio-avatar avatar-${a.avatarShape}">
        ${a.avatar?`<img src="${a.avatar}" alt="${e(a.name)}" />`:`<span>${a.name.split(" ").map(i=>i[0]).join("").slice(0,2).toUpperCase()}</span>`}
      </div>
      <div class="availability-card">
      <span></span><p><strong>Currently</strong>${e(a.availability)}</p>
      </div>
    </div>
    <div class="hero-meta">
      <span>${e(a.location)}</span><span>${e(a.website)}</span>
    </div>
  </section>`:t==="about"?`
  <section class="portfolio-section about-section">
    ${o}
    <div class="about-grid">
      <h2>Designing with purpose,<br />building with care.</h2>
      <div>
        <p class="about-lead">${e(a.summary)}</p>
        <p>My approach mixes clear strategy with expressive visual systems. I care about the details that make a product feel effortless, useful, and distinctly yours.</p>
        <a href="mailto:${e(a.email)}">More about my work ↗</a>
      </div>
    </div>
  </section>`:t==="experience"?`<section class="portfolio-section experience-section">
  ${o}
    <div class="section-heading">
      <h2>Selected experience</h2>
      <p>Roles and collaborations that shaped how I make.</p>
    </div>
    <div class="experience-list">
    ${a.experience.map((i,n)=>`
      <article class="experience-item">
        <span>${String(n+1).padStart(2,"0")}</span>
        <div>
          <h3>${e(i.role)}</h3>
          <p>
            <strong>${e(i.company)}</strong> · ${e(i.period)}
          </p>
          <small>${e(i.description)}</small>
        </div>
      </article>
      `).join("")}
    </div>
  </section>`:t==="projects"?`
  <section class="portfolio-section projects-section" id="work">
  ${o}
    <div class="section-heading">
      <h2>Work with a point of view.</h2>
      <p>Selected projects across product, brand, and digital experiences.</p>
    </div>
    <div class="project-grid">${a.projects.map(i=>`
      <article class="project-card">
        <div class="project-art">
          <span>${i.name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase()}</span>
        </div>
        <div>
          <p>${e(i.category)}</p>
          <h3>${e(i.name)}</h3>
          <small>${e(i.description)}</small>
          <a href="${e(i.link)}" target="_blank" rel="noreferrer">View project ↗</a>
        </div>
      </article>`).join("")}
    </div>
  </section>`:t==="skills"?`
  <section class="portfolio-section skills-section">
  ${o}
    <div class="skills-layout">
      <h2>Tools for thoughtful<br />experiences.</h2>
      <div class="skill-tags">
      ${a.skills.map(i=>`
        <span>${e(i)}</span>`).join("")}
      </div>
    </div>
  </section>`:`
  <section class="portfolio-section contact-section">
    ${o}
      <div class="contact-grid">
        <h2>Have a project in mind?</h2>
        <div>
          <p>Let’s make something meaningful.</p>
          <a href="mailto:${e(a.email)}">${e(a.email)} <span>↗</span></a>
          <div class="contact-details">
            <span>${e(a.location)}</span>
            <span>${e(a.website)}</span>
          </div>
        </div>
      </div>
  </section>`}function N(t){var i;const e=(i=t.currentTarget.files)==null?void 0:i[0];if(!e)return;if(!e.type.startsWith("image/")||e.size>2*1024*1024){alert("Please choose an image under 2 MB.");return}const o=new FileReader;o.onload=()=>{a.avatar=String(o.result),l(),d()},o.readAsDataURL(e)}function O(){window.confirm("Reset all content and restore the default portfolio?")&&(localStorage.removeItem(k),a=structuredClone(u),document.querySelectorAll("[data-field]").forEach(t=>{t.value=a[t.dataset.field]}),document.querySelectorAll("[data-color]").forEach(t=>{t.value=a.theme[t.dataset.color]}),w(),$(),v(),h(),l(),b())}function B(){const t=r("#preview").outerHTML,e=`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${s(a.name)} — Portfolio</title>
      <meta content="${s(a.name)}" property="og:title" />
      <meta property="og:type" content="website" />
      <link
      rel="icon"
      type="image/svg+xml"
      href="https://res.cloudinary.com/dh4kjwb0h/image/upload/v1792431064/GenfolioIcon_gaolk6.jpg"
      />
      <meta
        name="description"
        content="${s(a.summary)}"
      />
      <style>${T}</style>
    </head>
    <body>${t}</body>
  </html>`,o=new Blob([e],{type:"text/html"}),i=document.createElement("a");i.href=URL.createObjectURL(o),i.download=`${a.name.toLowerCase().replace(/\s+/g,"-")}-portfolio.html`,i.click(),URL.revokeObjectURL(i.href)}function s(t){return t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]??e)}
