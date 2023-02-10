---
title: Home
eleventyNavigation:
  key: Home
  order: 0
templateEngineOverride: njk,md
---


## About

The European Criminology Group on Atrocity Crimes and Transitional Justice (ECACTJ) provides a network for European criminologists who are engaged in research on atrocity crimes and transitional justice, whether in or on Europe, or globally. The aim of this Working Group is to enhance the contribution of criminology and criminologists in this field, to stimulate research in and on Europe and to promote exchange between European and international researchers. The group collaborates with other networks and research groups in the field. The Supranational Criminology Network is represented in the group by its founder, Professor Alette Smeulers, Tilburg University, Netherlands. With its focus on researchers in Europe, it is nonetheless global in its perspectives. The group was founded in 2013, and has thrived since then with an increasing membership.

## Why this group?

Europe as a region has witnessed unspeakable mass atrocity crimes and genocide, and Europeans have been involved as perpetrators in mass violence across the globe. However, Europe was also the site of the Nuremberg Trial, where for the first time perpetrators were brought to justice. Europe has played a decisive role in the proliferation of legal instruments, and procedures ever since then, including International Criminal Tribunals and the International Criminal Court. The world owes the term 'genocide' to Raphael Lemkin, a Polish migrant in the US.


<div class="member-list chair-list member-list-1col">
<h2>Chair</h2>
{%- for person in collections.Chair -%}
  {% include 'partials/person-item.njk' %}
{%- endfor -%}
</div>
