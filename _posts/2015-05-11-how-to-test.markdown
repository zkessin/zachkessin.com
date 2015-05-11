---
layout: post
title: "How to test our code"
date: "Mon May 11 12:51:17 IDT 2015"
---

For many years the Unit Test has been the _de facto_ standard method
of testing code, and it has worked well for us. By ensuring that every
line of code has been executed before the customer sees it we have
made major improvements in the quality of the code we ship. 

As developers we should be enthusiastic about anything that can
drasticly improve code quality and our own productivity. However once
we have something like Unit Tests we should always as, is this the
best that we can do? Can we do something better?

Unit tests are great, but they are limited, they only cover the cases
that the developer thought of, and they only prove that the code works
in one or two specific cases. They can not find that special case
where something breaks, Maybe there is an escaping bug, or a bug that
only shows up on some particular input to the function or method?
(They happen). 

Enter, Property Based Testing, sometimes known as _QuickCheck_. PBT
says instead of using predefined inputs to a function we should
randomly generate inputs or sequences of events, so that the test can
find those cases that might not act correctly. 

If you want to know more about QuickCheck I have a book on it
http://zachkessin.com/books/erlang_quickcheck/ and offer coaching to
get people started. I will also explain more in future blog posts.
