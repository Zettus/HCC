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
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        executeMultiple(context, {
            loadConfig: {action: loadConfigAction, isCritical: true},
            getItemsState: ['loadConfig', {action: getItemsStateAction, isCritical: true}],
            connectWebSocket: ['getItemsState', {action: connectWSAction}]
        });
    }

    handleClick() {
        // TODO: navigation handling
    }

    render() {

        if (this.props.items) {
            var items = this.props.items.map((item, i) => {
                switch (item.type) {
                    case 'Group':
                        return <GroupCard key={i} item={item} onClick={this.handleClick} />;
                    case 'SwitchItem':
                        return <SwitchCard key={i} item={item} />;
                    default:
                        return <SensorCard key={i} item={item} />;
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