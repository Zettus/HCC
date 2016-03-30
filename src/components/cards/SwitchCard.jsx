import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import _ from 'lodash';
import { cardStyle, headerTitleStyle, cardTitleStyle, stateStyle } from './CardStyles';

const propTypes = {
    onSwitchClick: React.PropTypes.func.isRequired,
    item: React.PropTypes.object.isRequired
}

export class SwitchCard extends React.Component {

    render() {
        let item = this.props.item;
        let state = <i className="material-icons md-48">power_settings_new</i>;
       
        let titleStyle = {};
        _.assign(titleStyle, cardTitleStyle);
        if (item.state === 'ON')
            titleStyle.backgroundColor = '#228855';

        return (
            <Card style={cardStyle} onClick={this.props.onSwitchClick.bind(this, item)} zDepth={4}>
                <CardHeader title={item.label} titleStyle={headerTitleStyle}/>
                <CardTitle title={<span style={stateStyle}>{state}</span>} titleStyle={titleStyle}/>
            </Card>
        );
    }
}

SwitchCard.propTypes = propTypes;

export default SwitchCard;