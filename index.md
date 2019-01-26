---
layout: default
title: Ghink
---

# fasttest.io

<hr>

Run your tests very fast by using our JSDOM-based driver.

Your tests are going to be really simple to write and also run extremely fast. You get to choose what region you want to run your tests from (coming soon)

To use, just run

```bash
$ npm install fasttest [-g if you need it]
$ fasttest login --username <your username> --password <your password>
$ fasttest testfile.js
```

And testfile.js would have:

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

<hr>

<small>&copy; 2019 <a href="https://frutal.pt">Fábio Santos</a></small>
