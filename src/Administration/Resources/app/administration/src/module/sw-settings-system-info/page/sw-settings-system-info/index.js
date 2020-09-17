import template from './sw-settings-system-info.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-settings-system-info', {
    template,

    inject: [
        'systemInfoService'
    ],

    mixins: [
        Mixin.getByName('notification')
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
            infoFiles: []
        };
    },

    computed: {
        columns() {
            return this.getColumns();
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.systemInfoService.getInfoList().then((response) => {
                this.infoFiles = response.path;
            });
        },
        getColumns() {
            return [
                {
                    property: 'name',
                    label: 'name',
                    inlineEdit: false,
                    allowResize: true,
                    rawData: true,
                    primary: true
                },
                {
                    property: 'existsAndWriteable',
                    label: 'existsAndWriteable',
                    inlineEdit: false,
                    allowResize: true,
                    rawData: true,
                    primary: false
                }
            ];
        }
    }
});
