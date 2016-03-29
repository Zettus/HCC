import ItemStore from '../stores/ItemStore';
import configStore from '../stores/ConfigStore';

export default function connectWebsocketsAction(context, item, done) {

    let itemStore = context.getStore(ItemStore);
    let config = context.getStore(configStore);
    let url = `ws://${config.getOpenHabUrl()}/rest/items/`;
    let socket = atmosphere;
    let subSocket;

    itemStore.getItems().forEach(item => {

        var request = {
            url: url + item.name,
            // logLevel : 'debug',
            contentType : "application/json",
            transport: 'websocket',
            trackMessageLength : true,
            reconnectInterval : 5000,
            headers: {'Accept': 'application/json'}
        };

        request.onOpen = function (response) {
            console.log('[websocket] Socket opened (' + request.url + ')');
            request.uuid = response.request.uuid;
        };

        request.onClientTimeout = function(r) {
            console.log('[websocket] Client closed connection after timeout. Reconnecting in ' + request.reconnectInterval);
            setTimeout(function (){
                subSocket = socket.subscribe(request);
            }, request.reconnectInterval);
        }

        request.onReopen = function(response) {
            console.log('[websocket] Socket re-connected');
        };

        request.onClose = function (response) {
            console.log('[websocket] Socket closed');
        };

        request.onError = function (response) {
            console.log('[websocket] Error occured!');
        };

        request.onMessage = function (response) {
            if (response.status == 200) {
                var item = $.parseJSON(response.responseBody);
                console.log("[websocket] received state update: ", item);
                context.dispatch('ITEM_UPDATED', item);
            } else {
                console.log("[websocket] Error receiving message", response);
            }
        }

        // connect
        subSocket = socket.subscribe(request);

    });



}