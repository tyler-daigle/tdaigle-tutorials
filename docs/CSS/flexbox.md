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

Learning how to properly use **flexbox** can be difficult. There are many different CSS properties related to flexbox and it seems like there are 32 different ways to do the same thing. When I first
started learning about flexbox I would usually just randomly try different properties until I got
the layout that I was looking for. I didn't fully understand flexbox. It never really clicked
for me until I gained a proper understanding of the different axes (that's axes as in more than one
axis).

## But first, what is the purpose of flexbox?

Flexbox can be used to change how elements are placed on a page. By default, block level elements
will stack and inline elements will be placed inline. Changing the flow of elements and getting
the spacing exactly how you want it can be difficult. Flexbox makes it much easier to do this.

Flexbox allows you to turn an element into a flex container and easily change how the
elements within the container are positioned. If you want to create a responsive navigation bar
with evenly spaced items you can easily do that with flexbox. You can also nest flex containers
to create some pretty complicated layouts.

## Rows and Columns

We will use this simple HTML as the basis for our discussion of flexbox:

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

We have a parent div with three child divs. By default these three divs will be stacked on top of
each other inside of the parent div since they are block level elements.

We could have used any elements inside of our parent div, we could have used a span or a paragraph, it doesn't matter. A flex item can be an inline element or a block level element.

**The default behavior of flexbox is to place the flex items in a row.**

```css
.container {
  display: flex;
  flex-direction: row; /* this is unecessary because it is the default */
}
```

The CSS above turns our parent div into a **flex container**. It causes the child divs, which are now
**flex items**, to line up in a row and stack side by side. The **flex-direction** property is optional
here because row is the default **flex-direction**.

:::tip And just for demonstration purposes we will pretend that our child divs actually have some content or size set on them, otherwise they wouldn't actually display at all.
:::
![Flexbox Container and Items](./images/flexbox-image-1.png)

## Two Different Axes

When dealing with flexbox there are two different axes. One axis runs from left to right and the
other runs from top to bottom. It is also possible to run from right to left or bottom to top using
**row-reverse** or **column-reverse** but the concept is the same.

These axes determine how flex items line up when added to a flex container.

## Flexbox items flow on the main-axis.

### Main Axis === flex-direction

If you have a flex container that has its **flex-direction** set to **row**, items inside
the flex container line up in a row from left to right, or right to left if **flex-direction**
is set to **row-reverse**. This means the **main axis** runs from left to right (or right to left). The
**cross axis** is the opposite axis which runs from top to bottom.

![Main Axis and Cross Axis](./images/flexbox-image-3.png)

If the **flex-container** is set to **column**, items will stack on top of one another in a column.
The **main axis** now runs from top to bottom or bottom to top if **flex-direction** is set to
**column-reverse**.

## Flipping everything around

```css
.container {
  display: flex;
  flex-direction: column; /* changing the flex container to column */
}
```

When you set the **flex-direction** to **column**, the flex items line up in a column. The
axes will also flip, the **main axis** is now the vertical axis and the **cross axis** is now the horizontal axis.

![Main Axis and Cross Axis](./images/flexbox-image-4.png)
