# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @codyhilborn/lotide`

**Require it:**

`const _ = require('@codyhilborn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Logs a 'pass/fail' message to the console based on a comparison between an expected output and an actual output.
* `assertArraysEqual(actual, expected)`: Logs a 'pass/fail' message to the console based on a comparison between an expected array and an actual array.
* `assertObjectsEqual(actual, expected)`: Logs a 'pass/fail' message to the console based on a comparison between an expected object and an actual object.
* `countLetters(string)`: Counts the instances of each letter in a string and stores the results in an object.
* `countOnly(allItems, itemsToCount)`: Counts only the specified instances of each element in an array.
* `eqArrays(array1, array2)`: Compares between two arrays to see if they are an exact equal match.
* `eqObjects(object1, object2)`: Compares between two objects to see if they are an exact equal match.
* `findKey(object, callback)`: Uses a callback function to find the first key that returns a truthy value.
* `findKeyByValue(object, value)`: Finds the key of an object by matching with a value passed into the function.
* `head(array)`: Returns only the first element of an array.
* `tail(array)`: Returns everything except the first element of an array.
* `letterPositions(sentence)`: Returns an object that contains the indicies of each letter from a sentence.
* `map(array, callback)`: Takes an array and a callback function as arguments, returns a new array with values altered based on the conditions specified in the callback function.
* `middle(array)`: Returns the middle element(s) of an array. If the length of the array is an odd number, it returns 1 middle element. If it's an even number, it returns the two middle elements.
* `takeUntil(array, callback)`: Loops through an array until the first element specified in the callback function is found, then returns every element from the 0th index until the specified element.
* `without(source, itemsToRemove)`: Accepts a source array and an array of items to remove, then returns a new array of only items not included in the itemsToRemove array.



