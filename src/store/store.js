import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import calculatorReducer from './Calculator/Calculator.reducer'
import ProductsReducer from './Products/Products.reducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: ProductsReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)