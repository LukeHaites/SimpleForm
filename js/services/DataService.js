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
                    blockName: 'Quote Header',
                    blockFields: [
                        {
                            fieldId: 'brand',
                            fieldLabel: 'Brand',
                            fieldType: 'selection',
                            fieldPlaceholder: '',
                            fieldOptions: [{optionValue: 'JAG'}, {optionValue: 'SABA'}, {optionValue: 'SPORTSCRAFT'}]
                        },
                        {
                            fieldId: 'deliverymonth',
                            fieldLabel: 'Delivery Month',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'Factory',
                            fieldLabel: 'Factory',
                            fieldType: 'text',
                            fieldPlaceholder: 'Factory name ...',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'Style',
                            fieldLabel: 'Style No',
                            fieldType: 'text',
                            fieldPlaceholder: 'Style number from Tech Pack ...',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'description',
                            fieldLabel: 'Description',
                            fieldType: 'text',
                            fieldPlaceholder: 'Style description from Tech Pack ...',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'color',
                            fieldLabel: 'Colour',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        }
                    ]
                },
                {
                    blockSort: 1,
                    blockName: 'Fabric Details',
                    blockFields: [
                        {
                            fieldId: 'fabricquality',
                            fieldLabel: 'Fabric Quality',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'fabricmill',
                            fieldLabel: 'Fabric Mill',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'fabriccharge',
                            fieldLabel: 'Fabric Charge',
                            fieldType: 'number',
                            fieldPlaceholder: '',
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