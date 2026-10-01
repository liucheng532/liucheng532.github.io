---
permalink: /
title: ""
excerpt: "Personal homepage of Cheng Liu, featuring research in humanoid robotics and reinforcement learning."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% assign content = site.data.content %}

<span class="anchor" id="about-me"></span>

<div class="profile-introduction">
{% for paragraph in content.about %}
{{ paragraph | markdownify }}
{% endfor %}
</div>

{% if content.opportunities %}
<aside class="opportunities-note" aria-label="Seeking opportunities">
  <i class="fas fa-quote-left" aria-hidden="true"></i>
  <div>{{ content.opportunities | markdownify }}</div>
</aside>
{% endif %}

<div class="highlight-blocks">
  <div class="highlight-block floating-card">
    <h3><i class="fas fa-robot"></i> Research Interests</h3>
    <ul class="interest-tags">
      {% for interest in content.interests %}<li>{{ interest }}</li>{% endfor %}
    </ul>
  </div>
</div>

<span class="anchor" id="news"></span>

# <i class="fas fa-fire"></i> News

<ul class="about-section-list news-list">
  {% for item in content.news %}
  <li><em class="news-date">{{ item.date }}</em><span class="news-text">{{ item.text }}</span></li>
  {% endfor %}
</ul>

<span class="anchor" id="research"></span>

# <i class="fas fa-flask"></i> Research

{% for item in content.research %}
<div class="paper-box floating-card{% if item.main_media.size > 0 %} research-card--dual-media{% endif %}">
  <div class="paper-box-image">
    <span class="badge">{{ item.year }}</span>
    <img src="{{ item.media | relative_url }}" alt="{{ item.alt }}" loading="lazy">
    {% for asset in item.main_media %}
    <img src="{{ asset.media | relative_url }}" alt="{{ asset.alt }}" loading="lazy">
    {% endfor %}
  </div>
  <div class="paper-box-text">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
    <div class="interest-tags">
      {% for tag in item.tags %}<span class="tag-accent">{{ tag }}</span>{% endfor %}
    </div>
    {% if item.links.size > 0 %}
    <div class="links">
      {% for link in item.links %}
      <a class="btn-accent" href="{% if link.url contains '://' or link.url contains 'mailto:' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}">{% include content-link-icon.html label=link.label %} {{ link.label }}</a>
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>
{% endfor %}

<span class="anchor" id="publications"></span>

# <i class="fas fa-file-alt"></i> Publications

{% for item in content.publications %}
<div class="paper-box floating-card">
  <div class="paper-box-image">
    <span class="badge">{{ item.year }}</span>
    <img src="{{ item.media | relative_url }}" alt="{{ item.alt }}" loading="lazy">
  </div>
  <div class="paper-box-text">
    <h3>{{ item.title }}</h3>
    <p class="authors">{{ item.authors }}</p>
    <p class="venue">{{ item.venue }}</p>
    {% if item.links.size > 0 %}
    <div class="links">
      {% for link in item.links %}
      <a class="btn-accent" href="{% if link.url contains '://' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}">{% include content-link-icon.html label=link.label %} {{ link.label }}</a>
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>
{% endfor %}

<span class="anchor" id="education"></span>

# <i class="fas fa-graduation-cap"></i> Education

<ul class="about-section-list education-list">
  {% for item in content.education %}
  <li class="education-item{% if item.logo %} education-item-with-logo{% endif %}">
    <div class="education-entry-with-logo">
      {% if item.logo %}<div class="education-logo-shell"><img class="education-school-logo institution-logo {{ item.logo_class }}" src="{{ item.logo | relative_url }}" alt="{{ item.institution }} logo" loading="lazy"></div>{% endif %}
      <div class="education-content">
    <div class="education-header">
      <span class="education-school primary-gradient-text">{{ item.institution }}</span>
      <span class="education-date"><em>{{ item.period }}</em></span>
    </div>
    <span class="education-degree">{{ item.degree }} · {{ item.location }}</span>
    <span class="education-degree">{{ item.details }}</span>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>

<span class="anchor" id="experience"></span>

# <i class="fas fa-briefcase"></i> Intern / Working Experience

<ul class="about-section-list experience-list intern-research-list">
  {% for item in content.intern_research_experience %}
  <li class="education-item{% if item.logo and item.logo != empty %} education-item-with-logo{% endif %}">
    <div class="education-entry-with-logo">
      {% if item.logo and item.logo != empty %}<div class="education-logo-shell"><img class="education-school-logo {{ item.logo_class }}" src="{{ item.logo | relative_url }}" alt="{{ item.organization }} logo" loading="lazy"></div>{% endif %}
      <div class="education-content">
        <div class="education-header">
          <span class="education-school">{{ item.organization }}</span>
          <span class="education-date"><em>{{ item.period }}</em></span>
        </div>
        <span class="education-degree">{{ item.role }}{% if item.location %} · {{ item.location }}{% endif %}</span>
        <p class="experience-description">{{ item.description }}</p>
        {% if item.link %}<a class="experience-article-link btn-accent" href="{{ item.link }}" target="_blank" rel="noopener noreferrer">{{ item.link_label | default: 'Read more' }} <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>{% endif %}
      </div>
    </div>
  </li>
  {% endfor %}
</ul>

<span class="anchor" id="project-experience"></span>

# <i class="fas fa-briefcase"></i> Project &amp; Competition Experience

<ul class="about-section-list experience-list">
  {% for item in content.experience %}
  <li class="education-item{% if item.logo %} education-item-with-logo{% endif %}">
    <div class="education-entry-with-logo">
      {% if item.logo %}<div class="education-logo-shell"><img class="education-school-logo {{ item.logo_class }}" src="{{ item.logo | relative_url }}" alt="{{ item.title }} logo" loading="lazy"></div>{% endif %}
      <div class="education-content">
    <div class="education-header">
      <span class="education-school primary-gradient-text">{{ item.title }}</span>
      <span class="education-date"><em>{{ item.period }}</em></span>
    </div>
    <span class="education-degree">{{ item.organization }}</span>
    <span class="education-degree">{{ item.description }}</span>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>

<span class="anchor" id="projects"></span>

# <i class="fas fa-diagram-project"></i> Projects

{% for item in content.projects %}
<div class="paper-box floating-card project-card{% if item.gallery.size > 0 %} paper-box--media-stack{% if item.gallery.size == 1 %} project-gallery--two{% endif %}{% endif %}">
  <div class="paper-box-image">
    <span class="badge">{{ item.year }}</span>
    <img src="{{ item.media | relative_url }}" alt="{{ item.alt }}" loading="lazy">
    {% for asset in item.gallery %}
    <a class="project-gallery-link" href="{{ asset.media | relative_url }}" target="_blank" rel="noopener" aria-label="Open image: {{ asset.alt | escape }}">
      <img src="{{ asset.media | relative_url }}" alt="{{ asset.alt }}" loading="lazy">
    </a>
    {% endfor %}
  </div>
  <div class="paper-box-text">
    <h3>{{ item.title }}</h3>
    {% if item.subtitle %}<p class="project-subtitle">{{ item.subtitle }}</p>{% endif %}
    {% if item.role %}<p class="project-role"><strong>Role:</strong> {{ item.role }}</p>{% endif %}
    {% if item.result %}<p class="project-result"><i class="fas fa-trophy" aria-hidden="true"></i> {{ item.result }}</p>{% endif %}
    {% if item.description %}<p>{{ item.description }}</p>{% endif %}
    {% if item.links.size > 0 %}
    <div class="links">
      {% for link in item.links %}
      <a class="btn-accent" href="{% if link.url contains '://' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}">{% include content-link-icon.html label=link.label %} {{ link.label }}</a>
      {% endfor %}
    </div>
    {% endif %}
  </div>
</div>
{% endfor %}

<span class="anchor" id="skills"></span>

# <i class="fas fa-code"></i> Technical Skills

<div class="highlight-blocks">
  <div class="highlight-block floating-card">
    <h3>Languages & Frameworks</h3>
    <ul class="interest-tags">{% for item in content.skills.languages %}<li>{{ item }}</li>{% endfor %}</ul>
    <h3>Robotics</h3>
    <ul class="interest-tags">{% for item in content.skills.robotics %}<li>{{ item }}</li>{% endfor %}</ul>
    <h3>Tools & Hardware</h3>
    <ul class="interest-tags">{% for item in content.skills.tools %}<li>{{ item }}</li>{% endfor %}</ul>
  </div>
</div>

<span class="anchor" id="awards"></span>

# <i class="fas fa-trophy"></i> Honors & Awards

<ul class="about-section-list">
  {% for item in content.honors %}
  <li><em>{{ item.year }}</em>: {{ item.title }}</li>
  {% endfor %}
</ul>
