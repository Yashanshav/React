import { useState } from 'react'
import './App.css'
import {InputBox} from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amountFrom, setAmountFrom] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState('usd')
  const [amountTo, setAmountTo] = useState(0)
  const [currencyTo, setCurrencyTo] = useState('inr')

  const currencyOptions = useCurrencyInfo(currencyFrom)
  const options = Object.keys(currencyOptions)

  const swap = () => {
    setCurrencyTo(currencyFrom)
    setCurrencyFrom(currencyTo)
    setAmountFrom(amountTo)
    setAmountTo(amountFrom)
  }

  const convert = () => {
    setAmountTo(amountFrom * currencyOptions[currencyTo])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
              label='From' 
              amount={amountFrom} 
              selectedCurrency = {currencyFrom} 
              onAmountChange={(amount) => { setAmountFrom(amount)}}
              onCurrencyChange={(currency) => { setCurrencyFrom(currency)}}
              currencyOptions={options}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="To"
              amount = {amountTo}
              selectedCurrency={currencyTo}
              currencyOptions={options}
              onCurrencyChange={(currency) => { setCurrencyTo(currency)}}
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}</button>
          </form>
        </div>
    </div>
  )
}

export default App
