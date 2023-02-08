---
title: Events
eleventyNavigation:
  key: Events
  order: 4
templateEngineOverride: njk,md
override:tags: []
---

# {{ title }}

{%- for event in collections.events | reverse -%}
  <h3>{{ event.data.title }}</h3>
  <p>
    {{ event.fileSlug }}
  </p>
{%- endfor -%}
