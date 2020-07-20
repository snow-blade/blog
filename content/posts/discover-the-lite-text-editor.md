---
title: "Discover the awesome lite text editor 🚀 💻 😃"
description: Discover a lightweight and beautiful text editor.
date: 2020-07-20T11:00:00.000Z
next: coming-soon
previous: coding-post
display: true
--- 

### What the heck is it  🕶

The lite text editor is a modern, beautiful and extremely customizable text editor, it also is very lightweight(2 mb). The core is written written in c using the [SDL2]() library and it does low level thing like drawing the window, drawing text, drawing shapes,setting the font, and handles the 'fronted' as I may say that is written in the [lua](https://www.lua.org/) programming language, it's also growing very fast as in only 4 months it managed to have more than 3k GitHub stars.

Here is a little screenshot of it:

![lite](lite.png)

### How to install 💻

- You can either download the precompiled binaries at:

  Go to: [https://github.com/rxi/lite/releases/](https://github.com/rxi/lite/releases/) then select lite.zip, it should give you access to a zip, if you're on windows open lite.exe but if you're on linux/macOs open the file named lite, and everything should work just fine.

- Or you can compile from source: 

  Linux:

  On debian based distros run :

  ```bash
  sudo apt install libSDL2-dev
  ```

  On rheel distros:

  ```bash
  sudo dnf install libSDL2-devel
  ```

  On arch-based distros:

  ```bash
  sudo pacman -S sdl2
  ```

  Then clone the repo:

  

  ```bash
  git clone https://github.com/rxi/lite.git
  ```

  OSX:

  Follow this tutorial: https://medium.com/@edkins.sarah/set-up-sdl2-on-your-mac-without-xcode-6b0c33b723f7

  Then build it with:

  ```bash
  cd lite&&./build.sh
  ```

   <p class='tip'>  📓 📝 😎  tip: <br />  <br />Read the below link if you're on linux, for a better user experience</p> 
 <a href="https://github.com/rxi/lite/issues/134"> here</a>

### When would I need it 📑📑

Lite is not complete enough to be called an IDE but you can use it as an alternative to notepad/notepad++ and use it to open simple files like .txt or .c, .h or programs you want to quickly compile in a terminal.

<p class='tip'> 📓 📝 😎  tip: <br />  <br /> Lite has a console plugin to quickly compile or test your programs </p>
Download it here: <a href="https://github.com/a327ex/lite-plugins/blob/master/plugins/console.lua">https://github.com/a327ex/lite-plugins/blob/master/plugins/console.lua</a> and put it in the plugins folder.<br/>
As lite is extremely lightweight, it only requires =~2mb of storage and takes an insignificant amount of cpu, it's perfect for simple and fast file editing, it's also highly customizable, so you can use it to brush up those Lua and c skills

### Final words

I decided since long to use lite as my default text editor and use an IDE only when I need it as most of the programs I write, I eventually need to compile them using a terminal

<p class='tip'>  📓 📝 😎  tip: <br />  <br />Please follow me on github<p>
That's it folks ☑️☑️, try it out and trust me you'll like this editor for it's simplicity and be amazed by it's functionalities that only fit  in 2mb of storage.









