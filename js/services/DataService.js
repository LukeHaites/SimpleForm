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
                            fieldPlaceholder: '',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'Style',
                            fieldLabel: 'Style No',
                            fieldType: 'text',
                            fieldPlaceholder: 'from Tech Pack ...',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'description',
                            fieldLabel: 'Description',
                            fieldType: 'text',
                            fieldPlaceholder: 'from Tech Pack ...',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'color',
                            fieldLabel: 'Colour',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'remarks',
                            fieldLabel: 'Remarks',
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
                    blockSort: 2,
                    blockName: 'Key Dates',
                    blockFields: [
                        {
                            fieldId: 'fisreceiveddate',
                            fieldLabel: 'FIS Receive Date',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'techpackreceiveddate',
                            fieldLabel: 'Tech Pack Receive Date',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'samplerollduedate',
                            fieldLabel: 'Sample Roll Due Date',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'dvsampleduedate',
                            fieldLabel: 'DV Sample Due Date',
                            fieldType: 'text',
                            fieldPlaceholder: '',
                            fieldOptions: []
                        }
                    ]
                },
                {
                    blockSort: 3,
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
                            fieldType: 'number',
                            fieldPlaceholder: 'US$ ...',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'CMT',
                            fieldLabel: 'CMT Price',
                            fieldType: 'number',
                            fieldPlaceholder: 'US$ ...',
                            fieldOptions: []
                        },
                        {
                            fieldId: 'targetprice',
                            fieldLabel: 'Target Price',
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