import config from '../configs/config';

export default function loadConfigAction(context, payload, done) {
    context.dispatch('CONFIG_LOADED', config);
    done();
}