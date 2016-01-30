import request from 'superagent';
import configStore from '../stores/ConfigStore';

export default function GetItemsStateAction(context, payload, done) {

    let config = context.getStore(configStore);
    let url = `http://${config.getOpenHabUrl()}/rest/items/`;

    request
        .get(url)
        .set('Accept', 'application/json')
        .end(function(err, res){
            if (err || !res.ok) {
                console.log("Error! " + err);
            } else {
                context.dispatch('ITEMS_LOADED', res.body.item);
            }
            done();
        });

}

