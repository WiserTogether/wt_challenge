//slug.js

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/hbs/list.hbs',
    'models/condition',
    'models/conditions'
], function ($, _, Backbone, Handlebars, slugListView, Condition, ConditionCollection) {

    var SlugListView = Backbone.View.extend({
        el: $('#container'),
        render: function () {
            collection = new ConditionCollection();
            collection.fetch({
                success: $.proxy(function (conditions) {
                    var compiledTemplate = Handlebars.compile(slugListView);

                    var t = {conditions: conditions.toJSON()}

                    this.$el.append(compiledTemplate(t));
                }, this)
            });

            return this;

        }
    });

    return SlugListView;
});