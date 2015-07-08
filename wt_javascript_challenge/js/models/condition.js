//models.js

define([
    'underscore',
    'backbone'
], function () {

    var Condition = Backbone.Model.extend({
        urlRoot: 'http://localhost:8000/conditions/',
        defaults: {name: 'notset'}

    });
    return Condition;
});

