import React from "react";
import Card from "material-ui/lib/card/card";
import CardHeader from "material-ui/lib/card/card-header";
import SwitchVisualizer from "../visualizer/SwitchItemVisualizer";
import {cardStyle, headerTitleStyle} from "./CardStyles";

const propTypes = {
    item: React.PropTypes.object.isRequired
}

export class SwitchCard extends React.Component {

    render() {
        let item = this.props.item;

        return (
            <Card style={cardStyle} zDepth={4}>
                <CardHeader title={item.label} titleStyle={headerTitleStyle}/>
                <SwitchVisualizer item={item} icon="power_settings_new"  />
            </Card>
        );
    }
}

SwitchCard.propTypes = propTypes;

export default SwitchCard;