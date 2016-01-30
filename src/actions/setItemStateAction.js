import request from 'superagent';
import configStore from '../stores/ConfigStore';

export default function setItemStateAction(context, item, done) {

    let config = context.getStore(configStore);
    let url = `http://${config.getOpenHabUrl()}/rest/items/${item.name}`;

    request
        .post(url)
        .send(item.state)
        .set('Accept', 'text/plain')
        .set('Content-Type', 'text/plain')
        .end(function(err, res){
            if (err || !res.ok) {
                console.log("Error! " + err);
            } else {
                global.debugAction('State sent successfully')
            }
            done();
        });

}