---
title: "Random crate episode 2: Aion"
description: Write your date durations with a human friendly library.
date: 2020-08-26T00:02:00.000Z
next: coming-soon
previous: random-crate-ep-1
display: true
--- 


Hello everyone, this is a continuation fo a series in which i uncover and then write about random and not very known crates on crates.io.

Crates.io is a website which stores rust libraries named crates which are the fetched by the cargo package manager then built and used to make rust binaries, the idea of this series came to my mind when i started to use some obscure packages from crates.io and started liking them.

Now let us go with the first second onee: aion

### Utility

Here is the original description:

> Aion is a utility crate, inspired by rails, that allows you to write Duration and DateTime in a friendly way

### Basic example

This crate is used for easily writing Durations in a more human-friendly way,

Let's say you want to make a program that will tell you that you have to go jogging in 30 minutes.

This program will simply use the espeak linux command to say out loud that you need to do your task.

First create a new project

```sh
$ cargo new aion-test
```

Then in Cargo.toml :

```toml
[dependencies]
aion = "0.2"
```

In src/main.rs

```rust
use aion::*; // for human-friendly date and duration
use chrono::Utc; // To get the current date
use std::process::Command; // to invoke the espeak command

fn main(){
    let mut now = Utc::now(); //current time
    let half_hour_from_now = now + 30.minutes(); // in 30 minutes from now, replace it with 2 or one for faster results
    let cmd="espeak"; // the linux command for text to speech
    let mut say=Command::new(cmd); //for a subprocess
    loop{
        now = Utc::now(); //update the now variable
        if now.timestamp()==half_hour_from_now.timestamp()       { // if the current time matches half_hour_from_now 
        let _res=say.arg("go and start jogging bro").output().expect("process failed to execute, maybe espeak isn't present on your system"); //execute the command and watch for errors
        break;
        }
    }
}


```

You should hear a voice after 30 minutes(or whatever else you've set up).

### additional info

- Github: [https://github.com/jk-gan/aion](https://github.com/jk-gan/aion)
- crates.io: [https://crates.io/crates/aion](https://crates.io/crates/aion)

### Appendix

I hope you found this article useful, so see you in the next episode of `random crates`

<p className="tip">If you found any typo or improvements please make a little PR to fix this on the Github repo</p>

Github repo of this post: https://github.com/snow-blade/blog/blob/master/content/posts/