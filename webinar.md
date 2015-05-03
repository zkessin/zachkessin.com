---
layout: default
title: Webinars
---



<div class="home">

  <h1 class="page-heading">Upcoming Webinars</h1>

  <table class="rwd-table">
    <tr>
      <th>Webinars Title</th>
      <th>Region</th>
      <th>Date</th>
      <th>Time</th>
    </tr>
    {% for class in site.webinar %}
    <tr>
      <td>{{class.title}}</td>
      <td>{{class.region}}</td>  
      <td>{{class.date}}</td>
      <td>{{class.time}} {{class.timezone}}</td>
      <td><a class="post-link" href="{{ class.url | prepend: site.baseurl }}">More Information</a></td>
    {%endfor%}
  </table>  


</div>





