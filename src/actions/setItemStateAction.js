import request from 'superagent';
import configStore from '../stores/ConfigStore';

const debug = require('debug')('HCC:setItemStateAction');

const debouncedFuncs = [];

export default function setItemStateAction(context, payload, done) {

    let {item, newState, debounced, debounceTimeout} = payload;
    let config = context.getStore(configStore);
    let url = `http://${config.getOpenHabUrl()}/rest/items/${item.name}`;

    function sendRequest(requestUrl, requestState) {
        request
            .post(requestUrl)
            .send(requestState)
            .accept('text/plain')
            .type('text/plain')
            .end(function (err, res) {
                if (err || !res.ok) {
                    console.log("Error! " + err);
                } else {
                    debug('State sent successfully', requestState)
                }
                done();
            });
    }

    if (!debouncedFuncs[item.name]) {
        debouncedFuncs[item.name] = _.debounce(function (url, state) {
            sendRequest(url, state);
        }, debounceTimeout ? debounceTimeout : 1000);
    }

    debouncedFuncs[item.name](url, newState);
    if (!debounced)
        debouncedFuncs[item.name].flush();

    item.state = newState;
    context.dispatch('ITEM_UPDATED', {item: item});

}

