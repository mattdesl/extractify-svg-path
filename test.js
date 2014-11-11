var extractifySvgPath = require('./')
var test = require('tape').test

var vm = require('vm');
var path = require('path');
var concat = require('concat-stream');

test("browserify transform for extract-svg-path", function(t) {
    
    t.end()
})

test('statement', function (t) {
    t.plan(1);
    
    var b = bulk();
    b.pipe(concat(function (body) {
        vm.runInNewContext(body, { require: require, t: t });
    }));
    b.write("var bulk = require('bulk-require');\nbulk("
        + JSON.stringify(dir) + ', ' + JSON.stringify(args)
        + ');\nt.ok(true)'
    );
    b.end();
    
    function log (sections) {
        t.deepEqual(sections, expected);
    }
});