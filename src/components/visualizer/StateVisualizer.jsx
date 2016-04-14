import React from "react";
import CardTitle from "material-ui/lib/card/card-title";
import * as styles from "../cards/CardStyles";
import _ from "lodash";
import {sprintf} from "sprintf-js";
import setItemStateAction from "../../actions/setItemStateAction";

const propTypes = {
    icon: React.PropTypes.string
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
        return item.format && (item.state && item.state != 'Uninitialized') ? sprintf(item.format, item.state) : item.state;
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
    
    handleStateChange(increase) {
        var item = this.props.item, currentState = parseFloat(item.state);
        if (isNaN(currentState)) currentState = 0;
        var newState = increase ? currentState+1 : currentState-1;
        context.executeAction(setItemStateAction, {item: item, newState: newState, debounced: true, debounceTimeout: 2000});
    }

    render() {
        var state, stateStyleResolved = {}, titleStyleResolved = {};
        _.assign(titleStyleResolved, styles.cardTitleStyle);
        _.assign(stateStyleResolved, styles.defaultStyle, styles.stateStyle);

        if (this.props.item) {
            let item = this.props.item;

            if (item.stateGroup) {
                _.assign(titleStyleResolved, styles.cardTitleStyleSmall);
                var stateGroup = item.stateGroup.map((stateItem, i) => {
                    var itemStyle = {};
                    _.assign(itemStyle, stateStyleResolved, styles.stateStyleSmall);
                    this.applyThresholdStyle(item, itemStyle, stateItem.state);
                    this.applyThresholdStyle(stateItem, itemStyle, stateItem.state);
                    return (
                        <div key={i}
                             style={i < item.stateGroup.length -1 ? styles.cardTitleRowStyleSmall : styles.cardTitleLastRowStyleSmall}>
                            <span style={styles.cardTitleRowLabelSmall}>{stateItem.label}</span>
                            <span style={itemStyle}>{this.getFormattedState(stateItem)}</span>
                        </div>
                    );
                });
                state = <div style={{width: '100%', height: '100%'}}>{stateGroup}</div>;
            } else {
                this.applyThresholdStyle(item, stateStyleResolved, item.state);
                state = <span style={stateStyleResolved}>{this.getFormattedState(item)}</span>;
                if (item.editable) {
                    state = (<div style={styles.stateStyle}>
                        <i onClick={this.handleStateChange.bind(this, true)} className="material-icons md-16" style={styles.editButtonStyle}>add_circle_outline</i>
                        {state}
                        <i onClick={this.handleStateChange.bind(this, false)} className="material-icons md-16" style={styles.editButtonStyle}>remove_circle_outline</i>
                    </div>);
                }
            }
        }

        return (<CardTitle title={state} titleStyle={titleStyleResolved}/>);
    }
}

StateVisualizer.propTypes = propTypes;

export default StateVisualizer;