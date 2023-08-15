# scss_starter

- Initial setup for a npm project for scss development

```bash
npm init -y
```

- Install gulp

```bash
npm install gulp --save-dev
```

- Install Dart Sass (Sass compiler)

```bash
npm install sass --save-dev
```

- Install `gulp-sass` glup plugin

```bash
npm install gulp-sass --save-dev
```

- Install `gulp-sourcemap` glup plugin for generating sourcemap files

```bash
npm install gulp-sourcemaps --save-dev
```

- Create file named `gulpfile.js`

    - Import gulp, gulp-sass and sass

    ```javascript
    const gulp = require('gulp');
    const dartSass = require('sass');
    const sass = require('gulp-sass')(dartSass);
    ```

    - Crate function named `buildStyles` for compiling scss files

    ```javascript
    function buildStyles() {
        return gulp.src('src/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist/css'));
    };
    ```

    - If you want to compile scss files to minified css files then use `sass({outputStyle: 'compressed'})` instead of `sass()` in `buildStyles` function

    ```javascript
    function buildStyles() {
        return gulp.src('src/scss/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('dist/css'));
    };
    ```

    - If you want to generate sourcemap files then use `sourcemaps.init()` and `sourcemaps.write()` in `buildStyles` function

    ```javascript
    function buildStyles() {
        return gulp.src('src/scss/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('dist/css'));
    };
    ```
    

    - Create a task named `sass` for `buildStyles` function

    ```javascript
    gulp.task('sass', buildStyles);
    ```

    - Create a task named `watch` for watching scss files

    ```javascript
    gulp.task('watch', function () {
        gulp.watch('src/scss/**/*.scss', buildStyles);
    });
    ```

- Create a folder named `src` and inside it create a folder named `scss`

- Place all scss files inside `src/scss` folder

- Add npm script for gulp task `scss` in `package.json` for compiling scss files

```json
"scripts": {
    "gulp": "gulp scss"
}
```

- Add npm script for gulp task `watch` in `package.json` for watching scss files

```json
"scripts": {
    "watch": "gulp watch"
}
```

- Run `npm run gulp` for compiling scss files

- Run `npm run watch` for watching scss files


- Reference Docs
    - [Gulp](https://gulpjs.com/)
    - [Dart Sass](https://sass-lang.com/dart-sass)
    - [gulp-sass](https://www.npmjs.com/package/gulp-sass)
    - [CSS Tricks](https://css-tricks.com/gulp-for-beginners/)


# Scss Language Docs

- [Scss](https://sass-lang.com/documentation/syntax)

- [Scss Project Structure](https://sass-guidelin.es/#the-7-1-pattern)

```bash
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```


# How to run this project

- Clone this project

```bash
git clone git@github.com:satyam-seth-learnings/scss_starter.git
```

- Change directory to `scss_starter`

```bash
cd scss_starter
```

- Install dependencies

```bash
npm ci
```

- Run `npm run gulp` for compiling scss files

- Open `index.html` in browser
