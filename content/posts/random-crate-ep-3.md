---
title: "Random crates episode 3: deadwiki"
description: Making a wiki just becomes dead simple with this crate.
date: 2020-09-04T00:02:00.000Z
next: coming-soon
previous: random-crate-ep-1
display: true
--- 
### Utility

Original Description:

> **deadwiki** is a Markdown-powered wiki that uses your filesystem as
> its db. This means you can keep your wiki in a git repository and edit
> content with your text editor, or read and modify pages `with style`
> using its 1990s-era web interface.
>
> ---

<p className="tip">Hmmm...Given only this explanation, you might get confused a bit so let's try breaking it in simple English.</p>

It pretty much means that:

- It uses a micro-framework named vial as a http server

- You give it a directory in your computer which is populated by one or more markdown files, you can also give it an empty directory and create articles in the browser

- With these markdown files, you will have a wiki pointing to each of the present markdown files

- One of the major features of a wiki is that anyone can edit it's content, it's possible to do so with deadwiki

- Using a very simple and intuitive markdown editor, you can create new articles or edit existing ones in the web browser

  Still don't get it? Let's proceed to real examples

  ### Basic example

  Let's first install deadwiki from the cargo registry by typing:

  ```bash
  $ cargo install deadwiki
  ```

  <p className="tip"> Be sure to have ~/.cargo/bin in you path on linux, it should normally be fine on windows </p>
  Then let's create a new directory which will contain our wiki posts

  ```bash
  $ mkdir food-wiki && cd food-wiki
  ```
  Let's create our first and second post, use you favorite text editor to create the first articles
  > in tuna.md

  ```markdown
   # Tuna
   An animal that looks weird but tastes great
   
   #food #fish #submarine
  ```

> in shark.md

```markdown
# Shark
A bit scary but i heard that it might have a good taste, who knows?

#food #fish #scary
```

> in mango.md

```markdown
# Mango
A tasty fruit that i don't really like
#food #fruit #randomthoughts
```
I made a simple wiki to demonstrate the basic usage of deadwiki, just remark the use of hashtags in the footer of each article. Here is the original description on hashtags:

> deadwiki also includes support for `#hashtags`. Any hashtag appearing
> in wiki text will be linked to a search page that lists all wiki pages
> containing that hashtag.

After creating these files, your directory should look like this:

```bash
.
├── mango.md
├── shark.md
└── tuna.md
```

Then execute:

```bash
$ dead .
```

Then open your web-browser at: http://127.0.0.1:8000, you should then see something like this:

![](2.png)

Click on any of the links and you should be able to see a header where you can click on links for editing the post, creating a new one or returning home.
If you click on any of the hashtags, you should see that it will redirect you to a list of all wiki articles containing the hashtag.

As of now, deadwiki is still in it's pre-release phase as it's evolving along with the vial-micro framework, in the future we can expect:
- jump to wiki page (via fuzzy finder)
- `--read-only` mode, so i can have a copy i can view anywhere
- mobile-friendly CSS
- search (probably just `grep`)
- `--gopher`: serve wiki pages over gopher too (probably using [phd]
- `*.css` in wiki dir gets included
- homebrew package, AUR package
- `brew services` for running on osx, `systemd` for arch
- 
Also, the deadwiki philosophy is as follow:

  - no database
  - text editor/plain text friendly
  - prefer server-side rendering
  - take your data with you (scm friendly)
  - js only for user input (keyboard shortcuts, markdown editor, finder)
  - no js frameworks/helpers
  - build time matters (42 crates currently, ~8s release ~6s debug)

  ### Additional info
  Github repo:
  crates.io: 
  ### Appendix
  I hope you found this article useful, so see you in the next episode of `random crates`

  <p className="tip">If you found any typo or improvements please make a little PR to fix this on the Github repo</p>

  Github repo of this post: https://github.com/snow-blade/blog/blob/master/content/posts/
