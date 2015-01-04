'use strict';

app.factory('userCatalog', ['$resource', 'config', 'authorization',
    function ($resource, config, authorization) {

        var adsApi = config.api + 'user/ads';

        return {
            getUserCatalog: function () {
                return $resource(adsApi,  { authToken:  authorization.getAuthorizationHeader()})
            }
        }
    }
]);