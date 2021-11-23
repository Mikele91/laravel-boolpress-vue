const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js') //backoffice
    .js('resources/js/guest/front.js', 'public/js')//frontoffice
    .sass('resources/sass/front.scss', 'public/css')//frontoffice
    .sass('resources/sass/app.scss', 'public/css')//backoffice
    .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');