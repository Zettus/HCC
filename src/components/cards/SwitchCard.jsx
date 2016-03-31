import React from "react";
import Card from "material-ui/lib/card/card";
import CardHeader from "material-ui/lib/card/card-header";
import CardTitle from "material-ui/lib/card/card-title";
import _ from "lodash";
import setItemStateAction from "../../actions/setItemStateAction";
import StateVisualizer from "../visualizer/StateVisualizer";
import {cardStyle, headerTitleStyle, cardTitleStyle} from "./CardStyles";

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
        let titleStyle = {};
        _.assign(titleStyle, cardTitleStyle);
        if (item.state === 'ON')
            titleStyle.backgroundColor = '#228855';

        return (
            <Card style={cardStyle} onClick={this.handleClick.bind(this, item)} zDepth={4}>
                <CardHeader title={item.label} titleStyle={headerTitleStyle}/>
                <CardTitle title={<StateVisualizer item={item} icon="power_settings_new" />} titleStyle={titleStyle}/>
            </Card>
        );
    }
}

SwitchCard.propTypes = propTypes;

export default SwitchCard;