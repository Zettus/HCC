import request from 'superagent';

export default function loadConfigAction(context, payload, done) {

    let url = `config/config.json`;

    request
        .get(url)
        .accept('application/json')
        .end(function (err, res) {
            if (err || !res.ok) {
                console.log("Error! " + err);
            } else {
                context.dispatch('CONFIG_LOADED', res.body);
            }
            done();
        });

}