import { createStore, applyMiddleware, compose } from 'redux';
import notesApp from '../reducers/index';
import thunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(notesApp,
    composeEnhancers(applyMiddleware(thunk))
    )


export default store;