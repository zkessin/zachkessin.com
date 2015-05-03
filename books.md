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
    {% for book in site.books %}
    <tr>
      <td>{{book.title}}</td>
      <td>{{book.sample_chapter}}</td>	
      <td>{{book.buy_button}}</td>
      <td>{{book.group_buy_button}}</td>	
      <td><a class="post-link" href="{{ book.url | prepend: site.baseurl }}">More Information</a></td>
    {%endfor%}
  </table>  


</div>
