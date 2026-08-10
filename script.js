const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const opensNewTab = (url) => /^https?:\/\//.test(url) || /\.(pdf|mp4|gif)$/i.test(url);

const linkList = (links, className = "") => links.map((link) => {
  const target = opensNewTab(link.url) ? ' target="_blank" rel="noreferrer"' : "";
  return `<a class="${className}" href="${escapeHtml(link.url)}"${target}>${escapeHtml(link.label)}</a>`;
}).join("");

const mediaMarkup = (src, alt, label) => `
  <div class="media-frame">
    ${src ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" />` : ""}
    <span class="media-placeholder"><b>${escapeHtml(label)}</b><small>Add image in the matching media folder</small></span>
  </div>
`;

const renderProfile = () => {
  const { profile } = siteData;
  $("#hero-title").textContent = `Hi! I’m ${profile.name}.`;
  $("#hero-role").textContent = profile.role;
  $("#hero-focus").textContent = profile.focus[0];
  $("#portrait-image").src = profile.portrait;
  $("#about-copy").innerHTML = siteData.about.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  $("#about-links").innerHTML = linkList(siteData.links);
  $("#contact-email").textContent = profile.email;
  $("#contact-email").href = `mailto:${profile.email}`;
  $("#footer-year").textContent = new Date().getFullYear();
};

const renderResearch = () => {
  $("#research-intro").textContent = siteData.researchIntro;
  $("#research-list").innerHTML = siteData.research.map((item) => `
    <article class="research-row reveal">
      ${mediaMarkup(item.image, item.imageAlt, "Research image")}
      <div class="research-body">
        <div class="item-meta"><span>${escapeHtml(item.year)}</span>${item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <div class="item-links">${linkList(item.links)}</div>
      </div>
    </article>
  `).join("");
};

const renderPublications = () => {
  $("#publication-list").innerHTML = siteData.publications.length
    ? siteData.publications.map((item) => `
      <article class="publication-row reveal">
        ${mediaMarkup(item.image, `${item.title} thumbnail`, "Publication thumbnail")}
        <div class="publication-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.authors)}</p>
          <strong>${escapeHtml(item.venue)} · ${escapeHtml(item.year)}</strong>
          ${item.links.length ? `<div class="item-links">${linkList(item.links)}</div>` : ""}
        </div>
      </article>
    `).join("")
    : '<p class="empty-state">Publication entries will appear here.</p>';
};

const renderProjects = () => {
  $("#project-grid").innerHTML = siteData.projects.map((item) => `
    <article class="project-card reveal">
      ${mediaMarkup(item.image, item.imageAlt, "Project image")}
      <div class="project-caption">
        <h3>${escapeHtml(item.title)}</h3>
        <span>${escapeHtml(item.year)}</span>
        ${item.links?.length ? `<div class="item-links project-links">${linkList(item.links)}</div>` : ""}
      </div>
    </article>
  `).join("");
};

const renderNotes = () => {
  $("#notes-list").innerHTML = siteData.notes.length
    ? siteData.notes.map((item) => `<article class="note-card reveal"><span>${escapeHtml(item.date)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p></article>`).join("")
    : '<div class="notes-placeholder reveal"><span>01</span><p>The writing framework is ready. Add entries to <code>siteData.notes</code> when the material is available.</p></div>';
};

const setupImageFallbacks = () => {
  $$(".media-frame img").forEach((image) => {
    const markMissing = () => image.closest(".media-frame").classList.add("missing");
    image.addEventListener("error", markMissing);
    if (image.complete && image.naturalWidth === 0) markMissing();
  });
};

const setupHeroFocus = () => {
  const focus = $("#hero-focus");
  let index = 0;
  window.setInterval(() => {
    focus.classList.add("changing");
    window.setTimeout(() => {
      index = (index + 1) % siteData.profile.focus.length;
      focus.textContent = siteData.profile.focus[index];
      focus.classList.remove("changing");
    }, 180);
  }, 3200);
};

const setupNavigation = () => {
  const header = $("[data-header]");
  const button = $(".menu-button");
  const anchorLinks = $$(".navigation a[href^='#']");
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 30);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    header.classList.toggle("menu-open", !open);
  });
  anchorLinks.forEach((link) => link.addEventListener("click", () => {
    button.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }));
};

const setupReveal = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    $$(".reveal").forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .1, rootMargin: "0px 0px -5%" });
  $$(".reveal").forEach((item) => observer.observe(item));
};

renderProfile();
renderResearch();
renderPublications();
renderProjects();
renderNotes();
setupImageFallbacks();
setupHeroFocus();
setupNavigation();
setupReveal();
