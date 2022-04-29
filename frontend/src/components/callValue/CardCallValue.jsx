import React, { useState, useEffect } from 'react'
import './CardCallValue.css'
import axios from 'axios'

function CardCallValue() {
  const arrowImg = require('../../assets/images/arrow.png')
  const equalImg = require('../../assets/images/equal.png')

  // States
  const [originValue, setOriginValue] = useState({ddd: 11})

  const [destinyValue, setDestinyValue] = useState({ddd: 11})

  const [callTime, setCallTime] = useState({callTime: 0})

  const [planFM, setPlanFM] = useState({plan: 30})

  const [ddds, setDdds] = useState([])

  const [valueWPlan, setValueWPlan] = useState({valueWPlan: 0})

  const [valueWithoutPlan, setValueWithoutPlan] = useState({valueWithoutPlan: 0})

  // Func to States
  const handleClickOrigin = (e) => {
    setOriginValue({ddd: e.currentTarget.value})
  }

  const handleClickDestiny = (e) => {
    setDestinyValue({ddd: e.currentTarget.value})
  }

  const handleClickCallTime = (e) => {
    setCallTime({callTime: e.currentTarget.value})
  }
  
  const handleClickPlan = (e) => {
    setPlanFM({plan: e.currentTarget.value})
  }

  const currentDDDValue = ddds.filter(function(obj) {
    return obj.origin == originValue.ddd && obj.destiny == destinyValue.ddd
  }).map(function(obj){ return obj.valueMinute})

  useEffect(() => {
    async function fetchDDDs() {
      const {data} = await axios.get('http://localhost:3050').catch(err => console.log(err))
      setDdds(ddds => ddds.concat(data))
    }
    fetchDDDs()
  }, [ddds])


  useEffect(() => {
    if (currentDDDValue[0] === undefined) {
          setValueWPlan({valueWPlan: '-'})
        } else if (parseInt(callTime.callTime) <= parseInt(planFM.plan)) {
          setValueWPlan({valueWPlan: 'R$0.00'})
        } else if(callTime.callTime === '') {
          setValueWPlan({valueWPlan: 'R$' + parseFloat(0.00).toFixed(2)})
        } else {
          let remainingMin = callTime.callTime - planFM.plan
          let minValue = remainingMin * parseFloat(currentDDDValue[0])
          let res = minValue + (0.1 * minValue)
          setValueWPlan({valueWPlan: 'R$' + res.toFixed(2)})
        } 
  }, [valueWPlan])

  useEffect(() => {
    if (currentDDDValue[0] === undefined) {
      setValueWithoutPlan({valueWithoutPlan: '-'})
    } else {
      const minValue = callTime.callTime * parseFloat(currentDDDValue[0])
      setValueWithoutPlan({valueWithoutPlan: 'R$' + minValue.toFixed(2)})
    }
  }, [valueWithoutPlan])

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
            <div className="cardRes"><span>{valueWPlan.valueWPlan}</span></div>
          </div>

          <div className="resCard">
            <p>Resultado sem </p>
            <p>o FaleMais!</p>
            <div className="cardRes"><span>{valueWithoutPlan.valueWithoutPlan}</span></div>
          </div>
        </div>
    </div>
  )
}

export default CardCallValue