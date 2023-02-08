---
title: Members
eleventyNavigation:
  key: Member
  order: 1
templateEngineOverride: njk,md
---

<div class="linked-heading" id="heading">
    <h2>Members</h2>
</div>

<div class="member-list member-list-2col">
{%- for person in collections.Member -%}
  {% include 'partials/person-item.njk' %}
{%- endfor -%}
</div>
