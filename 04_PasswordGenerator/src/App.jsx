import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [charector, setCharector] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789";
    if (charector) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charector, number, setPassword])


  const passRef = useRef(null);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, charector, number])

  return (
    <>
      <div className='w-full max-w-md mx-auto text-orange-500 px-8 my-8 py-3 shadow-lg bg-slate-700 rounded-lg'>
        <h1 className='text-4xl font-bold text-white text-center my-4'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPassword}
            className='outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0 hover:bg-orange-500'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charector}
              id="characterInput"
              onChange={() => {
                setCharector((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>

    </>
  )


}

export default App
