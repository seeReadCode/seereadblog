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

So, a program tells a computer what to do. And a programming language is part of a how do that.  But if that's all it does, it's more of a *computing* language (c.f. Dijkstra's definition in [EWD1036](https://www.smaldone.com.ar/documentos/ewd/EWD1036_pretty.html)).  Which is to say that **a program also tells us what we want a computer to do**. Accordingly a programming language that allows us to write, read, and discuss such functionality better should be desired over others, all other things equal.

Programming languages depend on communities of users and supporters to thrive. They are subject to all manner of emergent system dynamics. The more immediately obvious, compelling, effective and delight a tool is to use, the more people will be drawn to it, and we end up with this conundrum of worse code in more powerful languages – worse meaning that the code may be fragile, difficult to comprehend, and not function as expected (c.f. that CSS in the abandoned project you just inherited).

Therein lies an argument for writing everything in C or deconstructionist Japanese, but unlike Linus or Edsger, most of us workaday full stack folk work across layers per application and have to integrate across third party interfaces and track exploding dependencies with clients who have many reasons to discount the essential and add to the artificial complexity of work. 

So when selecting a language or a framework for a project consider how you will go about answering these questions:
- What do we want the computers to do? 
- How will we know that they are doing it?
- What else might they be doing and does it matter?
- How will we change what's happening?
- How long will it take and at what expense?

These questions become easier to answer when we have programming languages and frameworks that allow us to discuss them effectively.
