/**
 * Created by Luke on 25/06/2014.
 */
'use strict';

app.controller('formDisplayController', function($scope, layoutData){
    $scope.formLayout = layoutData.formTemplate;

    $scope.formData = {};
});

app.controller('formDesignController', function($scope, $modal, $log, layoutData){
    $scope.formLayout = layoutData.formTemplate;

    $scope.newField = function(field){
        field.push({fieldId: '', fieldLabel: '', fieldType: '', fieldPlaceholder: '', fieldOptions: []})
    };

    $scope.editField = function(editData){
        var modalInstance = $modal.open({
            templateUrl: 'partials/editFieldModal.html',
            controller: 'fieldConfigController',
            resolve: {
                fieldData: function () {
                    return editData;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

app.controller('fieldConfigController', function ($scope, $modalInstance, $log, fieldData) {

    $scope.fieldConfig = {};
    $log.info('fc', $scope.fieldConfig, $scope.$id);
    $log.info('fd', fieldData.$id);
    $scope.fieldConfig = fieldData;
    $log.info('fc-fd', $scope.fieldConfig.$id);

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});