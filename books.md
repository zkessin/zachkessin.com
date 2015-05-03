---
layout: page
title: Books
---


<div class="home">

  <h1 class="page-heading">Books</h1>

  <table class="rwd-table">
    <tr>
      <td>Book Title</td>
      <td>Sample Chapter</td>
      <td>Buy</td>
      <td>Site Licence</td>

    </tr>
    {% for class in site.book %}
    <tr>
      <td>{{class.title}}</td>
      <td>{{class.sample_chapter}}</td>	
      <td>{{class.buy_button}}</td>
      <td>{{class.group_buy_button}}</td>	
      <td><a class="post-link" href="{{ class.url | prepend: site.baseurl }}">More Information</a></td>
    {%endfor%}
  </table>  


</div>
