import { useState, useEffect } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';

function App() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  useEffect(() => {
    convert();
  }, [amount, to, from]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-700 text-white">
      <form
        className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        {/* From InputBox */}
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
        />

        {/* Swap Button */}
        <div className="flex justify-center my-4">
          <button
            type="button"
            className="text-xl bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition-all"
            onClick={swap}
          >
            Swap
          </button>
        </div>

        {/* To InputBox */}
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          amountDisabled
        />

        {/* Convert Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg text-xl shadow-md transition-all"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;