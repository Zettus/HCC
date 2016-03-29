import React from 'react';
import _ from 'lodash';

class ToolbarComponent extends React.Component {

    constructor() {
        super();
    }

    getStyles() {
        return {
            root: {
                paddingRight: this.context.muiTheme.rawTheme.spacing.desktopGutterLess,
                lineHeight: this.context.muiTheme.toolbar.height + 'px',
                fontSize: this.context.muiTheme.toolbar.titleFontSize + 'px',
                display: 'inline-block',
                position: 'relative'
            }
        };
    }

    render() {
        const {
            className,
            content,
            ...other,
        } = this.props;

        let styles = _.merge(this.getStyles().root, this.props.style);

        return (
            <span {...other} className={className} style={styles}>
                {content}
            </span>
        );
    }
}
;

ToolbarComponent.contextTypes = {
    muiTheme: React.PropTypes.object
}

export default ToolbarComponent;