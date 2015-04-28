---
layout: post
title: "Riak Core for Scale"
date: "2015-04-28 15:56:08 +0300"
---

If you need to scale bigger than 1 machine, or want to have a system
that can withstand the loss of a node then you should be looking at
Riak Core from Basho. 

Riak Core is derived from the Riak KV database, and it includes much
of the distribution mechanism from Riak. 

Riak and Riak core partitions your data around a consistent hash
space. Each chunk of the hash space exists on several servers, so if a
server is lost its work load can be moved to a different system

If you need a system built around Riak Core, please give me a shout.
