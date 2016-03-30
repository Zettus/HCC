import { BaseStore } from 'fluxible/addons';

const debug = require('debug')('HCC:ConfigStore');

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
        debug('config loaded');
        this.emitChange();
    }

}

ConfigStore.storeName = 'ConfigStore';
ConfigStore.handlers = {
    'CONFIG_LOADED': 'handleConfigLoaded'
};

export default ConfigStore;