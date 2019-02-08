---
layout: default
title: fasttest.io
---

<style>
@media screen and (max-width: 800px) {
    #title {
        font-size: 3em !important;
    }
}
</style>

<h1 id="title" style="text-align: center; font-size: 6em">fasttest.io</h1>

<!-- <p style="background: red; color: white; font-weight: bold; font-size: 1.5em; text-align: center; padding: 1em;">
    fasttest is down at this moment
</p> -->

<hr>

## What it is

fasttest.io is your ticket to faster, easier to write and cheaper functional tests. They run in the server instead of your machine, so they're closer to the browser that runs them. They are run in series so you can use the result from the previous test in the next one.

Your tests are going to be really simple to write and also run extremely fast. You get to choose what region you want to run your tests from. (coming soon)

It was launched in January 26 of 2019, so it's pretty bleeding edge too. It's free for now and when we consider we have the critical mass of users, you'll be able to use it on a pay-what-you-use basis.

## Comparison to other selenium-based cloud testing providers

This is set apart from services like Saucelabs or BrowserStack because, as it runs on AWS Lambda, it's incredibly cheap. Additionally, the tests run in the same machine as the browser that's running them, so there's no extra hop between the test code and your server.

    We're going to add a benchmark here to show how tests are easier to write and faster too!

It's also a lot easier to point a fasttest test suite to any environments you might be running (staging, production) than other competitors, through the simple command line argument `--base-url`. Local environments aren't done yet but they will be very nice. You won't need to use something like sauceconnect to create a tunnel, we'll create the tunnel for you and connect you to the test without any intervention.

In the future, when we have more than one browser, it will be trivial to do matrix testing, where you test against many browsers, by way of new arguments in our CLI.

## Demo

Check out the demo below:

<iframe style="padding-bottom: 2em; height: auto; max-width: 100%; min-height: 300px" width="560" height="315" src="https://www.youtube.com/embed/kv7WJKZwmBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How to run

<!-- To use, first [*login* or *sign up* here](https://fasttest.auth.eu-west-1.amazoncognito.com/login?response_type=code&client_id=60uit0kj2hdie09n13v6fpiqd9&redirect_uri=https://938jss4tqd.execute-api.eu-west-1.amazonaws.com/prod/login/), then just run: -->

```bash
npm install fasttest -g
fasttest testfile.js --base-url http://example.com
```

The `--base-url` option is mandatory. It enables you to run tests against many environments (localhost support coming soon!). So to test your real production site you would put `http://yourprodapp.com`, and the same for other environments.

If you can't use `--base-url`, get a new version of fasttest. We're always fixing bugs and changing things!

<!-- You can also pass a `browser` option to set the browser to `jsdom`. The default is `chrome` -->

And testfile.js would have the following (check [here](https://cabbiejs.org/api/classes/activewindow/) for `wind` documentation)):

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

