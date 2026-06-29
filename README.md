# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![vue tablette active](./images/vue%20tablette%20active.jpeg)

### Links

- Solution URL: [solution URL here](https://github.com/polo372/article-preview-component-master)
- Live Site URL: [live site URL here](https://product-component-master.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to create a shape using an SVG file.
```css
 .triangle {
    width: 0;
    height: 0;
    border: 12px solid ;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-top-color: var(--grey900);
    position: absolute;
    bottom: -22px;
    }
```

This element allows the interaction to be adapted based on the screen size.
```js
let mql = window.matchMedia("(width <= 767px)");
    if(mql.matches)
```



### AI Collaboration


I used AI to review this project, but also to help me get unstuck at the end of it.

## Author

Website - [Polo372](https://github.com/polo372)
Frontend Mentor - [@polo372](https://www.frontendmentor.io/profile/polo372)
Twitter - [@plbd372](https://x.com/plbd372)

