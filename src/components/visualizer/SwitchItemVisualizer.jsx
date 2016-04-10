import React from "react";
import CardTitle from "material-ui/lib/card/card-title";
import * as styles from "../cards/CardStyles";
import _ from "lodash";
import setItemStateAction from "../../actions/setItemStateAction";

const propTypes = {
    item: React.PropTypes.object
}

export class SwitchItemVisualizer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    handleClick() {
        var item = this.props.item;
        var newState = item.state === 'ON' ? 'OFF' : 'ON';
        context.executeAction(setItemStateAction, {item: item, newState: newState, debounced: true, debounceTimeout: 500});
    }

    render() {
        var state, stateStyleResolved = {}, titleStyleResolved = {};
        _.assign(titleStyleResolved, styles.cardTitleStyle);
        _.assign(stateStyleResolved, styles.defaultStyle, styles.stateStyle);

        if (this.props.item) {
            let item = this.props.item;

            if (this.props.icon) {
                state = <i className="material-icons md-48" style={stateStyleResolved}>{this.props.icon}</i>;
            } else {
                state = <span style={stateStyleResolved}>{item.state}</span>;
            }

            if (item.state === 'ON')
                titleStyleResolved.backgroundColor = '#228855';
        }

        return (<CardTitle onClick={this.handleClick.bind(this)} title={state} titleStyle={titleStyleResolved}/>);
    }
}

SwitchItemVisualizer.propTypes = propTypes;
export default SwitchItemVisualizer;