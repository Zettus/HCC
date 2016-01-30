import request from 'superagent';
import configStore from '../stores/ConfigStore';

export default function GetItemStateAction(context, item, done) {

    let config = context.getStore(configStore);
    let url = `http://${config.getOpenHabUrl()}/rest/items/${item.name}/state`;

    request
        .get(url)
        .set('Accept', 'application/json')
        .end(function (err, res) {
            if (err || !res.ok) {
                console.log("Error! " + err);
            } else {
                context.dispatch('ITEM_LOADED', {item: item, value: res.text});
            }
        });

    done();

}

