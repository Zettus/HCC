import configStore from '../stores/ConfigStore';
import $ from 'jquery';
import atmosphere from "../../assets/scripts/atmosphere";

const debug = require('debug')('HCC:connectWSAction');

export default function (context) {

    let config = context.getStore(configStore);
    
    // seems that ws for groups are currently not supported by openHAB (1.8)
    // therefore a subscription for all items is needed in any case 
    let url = `ws://${config.getOpenHabUrl()}/rest/items`;
    let socket = atmosphere;
    let subSocket;

    var request = {
        url: url,
        logLevel: 'info',
        contentType: "application/json",
        transport: 'websocket',
        fallbackTransport: 'long-polling',
        timeout: 300000,
        reconnectInterval: 10000,
        maxReconnectOnClose: 500,
        enableProtocol: true,
        headers: {'Accept': 'application/json', 'type': 'json'}
    };

    request.onOpen = function (response) {
        debug('Socket opened (' + request.url + ')');
        request.uuid = response.request.uuid;
    };

    request.onClientTimeout = function () {
        debug('Client closed connection after timeout. Reconnecting in ' + request.reconnectInterval);
        setTimeout(function () {
            subSocket = socket.subscribe(request);
        }, request.reconnectInterval);
    };

    request.onReopen = function () {
        debug('Socket re-connected');
    };

    request.onClose = function () {
        debug('Socket closed');
    };

    request.onError = function () {
        debug('Error occured!');
    };

    request.onMessage = function (response) {
        if (response.status == 200) {
            var item = $.parseJSON(response.responseBody);
            debug("received state update: ", item);
            context.dispatch('ITEM_UPDATED', item);
        } else {
            debug("Error receiving message", response);
        }
    };

    // connect
    subSocket = socket.subscribe(request);
}