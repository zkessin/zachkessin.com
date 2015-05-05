---
layout: page
title: Classes
---



<div class="home">

  <h1 class="page-heading">Upcoming Classes</h1>

  <table class="rwd-table">
    <tr>
      <th>Class Title</th>
      <th>Location</th>
      <th>Date</th>
    </tr>
    {% assign classes = site.classes | sort: 'date'%}
    {% for class in classes %}
    <tr>
      <td>{{class.title}}</td>
      <td>{{class.location}}</td>
      <td>{{class.date}}</td>
      <td><a class="post-link" href="{{ class.url | prepend: site.baseurl }}">More Information</a></td>
      </tr>
    {%endfor%}
  </table>  


</div>

<iframe src="https://madmimi.com/signups/142346/iframe" scrolling="no" frameborder="0" height="619" style="max-width: 800px; width: 100%;"></iframe>