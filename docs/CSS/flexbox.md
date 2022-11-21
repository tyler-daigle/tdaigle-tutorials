---
title: The Secret To Understanding Flexbox
tags:
  - CSS
  - Flexbox
  - MDN
  - Intermediate
---

# The Secret To Understanding Flexbox

## Introduction

When first learning CSS it can feel overwhelming when you look at the huge number of properties that are available. Attempting to memorize property names is not the best way to learn CSS. It is more important to understand **concepts**, such as understanding what the **CSS Box Model** is for example. Once you understand the Box Model it becomes easier to understand when to use padding or when to use a margin. Understanding the concepts and the terminology makes it easier to find answers for when you run into problems.

Learning how to properly use **flexbox** can be difficult. There are many different CSS properties related to flexbox and it seems like there are 32 different ways to do the same thing. When I first
started learning about flexbox I would usually just randomly try different properties until I got
the layout that I was looking for. I really didn't fully understand flexbox. It never really clicked
for me until I gained a proper understanding of the different axes (that's axes as in more than one
axis).

## But first, what is the purpose of flexbox?

Flexbox is used to lay out elements in a row (side by side) or in a column (stacked on top of each other).

In the image below the boxes outlined in blue are the **flex containers**, the items inside each **flex
container** are **flex items**.

![Flexbox Rows and Columns Diagram](./images/flexbox-image-1.svg)

## Rows and Columns

We will use this simple HTML as the basis for our discussion of flexbox:

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

We have an outer div with three inner divs. We could have used any elements inside of our outer div, we
could have used a span or a paragraph, it doesn't matter. A flex item can be an inline element or a
block level element.

Since a div is a block level element, our divs are going to be stacked on top of one another by default. We have not turned our outer div into a flex container yet, but as soon as we do our
divs are going to end up sitting next to each other in a nice little row:

```css
.container {
  display: flex;
}
```

![Flexbox Axes](./images/flexbox-image-2.png)

### Flexbox displays items in a row by default

As soon as you set the container to **flex**
