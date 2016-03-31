import {BaseStore} from 'fluxible/addons';
import _ from 'lodash';
import {getTime} from '../helper/dateTime';

const debug = require('debug')('HCC:ItemStore');

class ItemStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.itemsConfig = [];
        this.lastUpdate = getTime();
    }

    getItems() {
        return this.itemsConfig;
    }

    getLastUpdate() {
        return this.lastUpdate;
    }

    handleItemUpdated(payload) {
        let filter = {'name': payload.name};
        let item = _.find(this.itemsConfig, filter);
        if (!item) {
            debug(`Received update for unknown item ${payload.name} - ignoring`);
            return;
        }
        debug("Item Updated", payload.name);
        item.state = payload.state;

        this.lastUpdate = getTime();
        this.emitChange();
    }

    handleConfigLoaded(payload) {
        this.itemsConfig = payload.items;
        this.itemsConfig.forEach(item => {
           if (item.thresholds) {
               item.thresholds = _.orderBy(item.thresholds, ['threshold'], ['desc']);
               console.log(item.thresholds);
           }
        });
    }

    handleItemsLoaded(loadedItems) {
        this.itemsConfig.forEach(configItem => {
            let item = _.find(loadedItems, {'name': configItem.name});
            if (item) {
                _.assign(configItem, item);
                debug("item loaded", configItem);
            }
        });
        this.emitChange();
    }
}

ItemStore.storeName = 'ItemStore';
ItemStore.handlers = {
    'ITEM_UPDATED': 'handleItemUpdated',
    'ITEMS_LOADED': 'handleItemsLoaded',
    'CONFIG_LOADED': 'handleConfigLoaded'
};

export default ItemStore;