import { useState, useEffect, useRef } from "react";
import "./index.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [animateText, setAnimateText] = useState(false);
  const [copyBounce, setCopyBounce] = useState(false);

  const inputRef = useRef(null);

  const generatePassword = () => {
    let chars = "";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_-+=<>?/{}[]";

    if (!chars) {
      setPassword("Select at least 1 option");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);

    setAnimateText(true);
    setTimeout(() => setAnimateText(false), 300);
  };

  useEffect(() => {
    generatePassword();
  }, [length, numbers, symbols, uppercase, lowercase]);

  const copyPassword = () => {
    inputRef.current?.select();   
    navigator.clipboard.writeText(password);

    setCopyBounce(true);

    setTimeout(() => setCopyBounce(false), 250);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white px-4">
      <div className="glass animate-fade-in w-full max-w-lg rounded-2xl p-6 text-center transition-all">

        <h1 className="text-3xl font-bold mb-5 drop-shadow-md">
          Password Generator
        </h1>

        <input
          ref={inputRef}
          readOnly
          value={password}
          className={`bg-black/40 p-3 rounded-xl text-xl font-mono mb-4 w-full text-center cursor-text transition-all duration-300 ${
            animateText ? "opacity scale-95" : "opacity-100 scale-100"
          }`}
        />

        <div className="flex justify-center gap-3 mb-5">
          <button
            onClick={generatePassword}
            className="px-4 py-2 rounded-xl bg-green-500 text-black font-semibold neon-hover transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Generate
          </button>

          <button
            disabled={!password}
            onClick={copyPassword}
            className={`px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 disabled:opacity-30 transition-all duration-300 ${
              copyBounce ? "scale-110" : "scale-100"
            }`}
          >
            Copy
          </button>
        </div>

        <div className="mb-4 transition-all">
          <p className="mb-1 text-sm">Length: {length}</p>
          <input
            type="range"
            min={4}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-green-500 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 text-left text-sm">
          <label className="flex gap-2 items-center hover:translate-x-1 transition-all">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
            Uppercase
          </label>

          <label className="flex gap-2 items-center hover:translate-x-1 transition-all">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
            />
            Lowercase
          </label>

          <label className="flex gap-2 items-center hover:translate-x-1 transition-all">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            Numbers
          </label>

          <label className="flex gap-2 items-center hover:translate-x-1 transition-all">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
            Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
