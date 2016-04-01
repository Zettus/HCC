import React from "react";
import Card from "material-ui/lib/card/card";
import CardHeader from "material-ui/lib/card/card-header";
import setItemStateAction from "../../actions/setItemStateAction";
import StateVisualizer from "../visualizer/StateVisualizer";
import {cardStyle, headerTitleStyle} from "./CardStyles";

const propTypes = {
    item: React.PropTypes.object.isRequired
}

export class SwitchCard extends React.Component {

    handleClick(item) {
        item.state = item.state === 'ON' ? 'OFF' : 'ON';
        context.executeAction(setItemStateAction, item);
    }

    render() {
        let item = this.props.item;

        return (
            <Card style={cardStyle} onClick={this.handleClick.bind(this, item)} zDepth={4}>
                <CardHeader title={item.label} titleStyle={headerTitleStyle}/>
                <StateVisualizer item={item} icon="power_settings_new" hideState={true} />
            </Card>
        );
    }
}

SwitchCard.propTypes = propTypes;

export default SwitchCard;