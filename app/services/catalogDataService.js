'use strict';

adsApp.factory('catalogDataService', function catalogDataService($resource, config) {
    return {
        get: function (resource, id) {
            return $resource(config.app.api + resource + id);
        },
        save: function (resource, data) {
            return $resource(config.app.api + resource).save(data);
        },
        getAll: function (resource) {
            return $resource(config.app.api + resource);
        }
    }
});