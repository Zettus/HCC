import React from 'react';
import {connectToStores} from 'fluxible-addons-react';
import ItemStore from '../../stores/ItemStore';
import SensorCard from '../../components/cards/SensorCard';
import SwitchCard from '../../components/cards/SwitchCard';
import GroupCard from '../../components/cards/GroupCard';

import setItemStateAction from '../../actions/setItemStateAction';
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

    handleSwitchClick(item) {
        console.log(item);
        item.state = item.state === 'ON' ? 'OFF' : 'ON';
        context.executeAction(setItemStateAction, item);
    }

    componentWillMount() {
        executeMultiple(context, {
            loadConfig: {action: loadConfigAction, isCritical: true},
            getItemsState: ['loadConfig', {action: getItemsStateAction, isCritical: true}],
            connectWebSocket: ['getItemsState', {action: connectWSAction}]
        });
    }

    render() {

        if (this.props.items) {
             var items = this.props.items.map(item => {
                 switch (item.type) {
                     case 'Group':
                         return <GroupCard key={item.name} item={item} />;
                     case 'SwitchItem':
                         return <SwitchCard key={item.name} item={item} onSwitchClick={this.handleSwitchClick} />;
                     default:
                         return <SensorCard key={item.name} item={item} />;
                 }
            });
        }

        return (
            <div className="home">
                {items}
            </div>
        )
    }
}