//router.js

define([
    'jquery',
    'underscore',
    'backbone',
    'views/slug',
    'views//home'
], function ($, _, Backbone, SlugView, HomeView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'homeView',
            'slug': 'showList'
        }
    });

    var initialize = function () {
        var router = new Router();

        router.on('route:homeView', function () {
            var homeview = new HomeView();
            homeview.render();
        });

        router.on('route:showList', function () {
            var slugview = new SlugView();
            slugview.render();
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
