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

        modalInstance.result.then(function (fieldConfig) {
            if (fieldConfig != 'Cancel'){
                $scope.formField.fieldId = fieldConfig.fieldId;
                $scope.formField.fieldLabel = fieldConfig.fieldLabel;
                $scope.formField.fieldType = fieldConfig.fieldType;
                $scope.formField.fieldPlaceholder = fieldConfig.fieldPlaceholder;
                $scope.formField.fieldOptions = fieldConfig.fieldOptions;
            }
        });
    };
});

app.controller('fieldConfigController', function ($scope, $modalInstance, fieldData) {

    $scope.fieldConfig = {
        fieldId: fieldData.fieldId,
        fieldLabel: fieldData.fieldLabel,
        fieldType: fieldData.fieldType,
        fieldPlaceholder: fieldData.fieldPlaceholder,
        fieldOptions: fieldData.fieldOptions
    };

    $scope.ok = function () {
        $modalInstance.close($scope.fieldConfig);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('Cancel');
    };
});