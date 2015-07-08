//conditions.js

define([
    'underscore',
    'backbone',
    'models/condition'
], function (_, Backbone, Condition) {

    var ConditionCollection = Backbone.Collection.extend({
        url: 'http://localhost:8000/conditions/',
        model: Condition
    });
    return ConditionCollection;
});