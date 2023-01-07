---
title: Interactive Metroid Map
tags:
  - next.js
  - react
  - javascript
  - projects
---

# An interactive map for the NES game Metroid

## About the app

*This is currently a work in progress and I will be updating this as I work on the project.*

I recently started playing through the original Metroid for the NES. I haven't played
it in a long time and have forgotten where just about everything in the game is located.

This gave me the idea to create an interactive map that would show you how to get from
one point to another as well as show where items were located in the game. I wanted  a
map that would allow you to click on an area and it would then display what items, if any,
are located there. I also wanted to be able to plot a path from one area to another.

The game world is just a large matrix of screens. There are 30 columns by 29 rows of 
screens.  A lot of the screens in the matrix are actually blank - in a 30x29 matrix 
there would be 870 items. There are not 870 screens in the game of Metroid. A lot of the
screens are not part of the game world but when displaying the game world in a large grid
every row and column pair has something. I am also not sure how the game actually stored 
the map data in memory, but for the sake of making a map I am using a matrix of screens. 

On the NES the resolution was 256x240 pixels.

## Tech used

The map is being created with Next.js.

There are going to be several problems: the map uses **a lot** of images. They are actually
somewhat small images but there are still a lot of them.

One of the biggest problems is scaling the map. It is difficult to display such a large map 
all at once. Having the ability to zoom the map in and out is something I am not sure how I
am going to do yet.

## Creating the images

I found a large image of all the screens that make up the game Metroid. I then used a python
script called **split-image** to split the image up into 870 different images. Each individual
image is 256x240 pixels, the resolution of the NES (I think this might be the resolution of
the PAL NES, but it really doesn't matter for this.)

Of these 870 images many of them are just black squares. It is difficult to figure out which
game screens are blank and which images are blank and make sure the correct image is shown for
each screen. 

My plan is to create a json file that contains an array of Tile items. I use the term tile
rather than screen just for the reason that tile is used often when talking about 2d maps in
games. Tile is essentially the same thing as a screen.

Each item will have the image name, a boolean that is used to mark the tile as blank, any
items that are on the tile and which directions it is valid to travel on this tile. 

In the game there are some screens that you can move left and right, some you can only move left 
or right (such as a dead end). You can also move up and down on some screens.

I need to make sure that if you are calculating a path from point A to point B you only travel
in valid directions.

## Process of creating the editor



## Creating the json data and then the graph

## Link to the project
