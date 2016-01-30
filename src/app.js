import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import ItemStore from './stores/ItemStore';
import ConfigStore from './stores/ConfigStore';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(ItemStore);
app.registerStore(ConfigStore);

module.exports = app;
