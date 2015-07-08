//home.js

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/hbs/home.hbs'
], function ($, _, backbone, handlebars, homeView) {
    var HomeView = backbone.View.extend({
        el: $('#container'),
        render: function () {

            var compiledTemplate = handlebars.compile(homeView);
            this.$el.html(compiledTemplate);

            return this;
        }
    });

    return HomeView;

});