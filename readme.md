## Milestone Project 2 ##

### Website for my hobby ###

### Introduction ###

The photography is my hobby. I shoot photos with smartphone or Canon DSLR camera. 
In this Project I try to develop the website for my personal needs or hobby. 
It is a website for Photographer.

### UX ###

Project wireframe you could find in directory Assets.
In the photo industry, it’s usually good practice to have your own site on the site.

That is why:

* As an owner of the web resource I want to represent my skills as a Photographer to everybody;
* Also as an owner of this wesite I want to provide my contact information, that everybody could communicate 
with me;
* As an user I would like to find information about photo session price;
* As an owner I would like to represent my biography and professional skills.

### Technologies used ###

To develop Project the author use the following basic web technologies:

* HTML,
* CSS,
* Javascript on jQuery library basis. To realize my idea I have implemented two Javascript files with code.
First, downloaded, installed and modified Plugin called jquery.pagepilling.js from 
https://github.com/alvarotrigo/pagePiling.js/. Second file developed by myself script.js.
* https://wireframe.cc/ to create wireframe online

### Testing ###

The Project developed and tested with:
* Gitpod IDE;
* Chrome Web Developer Tools;
* CSS Validator - https://jigsaw.w3.org/css-validator/
* HTML Validator - https://validator.w3.org/

The main purpose of testing was to verify and identify that the page elements are visible and
located correctly in mobile version first. 

First Page (Home) elements (Naigation, Heading, Text and Button) located on their positions in Desktop version.
Navigation menu items change size and color when mouse is hover. Button (Order) change color and links to other 
page Prices on click. The Mobile version of this page has a different look: elements from the left moved to the center
and the top navigation menu disappered.

Second Page (About), click on image, image flips and there is information on the other side of it. Click it
again and image flips back.

Third Page (Portfolio), consists of eight images, divided by four images in line. 
When mouse is over the image it changes scale and rotates by 15 degrees giving the impression of movement.
On click image change size to bigger. Click on close button in top right top corner and it will close 
big size image mode. 

Fourth Page (Prices), contains three Plans (Basic, Standard, Premium). For each Plan there should be one <DIV> element,
but this structure was not responsive in mobile version, two of three elements were out of screen. 
The problem was solved by changing <DIV> elements to <Table> with three <th> and <td> elements with css combination.

Fifth Page (Contact), for better visualization Contact Form was moved from left to the center in both versions 
Desktop amn Mobile.

### Deployment ###

Deployment steps:

* Open github.com;
* Find plus symbol on the top right conrner and click it;
* Choose function New Repository;
* Fill section Repository name - websiteformyhobby;
* Choose Public (Anyone can see this repository. You choose who can commit);
* Push Create Repository;
* The Repository created  - https://github.com/aleksandrsg/websiteformyhobby;
* Press GitPod green button on the right side;
* Create first Document index.html;
* In terminal window command line type - git add . ;
* In terminal window command line type - git commit -m "Comment";
* In terminal window command line type - git push;
* Go back to https://github.com/aleksandrsg/websiteformyhobby;
* Click settings;
* Find below section GitHub Pages and choose Master branch;
* Your site is published at https://aleksandrsg.github.io/websiteformyhobby/

### Credits ###

Photographs for Project are taken from free online resource:

https://ru.freeimages.com/