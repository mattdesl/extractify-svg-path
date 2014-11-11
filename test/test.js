var extractify = require('../')
var browserify = require('browserify')
var vm = require('vm')
var test = require('tape').test
var fs = require('fs')
var expected = fs.readFileSync(__dirname+'/expected.txt', 'utf8')

test("browserify transform for extract-svg-path", function(t) {
    t.plan(1)

    browserify()
        .add(__dirname+'/script.js')
        .transform(extractify)
        .bundle(function (err, src) {
            if (err) 
                t.fail(err)

            vm.runInNewContext(src, {
                console: { log: log }
            })
        });

    function log(content) {
        t.equal(content, expected)
    }
})