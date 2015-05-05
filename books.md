---
layout: page
title: Books
---


<div class="home">


  <table class="rwd-table">
    <tr>
      <th>Book Title</th>
      <th>Sample Chapter</th>
      <th>Buy</th>
      <th>Site Licence</th>

    </tr>
    {% for book in site.books %}
    <tr>
      <td><a class="post-link" href="{{ book.url | prepend: site.baseurl }}">{{book.title}}</a></td>
      <td><a href="{{book.sample_chapter| prepend: site.baseurl}}">Sample Chapter</a></td>	
      <td><a class="small_cta_button" href="{{book.buy_button}}"       >Buy ${{book.price}}</a></td>
      <td><a class="small_cta_button" href="{{book.group_buy_button}}" >Buy Site Licence ${{book.site_price}}</a></td>	
 
    </tr>
    {%endfor%}
  </table>  
</div>

All books are DRM Free and ship in PDF Format

Site Licences allow you to share the book with up to 100 members of your team on your company server, dropbox, google drive or similar service
