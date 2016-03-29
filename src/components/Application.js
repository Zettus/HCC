import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';
import {connectToStores, provideContext} from 'fluxible-addons-react';
import {handleHistory} from 'fluxible-router';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';
import darkTheme from 'material-ui/lib/styles/raw-themes/dark-raw-theme';
import Header from './Header/Header';
import Footer from './Footer/Footer';

@ThemeDecorator(ThemeManager.getMuiTheme(darkTheme))
class Application extends React.Component {

    render() {
        var Handler = this.props.currentRoute.get('handler');
        return (
            <div>
                <Header />
                <Handler />
                <Footer />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
}

export default provideContext(handleHistory(connectToStores(
    Application,
    [ApplicationStore],
    function (context, props) {
        var appStore = context.getStore(ApplicationStore);
        return {
            pageTitle: appStore.getPageTitle()
        };
    }
)));
