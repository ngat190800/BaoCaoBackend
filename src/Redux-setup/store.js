import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers/reducers';


const persistConfig = {
    key:'root',
    storage: storage,
    whitelist:['cart'],
}

const pReducer = persistReducer(persistConfig, reducers);

 const store = createStore(
    pReducer, 
    composeWithDevTools(),
    );
export const persistor = persistStore(store);
export default store;
