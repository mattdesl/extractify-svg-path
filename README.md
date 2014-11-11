# extractify-svg-path

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Browserify transform for [extract-svg-path](https://www.npmjs.org/package/extract-svg-path). Allows you to inline SVG paths from a file.

```
var parse = require('parse-svg-path')
var svg = require('extract-svg-path')(__dirname + '/shape.svg')
var path = parse(svg)
```

## Usage

[![NPM](https://nodei.co/npm/extractify-svg-path.png)](https://nodei.co/npm/extractify-svg-path/)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/extractify-svg-path/blob/master/LICENSE.md) for details.
