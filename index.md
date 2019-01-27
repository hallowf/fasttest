---
layout: default
title: fasttest.io
---

<div style="height:2em"></div>

<style>
@media screen and (max-width: 800px) {
    #title {
        font-size: 3em !important;
    }
}
</style>

<h1 id="title" style="text-align: center; font-size: 6em">fasttest.io</h1>

<hr>

fasttest.io is your ticket to faster, easier to write and cheaper functional tests. Run your tests in our JSDOM based browser. They are run in series so you can use the result from the previous test in the next one.

Your tests are going to be really simple to write and also run extremely fast. You get to choose what region you want to run your tests from. (coming soon)

It was launched in January 26 of 2019, so it's pretty bleeding edge too. It's free for now and when we consider we have the critical mass of users, you'll be able to use it on a pay-what-you-use basis.

## How to run

To use, first [*login* or *sign up* here](https://fasttest.auth.eu-west-1.amazoncognito.com/login?response_type=code&client_id=60uit0kj2hdie09n13v6fpiqd9&redirect_uri=https://938jss4tqd.execute-api.eu-west-1.amazonaws.com/prod/login/), then just run:

```bash
$ npm install fasttest -g
$ fasttest login --username <user> --password <pass>
$ fasttest testfile.js --baseUrl http://example.com
```

The --baseUrl option is mandatory. It enables you to run tests against many environments (localhost support coming soon!).

And testfile.js would have (check [here](https://cabbiejs.org/api/classes/activewindow/))):

```js
module.exports = {
  'Example Test': wind => {
    let heading = wind.getElement('h1').getText()
    return heading
  },
  'Example Test 2': wind => {
    // Add more tests below...
  }
}
```

Notice that you don't have to type "async". This is not an accident. fasttest.io turns your code into async code automatically, so you can focus on making good tests.

## Documentation

The documentation for fasttest is this website for now.

[Check the docs for `wind` here.](https://cabbiejs.org/api/classes/activewindow/)

<hr>

