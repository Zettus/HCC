import React from 'react';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import ItemStore from '../../stores/ItemStore';

const appBarStyle = {
    backgroundColor: 'rgba(48, 48, 48, 0.39)',
    position: 'fixed',
    bottom: 0,
    borderTop: 'solid 1px #444',
    height: '40px'
};

const toolbarTitleStyle = {
    color: '#888',
    fontSize: '16px',
    lineHeight: '40px'
};

@connectToStores([ItemStore], (context) => ({
    lastUpdate: context.getStore(ItemStore).getLastUpdate()
}))
export default class Footer extends React.Component {

    render() {

        let lastUpdateText = `Last Update: ${this.props.lastUpdate}`;
        
        return (
            <Toolbar style={appBarStyle}>
                <ToolbarGroup float="right">
                   <ToolbarTitle text={lastUpdateText} style={toolbarTitleStyle} />
                </ToolbarGroup>
            </Toolbar>
        )
    }

}



