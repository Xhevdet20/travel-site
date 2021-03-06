var gulp = require("gulp");
var watch = require("gulp-watch");


gulp.task("default", ()=> {
    console.log("Hooray - you created a gulp task!");
});

gulp.task("html", ()=> {
    console.log("Imagine something useful being done to your HTML!");
});

gulp.task("styles", ()=> {
   return gulp.src("./app/assets/styles/styles.css").pipe(gulp.dest("./app/temp/styles"));
})
 
gulp.task("watch", ()=> {
    watch("./app/index.html", ()=> {
        gulp.start("html");
    });

    watch("./app/assets/styles/**/*.css", ()=> {
        gulp.start("styles");
    });
    
    
});