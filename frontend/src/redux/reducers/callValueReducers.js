import { actionTypes } from "../constants/actionTypes"

const defaultState = {
    originDDD: '011',
    destinyDDD: '011',
    callTime: 0,
    planFM: 30,
    valueWPlan: 0,
    valueWithoutPlan: 0
}

export function setOriginDDD(state = defaultState, {type, payload}) {  
    switch(type){
        case actionTypes.changedOriginValue:
            return {
                ...state, originDDD: payload
            }
        default: 
            return state
    }
}

export function setDestinyDDD(state = defaultState, {type, payload}) {  
    switch(type){
        case actionTypes.changedDestinyValue:
            return {
                ...state, destinyDDD: payload
            }
        default: 
            return state
    }
}

export function setCallTime(state = defaultState, {type, payload}) {
    switch(type){
        case actionTypes.changedCallTime:
            return {
                ...state, callTime: payload
            }
        default:
            return state
    }
}

export function setPlanFM(state = defaultState, {type, payload}) {
    switch(type) {
        case actionTypes.changedPlanFM:
            return {
                ...state, planFM: payload
            }
        default:
            return state
    }
}

export function setValueWPlan(state = defaultState, {type, payload}) {
    switch(type){
        case actionTypes.changedValueWPlan:
            return {
                ...state, valueWPlan: payload
            }
        default: 
            return state
    }
}

export function setValueWithoutPlan(state = defaultState, {type, payload}) {
    switch(type){
        case actionTypes.changedValueWithoutPlan:
            return {
                ...state, valueWithoutPlan: payload
            }
        default:
            return state
    }
}