import React from "react";

function InputBox({
    label,
    amount,
    currencyOptions = [],
    selectCurrency = "usd",
    onAmountChange,
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false,
}) {
    return (
        <div className="w-full flex flex-row items-center justify-center">
            {/* Main Box */}
            <div
                id="mainBox"
                className="w-full max-w-lg h-auto m-5 bg-gray-800 flex border border-gray-700 rounded-2xl shadow-lg p-4"
            >
                {/* Left Section: Amount Input */}
                <div className="w-1/2 pr-4">
                    <label className="block text-white text-sm font-medium mb-2">
                        {label}
                    </label>
                    <input
                        className="w-full text-lg text-gray-200 bg-gray-900 py-2 px-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none transition-all"
                        type="number"
                        placeholder="Enter Amount"
                        value={amount}
                        disabled={amountDisabled}
                        onChange={(e) =>
                            onAmountChange && onAmountChange(Number(e.target.value))
                        }
                    />
                </div>

                {/* Right Section: Currency Selector */}
                <div className="w-1/2">
                    <p className="text-white text-sm font-medium mb-2">Currency Type</p>
                    <select
                        className="w-full text-lg text-gray-200 bg-gray-900 py-2 px-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none cursor-pointer transition-all"
                        value={selectCurrency}
                        onChange={(e) =>
                            onCurrencyChange && onCurrencyChange(e.target.value)
                        }
                        disabled={currencyDisabled}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default InputBox;