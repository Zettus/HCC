import React from "react";
import Card from "material-ui/lib/card/card";
import CardHeader from "material-ui/lib/card/card-header";
import StateVisualizer from "../visualizer/StateVisualizer";
import {cardStyle, headerTitleStyle} from "./CardStyles";

const propTypes = {
    item: React.PropTypes.object.isRequired,
    onCardClick: React.PropTypes.func
}

export class SensorCard extends React.Component {

    render() {
        let item = this.props.item;

        return (
            <Card style={cardStyle} zDepth={4} onClick={this.props.onCardClick}>
                <CardHeader title={item.label} titleStyle={headerTitleStyle}/>
                <StateVisualizer item={item}/>
            </Card>
        );
    }
}

SensorCard.propTypes = propTypes;

export default SensorCard;