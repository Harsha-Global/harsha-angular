var gulp = require("gulp");

gulp.task("Copy-dist-to-wwwroot", () => {
    return gulp.src("./dist/TaskManager/**/*")
        .pipe(gulp.dest("C:\\Angular\\MvcTaskManager\\MvcTaskManager\\wwwroot"));
});

gulp.task("default", () => {
    gulp.watch("./dist/TaskManager", gulp.series("Copy-dist-to-wwwroot"));
});