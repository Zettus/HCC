import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import StateVisualizer from "../visualizer/StateVisualizer";
import { cardStyle, headerTitleStyle, cardTitleStyle } from './CardStyles';

const propTypes = {
    item: React.PropTypes.object.isRequired
}

export class SensorCard extends React.Component {

    render() {
        let item = this.props.item;

        return (
            <Card style={cardStyle} zDepth={4}>
                <CardHeader title={item.label} titleStyle={headerTitleStyle}/>
                <CardTitle title={<StateVisualizer item={item} />} titleStyle={cardTitleStyle}/>
            </Card>
        );
    }
}

SensorCard.propTypes = propTypes;

export default SensorCard;