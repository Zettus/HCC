import React from 'react';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarComponent from '../toolbar/ToolbarComponent';

import Clock from '../clock/Clock';

const appBarStyle = {
    backgroundColor: 'rgba(48, 48, 48, 0.39)',
    position: 'fixed',
    top: 0,
    zIndex: 100,
    borderBottom: 'solid 1px #444'
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
                    <ToolbarComponent content={clock} style={toolbarTitleStyle}/>
                </ToolbarGroup>
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



