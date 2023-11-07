import cardItems from './reducer'
import {combineReducers} from 'redux'

const combine_reducer = combineReducers({
    cardItems,
})

export default combine_reducer;