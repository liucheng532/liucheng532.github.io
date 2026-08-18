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

{% for paragraph in content.about %}
{{ paragraph }}
{% endfor %}

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

<ul class="about-section-list">
  {% for item in content.news %}
  <li><em>{{ item.date }}</em>: {{ item.text }}</li>
  {% endfor %}
</ul>

<span class="anchor" id="research"></span>

# <i class="fas fa-flask"></i> Research

{% for item in content.research %}
<div class="paper-box floating-card">
  <div class="paper-box-image">
    <span class="badge">{{ item.year }}</span>
    <img src="{{ item.media | relative_url }}" alt="{{ item.alt }}" loading="lazy">
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
      <a class="btn-accent" href="{% if link.url contains '://' or link.url contains 'mailto:' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}">{{ link.label }}</a>
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
      <a class="btn-accent" href="{% if link.url contains '://' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}">{{ link.label }}</a>
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
  <li class="education-item">
    <div class="education-header">
      <span class="education-school primary-gradient-text">{{ item.institution }}</span>
      <span class="education-date"><em>{{ item.period }}</em></span>
    </div>
    <span class="education-degree">{{ item.degree }} · {{ item.location }}</span>
    <span class="education-degree">{{ item.details }}</span>
  </li>
  {% endfor %}
</ul>

<span class="anchor" id="experience"></span>

# <i class="fas fa-briefcase"></i> Experience

<ul class="about-section-list experience-list">
  {% for item in content.experience %}
  <li class="education-item">
    <div class="education-header">
      <span class="education-school primary-gradient-text">{{ item.title }}</span>
      <span class="education-date"><em>{{ item.period }}</em></span>
    </div>
    <span class="education-degree">{{ item.organization }}</span>
    <span class="education-degree">{{ item.description }}</span>
  </li>
  {% endfor %}
</ul>

<span class="anchor" id="projects"></span>

# <i class="fas fa-diagram-project"></i> Projects

{% for item in content.projects %}
<div class="paper-box floating-card">
  <div class="paper-box-image">
    <span class="badge">{{ item.year }}</span>
    <img src="{{ item.media | relative_url }}" alt="{{ item.alt }}" loading="lazy">
  </div>
  <div class="paper-box-text">
    <h3>{{ item.title }}</h3>
    {% if item.links.size > 0 %}
    <div class="links">
      {% for link in item.links %}
      <a class="btn-accent" href="{% if link.url contains '://' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}">{{ link.label }}</a>
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
