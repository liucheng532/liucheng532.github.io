const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const isExternal = (url) => /^https?:\/\//.test(url);

const renderLinks = (links, className = "") => links.map((item) => {
  const target = isExternal(item.url) || item.url.endsWith(".pdf") || item.url.match(/\.(mp4|gif)$/i)
    ? ' target="_blank" rel="noreferrer"'
    : "";
  return `<a class="${className}" href="${escapeHtml(item.url)}"${target}>${escapeHtml(item.label)} <span>↗</span></a>`;
}).join("");

const renderProfile = () => {
  const { profile } = siteData;
  $("#hero-kicker").textContent = profile.kicker;
  $("#hero-title").textContent = `Hi! I’m ${profile.name}.`;
  $("#hero-role").textContent = profile.role;
  $("#profile-photo").src = profile.photo;
  $("#current-role").textContent = profile.academicRole;
  $("#current-place").textContent = profile.institution;
  $("#about-text").innerHTML = siteData.about.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  $("#profile-links").innerHTML = renderLinks(siteData.links);
  $("#footer-links").innerHTML = renderLinks(siteData.links.slice(1));
  $("#contact-email").textContent = profile.email;
  $("#contact-email").href = `mailto:${profile.email}`;
  $("#footer-year").textContent = new Date().getFullYear();
};

const renderStats = () => {
  $("#stats").innerHTML = siteData.stats.map((stat) => `
    <div class="stat"><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></div>
  `).join("");
};

const renderResearch = () => {
  $("#research-intro").textContent = siteData.researchIntro;
  $("#research-list").innerHTML = siteData.research.map((item) => `
    <article class="research-item reveal">
      <div class="research-media">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" />
        <span>${escapeHtml(item.number)} / ${escapeHtml(item.year)}</span>
      </div>
      <div class="research-copy">
        <div class="tag-list">${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <div class="inline-links">${renderLinks(item.links)}</div>
      </div>
    </article>
  `).join("");
};

const renderProjects = () => {
  $("#project-grid").innerHTML = siteData.projects.map((project, index) => `
    <article class="project-card reveal ${index === 0 ? "project-card-wide" : ""}">
      <div class="project-image"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" /></div>
      <div class="project-copy">
        <span>${escapeHtml(project.year)}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
      </div>
    </article>
  `).join("");
};

const renderPublications = () => {
  $("#publication-list").innerHTML = siteData.publications.map((publication, index) => `
    <article class="publication">
      <span class="publication-index">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>${escapeHtml(publication.title)}</h3>
        <p>${escapeHtml(publication.authors)}</p>
        <strong>${escapeHtml(publication.venue)}</strong>
      </div>
      <span class="publication-year">${escapeHtml(publication.year)}</span>
    </article>
  `).join("");
};

const renderExperience = () => {
  $("#experience-list").innerHTML = siteData.experience.map((item, index) => `
    <article class="experience-item">
      <span class="experience-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="experience-period">${escapeHtml(item.period)}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <strong>${escapeHtml(item.organization)}</strong>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    </article>
  `).join("");
};

const setupSpecialty = () => {
  const element = $("#hero-specialty");
  const specialties = siteData.profile.specialties;
  let index = 0;
  element.textContent = specialties[index];
  window.setInterval(() => {
    element.classList.add("is-changing");
    window.setTimeout(() => {
      index = (index + 1) % specialties.length;
      element.textContent = specialties[index];
      element.classList.remove("is-changing");
    }, 240);
  }, 3200);
};

const setupNavigation = () => {
  const header = $("[data-header]");
  const toggle = $(".menu-toggle");
  const links = $$(".site-nav a[href^='#']");

  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    header.classList.toggle("nav-open", !open);
  });

  links.forEach((link) => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    header.classList.remove("nav-open");
  }));

  const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -60%", threshold: 0 });
  sections.forEach((section) => sectionObserver.observe(section));
};

const setupReveal = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$(".reveal").forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.12 });
  $$(".reveal").forEach((element) => observer.observe(element));
};

renderProfile();
renderStats();
renderResearch();
renderProjects();
renderPublications();
renderExperience();
setupSpecialty();
setupNavigation();
setupReveal();
