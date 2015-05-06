---
layout: post
title: "Understanding Types in Modern Langauges"
date: "2015-05-04 15:54:35 +0300"
---

For people of my age who learned to program the first language we
learned with a type system was probably *C* or *Pascal*. The type
systems in these languages is relativly primative, and it can seem
that in some cases the type system is there to help the compiler not
the programmer. 

After frustration with type systems, many of us developers ran away
from typed languages like C++ or Java to use languages like
Perl, Python or Ruby.

However types are making a comeback, in the years since the mid 1980's
and now there has been much reasearch into type systems. Modern type
systems can be very expresive and can can work to elimnate bugs in
useful ways.

One thing that a decent type system should be able to do is prevent a
null pointer exception by being able to show the difference between a
partial function and a complete function. 

A partial function is one that for some inputs may not have a defined
result, such as a get record from database type function. It may
return a record or it may return some form of _record not found_
indicator. 

Traditionally the way this has been done is a null pointer or
something that is largely similar. In a language like C the type
system will not help you deal with this problem, as the null pointer
will have the same type as the record that may have been present.

In erlang you can have the function return _{ok, Value}_ or _{error,
undefined}_. In this case the function returns 2 things that have very
different types, and if the not found case is not handled it will
result in a type error.

If you find this interesting checkout the book *Understanding Erlang Types* http://zachkessin.com/books/erlang_types/