import { BaseStore } from 'fluxible/addons';
import _ from 'lodash';
import { sprintf } from 'sprintf-js';

class ConfigStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.openHabURL = {};
    }

    getOpenHabUrl() {
        return this.openHabURL;
    }

    handleConfigLoaded(payload) {
        this.openHabURL = payload.openHabURL;
        global.debugStore('config loaded');
        this.emitChange();
    }

}

ConfigStore.storeName = 'ConfigStore';
ConfigStore.handlers = {
    'CONFIG_LOADED': 'handleConfigLoaded'
}

export default ConfigStore;