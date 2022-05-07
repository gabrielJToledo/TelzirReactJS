import { actionTypes } from "../constants/actionTypes";

export const changedOriginValue = (originValue) => {
    return {
        type: actionTypes.changedOriginValue,
        payload: originValue
    }
}

export const changedDestinyValue = (destinyValue) => {
    return {
        type: actionTypes.changedDestinyValue,
        payload: destinyValue
    }
}

export const changedCallTime = (callTime) => {
    return {
        type: actionTypes.changedCallTime,
        payload: callTime
    }
}

export const changedPlanFM = (planFM) => {
    return {
        type: actionTypes.changedPlanFM,
        payload: planFM
    }
}

export const changedValueWPlan = (valueWPlan) => {
    return {
        type: actionTypes.changedValueWPlan,
        payload: valueWPlan
    }
}

export const changedValueWithoutPlan = (valueWithoutPlan) => {
    return {
        type: actionTypes.changedValueWithoutPlan,
        payload: valueWithoutPlan
    }
}