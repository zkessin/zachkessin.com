---
layout: page
title: Classes
---



<div class="home">

  <h1 class="page-heading">Upcoming Classes</h1>

  <table class="rwd-table">
    <tr>
      <td>Class Title</td>
      <td>Location</td>
      <td>Date</td>
    </tr>
    {% for class in site.classes %}
    <tr>
      <td>{{class.title}}</td>
      <td>{{class.location}}</td>
      <td>{{class.date}}</td>
      <td><a class="post-link" href="{{ class.url | prepend: site.baseurl }}">More Information</a></td>
    {%endfor%}
  </table>  


</div>
