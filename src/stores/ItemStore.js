import {BaseStore} from 'fluxible/addons';
import _ from 'lodash';
import {getTime} from '../helper/dateTime';
import {sprintf} from 'sprintf-js';

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
        item.state = item.format ? sprintf(item.format, payload.state) : payload.state;

        this.lastUpdate = getTime();
        this.emitChange();
    }

    handleConfigLoaded(payload) {
        this.itemsConfig = payload.items;
    }

    handleItemsLoaded(loadedItems) {
        this.itemsConfig.forEach(configItem => {
            let item = _.find(loadedItems, {'name': configItem.name});
            if (item) {
                _.assign(configItem, item);
                if (configItem.format)
                    configItem.state = sprintf(configItem.format, configItem.state);
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