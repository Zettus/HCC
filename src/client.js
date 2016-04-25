import ReactDOM from "react-dom";
import {createElementWithContext} from "fluxible-addons-react";
import {navigateAction} from "fluxible-router";
import app from "./app";
import injectTapEventPlugin from "react-tap-event-plugin";
import executeMultiple from "fluxible-action-utils/async/executeMultiple";
import getItemsStateAction from "../src/actions/GetItemsStateAction";
import loadConfigAction from "../src/actions/loadConfigAction";
import connectWSAction from "../src/actions/connectWSAction";

window.appDebug = require('debug');
var debug = window.appDebug('HCC:client');

const dehydratedState = {};

window.React = ReactDOM; // For chrome dev tool support
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

debug('rehydrating app');

// pass in the dehydrated server state from server.js
app.rehydrate(dehydratedState, (err, context) => {
    if (err) {
        throw err;
    }

    executeMultiple(context, {
        loadConfig: {action: loadConfigAction, isCritical: true},
        getItemsState: ['loadConfig', {action: getItemsStateAction, isCritical: true}],
        connectWebSocket: ['getItemsState', {action: connectWSAction}]
    });

    context.executeAction(navigateAction, {url: location.pathname}).then(() => {
            window.context = context;
            const mountNode = document.getElementById('reactContent');

            ReactDOM.render(
                createElementWithContext(context),
                mountNode,
                () => debug('React Rendered')
            );
        }
    )
});
