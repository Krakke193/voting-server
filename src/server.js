import Server from 'socket.io';

/**
 * 1. The client sends some action to the server (action).
 * 2. The server passes it to the Redux store.
 * 3. The store calls the reducer, which does execute the logic related to this action.
 * 4. The store updates the state depending on a value that is returned from the reducer.
 * 5. The store uses a specific listener subscribed by server.
 * 6. All connected clients – including the one that initialized the initial action – are receiving the new state.
 */

export default function startServer(store) {
    const io = new Server().attach(8090);

    store.subscribe(() => io.emit('state', store.getState().toJS()));

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store))
    });
};