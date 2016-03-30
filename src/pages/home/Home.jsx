import React from 'react';
import Boxes from '../../components/Box/Boxes';
import {connectToStores} from 'fluxible-addons-react';
import ItemStore from '../../stores/ItemStore';

import getItemsStateAction from '../../actions/GetItemsStateAction';
import loadConfigAction from '../../actions/loadConfigAction';
import connectWSAction from '../../actions/connectWSAction';

import executeMultiple from 'fluxible-action-utils/async/executeMultiple';

import '../../app.scss';

@connectToStores([ItemStore], (context) => ({
    items: context.getStore(ItemStore).getItems()
}))
export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.socket = $.atmosphere;
    }

    componentWillMount() {
        executeMultiple(context, {
            loadConfig: {action: loadConfigAction, isCritical: true},
            getItemsState: ['loadConfig', {action: getItemsStateAction, isCritical: true}],
            connectWebSocket: ['getItemsState', {action: connectWSAction}]
        });
    }

    render() {
        return (
            <div className="home">
                <Boxes items={this.props.items}/>
            </div>
        )
    }
}