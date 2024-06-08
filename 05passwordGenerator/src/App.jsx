import { useEffect, useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useRef } from 'react'

function App() {
  const [length,setLength]= useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword]= useState("")

  const passwordRef= useRef(null)

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password)
  },[password])

  const PasswordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*_+-={}[]~`"

    for (let i = 1; i <= length; i++) {
      let char= Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    PasswordGenerator()
  },[length, numberAllowed, charAllowed, PasswordGenerator])
  console.log(password);


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-500'>
          <h1 className='text-center text-white'>Password Generator</h1>
      <div >
          <input 
          type="text"
          value={password}
          className='w-full rounded-lg outline-none px-3 py-3 my-2 text-gray-800'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='text-white border-2 rounded-lg p-1 mb-2'>copy</button>
          
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input type="range" min={6} max={20} value={length} className="cursor-pointer text-white" onChange={(e)=> {setLength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        id='numberInput' 
        defaultChecked={numberAllowed}
        onChange={(e)=>{setNumberAllowed((prev)=>!prev)}}
        >
        </input>
          <label htmlFor='numberInput'>Numbers</label>
        
          <input 
        type="checkbox" 
        id='characterInput' 
        defaultChecked={charAllowed}
        onChange={(e)=>{setCharAllowed((prev)=>!prev)}}
        >
        </input>
          <label htmlFor='characterInput'>Characters</label>
      </div>
    </div>
  )
}

export default App
