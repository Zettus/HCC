import React from "react";
import {stateStyle, alertStyle, infoStyle, warningStyle, defaultStyle} from "../cards/CardStyles";
import _ from "lodash";
import {sprintf} from "sprintf-js";

const propTypes = {
    icon: React.PropTypes.string
}

export class StateVisualizer extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.styles = {
            info: infoStyle,
            alert: alertStyle,
            warning: warningStyle,
            default: defaultStyle
        }
    }

    render() {
        var state, stateStyleResolved = {};
        _.assign(stateStyleResolved, stateStyle, defaultStyle);

        if (this.props.item) {
            let item = this.props.item;
            
            if (item.thresholds) {
                item.thresholds.some(t => {
                    if (item.state >= t.threshold) {
                        _.assign(stateStyleResolved, this.styles[t.style]);
                        return true;
                    }
                });
            }

            if (this.props.icon)
                state = <i className="material-icons md-48">{this.props.icon}</i>;
            else
                state = item.format ? sprintf(item.format, item.state) : item.state;
        }

        return (
            <span style={stateStyleResolved}>
                {state}
            </span>);
    }
}

StateVisualizer.propTypes = propTypes;

export default StateVisualizer;