---
title: "Random crate episode 1: psswd"
description: First episode of a series of rustic crates.
date: 2020-08-19T11:00:00.000Z
next: coming-so
previous: print-icons-in-terminal
display: true
--- 


Hello everyone, today i will be starting a new series in which i uncover and then write about random and not very known crates on crates.io.

Crates.io is a website which stores rust libraries named crates which are the fetched by the cargo package manager then built and used to make rust binaries, the idea of this series came to my mind when i started to use some obscure packages from crates.io and started liking them.

Now let us start with the first one: psswd

### Utility

Here is what is written on the crates.io page:

> A simple Rust command line utility to manage your passwords. It uses [age (Actually Good Encryption)](https://github.com/FiloSottile/age) to encrypt your passwords, and supports decryption using a passphrase.

### Install

To install this crate, just type: ` $ cargo install psswd`

### Using

<p class="tip"> Be sure to have `~/.cargo/bin` in your path,you can still follow either way </p>

Then after typing `psswd` in your terminal you should see:

```bash
$ psswd #change to ~/.cargo/bin/psswd if this does not work                                   
psswd 0.1.3
Password manager using age-encryption

USAGE:
    psswd <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    add       Creates a new entry containing an encrypted password
    delete    Deletes one or all entries
    help      Prints this message or the help of the given subcommand(s)
    list      Lists entries
    show      Displays a specific entry


```

To create a new password, just type:

```sh
 $ psswd add
 ```

```bash
$ psswd add                                                                                  
Enter the shortname for your password entry: new_dope_password
Enter a password: 
Enter a passphrase: 

```

Now let us list all the passwords:

```bash
$ psswd list # as we only have saved one password then we get only one in the list
new_dope_password

```

Then let's get back our passwords with `psswd show` 

```bash
$ psswd show
Enter your passphrase: 
<whatever your passwdord is>

```

All the magic is done by encrypting your password in `~/.psswd`  if you execute `ls ~/.psswd` you should see a list of encrypted files with their names.

Here is a little gif to illustrate all of this: [here](https://camo.githubusercontent.com/58f5c359aa4b4338087f93028dd491334366cc76/68747470733a2f2f692e696d6775722e636f6d2f544867786a56362e676966)

### additional info
- github repo: [https://github.com/Gogopex/psswd](https://github.com/Gogopex/psswd)
- crates.io: [https://crates.io/crates/psswd](https://crates.io/crates/psswd)

### Final words
I hope you found this article useful, so see you in the next episode of `random crates`
<p class="tip">If you found any typo or improvements please make a little PR to fix this on the Github repo</p>
Github repo of this post: https://github.com/snow-blade/blog/blob/master/content/posts/
