import React from "react";
import IconMenu from "material-ui/lib/menus/icon-menu";
import IconButton from "material-ui/lib/icon-button";
import MoreVertIcon from "material-ui/lib/svg-icons/navigation/more-vert";
import MenuItem from "material-ui/lib/menus/menu-item";
import Toolbar from "material-ui/lib/toolbar/toolbar";
import ToolbarGroup from "material-ui/lib/toolbar/toolbar-group";
import ToolbarSeparator from "material-ui/lib/toolbar/toolbar-separator";
import ToolbarComponent from "../toolbar/ToolbarComponent";
import * as styles from "./HeaderStyles";

export default class Header extends React.Component {

    render() {
        var navItems = this.props.navItems.map((n, index) => {
            var text, separator;
            if (index > 0)
                separator = <ToolbarSeparator style={styles.separatorStyle}>></ToolbarSeparator>;
            if (n.icon)
                text = <span><i className="material-icons md-24" style={styles.iconStyle}>{n.icon}</i>{n.label}</span>;
            else
                text = <span>{n.label}</span>;

            return (
                <ToolbarGroup key={index} float="left">
                    {separator}
                    <ToolbarComponent content={text} style={styles.titleStyle}
                                      onClick={this.props.onNavClick.bind(null, n)}/>
                </ToolbarGroup>
            );
        });

        return (
            <Toolbar style={styles.appBarStyle}>
                {navItems}
                <ToolbarGroup float="right">
                    <IconMenu iconButtonElement={<IconButton touch={true}><MoreVertIcon  /></IconButton>}>
                        <MenuItem primaryText="Add Item"/>
                        <MenuItem primaryText="Do something"/>
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        )
    }

}



