import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userStore from './getToken/reducer'

const rootReducer = combineReducers({
  token: userStore,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
}

export default persistReducer(persistConfig, rootReducer)
