import React, { useState, useEffect, memo } from 'react'
import './CardCallValue.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { changedOriginValue, changedDestinyValue, changedCallTime, changedPlanFM, changedValueWPlan, changedValueWithoutPlan } from '../../redux/actions/callValueActions'

function CardCallValue() {
  const dispatch = useDispatch()
  const arrowImg = require('../../assets/images/arrow.png')
  const equalImg = require('../../assets/images/equal.png')

  // States
  const originValue = useSelector((state) => state.setOriginDDD.originDDD)

  const destinyValue = useSelector((state) => state.setDestinyDDD.destinyDDD)

  const callTime = useSelector((state) => state.setCallTime.callTime)

  const planFM = useSelector((state) => state.setPlanFM.planFM)

  const [ddds, setDdds] = useState([])

  const valueWPlan = useSelector((state) => state.setValueWPlan.valueWPlan)

  const valueWithoutPlan = useSelector((state) => state.setValueWithoutPlan.valueWithoutPlan)

  // Func to States
  const handleClickOrigin = (e) => {
    dispatch(changedOriginValue(e.currentTarget.value))
  }

  const handleClickDestiny = (e) => {
    dispatch(changedDestinyValue(e.currentTarget.value))
  }

  const handleClickCallTime = (e) => {
    dispatch(changedCallTime(e.currentTarget.value))
  }
  
  const handleClickPlan = (e) => {
    dispatch(changedPlanFM(e.currentTarget.value))
  }

  const currentDDDValue = ddds.filter(function(obj) {
    return obj.origin == originValue && obj.destiny == destinyValue
  }).map(function(obj){ return obj.valueMinute})

  useEffect(() => {
    async function fetchDDDs() {
      const {data} = await axios.get('http://localhost:3050').catch(err => console.log(err))
      setDdds(ddds => ddds.concat(data))
    }
    fetchDDDs()
  }, [ddds])

console.log(currentDDDValue[0])
  useEffect(() => {
    if (currentDDDValue[0] === undefined) {
          dispatch(changedValueWPlan('-'))
        } else if (callTime <= planFM) {
          dispatch(changedValueWPlan('R$ 0.00'))
        } else if(callTime === '') {
          dispatch(changedValueWPlan('R$' + parseFloat(0.00).toFixed(2)))
        } else {
          let remainingMin = callTime - planFM
          let minValue = remainingMin * parseFloat(currentDDDValue[0])
          let res = minValue + (0.1 * minValue)
          dispatch(changedValueWPlan('R$' + res.toFixed(2)))
        } 
  })

  useEffect(() => {
    if (currentDDDValue[0] === undefined) {
      dispatch(changedValueWithoutPlan('-'))
    } else {
      const minValue = callTime * parseFloat(currentDDDValue[0])
      dispatch(changedValueWithoutPlan('R$' + minValue.toFixed(2)))
    }
  })

  return (
    <div className="cardCallValue" data-testid="card-element">

      <div className="titleCard">
        <span className='title'>Calcule o valor da sua ligação com o plano FaleMais!</span>
      </div>

        <div className="calc">
          <div className='form'>
            

            <div className="DDD">

              <div className="destOrigin">
                <span>DDD Origem</span>
                <img className='arrowImg' src={arrowImg} alt="->" />
                <span>  DDD Destino</span>
              </div>

              <div className="comboboxDDD">
                <select name="ddds" id='dddO' onChange={handleClickOrigin}>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                </select>
                
                <select name="ddds" id='dddD' onChange={handleClickDestiny}>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                </select>
              </div>

            </div>

              <div className="callTime">
                <span>Digite o tempo da ligação em minutos:</span>
                <input type="number" min='0' value={callTime.callTime} onChange={handleClickCallTime}/>
              </div>

            <div className="plan">
                <span>Qual plano FaleMais:</span>
                <select name="cars" onChange={handleClickPlan}>
                  <option value="30">FaleMais30</option>
                  <option value="60">FaleMais60</option>
                  <option value="120">FaleMais120</option>
                </select>
            </div>

          </div>
        </div>

        <div className="equal">
          <img src={equalImg} alt="" />
        </div>

        <div className="res">
          <div className="resCard">
            <p>Resultado com </p>
            <p>o FaleMais!</p>
            <div className="cardRes"><span>{valueWPlan}</span></div>
          </div>

          <div className="resCard">
            <p>Resultado sem </p>
            <p>o FaleMais!</p>
            <div className="cardRes"><span>{valueWithoutPlan}</span></div>
          </div>
        </div>
    </div>
  )
}

export default memo(CardCallValue)