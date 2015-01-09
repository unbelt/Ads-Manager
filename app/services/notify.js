'use strict';

angular.module('adsApp').factory('notify', ['$timeout', function ($timeout) {

    var messageBox = angular.element(document.querySelector('.message')),
        counter = 0.1;

    function update() {
        messageBox.css('display', 'block');

        if (messageBox.css('opacity') < 1) {
            messageBox.css('opacity', messageBox.css('opacity', counter += 0.03));
            $timeout(update, 10);
        } else {
            $timeout(function () {
                (function hide() {
                    if (messageBox.css('opacity') > 0) {
                        messageBox.css('opacity', messageBox.css('opacity', counter -= 0.03));
                        $timeout(hide, 10);
                    }
                    else {
                        messageBox.removeAttr('style');
                    }
                }());
            }, 3000);
        }
    }

    return {
        message: function (message) {
            messageBox.html(message);
            update();
        }
    }
}]);