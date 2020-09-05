---
title: "August Recap: Goodbye holidays"
description: The last recap episode for a while.
date: 2020-09-04T11:00:00.000Z
next: coming-soon
previous: random-crate-ep-3

display: true
--- 

> POW=proof of work, not prisonner of war 😄😄
So....this August was a very intense month and i learned plenty of stuff varying from webviews to crypto and concurrency in networking. I've made some little POW projects and i tried to make some bigger ones and failed at most of them 😅, but it made me learn sooo much, i also started working on a large open-source rust crypto project with a team of engineers from many countries of the world and this is currently taking most of my time, at the current time we are still trying to agree on some protocols and other stuff that we will use but the general idea is present and we will hopefully start working on the product soon.

Also i discovered [Tauri](https://tauri.studio/), which helped me build a very simple markdown editor with vue.js and marked.js that compiles to a very small binary, tauri is written in rust, which makes it robust and fast, it uses webview technologies  to give you the native feel of a web application without having to use an entire web-browser for the app to run. A simple tauri app can take 600kb where an electron one takes 60-90 mb and tauri consumes waaay less CPU than electon.

I'm also working on a P2P protocol in rust but i have to delay the work because school will be starting this Monday 7th of September. I'm already making a prototype in python but the end result will be written in rust for obvious reasons...

Oh! yeah i had also forgotten that i did many more things other  than programming, but as this is a Dev blog, let's just skip over them and continue.

I also stumbled on [this](https://github.com/thblt/write-yourself-a-git) article describing how the internals of git work and how i can do to build my own git that is compatible with our good'ol git, it also made me learn many stuff in the process, my final project this summer is actually my very own vcs written in python which is compatible with the existing git.

I also tried to maintain [my little package/plugin manager](https://github.com/snow-blade/vlite) written in [vlang](https://vlang.io). Some people questioned my choice of vlang as the programming language for the project as there were many other alternatives and also because the text editor itself is written in c and lua, why didn't i just write the whole thing in these other programming language?? I usually respond with 2 answers, first of all i wanted the smallest binary possible without sacrificing on readability and without using many external c libraries(like libcurl), the second argument is that Vlang is very fun to write(like python or c++ for me) and it's almost as fast as c++ or rust, so i just opted for it. The package manager actually looks like this:

![](screen.png)

![](screen2.png)

In the process of experimenting more with rust, i started a weekly series on rust crates which are not very known and it's progressing very smoothly, i have enough readers to keep me going(at least 100-200 per article) and i'm enjoying the fact that some people even make some PRs to correct some typos in my blog posts or just DM me for me to fix them.

I also made [a really beautiful POW backend for a school management system](https://github.com/snow-blade/sys0) in c++ with awesome terminal effects like colors,tables, loadings and ascii-art, it was certainly my biggest project this summer, just behind is my blog(the total lines of code are 800-900). I made this project to brush up those c++ skills(OOP and pointers mostly) and the fact that all of this was only coded in 3 days(plus 2 days of bug fixing and reviewing the code) make me very proud of my work. Did i mention that it was really beautiful?

![flexing ;)](flex.png)

Also the fact that school will start in 2 days make me unable to continue programming as i please because i will be entering my final year, i will have to study a lot so i will be on hiatus on some open-source projects i'm maintaining, i will focus solely on the P2P protocol so for a while i will be using c++, rust and python only, i will have to stop using lua,gdscript and vue.js or other web-related stuff for a while, but: **I'll be back**

### Appendix

Yo!, me of the future, how do you feel when you're reading this article??Does it amuse you, does it embarrass you or you just don't care about this period of your life?? Yeah, i'm talking to you dude, yes **YOU**.

**BTW, see you in the summer wrap up article.....**













