---
layout: post
title: "Developer Culture Matters"
date: "Thu May  7 15:29:18 IDT 2015"
---

> Programs must be written for people to read,
> and only incidentally for machines to execute.
>
> -- Structure and Interperation of Computer Programs - Abelson and Sussman

This quote more than any other explains why developer culture is
important, programming is at its heart a human activity and it is done
by actual humans. I program must not only be able to pass its test and
fill some value for an end user, but also must be able to be
understood by humans.

The truth is that programmers spend more time maintaining old code
that writing new code, so we must write code to be maintained.

The main thing that gets in the way of this can be the culture of how
a development group is setup. As a profession we need to act like the
professionals that we claim to be, one part of this is understanding
how to write code that is easy to understand and will not rot in time.

There are a few ways to do this, the first is to leverage tests, or
better yet
*[QuickCheck Properties](http://zachkessin.com/books/erlang_quickcheck)*
to validate our code. The other is by using the powerful type systems
that modern languages provide us to find errors at compile time,
Haskell and F# provide this for free, in Erlang one has to construct a
type system, but this can be done, as shown in my book  *[Understanding Erlang Types](http://zachkessin.com/books/erlang_types/)*

However none of this matters if the team does not write and run the
tests. A CI System should be employed and when a key branch turns red
that should be seen as a problem to be fixed *right now*. By doing
this constantly we can prevent a long running project from turning
into a giant mass of Shaving Cream. 

![Shaving Cream](/images/shaving_cream.jpg)

This will benefit us as developers by preventing us from having to
deal with the code base from hell, and it will also benefit our
customers by allowing them to have confidence in the code we provide
them.

Having trouble with your culture? I can help with [Coaching](/coaching.html)
