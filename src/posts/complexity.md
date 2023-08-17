---
layout: post
title: Grappling with Complexity
excerpt: "Simple is as simple does"
date: 2022-02-05
tags:
  - post
  - tech-realism

---


> Controlling complexity is the essence of computer programming.
> - Brian W. Kernighan, Software Tools (1976), p. 319 (with P. J. Plauger).

We have many ways to suffer complexity. Religion, law, science, art, math, philosophy – among these, computer programming takes a special place.

> Computer programming, however, creates with an exceedingly tractable medium. The programmer builds from pure thought-stuff: concepts and very flexible representations thereof.  Because the medium is tractable, we expect few difficulties in implementation; hence our pervasive optimism. Because our ideas are faulty, we have bugs; hence our optimism is unjustified.
> - Fred Brooks, [The Mythical Man Month](https://www.cs.drexel.edu/~yfcai/CS451/RequiredReadings/MythicalManMonth.pdf), p. 15

Now, in the realm of computation, given an algorithm with an input $n\$ we can think of its complexity as a function $f(n)$. That is:

$$ n \to f(n) $$

We can use [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) for comparing the time and space demands of algorithms. And advances in computer science, computing power, and resources, c.f. [Moore's Law](https://en.wikipedia.org/wiki/Moore%27s_law), allow us to take ever more of the underlying complexity for granted – while also encouraging us to add to our overall complexity in ways that are not so easily measured.

Indeed, when I try to think about the implications of [value moving up the stack](https://ev.medium.com/value-is-moving-up-the-stack-bc6d8ee797ff) as per Ev Williams _and_ [software eating the world](https://www.wsj.com/articles/SB10001424053111903480904576512250915629460) as per Marc Andreesen, and all the artifacts and affordances of such aggregated complexity – I tend to just get overloaded and shutdown.

> Computing's core challenge is how not to make a mess of it. If people object that any science has to meet that challenge, we should give a double rebuttal.
>
> Firstly, machines are so fast and storage capacities are so huge that we face orders of magnitude more room for confusion, the propagation and diffusion of which are easily inadvertently mechanized.
>
> Secondly, because we are dealing with artefacts, all unmastered complexity is of our own making; there is no one else to blame and so _we had better learn how not to introduce the complexity in the first place_.
> - Edsger Dijsktra, [EWD 1243 The Next Fifty Years](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD12xx/EWD1243.html)

Were it only so simple to keep complexity out as the computers and code proliferate.

Indeed, there's a plain [rebound effect](https://en.wikipedia.org/wiki/Rebound_effect_(conservation)) from simple interfaces to high power computing and consequent complexity.  When we consider [Wirth's Law](https://en.wikipedia.org/wiki/Wirth%27s_law) that software gets slower as the hardware gets faster, we could be forgiven for extending it to our own thinking and larger social structure as we feedback more into the computers.

We have the idea of induced demand, and the ensuing logjams of [Braess's paradox](https://en.wikipedia.org/wiki/Braess%27s_paradox) where more roads lead to a slower road network.  See also the [SnackWell effect](https://en.wikipedia.org/wiki/SnackWell_effect), [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox), or the [Downs-Thomson paradox](https://en.wikipedia.org/wiki/Downs%E2%80%93Thomson_paradox).

**This rebound effect suggests that our the interface of humans and computers is on course to get worse for us as individuals _and_ groups but disparately and differently**.

Consider [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law) that a software interface will reflect the social boundaries of the organization that created it.  That might sound a little tenuous at first. But if you are sizing a team for a new project, refactoring a legacy codebase, or tracking down out of date dependencies, it may well ring loudly in your ears.

No wonder then that we see not only all manner of programer productivity 'hacks' and likewise management guidance to reduce organizational complexity. Interrupts must be reduced. Hierarchies flattened. Onboarding must be accelerated.  Developers shouldn't have to worry about lunch.  

Setting planks across tarpits, building a golden path for developers, we also prioritize user focused design. Lean this, agile that, blazing another happy path for users so the software endeavor can thrive. We will tame complexity and deliver value.

So in summary...

1. Software is eating the world
2. Value is moving up the stack
3. Software incorporates and ties into the chaos of social boundaries

Well, it all seems bully for the 1% – and occassionally users, developers, and free loaders - caution is merited. With a hat tip again to Brooks' list of essential difficulties of software listed in [No Silver Bullet](https://web.archive.org/web/20160910002130/http://worrydream.com/refs/Brooks-NoSilverBullet.pdf), we can say:

1. software allows problems to be made invisible or inescapble
2. its complexity to be taken for granted or exploded
3. changes become difficult or catastrophic 
4. integration can become impossible or ineradicable.

With more people programming now than ever before, more users, more stake holders – not to mention more dependencies, higher expectations, more requirements – more code, more AI – and on a happy occassion, more budget – all of that means more entropy, more interconnected but disjoint effects – fragility which, in aggregate, makes for a fierce form of Kessler Syndrome.

To what extent are we simply shifting or amoritizing complexity and exploiting the inability of disempowered groups to keep tabs much less pace?

Yes, it may be easier than ever to spin up a web app with all sorts of real time functionality and UX polish or a chatbot to execute business compromise email scams. Democratization. Keep in mind we also have banks running COBOL, the stripping of value and care from organizations and communities, Windows XP running on nuclear subs... need I go on?

Now, I am scratching at the surface here and not giving us much of a way out.  To get a bit more granular - perhaps you can lead me out of this pit - read some of Sarah Sheard's amazing work [describing complexity of systems and software](https://resources.sei.cmu.edu/asset_files/Presentation/2015_017_001_447399.pdf). For instance, in her excellent [Dynamics of Software Sustainment](https://resources.sei.cmu.edu/asset_files/Article/2014_101_001_446824.pdf), she quotes a US Air Force report that software sustainment can run to 70% of the total cost for of the life of a software project.  That both explains some of the appeal of the [F-35](https://www.reuters.com/article/us-usa-lockheed-f35/u-s-f-35-fighter-modernization-could-cost-16-billion-through-2024-idUSKCN1GK02M) – a veritable [Homer](https://simpsons.fandom.com/wiki/The_Homer) - but also is cause for great concern for our programmatic future. 

Perhaps [Elinor Ostrom](https://en.wikipedia.org/wiki/Elinor_Ostrom)'s work on governance and
the commons makes for the right complement to, say, [this analysis by voting machine expert Harri Hursti on the government's evolving zero trust mandate](https://www.youtube.com/watch?v=AvqcM36g5hg).
