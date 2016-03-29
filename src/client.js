import ReactDOM from 'react-dom';
import debug from 'debug';
import {createElementWithContext} from 'fluxible-addons-react';
import {navigateAction} from 'fluxible-router';
import app from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';

const debugClient = debug('openHABReact');
const dehydratedState = {};

window.React = ReactDOM; // For chrome dev tool support
global.debugAction = debug('openHABReact:Action');
global.debugStore = debug('openHABReact:Store');

// expose debug object to browser, so that it can be enabled/disabled from browser:
// https://github.com/visionmedia/debug#browser-support
window.fluxibleDebug = debug;
//localStorage.debug = '*,-Dispatchr:Action*,-navigateAction*,-Routr*,sockjs*'; //

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

debugClient('rehydrating app');

// pass in the dehydrated server state from server.js
app.rehydrate(dehydratedState, (err, context) => {
    if (err) {
        throw err;
    }

    context.executeAction(navigateAction, {url: location.pathname}).then(() => {

            window.context = context;
            const mountNode = document.getElementById('reactContent');

            debugClient('client -> React Rendering');
            ReactDOM.render(
                createElementWithContext(context),
                mountNode,
                () => debugClient('React Rendered')
            );
        }
    )
});
