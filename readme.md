bresenham-js
============

Copyright (c) 2016 Jonathan Faulch

About
-----

bresenham-js is an implementation of [Bresenham's line
algorithm](https://en.wikipedia.org/wiki/Bresenham's_line_algorithm) written in
JavaScript, which supports creation of lines in `n`-dimensional space.  This
library exports a single function, which takes a pair of arrays of length `n` as
input, and creates an array containing the points on the line as output.

Usage
-----

```javascript
var bresenham = require('bresenham-js');

var a = [1, 2, 3];
var b = [3, 5, 9];
var points = bresenham(a, b);

console.log(JSON.stringify(points));
// [[1,2,3],[1,2,4],[2,3,5],[2,3,6],[2,4,7],[3,4,8],[3,5,9]]
```

License
-------

bresenham-js is licensed under the MIT License.  See license.md.