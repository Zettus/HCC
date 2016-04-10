export default function navigate(context, payload, done) {

    let {navItem, drillDown} = payload;
    
    if (drillDown)
        context.dispatch('NAV_DOWN', navItem);
    else
        context.dispatch('NAV_UP', navItem);

    done();
}