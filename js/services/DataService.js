/**
 * Created by Luke on 1/07/2014.
 */

app.factory('layoutData', function() {
    return {
        formTemplate:  {
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
    }
});