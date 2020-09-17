import './page/sw-settings-system-info';

const { Module } = Shopware;

Module.register('sw-settings-system-info', {
    type: 'core',
    name: 'settings-system-info',
    title: 'test123',
    description: 'test123',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#9AA8B5',
    icon: 'default-action-settings',
    favicon: 'icon-module-settings.png',
    entity: 'store_settings',

    routes: {
        index: {
            component: 'sw-settings-system-info',
            path: 'index',
            meta: {
                parentPath: 'sw.settings.index'
            }
        }
    },

    settingsItem: {
        group: 'shop',
        to: 'sw.settings.system.info.index',
        icon: 'default-object-address'
    }
});
