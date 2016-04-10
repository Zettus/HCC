const headerColor = '#888';
const stateColor = '#ccc';
const stateFontSize = 28;
const alertColor = '#f00';
const infoColor = '#0f0';
const warnColor = '#E2CA0C';

export const cardStyle = {
    height: 200,
    width: 200,
    margin: 15,
    borderRadius: 10,
    border: 'solid 1px #444',
    display: 'inline-block',
    cursor: 'pointer',
    userSelect: 'none'
};

export const headerTitleStyle = {
    fontSize: 20,
    textShadow: '2px 2px #111',
    color: headerColor
};

export const cardTitleStyle = {
    backgroundColor: '#333',
    textShadow: '2px 2px #111',
    border: 'solid 1px #444',
    borderRadius: 15,
    display: 'flex',
    height: 90,
    fontSize: stateFontSize,
    alignItems: 'center',
    textAlign: 'center',
    userSelect: 'none'
};

export const cardTitleStyleSmall = {fontSize: 20, lineHeight: '43px'};
export const cardTitleRowStyleSmall = {borderBottom: 'solid 1px #555', height: '50%'};

export const cardTitleRowLabelSmall = {fontSize: 14, textTransform: 'uppercase', float: 'left', marginLeft: '8px', color: headerColor};
export const cardTitleLastRowStyleSmall = {border: 'none'};
export const stateStyleSmall = {width: 'initial', float: 'right', marginRight: '8px'};

export const stateStyle = {width: '100%', textAlign: 'center'};

export const defaultStyle = {color: stateColor};
export const alertStyle = {color: alertColor};
export const infoStyle = {color: infoColor};
export const warningStyle = {color: warnColor};

export const editButtonStyle = {color: headerColor, padding: '3px', fontSize: 22};