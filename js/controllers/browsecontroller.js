/**
 * Created by Luke on 25/06/2014.
 */
'use strict';

app.controller('formDisplayController', function($scope, layoutData){
    $scope.formLayout = layoutData.formTemplate;

    $scope.formData = {};
});

app.controller('formDesignController', function($scope, layoutData){
    $scope.formLayout = layoutData.formTemplate;

    $scope.newField = function(field){
        field.push({fieldId: '', fieldLabel: '', fieldType: '', fieldPlaceholder: '', fieldOptions: []})
    };
});

app.controller('fieldEditController', function($scope, $modal){
    $scope.editField = function(){
        var modalInstance = $modal.open({
            templateUrl: 'partials/editFieldModal.html',
            controller: 'fieldConfigController',
            resolve: {
                fieldData: function () {
                    return $scope.formField;
                }
            }
        });
    };
});

app.controller('fieldConfigController', function ($scope, $modalInstance, fieldData) {

    $scope.fieldConfig = fieldData;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
});