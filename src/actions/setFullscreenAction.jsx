export default function (context, payload, done) {
    context.dispatch('SET_FULLSCREEN', payload.value);
    done();
}