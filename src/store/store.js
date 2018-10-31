import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export default function configureStore() {
    if (window.devToolsExtension && process.env.NODE_ENV !== 'production') {
        return createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension()));
    } else {
        return createStore(reducer, compose(applyMiddleware(thunk)));
    }
}
