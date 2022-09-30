# Algorithms - Brian Holt

This is from the Front end masters course located [here](https://frontendmasters.com/courses/computer-science-v2)
These are the notes and the project that I created to follow this course. Feel free to fork this project and explore all the possibilities.

********************************

## branch1 BigO

Here we are just basically going to be discussing BigO notation

********************************

## branch 2

### BubbleSort

Before we do bubble sort, we are going to setup Jest.
We need to install Jest as a dev dependency first:

```js
npm install jest --save-dev
```

Now we need to add jest to our .eslintrc.json file so we dont get the error in our test files
that test and expect are undefined

```js
  "env":{
      "es6":true,
      "browser":true,
      "node":true,
      "jest": true
  },
```

There is one more thing that we need to to and that is add the prest to our .babelrc file

```js
  "presets": ["@babel/preset-env"]
```

Of course, if you don't have this plugin you will need to install it

```js
npm  install --save-dev @babel/preset-env
```

Now you should not get an error when running your tests that it doesn't like esm modules

A good video for setting up jest can be found [here](https://www.youtube.com/watch?v=ZnIv8u2-XrA)

About BubbleSort:
the biggest elements bubble to the last spot on each iteration of the array

By the way, you will probably never use bubble sort.

********************************

## branch 3

### Bubble sort for and array of objects

Now let's modify our bubble sort so we can actually use this in real life. How often are we actually trying to just sort numbers, right?
Here is what our data is going to look like:

```js
const employees = [
  {
    id: 1,
    firstName: 'chris',
    lastName: 'fowler',
    age: 27,
    job: 'cashier',
    level: 2,
  },
  {
    id: 2,
    firstName: 'stan',
    lastName: 'phillips',
    age: 22,
    job: 'cashier',
    level: 2,
  },
  {
    id: 3,
    firstName: 'marry',
    lastName: 'simmons',
    age: 35,
    job: 'manager',
    level: 5,
  },
  {
    id: 4,
    firstName: 'alysa',
    lastName: 'mitchell',
    age: 19,
    job: 'bagger',
    level: 1,
  },
  {
    id: 5,
    firstName: 'paul',
    lastName: 'jefferson',
    age: 24,
    job: 'receiver',
    level: 3,
  },
  {
    id: 6,
    firstName: 'paula',
    lastName: 'sanders',
    age: 25,
    job: 'assistant',
    level: 4,
  },
  {
    id: 7,
    firstName: 'brian',
    lastName: 'hold',
    age: 29,
    job: 'receiver',
    level: 3,
  },
  {
    id: 8,
    firstName: 'cheryl',
    lastName: 'bowers',
    age: 22,
    job: 'cashier',
    level: 2,
  },
  {
    id: 9,
    firstName: 'sandy',
    lastName: 'finkler',
    age: 26,
    job: 'cashier',
    level: 2,
  },
  {
    id: 10,
    firstName: 'mike',
    lastName: 'siffler',
    age: 45,
    job: 'owner',
    level: 6,
  },
];
```

we are going to be using this data for many things. By default, we are just going to be sorting by number, so let's just sort this by age first, and here is what that would look like:

```js
const sortedEmployeesByAge = [
  {
    id: 4,
    firstName: 'alysa',
    lastName: 'mitchell',
    age: 19,
    job: 'bagger',
    level: 1,
  },
  {
    id: 2,
    firstName: 'stan',
    lastName: 'phillips',
    age: 22,
    job: 'cashier',
    level: 2,
  },
  {
    id: 8,
    firstName: 'cheryl',
    lastName: 'bowers',
    age: 22,
    job: 'cashier',
    level: 2,
  },
  {
    id: 5,
    firstName: 'paul',
    lastName: 'jefferson',
    age: 24,
    job: 'receiver',
    level: 3,
  },
  {
    id: 6,
    firstName: 'paula',
    lastName: 'sanders',
    age: 25,
    job: 'assistant',
    level: 4,
  },
  {
    id: 9,
    firstName: 'sandy',
    lastName: 'finkler',
    age: 26,
    job: 'cashier',
    level: 2,
  },
  {
    id: 1,
    firstName: 'chris',
    lastName: 'fowler',
    age: 27,
    job: 'cashier',
    level: 2,
  },
  {
    id: 7,
    firstName: 'brian',
    lastName: 'hold',
    age: 29,
    job: 'receiver',
    level: 3,
  },
  {
    id: 3,
    firstName: 'marry',
    lastName: 'simmons',
    age: 35,
    job: 'manager',
    level: 5,
  },
  {
    id: 10,
    firstName: 'mike',
    lastName: 'siffler',
    age: 45,
    job: 'owner',
    level: 6,
  },
];
```

********************************

## branch 4

Now let try sorting using a string value. Our newly sorted data shoul look like this:

```js
const sortedEmployeesByFirstName = [
  {
    id: 4,
    firstName: 'alysa',
    lastName: 'mitchell',
    age: 19,
    job: 'bagger',
    level: 1,
  },
  {
    id: 7,
    firstName: 'brian',
    lastName: 'hold',
    age: 29,
    job: 'receiver',
    level: 3,
  },
  {
    id: 8,
    firstName: 'cheryl',
    lastName: 'bowers',
    age: 22,
    job: 'cashier',
    level: 2,
  },
  {
    id: 1,
    firstName: 'chris',
    lastName: 'fowler',
    age: 27,
    job: 'cashier',
    level: 2,
  },
  {
    id: 3,
    firstName: 'marry',
    lastName: 'simmons',
    age: 35,
    job: 'manager',
    level: 5,
  },
  {
    id: 10,
    firstName: 'mike',
    lastName: 'siffler',
    age: 45,
    job: 'owner',
    level: 6,
  },
  {
    id: 5,
    firstName: 'paul',
    lastName: 'jefferson',
    age: 24,
    job: 'receiver',
    level: 3,
  },
  {
    id: 6,
    firstName: 'paula',
    lastName: 'sanders',
    age: 25,
    job: 'assistant',
    level: 4,
  },
  {
    id: 9,
    firstName: 'sandy',
    lastName: 'finkler',
    age: 26,
    job: 'cashier',
    level: 2,
  },
  {
    id: 2,
    firstName: 'stan',
    lastName: 'phillips',
    age: 22,
    job: 'cashier',
    level: 2,
  },
];
```

Now let's test sorting by lastName. Our data should look like this:

```js
const sortedEmployeesByLastName = [
  {
    id: 8,
    firstName: 'cheryl',
    lastName: 'bowers',
    age: 22,
    job: 'cashier',
    level: 2,
  },
  {
    id: 9,
    firstName: 'sandy',
    lastName: 'finkler',
    age: 26,
    job: 'cashier',
    level: 2,
  },
  {
    id: 1,
    firstName: 'chris',
    lastName: 'fowler',
    age: 27,
    job: 'cashier',
    level: 2,
  },
  {
    id: 7,
    firstName: 'brian',
    lastName: 'hold',
    age: 29,
    job: 'receiver',
    level: 3,
  },
  {
    id: 5,
    firstName: 'paul',
    lastName: 'jefferson',
    age: 24,
    job: 'receiver',
    level: 3,
  },
  {
    id: 4,
    firstName: 'alysa',
    lastName: 'mitchell',
    age: 19,
    job: 'bagger',
    level: 1,
  },
  {
    id: 2,
    firstName: 'stan',
    lastName: 'phillips',
    age: 22,
    job: 'cashier',
    level: 2,
  },
  {
    id: 6,
    firstName: 'paula',
    lastName: 'sanders',
    age: 25,
    job: 'assistant',
    level: 4,
  },
  {
    id: 10,
    firstName: 'mike',
    lastName: 'siffler',
    age: 45,
    job: 'owner',
    level: 6,
  },
  {
    id: 3,
    firstName: 'marry',
    lastName: 'simmons',
    age: 35,
    job: 'manager',
    level: 5,
  },
];
```
