---
layout: page
title: Books
---


<div class="home">


  <table class="rwd-table">
    <tr>
      <td>Book Title</td>
      <td>Sample Chapter</td>
      <td>Buy</td>
      <td>Site Licence</td>

    </tr>
    {% for book in site.books %}
    <tr>
      <td><a class="post-link" href="{{ book.url | prepend: site.baseurl }}">{{book.title}}</a></td>
      <td>{{book.sample_chapter}}</td>	
      <td><a href="{{book.buy_button}}">Buy - $ {{book.price}}</a></td>
      <td><a href="{{book.group_buy_button}}">Buy Site Licence - $ {{book.site_price}}</a></td>	
      <td><a class="post-link" href="{{ book.url | prepend: site.baseurl }}">More Information</a></td>
    </tr>
    {%endfor%}
  </table>  
</div>

All books are DRM Free and ship in PDF Format

Site Licences allow you to share the book with up to 100 members of your team on your company server, dropbox, google drive or similar service
