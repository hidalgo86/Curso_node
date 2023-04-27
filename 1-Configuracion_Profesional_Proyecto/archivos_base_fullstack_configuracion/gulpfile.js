var gulp = require("gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    ts = require("gulp-typescript"),
    uglify = require("gulp-uglify"),
    del = require("del"),
    browserSync = require("browser-sync").create()

;

var srcPaths = {
    html: "src/html/",
    scss: "src/scss/",
    ts: "src/ts/",
}

var distPaths = {
    html: "dist/html/",
    css: "dist/css/",
    js: "dist/js/",
}

gulp.task('clean', function(cb) {
    del([ distPaths.html+'*.html', distPaths.js+'*.js', distPaths.css+'*.css'], cb);
});


gulp.task("html", function(){
    return gulp.src(srcPaths.html+"*.html")
        .pipe(gulp.dest(distPaths.html))
        .pipe(browserSync.stream());
});

gulp.task("css", function(){
    return gulp.src(srcPaths.scss+"*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPaths.css))
        .pipe(browserSync.stream());
});


var tsProject = ts.createProject("tsconfig.json");
gulp.task("ts", function(){
    return gulp.src(srcPaths.ts+"*.ts")
        .pipe(tsProject())
        .pipe(sourcemaps.init())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPaths.js))
        .pipe(browserSync.stream());
});


gulp.task("serve", ['html', 'css', 'ts'], function(){
    browserSync.init({
        logLevel: "info",
        browser: ["Chrome"],
        proxy: "localhost:80",
        startPath: "/miapp/dist/html"
    });

    gulp.watch(srcPaths.html+"*.html", ["html"]);
    gulp.watch(srcPaths.scss+"*.scss", ["css"]);
    gulp.watch(srcPaths.ts+"*.ts", ["ts"]);

});


gulp.task("default", ['clean', 'serve'], function(){});