# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @juntaodev/lotide`

**Require it:**

`const _ = require('@juntaodev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element of an array.
* `tail`: removes the first element of an array, and returns the rest of the array.
* `middle`: returns the middle index of an array, or the middle two indices if array length is even.