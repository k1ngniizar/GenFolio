import { styleTemplate } from "./style";

// SCHEMA
type SectionKey =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "contact";
type TemplateKey = "minimal" | "editorial" | "bold";
type AvatarShape = "circle" | "square" | "diamond" | "arch";

type PortfolioData = {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  location: string;
  website: string;
  availability: string;
  avatar: string;
  theme: {
    accent: string;
    background: string;
    text: string;
    muted: string;
    surface: string;
  };
  template: TemplateKey;
  avatarShape: AvatarShape;
  sections: SectionKey[];
  experience: Array<{
    role: string;
    company: string;
    period: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    category: string;
    description: string;
    link: string;
  }>;
  skills: string[];
};
// SCHEMA

// LOCALSTORAGE KEY
const STORAGE_KEY = "genfolio-portfolio-v1";

// DEFAULT SECTION DATA
const sectionMeta: Record<SectionKey, { label: string; icon: string }> = {
  hero: { label: "Hero", icon: "✦" },
  about: { label: "About", icon: "◌" },
  experience: { label: "Experience", icon: "⌁" },
  projects: { label: "Projects", icon: "◇" },
  skills: { label: "Skills", icon: "✧" },
  contact: { label: "Contact", icon: "↗" },
};

// DEFUALT PORTFOLIO DATA
const defaultData: PortfolioData = {
  name: "Alex Morgan",
  title: "Product Designer & Creative Developer",
  tagline: "I turn complex ideas into clear, memorable digital experiences.",
  summary:
    "I’m a multidisciplinary designer who blends strategy, visual craft, and thoughtful technology to build products that feel human.",
  email: "hello@alexmorgan.design",
  location: "Based in London, UK",
  website: "alexmorgan.design",
  availability: "Available for select projects",
  avatar: "",
  theme: {
    accent: "#ff5c35",
    background: "#f5f1e8",
    text: "#151515",
    muted: "#6d6a63",
    surface: "#fffdf8",
  },
  template: "minimal",
  avatarShape: "circle",
  sections: ["hero", "about", "experience", "projects", "skills", "contact"],
  experience: [
    {
      role: "Senior Product Designer",
      company: "Northstar Studio",
      period: "2022 — Now",
      description:
        "Leading product design for ambitious digital platforms and building systems that scale.",
    },
    {
      role: "Product Designer",
      company: "Fieldwork",
      period: "2019 — 2022",
      description:
        "Designed customer-facing products, improved activation, and mentored emerging designers.",
    },
  ],
  projects: [
    {
      name: "Orbit Finance",
      category: "Product design",
      description:
        "A calmer way to understand your money, built around clarity and confidence.",
      link: "https://example.com",
    },
    {
      name: "Morrow Journal",
      category: "Brand & web",
      description:
        "A digital publishing experience for independent stories and ideas.",
      link: "https://example.com",
    },
  ],
  skills: [
    "Product strategy",
    "UX/UI design",
    "Creative direction",
    "Figma",
    "Prototyping",
    "Web design",
  ],
};

// TEMPLATE OPTIONS
const templateOptions: Array<{
  key: TemplateKey;
  name: string;
  description: string;
}> = [
  {
    key: "minimal",
    name: "Quiet Minimal",
    description: "Clean, editorial and focused",
  },
  {
    key: "editorial",
    name: "Editorial",
    description: "Bold typography and expressive rhythm",
  },
  {
    key: "bold",
    name: "Electric Bold",
    description: "High contrast, energetic and modern",
  },
];

const selectorFn = <T extends HTMLElement = HTMLElement>(selector: string): T =>
  document.querySelector(selector) as T;
const app = selectorFn("#app");
let data = loadData();
console.log("Main data::", data);
let draggedSection: SectionKey | null = null;

app.innerHTML = `
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
                <input id="name" data-field="name" value="${escapeHtml(data.name)}" />
            </div>
            <div class="form-group">
                <label for="title">Professional title</label>
                <input id="title" data-field="title" value="${escapeHtml(data.title)}" />
            </div>
            <div class="form-group">
                <label for="tagline">Hero statement</label>
                <textarea id="tagline" data-field="tagline" rows="3">${escapeHtml(data.tagline)}</textarea>
            </div>
            <div class="form-group">
                <label for="summary">About you</label>
                <textarea id="summary" data-field="summary" rows="4">${escapeHtml(data.summary)}</textarea>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" data-field="email" value="${escapeHtml(data.email)}" />
                </div>
                <div class="form-group">
                    <label for="location">Location</label>
                    <input id="location" data-field="location" value="${escapeHtml(data.location)}" />
                </div>
            </div>
            <div class="form-group">
                <label for="website">Website</label>
                <input id="website" data-field="website" value="${escapeHtml(data.website)}" />
            </div>
            <div class="form-group">
                <label for="availability">Availability</label>
                <input id="availability" data-field="availability" value="${escapeHtml(data.availability)}" />
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
                <input type="color" data-color="accent" value="${data.theme.accent}" />
              </label>
              <label class="color-control">
                <span>Background</span>
                <input type="color" data-color="background" value="${data.theme.background}" />
              </label>
              <label class="color-control">
                <span>Text</span>
                <input type="color" data-color="text" value="${data.theme.text}" />
              </label>
              <label class="color-control">
                <span>Muted</span>
                <input type="color" data-color="muted" value="${data.theme.muted}" />
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
          <div id="preview" class="portfolio preview-desktop template-${data.template}" style="--accent:${data.theme.accent};--bg:${data.theme.background};--text:${data.theme.text};--muted:${data.theme.muted};--surface:${data.theme.surface}">
          </div>
        </div>
      </section>
    </main>
  </div>
`;

renderTemplates();
renderShapes();
renderSkills();
renderProjectsEditor();
renderExperience();
renderSectionList();
renderPreview();
bindEvents();

// LOAD DATA FROM LOCALSTORAGE OR DEFAULT DATA
function loadData(): PortfolioData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? {
          ...defaultData,
          ...JSON.parse(saved),
          theme: { ...defaultData.theme, ...JSON.parse(saved).theme },
        }
      : structuredClone(defaultData);
  } catch {
    return structuredClone(defaultData);
  }
}

// SAVE DATA TO LOCAL STORAGE AND RENDER BUTTON
function saveData(): void {
  console.log("Save data");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  const button = selectorFn("#saveButton");
  button.classList.add("saved");
  button.textContent = "✓";
  window.setTimeout(() => {
    button.classList.remove("saved");
    button.textContent = "⌁";
  }, 1200);
}

function bindEvents(): void {
  console.log("Bind events");

  document
    .querySelectorAll<HTMLButtonElement>(".tab")
    .forEach((button) =>
      button.addEventListener("click", () =>
        switchTab(button.dataset.tab as string),
      ),
    );
  document
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-field]")
    .forEach((input) => input.addEventListener("input", updateField));
  document
    .querySelectorAll<HTMLInputElement>("[data-color]")
    .forEach((input) => input.addEventListener("input", updateColor));
  document
    .querySelectorAll<HTMLButtonElement>("[data-template]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        data.template = button.dataset.template as TemplateKey;
        renderTemplates();
        renderPreview();
        saveData();
        bindEvents();
      }),
    );
  document
    .querySelectorAll<HTMLButtonElement>("[data-shape]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        data.avatarShape = button.dataset.shape as AvatarShape;
        renderShapes();
        renderPreview();
        saveData();
        bindEvents();
      }),
    );
  selectorFn("#avatarInput").addEventListener("change", handleAvatarUpload);
  selectorFn("#sectionList").addEventListener("dragstart", handleDragStart);
  selectorFn("#sectionList").addEventListener("dragover", (event) =>
    event.preventDefault(),
  );
  selectorFn("#sectionList").addEventListener("drop", handleDrop);
  selectorFn("#sectionList").addEventListener("dragend", handleDragEnd);
  selectorFn("#sectionList").addEventListener("click", handleSectionToggle);
  selectorFn("#resetButton").addEventListener("click", resetPortfolio);
  selectorFn("#saveButton").addEventListener("click", saveData);
  selectorFn("#exportButton").addEventListener("click", exportPortfolio);
  document
    .querySelectorAll<HTMLButtonElement>("[data-device]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        document
          .querySelectorAll<HTMLButtonElement>("[data-device]")
          .forEach((item) => item.classList.toggle("active", item === button));
        selectorFn("#preview").classList.toggle(
          "preview-mobile",
          button.dataset.device === "mobile",
        );
      }),
    );
  document
    .querySelectorAll<HTMLButtonElement>(".add-item")
    .forEach((button) => button.addEventListener("click", addItem));
}

function switchTab(tab: string): void {
  document
    .querySelectorAll<HTMLButtonElement>(".tab")
    .forEach((item) =>
      item.classList.toggle("active", item.dataset.tab === tab),
    );
  document
    .querySelectorAll<HTMLElement>(".editor-panel")
    .forEach((panel) =>
      panel.classList.toggle("active", panel.dataset.panel === tab),
    );
}

function updateField(event: Event): void {
  const input = event.currentTarget as HTMLInputElement | HTMLTextAreaElement;
  const key = input.dataset.field as keyof PortfolioData;
  data[key] = input.value as never;
  renderPreview();
  saveData();
}

function updateColor(event: Event): void {
  const color = (event.currentTarget as HTMLInputElement).dataset
    .color as keyof typeof data.theme;
  console.log("Check data:: ", data.theme);

  data.theme[color] = (event.currentTarget as HTMLInputElement).value;
  console.log("After check:: ", data.theme);

  renderPreview();
  saveData();
}

function renderTemplates(): void {
  console.log("Render templates");
  selectorFn("#templateGrid").innerHTML = templateOptions
    .map(
      (template) =>
        `<button class="template-card ${data.template === template.key ? "selected" : ""}" data-template="${template.key}" type="button"><span class="template-preview template-${template.key}"><i></i><b></b><em></em></span><strong>${template.name}</strong><small>${template.description}</small></button>`,
    )
    .join("");
}

function renderShapes(): void {
  console.log("Render shapes");
  const shapes: AvatarShape[] = ["circle", "square", "diamond", "arch"];
  selectorFn("#shapeGrid").innerHTML = shapes
    .map(
      (shape) =>
        `<button class="shape-option ${data.avatarShape === shape ? "selected" : ""}" data-shape="${shape}" type="button" aria-label="${shape} avatar"><span class="avatar-shape ${shape}"></span></button>`,
    )
    .join("");
}

function renderSkills(): void {
  console.log("Render Skills");

  selectorFn("#skillsEditor").innerHTML = `<div class="skill-list">
      ${data.skills
        .map(
          (skill, index) => `<span>
          <button class="remove-item" type="button" data-remove-skill="${index}" aria-label="Remove ${escapeHtml(skill)}">x</button>
        <input value="${escapeHtml(skill)}" data-skill-index="${index}" />
        
        </span>`,
        )
        .join("")}
        <button class="add-item" data-list="skills" type="button">＋ Add skill</button>
    </div>`;
  selectorFn("#skillsEditor")
    .querySelectorAll<HTMLInputElement>("[data-skill-index]")
    .forEach((input) =>
      input.addEventListener("input", (event) => {
        data.skills[
          Number((event.currentTarget as HTMLInputElement).dataset.skillIndex)
        ] = (event.currentTarget as HTMLInputElement).value;
        renderPreview();
        saveData();
      }),
    );
  selectorFn("#skillsEditor")
    .querySelectorAll<HTMLButtonElement>("[data-remove-skill]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        data.skills.splice(Number(button.dataset.removeSkill), 1);
        renderSkills();
        renderPreview();
        saveData();
      }),
    );
  selectorFn("#skillsEditor")
    .querySelector<HTMLButtonElement>(".add-item")
    ?.addEventListener("click", () => {
      data.skills.push("New skill");
      renderSkills();
      renderPreview();
      saveData();
    });
}

function renderProjectsEditor(): void {
  console.log("render project editor");

  selectorFn("#projectsEditor").innerHTML = `<div class="project-list">
    ${data.projects
      .map((projects, index) => {
        console.log(projects);
        return `
      <div class="edit-project-container" data-project-index=${index}>
        <label>
          <p>Name:</p>
          <input value="${escapeHtml(projects.name)}" data-project-index=${index}/>
        </label>
        <label>
          <p>Description:</p>
          <textarea data-project-index=${index}>${escapeHtml(projects.description)}</textarea>
        </label>
        <label>
          <p>Category:</p>
          <input value="${escapeHtml(projects.category)}" data-project-index=${index}/>
        </label>
        <label>
          <p>Project link:</p>
          <input value="${escapeHtml(projects.link)}" data-project-index=${index}/>
        </label>
        <button class="remove-item" type="button" data-remove-project="${index}" aria-label="Remove ${escapeHtml(projects.name)}">x</button>
      </div>`;
      })
      .join("")}
    <button class="add-item" data-list="projects" type="button">＋ Add project</button>
  </div>`;
}

function renderExperience(): void {
  console.log("experience Editor");
  selectorFn("#experienceEditor").innerHTML = `<div class="exp-list">
      ${data.experience
        .map((exp, idx) => {
          return `
        <div class="edit-exp-container" data-experience-index="${idx}">

          <button class="remove-item" type="button" data-remove-experience="${idx}" aria-label="Remove ${escapeHtml(exp.description)}">x</button>

          <label>
            <p>Role:</p>
            <input value="${exp.role}"  data-experience-index="${idx}"/>
          </label>
          <label>
            <p>Description:</p>
            <textarea data-experience-index="${idx}">${escapeHtml(exp.description)}</textarea>
          </label>
          <label>
            <p>Company:</p>
            <input value="${escapeHtml(exp.company)}" data-experience-index="${idx}" />
          </label>
          
          <label>
            <p>Period:</p>
            <input value="${exp.period}"  data-experience-index="${idx}"/>
          </label>

        </div>
        `;
        })
        .join("")}
        <button class="add-item" data-list="experience" type="button">＋ Add project</button>
    </div>
  `;
}

function renderSectionList(): void {
  console.log("Render Section list");

  selectorFn("#sectionList").innerHTML = data.sections
    .map(
      (key, index) =>
        `<div class="section-row" draggable="true" data-section="${key}"><span class="drag-handle">⋮⋮</span><span class="section-icon">${sectionMeta[key].icon}</span><strong>${sectionMeta[key].label}</strong><div><button class="move-button" data-move="up" title="Move up" ${index === 0 ? "disabled" : ""}>↑</button><button class="move-button" data-move="down" title="Move down" ${index === data.sections.length - 1 ? "disabled" : ""}>↓</button><button class="remove-section" title="Remove section">×</button></div></div>`,
    )
    .join("");
}

function handleDragStart(event: DragEvent): void {
  const row = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-section]",
  );
  if (!row) return;
  draggedSection = row.dataset.section as SectionKey;
  row.classList.add("dragging");
  event.dataTransfer?.setData("text/plain", draggedSection);
}

function handleDrop(event: DragEvent): void {
  event.preventDefault();
  const target = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-section]",
  );
  if (!target || !draggedSection || target.dataset.section === draggedSection)
    return;
  const from = data.sections.indexOf(draggedSection);
  const to = data.sections.indexOf(target.dataset.section as SectionKey);
  const [moved] = data.sections.splice(from, 1);
  data.sections.splice(to, 0, moved);
  draggedSection = null;
  renderSectionList();
  renderPreview();
  bindSectionListEvents();
  saveData();
}

function handleDragEnd(): void {
  draggedSection = null;
  document
    .querySelectorAll(".dragging")
    .forEach((item) => item.classList.remove("dragging"));
}
function handleSectionToggle(event: Event): void {
  const button = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-move]",
  );
  const remove = (event.target as HTMLElement).closest<HTMLElement>(
    ".remove-section",
  );
  if (!button && !remove) return;
  const row = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-section]",
  );
  const key = row?.dataset.section as SectionKey;
  const index = data.sections.indexOf(key);
  if (button) {
    const direction = button.dataset.move === "up" ? -1 : 1;
    const target = index + direction;
    if (target < 0 || target >= data.sections.length) return;
    [data.sections[index], data.sections[target]] = [
      data.sections[target],
      data.sections[index],
    ];
  }
  if (remove) data.sections.splice(index, 1);
  renderSectionList();
  renderPreview();
  bindSectionListEvents();
  saveData();
}

function bindSectionListEvents(): void {
  selectorFn("#sectionList")
    .querySelectorAll<HTMLElement>("[data-section]")
    .forEach((row) => {
      row.addEventListener("dragstart", handleDragStart as EventListener);
      row.addEventListener("dragend", handleDragEnd);
    });
  selectorFn("#sectionList").addEventListener("click", handleSectionToggle);
}

function addItem(event: Event): void {
  const list = (event.currentTarget as HTMLButtonElement).dataset.list;
  if (list === "skills") {
    data.skills.push("New skill");
    renderSkills();
  }
  renderPreview();
  saveData();
}

function renderPreview(): void {
  console.log("Render Preview");

  const initials = data.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const avatar = data.avatar
    ? `<img src="${data.avatar}" alt="${escapeHtml(data.name)}" />`
    : `<span>${initials || "AM"}</span>`;
  const sections = data.sections.map(renderSection).join("");
  selectorFn("#preview").innerHTML =
    `<div class="portfolio-content">${sections}</div>`;
  selectorFn("#preview").querySelector(".portfolio-avatar")?.replaceChildren();
  const avatarEl = selectorFn("#preview").querySelector(".portfolio-avatar");
  if (avatarEl) avatarEl.innerHTML = avatar;
  selectorFn("#preview").classList.remove(
    "template-minimal",
    "template-editorial",
    "template-bold",
  );

  selectorFn("#preview").classList.add(`template-${data.template}`);
  selectorFn("#preview").setAttribute(
    "style",
    `--accent:${data.theme.accent};--bg:${data.theme.background};--text:${data.theme.text};--muted:${data.theme.muted};--surface:${data.theme.surface}`,
  );
  selectorFn("#preview").style.setProperty(
    "--avatar-shape",
    data.avatarShape === "circle"
      ? "50%"
      : data.avatarShape === "square"
        ? "0"
        : data.avatarShape === "diamond"
          ? "10%"
          : "50% 50% 0 0",
  );
}

function renderSection(key: SectionKey): string {
  const safe = (value: string) => escapeHtml(value);
  const shared = `<div class="section-kicker"><span></span>${sectionMeta[key].label}</div>`;
  if (key === "hero")
    return `
  <section class="portfolio-section hero-section">
    <div class="hero-copy">
      <p class="eyebrow">${safe(data.availability)}</p>
      <h1>${safe(data.name)}</h1>
      <p class="hero-title">${safe(data.title)}</p>
      <p class="hero-tagline">${safe(data.tagline)}</p>
      <div class="hero-actions">
        <a href="#work" class="primary-link">Explore my work <span>↗</span></a><a href="mailto:${safe(data.email)}">Let’s talk</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="portfolio-avatar avatar-${data.avatarShape}">
        ${
          data.avatar
            ? `<img src="${data.avatar}" alt="${safe(data.name)}" />`
            : `<span>${data.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}</span>`
        }
      </div>
      <div class="availability-card">
      <span></span><p><strong>Currently</strong>${safe(data.availability)}</p>
      </div>
    </div>
    <div class="hero-meta">
      <span>${safe(data.location)}</span><span>${safe(data.website)}</span>
    </div>
  </section>`;
  if (key === "about")
    return `
  <section class="portfolio-section about-section">
    ${shared}<div class="about-grid"><h2>Designing with purpose,<br />building with care.</h2><div><p class="about-lead">${safe(data.summary)}</p><p>My approach mixes clear strategy with expressive visual systems. I care about the details that make a product feel effortless, useful, and distinctly yours.</p><a href="mailto:${safe(data.email)}">More about my work ↗</a></div></div>
  </section>`;
  if (key === "experience")
    return `<section class="portfolio-section experience-section">${shared}<div class="section-heading"><h2>Selected experience</h2><p>Roles and collaborations that shaped how I make.</p></div><div class="experience-list">${data.experience.map((item, index) => `<article class="experience-item"><span>${String(index + 1).padStart(2, "0")}</span><div><h3>${safe(item.role)}</h3><p><strong>${safe(item.company)}</strong> · ${safe(item.period)}</p><small>${safe(item.description)}</small></div></article>`).join("")}</div></section>`;
  if (key === "projects")
    return `<section class="portfolio-section projects-section" id="work">${shared}<div class="section-heading"><h2>Work with a point of view.</h2><p>Selected projects across product, brand, and digital experiences.</p></div><div class="project-grid">${data.projects.map((project, index) => `<article class="project-card"><div class="project-art art-${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span><i></i></div><div><p>${safe(project.category)}</p><h3>${safe(project.name)}</h3><small>${safe(project.description)}</small><a href="${safe(project.link)}" target="_blank" rel="noreferrer">View project ↗</a></div></article>`).join("")}</div></section>`;
  if (key === "skills")
    return `<section class="portfolio-section skills-section">${shared}<div class="skills-layout"><h2>Tools for thoughtful<br />experiences.</h2><div class="skill-tags">${data.skills.map((skill) => `<span>${safe(skill)}</span>`).join("")}</div></div></section>`;
  return `<section class="portfolio-section contact-section">${shared}<div class="contact-grid"><h2>Have a project in mind?</h2><div><p>Let’s make something meaningful.</p><a href="mailto:${safe(data.email)}">${safe(data.email)} <span>↗</span></a><div class="contact-details"><span>${safe(data.location)}</span><span>${safe(data.website)}</span></div></div></div></section>`;
}

function handleAvatarUpload(event: Event): void {
  const file = (event.currentTarget as HTMLInputElement).files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) {
    alert("Please choose an image under 2 MB.");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    data.avatar = String(reader.result);
    renderPreview();
    saveData();
  };
  reader.readAsDataURL(file);
}

function resetPortfolio(): void {
  if (!window.confirm("Reset all content and restore the default portfolio?"))
    return;
  localStorage.removeItem(STORAGE_KEY);
  data = structuredClone(defaultData);
  document
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-field]")
    .forEach((input) => {
      input.value = data[input.dataset.field as keyof PortfolioData] as string;
    });
  document
    .querySelectorAll<HTMLInputElement>("[data-color]")
    .forEach((input) => {
      input.value = data.theme[
        input.dataset.color as keyof typeof data.theme
      ] as string;
    });
  renderTemplates();
  renderShapes();
  renderSkills();
  renderSectionList();
  renderPreview();
  bindEvents();
}

function exportPortfolio(): void {
  const source = selectorFn("#preview").outerHTML;
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(data.name)} — Portfolio</title><style>${styleTemplate}</style></head><body>${source}</body></html>`;
  const blob = new Blob([html], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${data.name.toLowerCase().replace(/\s+/g, "-")}-portfolio.html`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        char
      ] ?? char,
  );
}
