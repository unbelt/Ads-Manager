'use strict';

adsApp.factory('catalogDataService', function catalogDataService($resource) {

    var url = 'http://localhost:1337/api/';

    return {
        get: function (resource, id) {
            return $resource(url + resource + id);
        },
        save: function (resource, data) {
            return $resource(url + resource).save(data);
        },
        getAll: function (resource) {
            return $resource(url + resource);
        }
    }
});