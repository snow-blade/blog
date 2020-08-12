---
title: "How to output files and directory along with their icons with the ls command"
description: Let's make somethin' really fun with the ls command.
date: 2020-08-12T00:33:00.000Z
next: coming-soon
previous: july-recap
display: true
--- 

### Overview

Hello there, it's snow and i'm back with another completely impractical (but cool) tutorial;<br >
I don't know for you but i have always wanted to see the output of the ls command show me the icons of the files along with their name, so after many hours of searching, i finally found my solution. I though that maybe someone else might need it so i wrote this post so that you won't spend the hours i spent reseaching on this.
### Goals
The goal of this tutorial is to obtain this
![](ls-icons.png)

starting from, this:

![](ls-normal.png)
Also check this asciicast if you want: https://asciinema.org/a/21Kt0cvPKnH3hp2YtVD6alhnm <br/>
This tutorial is going to require some tools:

- git
- make

### Installing the needed tools(linux/macos)

On debian-based distros, run in your terminal:

```bash
$ sudo apt update
$ sudo apt install git cmake
#optional, it just a better terminal emulator in my opinion
$ sudo apt install alacritty
```

On rheel based distros:

```bash
$ sudo dnf install cmake git
#optional, it just a better terminal emulator in my opinion
$ sudo dnf install alacritty
```

On arch based distros:

```bash
$ sudo pacman install git make 
#optional, it just a better terminal emulator in my opinion
$ sudo pacman install alacritty
```

On mac

`$ brew install git make`



### Time to rock

Now that we have all the needed dependencies, let's proceed to the next step: installing the icons:

First of all, clone the github repository

```bash
$ git clone https://github.com/sebastiencs/icons-in-terminal.git && cd icons-in-terminal
```

Then install the icons:

```bash
$ ./build.sh # builds the icons
$ ./install.sh #installs the icons
```

After the installation ends, check that all the icons have been downloaded by running:

```bash
$ ./print_icons.sh
```

here is the output i get in my terminal:

![](print-icons.png)

<p className='tip' >
    <br>
    Do not worry if all the icons are not being displayed correctly, 
</p>

<p className='tip'>
    <br>
    refer to the troubleshoot section below after completing all the steps
</p>

Then let's make sure that the icons will be printed with the ls command:

Follow these steps:

```bash
$ git clone https://github.com/sebastiencs/ls-icons && cd ls-icons # clone the repo
$ ./bootstrap
$ export CFLAGS=-DNO_TRUE_COLOURS=1 # Execute this line _only_ if your terminal doesn't support true colours
$ export CC=clang CXX=clang++
$ ./configure --prefix=/opt/coreutils            #
$ make                                         #  these 3 command might take a bit of time to complete, so be a bit patient
$ sudo make install                              #
$ /opt/coreutils/bin/ls       # check if everything is fine

```

After all these commands finish to execute, you should hopefully get this output in your terminal:

![](ls-opt.png)

### Troubleshoot

If you do not get this output then it should be a problem with your terminal emulator or a command you executed in a bad way you may also need to reboot into your computer in order for the changes to take effect, try to execute the last 3 commands as root if your problem isn't included in the above ones.

### Final words

If you want you can make `/opt/coreutils/bin/ls` as execute itself each time you type `ls`, just execute `$ sudo cp /opt/coreutils/bin/ls /usr/bin/ls` . also be sure to make a copy of the original ls binary in case you want to return to the good ol' `ls` .

<p className='tip'>
<br/>
if you found any error or typo in this tutorial please open an issue or make a PR 
</p>
github repo of this article:<a href="github.com/snow-blade/blog/blob/master/content/print-icons-in-terminal.md"> here</a>