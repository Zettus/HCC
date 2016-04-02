import React from "react";
import CardTitle from "material-ui/lib/card/card-title";
import * as styles from "../cards/CardStyles";
import _ from "lodash";
import {sprintf} from "sprintf-js";

const propTypes = {
    icon: React.PropTypes.string,
    hideState: React.PropTypes.bool
}

export class StateVisualizer extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.stateStyles = {
            info: styles.infoStyle,
            alert: styles.alertStyle,
            warning: styles.warningStyle,
            default: styles.defaultStyle
        }
    }

    getFormattedState(item) {
        return item.format ? sprintf(item.format, item.state) : item.state;
    }

    applyThresholdStyle(item, destStyle, state) {
        if (item.thresholds) {
            item.thresholds.some(t => {
                if (state >= t.threshold) {
                    _.assign(destStyle, this.stateStyles[t.style]);
                    return true;
                }
            });
        }
    }

    render() {
        var state, stateStyleResolved = {}, titleStyleResolved = {};
        _.assign(titleStyleResolved, styles.cardTitleStyle);
        _.assign(stateStyleResolved, styles.defaultStyle, styles.stateStyle);

        if (this.props.item) {
            let item = this.props.item;

            if (!this.props.hideState) {
                if (item.stateGroup) {
                    _.assign(titleStyleResolved, styles.cardTitleStyleSmall);
                    var stateGroup = item.stateGroup.map((stateItem, i) => {
                        var itemStyle = {};
                        _.assign(itemStyle, stateStyleResolved, styles.stateStyleSmall);
                        this.applyThresholdStyle(item, itemStyle, stateItem.state);
                        this.applyThresholdStyle(stateItem, itemStyle, stateItem.state);
                        console.log(itemStyle);
                        return (
                            <div key={i}
                                style={i < item.stateGroup.length -1 ? styles.cardTitleRowStyleSmall : styles.cardTitleLastRowStyleSmall}>
                                <span style={styles.cardTitleRowLabelSmall}>{stateItem.label}</span>
                                <span style={itemStyle}>{this.getFormattedState(stateItem)}</span>
                            </div>
                        );
                    });
                    state = <div style={{height: '100%', width: '100%'}}>{stateGroup}</div>;
                } else {
                    this.applyThresholdStyle(item, stateStyleResolved, item.state);
                    state = <span style={stateStyleResolved}>{this.getFormattedState(item)}</span>;
                }
            }

            if (this.props.icon) {
                this.applyThresholdStyle(item, stateStyleResolved, item.state);
                state = <i className="material-icons md-48" style={stateStyleResolved}>{this.props.icon}{state}</i>;
            }

            // TODO: feels wrong here... should be inside a ButtonStateVisualizer...
            if (item.type === 'SwitchItem' && item.state === 'ON')
                titleStyleResolved.backgroundColor = '#228855';
        }

        return (<CardTitle title={state} titleStyle={titleStyleResolved}/>);
    }
}

StateVisualizer.propTypes = propTypes;

export default StateVisualizer;