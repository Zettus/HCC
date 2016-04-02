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
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import "../../app.scss";

@connectToStores([ItemStore], (context) => ({
    items: context.getStore(ItemStore).getItems()
}))
export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {navItems: [{label: 'Home', icon:'home', items: {}}]};
    }

    componentWillMount() {
        executeMultiple(context, {
            loadConfig: {action: loadConfigAction, isCritical: true},
            getItemsState: ['loadConfig', {action: getItemsStateAction, isCritical: true}],
            connectWebSocket: ['getItemsState', {action: connectWSAction}]
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!this.state.items) {
            var navItems = this.state.navItems;
            navItems[0].items = nextProps.items;
            this.setState({items: nextProps.items, navItems: navItems});
        }
    }

    handleNavClick(e){
        var navItems = this.state.navItems;
        navItems.splice(navItems.indexOf(e) + 1, navItems.length);
        this.setState({items: e.items, navItems: navItems});
    }

    handleClick(item) {
        if (item.items) {
            var navItems = this.state.navItems;
            navItems.push({label: item.label, items: item.items});
            this.setState({items: item.items, navItems: navItems});
        }
    }

    render() {

        if (this.state.items) {
            var items = this.state.items.map((item, i) => {
                switch (item.type) {
                    case 'Group':
                        return <GroupCard key={i} item={item} onCardClick={this.handleClick.bind(this, item)}/>;
                    case 'SwitchItem':
                        return <SwitchCard key={i} item={item}/>;
                    default:
                        return <SensorCard key={i} item={item} onCardClick={this.handleClick.bind(this, item)}/>;
                }
            });
        }

        return (
            <div>
                <Header navItems={this.state.navItems} onNavClick={this.handleNavClick.bind(this)} />
                <div className="home">
                    {items}
                </div>
                <Footer />
            </div>
        )
    }
}