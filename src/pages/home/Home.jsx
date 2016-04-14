import React from "react";
import {connectToStores} from "fluxible-addons-react";
import ItemStore from "../../stores/ItemStore";
import ConfigStore from "../../stores/ConfigStore";
import SensorCard from "../../components/cards/SensorCard";
import SwitchCard from "../../components/cards/SwitchCard";
import GroupCard from "../../components/cards/GroupCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import navigateAction from "../../actions/navigateAction";
import setFullscreenAction from "../../actions/setFullscreenAction";
import {enterFullscreen, exitFullscreen} from "../../helper/fullscreen";
import "../../app.scss";

@connectToStores([ItemStore, ConfigStore], (context) => ({
    navItems: context.getStore(ItemStore).getNavItems(),
    currentItem: context.getStore(ItemStore).getCurrentItem(),
    isFullscreen: context.getStore(ConfigStore).isFullscreen()
}))
export default class Home extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.isFullscreen)
            enterFullscreen(document.documentElement);
        else
            exitFullscreen();
    }

    handleNavClick(item) {
        context.executeAction(navigateAction, {navItem: item, drillDown: false});
    }

    handleClick(item) {
        if (item.items) {
            context.executeAction(navigateAction, {navItem: item, drillDown: true});
        }
    }

    handleFullscreen() {
        context.executeAction(setFullscreenAction, {value: !this.props.isFullscreen});
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
                <Header navItems={this.props.navItems} onNavClick={this.handleNavClick.bind(this)}
                        onFullscreen={this.handleFullscreen.bind(this)}/>
                <div className="home">
                    {renderedItems}
                </div>
                <Footer />
            </div>
        )
    }
}