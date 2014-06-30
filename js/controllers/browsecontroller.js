/**
 * Created by Luke on 25/06/2014.
 */
'use strict';

angular.module ('catalogApp', ['ui.bootstrap']);

var browseCtrl = function($scope,$modal,$log){
    $scope.formLayout = {
        title: "New Product Quote",
        formType: "Quote",
        creator: "Luke Haites",
        formBlocks: [
            {
                blockSort: 0,
                blockName: 'Summary',
                blockFields: [
                    {
                        fieldId: 'Style',
                        fieldLabel: 'Style No',
                        fieldType: 'text',
                        fieldPlaceholder: 'Style number ...',
                        fieldOptions: []
                    },
                    {
                        fieldId: 'Factory',
                        fieldLabel: 'Factory',
                        fieldType: 'text',
                        fieldPlaceholder: 'Factory name ...',
                        fieldOptions: []
                    }
                ]
            },
            {
                blockSort: 1,
                blockName: 'Pricing',
                blockFields: [
                    {
                        fieldId: 'CostBase',
                        fieldLabel: 'Cost Basis',
                        fieldType: 'selection',
                        fieldOptions: [{optionValue: 'FOB'}, {optionValue:'CMT'}]
                    },
                    {
                        fieldId: 'FOB',
                        fieldLabel: 'FOB Price',
                        fieldType: 'text',
                        fieldPlaceholder: '',
                        fieldOptions: []
                    },
                    {
                        fieldId: 'CMT',
                        fieldLabel: 'CMT Price',
                        fieldType: 'text',
                        fieldPlaceholder: '',
                        fieldOptions: []
                    },
                    {
                        fieldId: 'Qty',
                        fieldLabel: 'Quantity',
                        fieldType: 'number',
                        fieldPlaceholder: '',
                        fieldOptions: []
                    }
                ]
            }
        ]
    }

    $scope.formData = {};

    $scope.newField = function(field){
        field.push({fieldId: '', fieldLabel: '', fieldType: '', fieldPlaceholder: '', fieldOptions: []})
    };

    $scope.editField = function(editData){
        var modalInstance = $modal.open({
            templateUrl: 'partials/editFieldModal.html',
            controller: ModalInstanceCtrl,
            resolve: {
                editData: function () {
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
};

var ModalInstanceCtrl = function ($scope, $modalInstance, editData) {

    $scope.fieldList = editData;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};