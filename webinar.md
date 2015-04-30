---
layout: default
title: Webinars
---



<div class="home">

  <h1 class="page-heading">Upcoming Webinars</h1>

  <table class="rwd-table">
    <tr>
      <td>Webinars Title</td>
      <td>Region</td>
      <td>Date</td>
    </tr>
    {% for class in site.webinar %}
    <tr>
      <td>{{class.title}}</td>
      <td>{{class.region}}</td>  
      <td>{{class.date}}</td>
      <td><a class="post-link" href="{{ class.url | prepend: site.baseurl }}">More Information</a></td>
    {%endfor%}
  </table>  


</div>





