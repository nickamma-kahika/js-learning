import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [useNumber, setUseNumber] = useState(false);
  const [useChar, setUseChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (useNumber) str += "0123456789";
    if (useChar) str += "!@#$%^&*()_+`";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      generatedPassword += str.charAt(index);
    }
    setPassword(generatedPassword);
  }, [length, useNumber, useChar,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, useNumber, useChar]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-96 p-6 bg-gray-800 rounded-lg shadow-lg">

        <div className="mb-4">
          <input
            type="text"
            className="w-full text-xl p-2 border-2 border-gray-600 rounded bg-gray-700 text-white"
            value={password}
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Copy to Clipboard
          </button>
        </div>

        <div className="mb-4">
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-lg"
            onClick={passwordGenerator}
          >
            Generate Password
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Length: {length}</label>
          <input
            type="range"
            min={8}
            max={24}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={useNumber}
              onChange={() => setUseNumber((prev) => !prev)}
              className="mr-2"
            />
            <label className="text-lg">Include Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              defaultChecked={useChar}
              onChange={() => setUseChar((prev) => !prev)}
              className="mr-2"
            />
            <label className="text-lg">Include Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;