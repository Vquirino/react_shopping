import { createStore, combineReducers } from 'redux'
import calculatorReducer from './Calculator/Calculator.reducer'
import ProductsReducer from './Products/Products.reducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: ProductsReducer
})

const store = createStore(rootReducer)

export default store