'use strict';

angular.module('adsApp').factory('adminCatalog', ['$resource', 'resource',
    function ($resource, resource) {
        return {
            getAds: function (adsParams) {
                return resource.use('ads').get(adsParams).$promise;
            }
        }
    }
]);