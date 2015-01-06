angular.module('adsApp').directive('messenger', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        replace: true,
        template: '<div class="message"><h2>{{ message }}</h2></div>',

        link: function ($rootScope) {
            var messageBox = angular.element(document.querySelector('.message')),
                counter = 0.1;

            $rootScope.$watch('message', function (val) {
                if(val) {
                    update();
                }
            }, true);

            function update() {
                if (messageBox.css('opacity') < 1) {
                    messageBox.css('opacity', messageBox.css('opacity', counter += 0.03));
                    $timeout(update, 10);
                } else {
                    $timeout(function () {
                        (function hide() {
                            if(messageBox.css('opacity') > 0) {
                                messageBox.css('opacity', messageBox.css('opacity', counter -= 0.03));
                                $timeout(hide, 10);
                            }
                            else {
                                $rootScope.message = '';
                                messageBox.removeAttr('style');
                            }
                        }());
                    }, 3000);
                }
            }
        }
    }
}]);