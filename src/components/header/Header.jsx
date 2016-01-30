import React from 'react';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

import Clock from '../clock/Clock';

const appBarStyle = {
    backgroundColor: '#333'
};

const toolbarTitleStyle = {
    color: '#aaa'
};

export default class Header extends React.Component {

    render() {

        let clock = <Clock />

        return (
            <Toolbar style={appBarStyle}>
                <ToolbarGroup float="left">
                    <ToolbarTitle text={clock} style={toolbarTitleStyle} />
                </ToolbarGroup>
                <ToolbarGroup float="right">
                    <IconMenu iconButtonElement={<IconButton touch={true}><MoreVertIcon  /></IconButton>}>
                        <MenuItem primaryText="Add Item" />
                        <MenuItem primaryText="Do something" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        )
    }

}



