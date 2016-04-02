import React from "react";
import {connectToStores} from "fluxible-addons-react";
import ItemStore from "../../stores/ItemStore";
import SensorCard from "../../components/cards/SensorCard";
import SwitchCard from "../../components/cards/SwitchCard";
import GroupCard from "../../components/cards/GroupCard";
import executeMultiple from "fluxible-action-utils/async/executeMultiple";
import getItemsStateAction from "../../actions/GetItemsStateAction";
import loadConfigAction from "../../actions/loadConfigAction";
import connectWSAction from "../../actions/connectWSAction";
import "../../app.scss";

@connectToStores([ItemStore], (context) => ({
    items: context.getStore(ItemStore).getItems()
}))
export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { items: [] };
    }

    componentWillMount() {
        executeMultiple(context, {
            loadConfig: {action: loadConfigAction, isCritical: true},
            getItemsState: ['loadConfig', {action: getItemsStateAction, isCritical: true}],
            connectWebSocket: ['getItemsState', {action: connectWSAction}]
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState( { items: nextProps.items });
    }

    handleClick(item) {
        if (item.items)
            this.setState( {items: item.items} );
    }

    render() {

        if (this.state.items) {
            var items = this.state.items.map((item, i) => {
                switch (item.type) {
                    case 'Group':
                        return <GroupCard key={i} item={item} onCardClick={this.handleClick.bind(this, item)} />;
                    case 'SwitchItem':
                        return <SwitchCard key={i} item={item} />;
                    default:
                        return <SensorCard key={i} item={item} onCardClick={this.handleClick.bind(this, item)} />;
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