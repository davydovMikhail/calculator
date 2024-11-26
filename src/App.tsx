import React, { useState } from 'react';

function App() {

  const [depo, setDepo] = useState(0);
  const [entryPrice, setEntryPrice] = useState(0);
  const [sl, setSl] = useState(0);
  const [risk, setRisk] = useState(0);
  const [leverage, setLeverage] = useState(0);


  function difference() {
    return Math.abs(sl - entryPrice)
  }

  function getEntryVolume() {
    let result = (depo * risk * entryPrice) / (100 * difference())
    return result / leverage;
  }

  function type() {
    let isLong = entryPrice > sl;
    if(isLong) {
      return "LONG"
    } else {
      return "SHORT"
    }
  }

  return (
    
    <div className="App">
      <div className='flex'>
        <div 
          className="input-box"
        >
          <label>Депозит($)</label>
          <input 
            type="number"
            value={depo}
            onChange={(e) => setDepo(Number(e.target.value))}    
          />
        </div>
      </div>
      <div className='flex'>
        <div 
          className="input-box"
        >
          <label>Цена Входа($)</label>
          <input 
            type="number"
            value={entryPrice}
            onChange={(e) => setEntryPrice(Number(e.target.value))}    
          />
        </div>
      </div>
      <div className='flex'>
        <div 
          className="input-box"
        >
          <label>Стоп-лосс($)</label>
          <input 
            type="number"
            value={sl}
            onChange={(e) => setSl(Number(e.target.value))}    
          />
        </div>
      </div>
      <div className='flex'>
        <div 
          className="input-box"
        >
          <label>Риск(%)</label>
          <input 
            type="number"
            value={risk}
            onChange={(e) => setRisk(Number(e.target.value))}    
          />
        </div>
      </div>
      <div className='flex'>
        <div 
          className="input-box"
        >
          <label>Плечо(X)</label>
          <input 
            type="number"
            value={leverage}
            onChange={(e) => setLeverage(Number(e.target.value))}    
          />
        </div>
      </div>    
      <div className='flex'>
        <div 
          className="input-box"
        >
          Объём входа: {getEntryVolume()} $ <br/>
          Тип сделки: {type()}
        </div>
      </div>    
    </div>
  );
}

export default App;
