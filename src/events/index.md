---
title: Events
eleventyNavigation:
  key: Events
  order: 4
templateEngineOverride: njk,md
---

# {{ title }}


{%- for news in news -%}
  <h3>{{ news.title }}</h3>
  <p>
    {{ news.date }}
  </p>
{%- endfor -%}
