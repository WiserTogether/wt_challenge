//main.js

require.config({
    paths: {
        jquery: 'lib/jquery-min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        handlebars: 'lib/handlebars',
        templates: '../templates'
    }
});

require([
    'app',
], function (App) {
    App.initialize();
});
