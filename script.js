const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const linkMarkup = (label, url, className = "") => url
  ? `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)} <span>↗</span></a>`
  : `<span class="muted-link">${escapeHtml(label)}</span>`;

const renderProfile = () => {
  const { profile } = siteData;
  $("#hero-kicker").textContent = profile.kicker;
  $("#hero-title").innerHTML = `Hi, I’m <em>${escapeHtml(profile.name.split(" ")[0])}.</em><br />I make robots move.`;
  $("#hero-lede").textContent = profile.lede;
  $("#hero-email").href = `mailto:${profile.email}`;
  $("#hero-photo").src = profile.photo;
  $("#current-role").textContent = profile.role;
  $("#current-place").textContent = profile.place;
  $("#profile-location").textContent = profile.location;
  $("#contact-email").textContent = profile.email;
  $("#contact-email").href = `mailto:${profile.email}`;
  $("#footer-year").textContent = new Date().getFullYear();
  $(".header-cv").href = profile.cv;
  $(".button-outline").href = profile.cv;
};

const renderAbout = () => {
  $("#about-copy").innerHTML = siteData.about.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  $("#research-intro-copy").textContent = siteData.researchIntro;
  $("#topic-list").innerHTML = siteData.topics.map((topic, index) => `<span><b>0${index + 1}</b>${escapeHtml(topic)}</span>`).join("");
  $("#stats").innerHTML = siteData.stats.map((stat) => `<div class="stat"><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></div>`).join("");
};

const renderPublications = () => {
  $("#publications").innerHTML = siteData.publications.map((publication) => `
    <article class="publication">
      <div class="publication-year">${escapeHtml(publication.year)}</div>
      <div class="publication-body">
        <h3>${escapeHtml(publication.title)}</h3>
        <p>${escapeHtml(publication.authors)}</p>
        <span class="publication-venue">${escapeHtml(publication.venue)}</span>
      </div>
      <span class="publication-arrow">↗</span>
    </article>`).join("");
};

const renderProjects = () => {
  $("#projects-grid").innerHTML = siteData.projects.map((project) => `
    <article class="project-card">
      <div class="project-topline"><span>${escapeHtml(project.number)}</span><span>${escapeHtml(project.year)}</span></div>
      <div class="project-card-main">
        <h3>${escapeHtml(project.title)}</h3>
        <span class="project-meta">${escapeHtml(project.meta)}</span>
        <p>${escapeHtml(project.description)}</p>
        ${linkMarkup(project.linkLabel, project.link, "project-link")}
      </div>
    </article>`).join("");
};

const renderExperience = () => {
  $("#experience-list").innerHTML = siteData.experience.map((item, index) => `
    <article class="experience-item">
      <div class="experience-index">0${index + 1}</div>
      <div class="experience-period">${escapeHtml(item.period)}</div>
      <div class="experience-main"><h3>${escapeHtml(item.title)}</h3><span>${escapeHtml(item.org)}</span><p>${escapeHtml(item.detail)}</p></div>
    </article>`).join("");
};

const renderNotes = () => {
  $("#notes-list").innerHTML = siteData.notes.map((note, index) => `
    <article class="note-card"><span class="note-number">0${index + 1}</span><div><span class="note-label">${escapeHtml(note.label)}</span><h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.text)}</p></div><span class="note-arrow">↗</span></article>`).join("");
};

const renderSocial = () => {
  $("#social-links").innerHTML = siteData.social.map((item) => linkMarkup(item.label, item.url, "social-link")).join("");
};

const setupNavigation = () => {
  const header = $("[data-header]");
  const menuToggle = $(".menu-toggle");
  const navLinks = $$(".site-nav a");
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("nav-open");
  };
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    header.classList.toggle("nav-open", !open);
  });
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 32), { passive: true });

  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-30% 0px -60%", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
};

renderProfile();
renderAbout();
renderPublications();
renderProjects();
renderExperience();
renderNotes();
renderSocial();
setupNavigation();
