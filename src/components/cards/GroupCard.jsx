import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import { cardStyle, headerTitleStyle } from './CardStyles';

const propTypes = {
    item: React.PropTypes.object.isRequired
}

export class GroupCard extends React.Component {

    render() {
        let item = this.props.item;
        return (
            <Card style={cardStyle} zDepth={4}>
                <CardHeader title={item.label} titleStyle={headerTitleStyle}/>
            </Card>
        );
    }
}

GroupCard.propTypes = propTypes;

export default GroupCard;