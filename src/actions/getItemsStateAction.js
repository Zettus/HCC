import request from 'superagent';
import configStore from '../stores/ConfigStore';

export default function GetItemsStateAction(context, payload, done) {

    let config = context.getStore(configStore);
    let url = `http://${config.getOpenHabUrl()}/rest/items/`;

    request
        .get(url)
        .accept('application/json')
        .end(function(err, res){
            if (err || !res.ok) {
                console.log("Error! " + err);
            } else {
                console.log(res.body.item);
                context.dispatch('ITEMS_LOADED', res.body.item);
            }
            done();
        });

}

