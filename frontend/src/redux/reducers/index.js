import { combineReducers } from 'redux'
import { setDestinyDDD, setOriginDDD, setCallTime, setPlanFM, setValueWPlan, setValueWithoutPlan } from './callValueReducers'

const reducers = combineReducers({
    setDestinyDDD, setOriginDDD, setCallTime, setPlanFM, setValueWPlan, setValueWithoutPlan
})

export default reducers