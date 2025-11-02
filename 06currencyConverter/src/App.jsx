import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
  className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-[#0f051e] via-[#1a103d] to-[#3e0b4c] text-white"
>
  <div className="w-full max-w-md mx-auto">
    <div className="p-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl
      shadow-[0_0_40px_rgba(200,0,255,0.25)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,0,255,0.5)]
      hover:scale-[1.02]">

      <h1 className="text-center text-3xl font-bold mb-6 tracking-wide">
        Currency Converter
      </h1>

      <form onSubmit={(e) => { e.preventDefault(); convert(); }} className="space-y-6">

        <InputBox
          label="From"
          amount={amount}
          currencyOption={options}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          selectCurrency={from}
          type={Number}
        />

        <div className="relative flex justify-center">
          <button
            type="button"
            onClick={swap}
            className="bg-gradient-to-r from-[#7928ca] to-[#ff0080] text-white px-4 py-1.5 rounded-lg
              shadow-[0_0_15px_rgba(255,0,128,0.6)]
              hover:shadow-[0_0_25px_rgba(255,0,128,0.9)]
              transition-all duration-300 active:scale-90"
          >
            Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOption={options}
          onCurrencyChange={setTo}
          selectCurrency={to}
          amountDisable
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl text-lg font-semibold
            bg-gradient-to-r from-[#ff0080] to-[#7928ca]
            shadow-[0_0_25px_rgba(255,0,128,0.6)]
            hover:shadow-[0_0_35px_rgba(255,0,128,1)]
            transition-all duration-300 hover:scale-[1.04] active:scale-95"
        >
          Convert {from.toUpperCase()} → {to.toUpperCase()}
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default App
