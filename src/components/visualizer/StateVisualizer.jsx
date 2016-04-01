import React from "react";
import CardTitle from "material-ui/lib/card/card-title";
import {stateStyle, cardTitleStyle, alertStyle, infoStyle, warningStyle, defaultStyle} from "../cards/CardStyles";
import _ from "lodash";
import {sprintf} from "sprintf-js";

const propTypes = {
    icon: React.PropTypes.string,
    hideState: React.PropTypes.bool
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
        var state, stateStyleResolved = {}, titleStyleResolved = {};
        _.assign(stateStyleResolved, stateStyle, defaultStyle);
        _.assign(titleStyleResolved, cardTitleStyle);

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
                var icon = <i className="material-icons md-48">{this.props.icon}</i>;

            if (!this.props.hideState)
                state = item.format ? sprintf(item.format, item.state) : item.state;

            if (item.type === 'SwitchItem' && item.state === 'ON')
                titleStyleResolved.backgroundColor = '#228855';
        }

        var title = <span style={stateStyleResolved}>{icon}{state}</span>;
        return (<CardTitle title={title} titleStyle={titleStyleResolved}/>);
    }
}

StateVisualizer.propTypes = propTypes;

export default StateVisualizer;