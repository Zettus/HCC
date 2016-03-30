import {BaseStore} from 'fluxible/addons';
import _ from 'lodash';
import {getTime} from '../helper/dateTime';
import {sprintf} from 'sprintf-js';

const debug = require('debug')('HCC:ItemStore');

class ItemStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.items = [];
        this.itemsConfig = [];
        this.lastUpdate = getTime();
    }

    getItems() {
        return this.items;
    }

    getLastUpdate() {
        return this.lastUpdate;
    }

    handleItemUpdated(payload) {
        var filter = {'name': payload.name};
        var item = _.find(this.items, filter);
        if (!item){
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
    }

    handleItemsLoaded(loadedItems) {
        this.items = [];

        this.itemsConfig.forEach(configItem => {

            if (configItem.type == 'group')
                this.items.push(configItem);
            else {
                let item = _.find(loadedItems, {'name': configItem.name});
                if (item) {
                    $.extend(item, configItem);

                    if (configItem.format)
                        item.state = sprintf(configItem.format, item.state);

                    this.items.push(item);
                }
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