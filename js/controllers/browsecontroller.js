/**
 * Created by Luke on 25/06/2014.
 */

'use strict';

catalogApp.controller('browseCtrl',
    function browseCtrl($scope){
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
                            fieldPlaceholder: 'Style number ...'
                        },
                        {
                            fieldId: 'Factory',
                            fieldLabel: 'Factory',
                            fieldType: 'text',
                            fieldPlaceholder: 'Factory name ...'
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
                            fieldPlaceholder: ''
                        },
                        {
                            fieldId: 'CMT',
                            fieldLabel: 'CMT Price',
                            fieldType: 'text',
                            fieldPlaceholder: ''
                        },
                        {
                            fieldId: 'Qty',
                            fieldLabel: 'Quantity',
                            fieldType: 'number',
                            fieldPlaceholder: ''
                        }
                    ]
                }
            ]
        }

        $scope.formData = {};
    }
);