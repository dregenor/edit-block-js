var gulp = require("gulp");
//var babel = require("gulp-babel");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

gulp.task("clean", function(){
    return gulp.src('dist', {read: false}).pipe(clean());
});

gulp.task("default",['clean'], function () {

    var b =  browserify({
        insertGlobals: false,
        entries: "./src/index.js",
        debug: false,
        transform:[babelify.configure({
            "optional":["es7.classProperties"]
        })]
    });
    return b.bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(uglify({
            output: {
                ascii_only: true
                //beautify:true
            },
            compress: {
                sequences: true,  // join consecutive statemets with the “comma operator”
                properties: true,  // optimize property access: a["foo"] → a.foo
                dead_code: true,  // discard unreachable code
                drop_debugger: true,  // discard “debugger” statements
                unsafe: true, // some unsafe optimizations (see below)
                conditionals: true,  // optimize if-s and conditional expressions
                comparisons: true,  // optimize comparisons
                evaluate: true,  // evaluate constant expressions
                booleans: true,  // optimize boolean expressions
                loops: true,  // optimize loops
                unused: true,  // drop unused variables/functions
                hoist_funs: true,  // hoist function declarations
                hoist_vars: true, // hoist variable declarations
                if_return: true,  // optimize if-s followed by return/continue
                join_vars: true,  // join var declarations
                cascade: true,  // try to cascade `right` into `left` in sequences
                side_effects: true,  // drop side-effect-free statements
                warnings: true   // warn about potentially dangerous optimizations/code
            }
        }))
        .pipe(gulp.dest("dist"));
});