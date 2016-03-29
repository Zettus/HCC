import {BaseStore} from 'fluxible/addons';
import _ from 'lodash';
import {getTime} from '../helper/dateTime';

import {sprintf} from 'sprintf-js';

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

    getItemsConfig() {
        return this.itemsConfig;
    }

    getLastUpdate() {
        return this.lastUpdate;
    }

    handleItemUpdated(payload) {
        var filter = {'name': payload.name};

        if (!_.find(this.items, filter))
            this.items.push(payload);

        var item = _.find(this.items, filter);
        item.state = payload.state;

        this.lastUpdate = getTime();

        this.emitChange();
    }

    handleConfigLoaded(payload) {
        console.log(payload);
        this.itemsConfig = payload.items;
    }

    handleItemsLoaded(loadedItems) {
        this.items = [];
        let items = this.items;

        this.itemsConfig.forEach(configItem => {

            if (configItem.boxType == 'group')
                items.push(configItem);
            else {
                let item = _.find(loadedItems, {'name': configItem.name});
                if (item) {
                    $.extend(item, configItem);

                    if (configItem.format)
                        item.state = sprintf(configItem.format, item.state);

                    items.push(item);
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
}

export default ItemStore;