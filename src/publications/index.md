---
title: Publications
templateEngineOverride: njk,md
eleventyNavigation:
  key: Publications
  order: 3
---

# {{ title }}

<ul class="publications">
{%- for publication in publications -%}
    {% include 'partials/publication-item.njk' %}
{%- endfor -%}
</ul>
