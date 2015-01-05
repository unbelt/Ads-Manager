'use strict';

app.factory('catalog', function catalog($resource, config) {
    return {
        getAd: function (resource, id) {
            return $resource(config.app.api + resource + id);
        },
        getAll: function (resource) {
            return $resource(config.app.api + resource);
        }
    }
});