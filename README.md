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
* `countLetters`: returns the first element of an array.
* `countOnly`: returns the first element of an array.
* `eqArrays`: compares two arrays.
* `eqObjects`: compares two objects.
* `findKey`: returns the first key for which the callback returns a truthy value.
* `findKeyByValue`: searches for a key on an object where its value matches a given value.
* `flatten`: flattens an array of arrays into a single-level array.
* `index`: lists of all the functions in an object.
* `letterPositions`: returns all the indices in the string where each character is found.
* `map`: creates a new array with the results of calling a provided function on every element in the calling array.
* `takeUntil`: returns a slice of the array with elements taken from the beginning.
* `without`: removes elements from an array.
