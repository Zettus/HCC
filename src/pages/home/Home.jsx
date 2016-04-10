import React from "react";
import {connectToStores} from "fluxible-addons-react";
import ItemStore from "../../stores/ItemStore";
import SensorCard from "../../components/cards/SensorCard";
import SwitchCard from "../../components/cards/SwitchCard";
import GroupCard from "../../components/cards/GroupCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import executeMultiple from "fluxible-action-utils/async/executeMultiple";
import getItemsStateAction from "../../actions/GetItemsStateAction";
import loadConfigAction from "../../actions/loadConfigAction";
import connectWSAction from "../../actions/connectWSAction";
import navigateAction from "../../actions/navigateAction";
import "../../app.scss";

@connectToStores([ItemStore], (context) => ({
    navItems: context.getStore(ItemStore).getNavItems(),
    currentItem: context.getStore(ItemStore).getCurrentItem()
}))
export default class Home extends React.Component {

    componentWillMount() {
        executeMultiple(context, {
            loadConfig: {action: loadConfigAction, isCritical: true},
            getItemsState: ['loadConfig', {action: getItemsStateAction, isCritical: true}],
            connectWebSocket: ['getItemsState', {action: connectWSAction}]
        });
    }

    handleNavClick(item) {
        context.executeAction(navigateAction, {navItem: item, drillDown: false});
    }

    handleClick(item) {
        if (item.items) {
            context.executeAction(navigateAction, {navItem: item, drillDown: true});
        }
    }

    render() {

        let items = this.props.currentItem.items;
        
        if (items) {
            var renderedItems = items.map((item, i) => {
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
                <Header navItems={this.props.navItems} onNavClick={this.handleNavClick.bind(this)}/>
                <div className="home">
                    {renderedItems}
                </div>
                <Footer />
            </div>
        )
    }
}