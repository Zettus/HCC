import ItemStore from '../stores/ItemStore';
import configStore from '../stores/ConfigStore';

export default function connectWebsocketsAction(context, item, done) {

    let itemStore = context.getStore(ItemStore);
    let config = context.getStore(configStore);
    let url = `ws://${config.getOpenHabUrl()}/rest/items/`;
    let socket = $.atmosphere;

    itemStore.getItems().forEach(item => {

        var request = {
            url: url + item.name,
            maxRequest: 256,
            timeout: 59000,
            attachHeadersAsQueryString: true,
            executeCallbackBeforeReconnect: false,
            transport: 'websocket',
            fallbackTransport: 'long-polling',
            headers: {'Accept': 'application/json'}
        };

        request.onOpen = function (response) {
            global.debugAction('Socket opened (' + request.url + ')', 2);
        };

        request.onClose = function (response) {
            global.debugAction('Socket closed');
        };

        request.onError = function (response) {
            global.debugAction('Something went wrong');
        };

        request.onMessage = function (response) {
            if (response.status == 200) {
                var item = $.parseJSON(response.responseBody);
                global.debugAction("received state update: ", item);
                context.dispatch('ITEM_UPDATED', item);
            }
        }

        socket.subscribe(request);

    });



}