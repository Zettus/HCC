import {BaseStore} from 'fluxible/addons';
import _ from 'lodash';
import {getTime} from '../helper/dateTime';

const debug = require('debug')('HCC:ItemStore');

class ItemStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.itemsConfig = [];
        this.lastUpdate = getTime();
        this.navItems = [{label: 'Home', icon: 'home', items: []}];
    }

    getLastUpdate() {
        return this.lastUpdate;
    }

    getAllItems(items) {
        var sensors = [];
        if (!items) items = this.itemsConfig;
        items.forEach(i => {
            sensors.push.apply(sensors, i.sensors);
            if (i.items)
                sensors.push.apply(sensors, this.getAllItems(i.items));
            if (i.name)
                sensors.push(i);
        })
        return sensors;
    }

    getNavItems() {
        return this.navItems;
    }

    getCurrentItem() {
        return this.navItems[this.navItems.length - 1];
    }
    
    handleConfigLoaded(payload) {
        this.itemsConfig = payload.items;
        this.navItems[0].items = payload.items
    }

    handleItemUpdated(updatedItem) {
        var items = this.getAllItems();
        items.forEach(item => {
            if (item.name === updatedItem.name) {
                item.state = updatedItem.state;
                debug("Item Updated", updatedItem.name);
            }
        });
        this.lastUpdate = getTime();
        this.emitChange();
    }

    handleItemsLoaded(loadedItems) {
        function updateItem(item) {
            let loadedItem = _.find(loadedItems, {'name': item.name});
            if (loadedItem)
                _.assign(item, loadedItem);
            if (item.thresholds) {
                item.thresholds = _.orderBy(item.thresholds, ['threshold'], ['desc']);
            }
            debug("item loaded", item);
        }

        function updateItems(items) {
            items.forEach(configItem => {
                if (configItem.stateGroup)
                    updateItems(configItem.stateGroup);
                if (configItem.name)
                    updateItem(configItem);
                if (configItem.items)
                    updateItems(configItem.items);
            });
        }
        updateItems(this.itemsConfig);
        this.emitChange();
    }

    handleNavigationUp(item) {
        this.navItems.splice(this.navItems.indexOf(item) + 1, this.navItems.length);
        this.emitChange();
    }

    handleNavigationDown(item) {
        this.navItems.push(item);
        this.emitChange();
    }
}

ItemStore.storeName = 'ItemStore';
ItemStore.handlers = {
    "ITEM_UPDATED": 'handleItemUpdated',
    'ITEMS_LOADED': 'handleItemsLoaded',
    'CONFIG_LOADED': 'handleConfigLoaded',
    'NAV_UP': 'handleNavigationUp',
    'NAV_DOWN': 'handleNavigationDown'
};

export default ItemStore;