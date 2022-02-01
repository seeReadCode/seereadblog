---
layout: post
title: Wait — what is a programming language?
excerpt: ""
date: 2022-01-29
tags:
  - post
---

>What we mean by a programming language is something we use to tell a computer what to do.
>
>– Paul Graham, [Revenge of the Nerds](http://www.paulgraham.com/icad.html)

Given the collaborative nature of most software development at this point, let us say that programming is, often enough, describing what we want a computer to do. It may seem a semantic or pedantic 😬 point, but if you have had to collaborate with code — whether defining a spec, on-boarding, context switching, or regression testing — you are familiar with the burden of the man-made complexity that can manifest in a code base. But the _we_ there is important.

So, a program tells a computer what to do. And a programming language is part of a how do that.  But if that's all it does, it's more of a *computing* language (c.f. Dijkstra's definition in [EWD1036](https://www.smaldone.com.ar/documentos/ewd/EWD1036_pretty.html)) – which is to say that a programming language also has to tell **us** what we want a computer to do. Accordingly, a programming language that allows us to write, read, and discuss such functionality more effectively should be desired over others – all other things held equal.

Programming languages depend on communities of users and supporters to thrive. The more immediately obvious, compelling, effective and delightful a tool is to use, the more people will be drawn to it, and programming languages are no exception.  But we can end up with a conundrum of worse code in easy to learn but difficult to master languages – worse meaning that the code may be fragile, difficult to comprehend, and not function as expected (c.f. the front end codebase in the abandoned project you just inherited).

Therein lies an argument for writing everything in C or deconstructionist Japanese, but unlike Linus or Edsger, most of us workaday full stack folk 1. work across layers per application, 2. have to integrate across third party interfaces and 3. track exploding dependencies with clients who have many reasons to discount the essential and add to the artificial complexity of work. 

So when selecting a language or a framework for a project, consider how you will go about answering these questions:
- What do we want the computers to do? 
- How will we know that they are doing it?
- What else might they be doing and does it matter?
- How will we change what's happening?
- How long will it take and at what expense?

These questions become easier to answer when we have programming languages and frameworks that encourage us to discuss them effectively.
