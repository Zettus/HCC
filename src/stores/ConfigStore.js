import { BaseStore } from 'fluxible/addons';

const debug = require('debug')('HCC:ConfigStore');

class ConfigStore extends BaseStore {

    constructor(dispatcher) {
        super(dispatcher);
        this.openHabURL = {};
        this.fullScreen = false;
    }

    getOpenHabUrl() {
        return this.openHabURL;
    }

    setFullScreen(value) {
        this.fullScreen = value;
        this.emitChange();
    }

    isFullscreen() {
        return this.fullScreen;
    }

    handleConfigLoaded(payload) {
        this.openHabURL = payload.openHabURL;
        debug('config loaded');
        this.emitChange();
    }

}

ConfigStore.storeName = 'ConfigStore';
ConfigStore.handlers = {
    'CONFIG_LOADED': 'handleConfigLoaded',
    'SET_FULLSCREEN': 'setFullScreen'
};

export default ConfigStore;