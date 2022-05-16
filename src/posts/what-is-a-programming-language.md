---
layout: post
title: Wait — what is a programming language?
excerpt: ""
date: 2022-01-29
tags:
  - post
  - fullstack

---

>What we mean by a programming language is something we use to tell a computer what to do.
>
>– Paul Graham, [Revenge of the Nerds](http://www.paulgraham.com/icad.html)

Given the collaborative nature of most software development at this point, let us say that programming is, often enough, describing what we want a computer to do. It may seem a semantic or pedantic 😬 point, but if you have had to collaborate with code — whether defining a spec, on-boarding, context switching, or regression testing — you are familiar with the burden of the man-made complexity that can manifest in a code base. But the _we_ there is important.

> Programs must be written for people to read, and only incidentally for machines to execute.
>
>- Harold Abelson and Gerald Jay Sussman with Julie Sussman, ["Structure and Interpretation of Computer Programs", preface to the first edition](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-7.html#%_chap_Temp_4)

So, a program tells a computer what to do and a programming language allows us to do that.  

But if that's all it does, it's more of a *computing* language (c.f. Dijkstra's definition in [EWD1036](https://www.smaldone.com.ar/documentos/ewd/EWD1036_pretty.html)) – which is to say that a programming language also has to tell **us** what we want a computer to do. Accordingly, a programming language that allows us to write, read, and discuss such functionality more effectively should be desired over others – all other things held equal.

Programming languages depend on communities of users and supporters to thrive. The more immediately obvious, compelling, effective and delightful a tool is to use, the more people will be drawn to it, and programming languages are no exception.

That said, there can be a frustrating conundrum where easy to learn but difficult to master languages enable the production of large amounts of worse code – worse meaning that the code may be fragile, difficult to comprehend, and not function as expected (c.f. the front end codebase in the abandoned project you just inherited). Ideally, a language would have a low bar, a high ceiling – but many of the problems associated with a given language are often reflections of societal pressures that have manifested in code.

So when selecting a language or a framework for a project, consider how you will go about answering these questions:
- Who will design, implement, change, and maintain this codebase? How?
- What do we want the computers to do?
- What do the users want and need?
- What does the communities want and need?
- How will we measure failures? Success?
- What else might the computers end up doing in the process and does it matter? And us?
- At what pace should we run? What will be our milestones?
- How will we discuss these things over the course of the project and beyond?

These questions become easier to answer when we have programming languages and frameworks that encourage us to discuss them effectively.
