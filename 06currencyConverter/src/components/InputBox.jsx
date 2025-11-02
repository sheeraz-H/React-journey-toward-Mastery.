import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`flex bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-md ${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-purple-200 text-sm mb-1 block"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          className="w-full bg-transparent text-white placeholder-purple-300 border-b border-purple-400/50
          focus:border-pink-500 focus:text-pink-300
          transition-all duration-300 outline-none py-1"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 text-right">
        <p className="text-purple-200 text-sm mb-1">Currency</p>

        <select
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="bg-white/10 backdrop-blur-lg text-white px-2 py-1 rounded-lg
          cursor-pointer border border-purple-400/50
          hover:bg-purple-500/20 focus:outline-none
          focus:border-pink-400 transition-all"
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency} className="text-black">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
