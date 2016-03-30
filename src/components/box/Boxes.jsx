import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';

import setItemStateAction from '../../actions/setItemStateAction';

import '../../app.scss';

const cardStyle = {
    height: 200,
    width: 200,
    margin: 15,
    borderRadius: 10,
    border: 'solid 1px #444',
    display: 'inline-block',
    cursor: 'pointer'
};

const headerTitleStyle = {
    fontSize: 20,
    textShadow: '2px 2px #111',
    color: '#888'
}

export default class Boxes extends React.Component {

    handleSwitchClick(item) {
        item.state = item.state === 'ON' ? 'OFF' : 'ON';
        context.executeAction(setItemStateAction, item);
    }

    render() {

        var items = this.props.items.map((item, i) => {
            var titleStyle = {
                color: '#CCC',
                backgroundColor: '#333',
                textShadow: '2px 2px #111',
                border: 'solid 1px #444',
                borderRadius: 15,
                display: 'flex',
                height: 90,
                fontSize: 30,
                alignItems: 'center',
                textAlign: 'center'
            }

            var stateStyle = {
                width: '100%'
            }

            let onclick, state;

            switch (item.type) {

                case 'switch':
                    onclick = this.handleSwitchClick.bind(this, item);
                    state = <i className="material-icons md-48">power_settings_new</i>;
                    if (item.state === 'ON') {
                        titleStyle.backgroundColor = '#228855';
                    }
                    break;

                default:
                    state = item.state;
            }

            return (
                <Card key={i} style={cardStyle} onClick={onclick} zDepth={4}>
                    <CardHeader title={item.label} titleStyle={headerTitleStyle}/>
                    <CardTitle title={<span style={stateStyle}>{state}</span>} titleStyle={titleStyle}/>
                </Card>
            );

        });

        return (<div>
            {items}
        </div>);
    }
}
